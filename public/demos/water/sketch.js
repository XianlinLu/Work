// --- CONFIGURATION CONSTANTS ---
const CANVAS_SIZE = 420; // Watch face size
const SPACING = 30; // Distance between dots
const RADIUS = 50; // Radius of mouse influence
const MAX_FORCE = 120; // Strength of the push
const SPRING_STIFFNESS = 0.008; // Lower = looser/softer spring
const DAMPING = 0.9; // Higher (closer to 1) = slippery. 0.9 is watery.

// Shockwave Constants
const SHOCKWAVE_SPEED = 3; // How fast the wave travels
const LONG_PRESS_THRESHOLD = 15; // Frames before long-press activates (~0.5s)

// Dynamic Charging Config
const MAX_CHARGE_FRAMES = 60; // 60 frames = approx 1 second to reach max power
const MIN_WAVE_FORCE = 0.5; // Force for a quick tap
const MAX_WAVE_FORCE = 5; // Force for a full charge
const MIN_DECAY = 30; // Fast fade (short range) for weak waves
const MAX_DECAY = 8; // Slow fade (longer range) for strong waves

// --- GLOBAL VARIABLES ---
let particles = [];
let shockwaves = []; // Store active shockwaves
let cols, rows;
let interactionAnim = 0; // 0.0 to 1.0 tracking the circle's presence
let pressTimer = 0; // Tracks how long mouse is held
let pressStartX = 0; // To track original click position
let pressStartY = 0;

// Track the last interaction type to ensure correct fade-out animation
let lastInteractionType = "SINGLE"; // 'SINGLE' or 'DOUBLE'

function setup() {
  // Fixed size canvas (Watch face dimensions)
  let cnv = createCanvas(420, 420);

  // --- CENTERING LOGIC ---
  // Apply CSS to the body to center the canvas in the p5.js editor preview
  let body = document.querySelector("body");
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.height = "100vh";
  body.style.backgroundColor = "#1a1a1a"; // Dark gray background
  body.style.overflow = "hidden";

  // Optional: Add a rounded border and shadow to the canvas itself to simulate the watch
  cnv.style("border-radius", "50%");
  cnv.style(
    "box-shadow",
    "0 0 0 12px #0f0f0f, 0 0 0 14px #333, 0 20px 50px rgba(0,0,0,0.8)",
  );
  // -----------------------

  noStroke();
  noCursor();

  // Disable the context menu so Right Click works as an input
  document.oncontextmenu = function () {
    return false;
  };

  initParticles();
}

// --- TRACK CLICK START ---
function mousePressed() {
  if (mouseButton === LEFT) {
    pressStartX = mouseX;
    pressStartY = mouseY;
    pressTimer = 0;
  }
}

// --- HANDLE SHOCKWAVE RELEASE ---
function mouseReleased() {
  // Only trigger shockwave logic if it was a LEFT click
  if (mouseButton === LEFT) {
    // Trigger wave ONLY if held longer than threshold
    if (pressTimer > LONG_PRESS_THRESHOLD) {
      // Map the timer starting from the threshold
      let strength = map(
        pressTimer,
        LONG_PRESS_THRESHOLD,
        MAX_CHARGE_FRAMES,
        MIN_WAVE_FORCE,
        MAX_WAVE_FORCE,
        true,
      );
      let decay = map(
        strength,
        MIN_WAVE_FORCE,
        MAX_WAVE_FORCE,
        MIN_DECAY,
        MAX_DECAY,
      );

      shockwaves.push(new Shockwave(mouseX, mouseY, strength, decay));
    }
    pressTimer = 0; // Reset timer
  }
}

// --- HANDLE WINDOW RESIZE ---
function windowResized() {
  // No-op for fixed size watch face
}

// --- INITIALIZE GRID ---
function initParticles() {
  particles = [];
  cols = ceil(width / SPACING);
  rows = ceil(height / SPACING);

  // Center the grid calculation
  let startX = (width - (cols - 1) * SPACING) / 2;
  let startY = (height - (rows - 1) * SPACING) / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * SPACING;
      let y = startY + j * SPACING;

      // OPTIONAL: Only add particles if they are inside the circle
      if (dist(x, y, width / 2, height / 2) < width / 2 - 5) {
        particles.push(new Particle(x, y, i, j));
      }
    }
  }
}

