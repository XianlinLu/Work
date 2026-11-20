// Configuration
const SPACING = 30; // Distance between dots
const BASE_RADIUS = 150; // Starting radius
const BASE_FORCE = 3; // Starting force

// Physics Constants for interpolation
const FAST_STIFFNESS = 0.05;
const FAST_DAMPING = 0.9;
const SLOW_STIFFNESS = 0.05;
const SLOW_DAMPING = 0.2;

let particles = [];
let cols, rows;

// Animation & Logic State
let interactionAnim = 0;
let pressDuration = 0; // Counts frames the mouse is held
const MAX_PRESS_FRAMES = 120; // Max charge time

function setup() {
  // Fixed size canvas (Watch face dimensions)
  let cnv = createCanvas(420, 420);

  // --- CENTERING LOGIC ---
  let body = document.querySelector("body");
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.height = "100vh";
  body.style.backgroundColor = "#1a1a1a"; // Dark gray background
  body.style.overflow = "hidden";

  // Watch interface styling
  cnv.style("border-radius", "50%");
  cnv.style(
    "box-shadow",
    "0 0 0 12px #0f0f0f, 0 0 0 14px #333, 0 20px 50px rgba(0,0,0,0.8)",
  );

  // Disable context menu for right-click interaction
  document.oncontextmenu = function () {
    return false;
  };

  noStroke();
  noCursor();
  initParticles();
}

function initParticles() {
  particles = [];
  cols = ceil(width / SPACING);
  rows = ceil(height / SPACING);

  let startX = (width - (cols - 1) * SPACING) / 2;
  let startY = (height - (rows - 1) * SPACING) / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * SPACING;
      let y = startY + j * SPACING;

      // Only add particles if they are inside the watch circle (optional visual polish)
      if (dist(x, y, width / 2, height / 2) < width / 2 - 5) {
        particles.push(new Particle(x, y));
      }
    }
  }
}

function draw() {
  background(5, 5, 5); // Pitch black/very dark background

  // --- INPUT HANDLING ---
  let interactionPoints = [];

  if (mouseIsPressed) {
    if (mouseButton === RIGHT) {
      // Simulating two fingers with a fixed offset (Right Click)
      interactionPoints.push({ x: mouseX - 25, y: mouseY + 8 });
      interactionPoints.push({ x: mouseX + 25, y: mouseY - 8 });
    } else {
      // Single finger (Left Click)
      interactionPoints.push({ x: mouseX, y: mouseY });
    }
  }

  // --- DYNAMIC PHYSICS LOGIC ---
  if (mouseIsPressed) {
    // Check if the mouse is moving
    let movement = dist(mouseX, mouseY, pmouseX, pmouseY);

    // If moving significantly (> 1.5 pixels/frame), treat as dragging (reset charge)
    if (movement > 1.5) {
      if (pressDuration > 0) pressDuration -= 5;
    } else {
      pressDuration++;
    }

    if (pressDuration > MAX_PRESS_FRAMES) pressDuration = MAX_PRESS_FRAMES;
    if (pressDuration < 0) pressDuration = 0;
  } else {
    // Release Logic: Decay FAST
    if (pressDuration > 0) pressDuration -= 10;
    if (pressDuration < 0) pressDuration = 0;
  }

  // Calculate Transition Factor
  let progress = map(pressDuration, 0, 60, 0, 1);
  progress = constrain(progress, 0, 1);

  // Interpolate Physics
  let currentStiffness = lerp(FAST_STIFFNESS, SLOW_STIFFNESS, progress);
  let currentDamping = lerp(FAST_DAMPING, SLOW_DAMPING, progress);

  // Interpolate Max Scale
  let currentMaxScale = lerp(7, 2, progress);

  // Dynamic Interaction Radius & Force
  let currentRadius = map(
    pressDuration,
    0,
    MAX_PRESS_FRAMES,
    BASE_RADIUS,
    BASE_RADIUS * 2.0,
  );
  let currentForce = map(
    pressDuration,
    0,
    MAX_PRESS_FRAMES,
    BASE_FORCE,
    BASE_FORCE * 4.0,
  );

  // --- VISUALIZATION ---
  if (mouseIsPressed) {
    interactionAnim = lerp(interactionAnim, 1, 0.1);
  } else {
    interactionAnim = 0;
  }

  // 1. Draw solid white circles (Touch Indicators)
  if (interactionAnim > 0.01) {
    let targetSize = map(interactionAnim, 0, 1, 30, 50);

    fill(255);
    if (mouseIsPressed) {
      for (let pt of interactionPoints) {
        ellipse(pt.x, pt.y, targetSize);
      }
    } else {
      // Fade out single circle at last known position
      ellipse(mouseX, mouseY, targetSize);
    }
  }

  // 2. NEW: Semi-transparent growing circle (Long Press Effect)
  if (pressDuration > 10 && mouseIsPressed) {
    // Grow from 60px to 220px based on charge
    let growSize = map(pressDuration, 0, MAX_PRESS_FRAMES, 60, 220);

    fill(255, 30); // Low opacity
    for (let pt of interactionPoints) {
      ellipse(pt.x, pt.y, growSize);
    }
  }

  // --- PARTICLE UPDATE ---
  for (let p of particles) {
    p.update(
      interactionPoints,
      currentRadius,
      currentForce,
      currentStiffness,
      currentDamping,
    );
    p.show(currentMaxScale);
  }

  // Optional: Draw a subtle instruction text inside the canvas
  if (!mouseIsPressed && frameCount < 300) {
    fill(255, 100);
    textAlign(CENTER);
    textSize(12);
    text(
      "Left Click: 1 Finger | Right Click: 2 Fingers",
      width / 2,
      height - 30,
    );
  }
}

class Particle {
  constructor(x, y) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.baseSize = 4;
  }

  update(interactionPoints, activeRadius, activeForce, k, d) {
    // 1. Interaction (Loop through all points)
    for (let pt of interactionPoints) {
      let distToPoint = dist(pt.x, pt.y, this.x, this.y);

      if (distToPoint < activeRadius) {
        let angle = atan2(this.y - pt.y, this.x - pt.x);
        let normalizedDist = distToPoint / activeRadius;

        // Accumulate force from each finger
        let force = -1 * activeForce * pow(1 - normalizedDist, 3);

        this.vx += cos(angle) * force;
        this.vy += sin(angle) * force;
      }
    }

    // 2. Spring Force
    let dx = this.baseX - this.x;
    let dy = this.baseY - this.y;

    this.vx += dx * k;
    this.vy += dy * k;

    // 3. Damping
    this.vx *= d;
    this.vy *= d;

    // 4. Update Position
    this.x += this.vx;
    this.y += this.vy;
  }

  show(maxScale) {
    let d = dist(this.x, this.y, this.baseX, this.baseY);

    let maxDisplacement = 40;

    let scaleLimit = maxScale || 7;
    let sizeMap = map(d, 0, maxDisplacement, 1, scaleLimit);
    sizeMap = constrain(sizeMap, 1, scaleLimit);

    let alphaMap = map(d, 0, maxDisplacement, 76, 255);
    alphaMap = constrain(alphaMap, 76, 255);

    fill(255, 255, 255, alphaMap);
    ellipse(this.x, this.y, this.baseSize * sizeMap);
  }
}
