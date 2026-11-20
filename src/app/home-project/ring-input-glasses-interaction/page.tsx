import { Navigation } from "@/components/SiteChrome";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Ring-Input Glasses Interaction" };

export default function HomeProjectRingInputGlassesInteraction() {
  return (
    <div
      data-wf-page="6927bc4b1c0f0df60f9d50e8"
      className="portfolio-page body-7 black-bg"
    >
      <section className="section-top project xr-ux">
        <div
          style={{ width: "100%", height: "100%" }}
          className="loading-overlap"
        ></div>
        <div className="block-top project">
          <h1 className="heading-project">
            <strong className="bold-text">Ring-Glasses Interaction</strong>
          </h1>
        </div>
      </section>
      <div id="luxy" className="smooth-wrap-2">
        <div className="encounter-main-container-6"></div>
        <div className="encounter-part2 intouch">
          <h1>
            <br />
          </h1>
          <div className="credit">
            <div className="div-block-17"></div>
            <h1 className="heading-10">BRIEF</h1>
            <p className="para-white credit">
              Proving the Ring as the Ultimate Peripheral Input for Smart
              Glasses
              <br /> - 4 weeks -<br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">ROLE</h1>
            <p className="para-white credit">
              Interaction / Visual Designer
              <br />
              Frontend Engineer (C#)
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">COLLABORATOR</h1>
            <p className="para-white credit">
              Motion Designer
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">TOOLS</h1>
            <p className="para-white credit">
              Figma, Unity (C#), Custom Motion Tools
              <br />
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">KEY CONTRIBUTION</h1>
            <p className="para-white credit">
              {" "}
              Designed the &quot;Message Notification&quot; workflow, optimizing
              the UI for the constraints of single-finger ring navigation;
              <br />
              Built the high-fidelity frontend visual and motion prototype in
              Unity, utilizing a custom tool to deliver the &quot;Ideal&quot;
              version in just 48 hours.
              <br />
              <br />
              <br />
            </p>
            <div className="video-block _80">
              <div className="w-embed">
                <video
                  controls
                  muted
                  playsInline
                  style={{ maxWidth: "100%", width: "100%", height: "auto" }}
                >
                  &#10;{" "}
                  <source
                    src={sitePath("/assets/GCR-Demo-f9fbde3ab16f.mp4")}
                    type="video/mp4"
                  />
                  &#10; Your browser does not support the video tag.&#10;
                </video>
              </div>
            </div>
          </div>
          <div className="caption demo-video">
            <p className="para-black ture">
              <em className="italic-text-20">
                Multimodal Flow: Watch how the system auto-advances steps when
                the user successfully performs the physical gesture on the
                device
              </em>
              <br />
            </p>
          </div>
          <div></div>
          <h1 className="heading-black-2">
            <br />
          </h1>
          <h1 className="heading-black-2">
            <strong className="bold-text-2"> The Challenge </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Convincing stakeholders that &quot;Discreet&quot; is the future of
            interaction. Smart glasses interaction often suffers from the
            &quot;Gorilla Arm&quot; problem or socially awkward hand gestures.
            We needed to convince executive leadership that a Ring is not just
            an alternative, but the superior input method because it leverages
            peripheral and discreet motor control.
            <br />
          </p>
          <div className="div-block-36"></div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">Why Ring: The Use Cases </strong>
            <br />
          </h1>
          <img
            src={sitePath("/assets/storyboard-p-1600-3433ae8db7a0.webp")}
            loading="lazy"
            alt=""
            className="image-233"
          />
          <div className="caption diagram">
            <p className="para-black ture">
              <em className="italic-text-20">
                Three core scenarios where voice or on-device input would fail,
                but a ring succeeds.
              </em>
              <br />
            </p>
          </div>
          <div className="div-block-36"></div>
          <section className="section-5">
            <div className="subtitle">THE GOAL</div>
            <h1 className="quote">
              Create a high-fidelity, functional prototype within a strict
              2-week deadline to demonstrate that ring input is intuitive,
              distinct, and capable of handling complex UI navigation.
            </h1>
          </section>
          <div className="div-block-36"></div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">Ring Interaction Model </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Mapping micro-gestures to macro-controls. I designed a gesture
            system based on familiar mental models (D-Pad navigation) but
            adapted for a single finger. The goal was to allow navigation
            without looking at the controller.
            <br />‍<br />
            1. Navigation: Swipe Left / Right / Up / Down (mapped to button
            hovering).
            <br />
            2. Confirm: Single Tap (Confirm/Enter).
            <br />
            3. Exit: Double Tap (Back/Exit).
            <br />
          </p>
          <img
            className="gesture-library"
            src={sitePath("/assets/Gesture-library-5e3993a0633f.png")}
            loading="lazy"
            alt=""
          />
          <div className="caption diagram">
            <p className="para-black ture">
              <em className="italic-text-20">
                Ring Gesture Library and corresponding glasses control
                mapping{" "}
              </em>
              <br />
            </p>
          </div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Interaction &amp; Visual Flow: Message Notifications{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            To test the limits of the input, we chose a messaging workflow. This
            required the user to scroll, select, read, and act—perfectly
            showcasing the full range of gestures.
            <br />
            <br />
            1. Notification List: Use swipe to scroll through recent messages.
            <br />
            2. Detail View: Tap to expand a specific thread.
            <br />
            3. Action Menu: Inside the message view, 4 buttons are presented.
            The user swipes to navigate focus between them and taps to execute.
            <br />
          </p>
          <img
            src={sitePath("/assets/Ring-UX-Diagram-p-1600-bacf732bd420.webp")}
            loading="lazy"
            alt=""
            className="image-222"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Highlight: The &quot;Impossible&quot; Motion{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Bridging the gap between Design and Engineering -- This phase was
            the highlight of the project. Our motion designer created three
            tiers of interaction fidelity:
            <br />
            Simple: Basic transitions (easiest to code).
            <br />
            Standard: Standard easing.
            <br />
            Ideal: Complex physics-based motion and responsive hover states.
            <br />
            <br />
            The Block: Given the 2-week deadline before the COO presentation,
            the engineering lead flagged the &quot;Ideal&quot; version as too
            risky and time-consuming to implement in Unity.
            <br />
          </p>
          <div className="video-block _80">
            <div className="w-embed">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/motion-options-353410fb7260.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
          </div>
          <div className="video-block">
            <div className="caption diagram">
              <p className="para-black ture">
                <em className="italic-text-20">
                  (Motion design credit: Maciek) <br />
                  The motion designer proposed three tiers of interaction
                  fidelity, from basic easing to complex physics.{" "}
                </em>
                <br />
              </p>
            </div>
          </div>
          <div className="div-block-38"></div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              The Solution: The Custom Motion Framework{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            To bypass the engineering bottleneck, I utilized a modular animation
            system I built in C# that decouples logic from motion. This allowed
            me to &quot;configure&quot; complex animations in the Unity
            Inspector rather than hard-coding transitions, reducing iteration
            time from hours to minutes.
            <br />
          </p>
          <img
            src={sitePath("/assets/Frame-513406-p-1600-8db5e86159cd.png")}
            loading="lazy"
            alt=""
            className="image-230"
          />
          <img
            src={sitePath("/assets/Group-513218-p-1600-b7f7c03c13dd.png")}
            loading="lazy"
            alt=""
            className="image-229"
          />
          <img
            src={sitePath("/assets/Group-513217-p-1600-489af36b120c.png")}
            loading="lazy"
            alt=""
            className="image-228"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              The Result: Uncompromised Fidelity{" "}
            </strong>
            <br />
          </h1>
          <div className="video-block _30"></div>
          <img
            src={sitePath("/assets/ezgif-8b3847c9283b99d7-729b7112263f.webp")}
            loading="lazy"
            alt=""
          />
          <div className="caption diagram">
            <p className="para-black ture">
              <em className="italic-text-20">
                {" "}
                - Unity Implementation -<br />
                My custom Unity tool allowed us to bypass development
                bottlenecks and implement the &quot;Ideal&quot; continuous
                motion in time.
              </em>
              <br />
            </p>
          </div>
          <h1 className="heading-black-2">
            <br />
          </h1>
          <section className="section-5">
            <div className="subtitle">OUTCOME</div>
            <h1 className="quote">
              I delivered the &quot;Ideal&quot; fidelity version in just 2 days,
              leaving ample time for QA before the presentation.
            </h1>
          </section>
          <h1 className="heading-black-2">
            <br />
          </h1>
          <h1 className="heading-black-2">
            <br />
          </h1>
        </div>
        <div className="final-work">
          <h1 className="heading-black-2">
            <br />
          </h1>
          <h1 className="heading-black-2">
            <strong>Final Prototype</strong>
            <br />
          </h1>
          <p className="para-black ture">
            The final deliverable was a fully functional Unity build running on
            the glasses hardware. The seamless motion and intuitive controls
            successfully demonstrated that peripheral ring input feels magical
            because it feels invisible.
            <br />
          </p>
          <div className="video-block _40">
            <div className="w-embed">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath(
                    "/assets/Ring-PoC-Through-Lens-Short-Square-d2a5f0aadaae.mp4",
                  )}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
          </div>
          <div className="div-block-39"></div>
        </div>
        <div className="div-block-14"></div>
      </div>
      <Navigation current="/home-project/ring-input-glasses-interaction/" />
      <Interactions />
    </div>
  );
}