// --- MAIN RENDER LOOP ---
function draw() {
  background(0);

  // Define interaction points
  // If Left Click: Single point
  // If Right Click: Two points (Two finger tap simulation)
  let interactionPoints = [];

  // Only interact if mouse is actually ON the canvas (approx)
  let mouseInCanvas =
    mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;

  if (mouseIsPressed && mouseInCanvas) {
    interactionAnim = lerp(interactionAnim, 1, 0.1);

    if (mouseButton === LEFT) {
      lastInteractionType = "SINGLE"; // Track state
      // Standard single point interaction
      interactionPoints.push({ x: mouseX, y: mouseY });

      // --- CHARGING LOGIC (Left Click Only) ---
      let dragDist = dist(mouseX, mouseY, pressStartX, pressStartY);
      if (dragDist < 10) {
        pressTimer++;
      } else {
        pressTimer = 0;
      }
    } else if (mouseButton === RIGHT) {
      lastInteractionType = "DOUBLE"; // Track state
      // Two finger tap simulation
      // Offset slightly left and right to simulate fingers
      interactionPoints.push({ x: mouseX - 20, y: mouseY + 8 });
      interactionPoints.push({ x: mouseX + 20, y: mouseY - 8 });

      // No charging on right click
      pressTimer = 0;
    }
  } else {
    interactionAnim = lerp(interactionAnim, 0, 0.3);
    if (pressTimer > 0 && !mouseIsPressed) pressTimer = 0;
  }

  // 1. VISUALS: Draw Interaction Circles
  if (interactionAnim > 0.01) {
    let alpha = 255 * interactionAnim;
    let currentSize = map(interactionAnim, 0, 1, RADIUS * 0.6, RADIUS);

    // Apply vibration if max charged (Left click only)
    if (mouseButton === LEFT && pressTimer >= MAX_CHARGE_FRAMES) {
      currentSize += sin(frameCount * 0.5) * 2;
    }

    noStroke();
    fill(255, alpha);

    // Draw active interaction points if user is currently pressing
    if (interactionPoints.length > 0) {
      for (let point of interactionPoints) {
        ellipse(point.x, point.y, currentSize);
      }
    } else {
      // If fading out (mouse released), we use the last known interaction type
      // to draw the correct ghost circles
      if (lastInteractionType === "DOUBLE") {
        ellipse(mouseX - 20, mouseY + 8, currentSize);
        ellipse(mouseX + 20, mouseY - 8, currentSize);
      } else {
        ellipse(mouseX, mouseY, currentSize);
      }
    }
  }

  // 2. Draw Charging Indicator (Left Click Only)
  if (mouseButton === LEFT && pressTimer > LONG_PRESS_THRESHOLD) {
    let effectiveTime = pressTimer - LONG_PRESS_THRESHOLD;
    let growSize = RADIUS + effectiveTime * 2;

    fill(255, 40);
    noStroke();
    ellipse(mouseX, mouseY, growSize);
  }

  // 3. Update & Draw Shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    shockwaves[i].update();
    shockwaves[i].show();
    if (shockwaves[i].isDead()) {
      shockwaves.splice(i, 1);
    }
  }

  // --- PARTICLE LOGIC ---
  for (let p of particles) {
    p.update(interactionPoints, shockwaves);
    p.show();
  }
}

// --- SHOCKWAVE CLASS ---
class Shockwave {
  constructor(x, y, strength, decay) {
    this.x = x;
    this.y = y;
    this.r = 10; // Initial radius
    this.opacity = 200;
    this.strength = strength; // Dynamic strength
    this.decay = decay; // Dynamic range control
  }

  update() {
    this.r += SHOCKWAVE_SPEED;
    this.opacity -= this.decay;
  }

  show() {
    noFill();
    stroke(255, 255, 255, this.opacity); // White
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
    noStroke();
  }

  isDead() {
    return this.opacity <= 0;
  }
}

// --- PARTICLE CLASS ---
class Particle {
  constructor(x, y, colIndex, rowIndex) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 3;
  }

  update(interactionPoints, shockwaves) {
    // 1. Standard Interaction (Handles both Left and Right click via points array)
    // We loop through all active interaction points (1 or 2) and apply force from each
    if (interactionPoints.length > 0) {
      for (let point of interactionPoints) {
        let d = dist(point.x, point.y, this.x, this.y);
        if (d < RADIUS) {
          let angle = atan2(this.y - point.y, this.x - point.x);
          let normalizedDist = d / RADIUS;
          let force = MAX_FORCE * pow(1 - normalizedDist, 2);

          // Accumulate velocity
          this.vx += cos(angle) * force * 0.1;
          this.vy += sin(angle) * force * 0.1;
        }
      }
    }

    // 2. Shockwave Interaction
    for (let sw of shockwaves) {
      let d = dist(this.x, this.y, sw.x, sw.y);
      let distToWave = abs(d - sw.r);

      // If particle is within the wave front
      if (distToWave < 20) {
        let angle = atan2(this.y - sw.y, this.x - sw.x);

        // Force depends on the specific shockwave's strength
        let force = sw.strength * constrain(500 / d, 0.5, 2);

        this.vx += cos(angle) * force;
        this.vy += sin(angle) * force;
      }
    }

    // 3. Spring Force to Base Position
    let dx = this.baseX - this.x;
    let dy = this.baseY - this.y;

    this.vx += dx * SPRING_STIFFNESS;
    this.vy += dy * SPRING_STIFFNESS;

    // 4. Damping
    this.vx *= DAMPING;
    this.vy *= DAMPING;

    // 5. Update Position
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    let displacement = dist(this.x, this.y, this.baseX, this.baseY);
    let alpha = map(displacement, 0, 50, 76, 255);
    alpha = constrain(alpha, 76, 255);

    let scaleFactor = map(displacement, 0, 50, 1, 6);
    scaleFactor = constrain(scaleFactor, 1, 6);
    let currentSize = this.size * scaleFactor;

    fill(255, 255, 255, alpha);
    ellipse(this.x, this.y, currentSize);
  }
}
