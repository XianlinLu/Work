import { Navigation } from "@/components/SiteChrome";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Spatial Interaction Framework" };

export default function HomeProjectOobe() {
  return (
    <div
      data-wf-page="692699d257f0f198911b874b"
      className="portfolio-page body-7 black-bg"
    >
      <section className="section-top project xr-ux oobe">
        <div
          style={{ width: "100%", height: "100%" }}
          className="loading-overlap"
        ></div>
        <div className="block-top project">
          <h1 className="heading-project">
            <strong className="bold-text">
              Conversational AI OOBE for Glasses
            </strong>
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
              Transforming the XR glasses unboxing experience from a static
              lecture into an adaptive, multimodal conversation.
              <br /> - 6 weeks -<br />
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
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">COLLABORATOR</h1>
            <p className="para-white credit">
              Motion Designer
              <br />
              UX Engineer
              <br />
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">TOOLS</h1>
            <p className="para-white credit">
              Figma, Unity (C#), GenAI (Gemini)
              <br />
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">KEY CONTRIBUTION</h1>
            <p className="para-white credit">
              End-to-end OOBE interaction &amp; visual design for XR glasses;{" "}
              <br />
              Front-end development in Unity on android devices <br />
              Implementation: interactive 3D animation; real-time input
              feedback; state machine
              <br />
              <br />
            </p>
          </div>
          <div className="video-block _90">
            <div className="w-embed">
              <video
                controls
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/OOBE-3rd-Angle-416fb2930dd7.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
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
          <h1 className="heading-black-2">
            <br />
          </h1>
          <h1 className="heading-black-2">
            <strong className="bold-text-2">
              {" "}
              The Challenge: Moving Beyond the Checklist{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Despite the futuristic nature of smart glasses, the current
            Out-of-Box Experience (OOBE) often relies on legacy patterns. In
            analyzing market leaders like Meta Ray-Ban, we observed a strict
            reliance on mobile-first, linear checklists.
            <br />
            <br />
            While this approach is functional, it offers minimal in-situ
            coaching on the device itself. Users are forced through a rigid
            sequence with limited adaptivity, making the experience feel like
            reading a digital manual.
            <br />
            <br />
            Key Takeaway: The current standard is clear but non-conversational.
            This highlighted a distinct opportunity to differentiate our product
            by prioritizing adaptivity and immersion—shifting from a passive
            lecture to an active partnership.
            <br />
          </p>
          <img
            src={sitePath(
              "/assets/Screenshot-2025-11-26-at-11-32-20-AM-p-1600-fed87e628afe.webp",
            )}
            loading="lazy"
            alt=""
            className="image-221"
          />
          <h1 className="heading-black-2">
            <br />
          </h1>
          <div className="div-block-36"></div>
          <section className="section-5">
            <div className="subtitle">THE GOAL</div>
            <h1 className="quote">
              How might we make the first 10 minutes of using smart glasses as
              exciting as the hardware itself?
            </h1>
          </section>
          <div className="div-block-36"></div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              The Concept: Learning is Social{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Drawing on Lev Vygotsky’s psychological framework that learning is
            inherently social, we reimagined OOBE not as a tool delivery, but as
            a partnership.We proposed a Conversational, Adaptive OOBE. Instead
            of forcing users through a rigid loop, an AI Coach guides the setup
            dynamically.
            <strong>
              <br />
              Adaptive Flow:
            </strong>{" "}
            The system adapts to the user’s pace. Users can skip ahead, ask for
            clarification, or dive deeper.
            <strong>
              <br />
              Intent Recognition:
            </strong>{" "}
            Users can ask &quot;How do I control volume?&quot; at any time, and
            the system intelligently routes them to the correct interactive
            tutorial.
            <br />
          </p>
          <img
            src={sitePath(
              "/assets/Screenshot-2025-11-25-at-11-39-29-PM-2--p-1600-df9aded4ab7c.png",
            )}
            loading="lazy"
            alt=""
            className="image-220"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">Interaction Architecture </strong>
            <br />
          </h1>
          <p className="para-black ture">
            The system orchestrates multimodal inputs to create a seamless
            feedback loop:
            <br />
            1. Voice (Gemini): Handles natural language queries and
            conversation.
            <br />
            2. Visual (Phone): Provides visual cues and 3D motion feedback.
            <br />
            3. Gesture (Glasses PUI): Physical inputs on the glasses trigger
            state changes.
            <br />‍<em>Example Flow:</em> If a user goes off-topic (e.g.,
            &quot;What&#x27;s the weather?&quot;), the AI provides a quick
            answer but gently nudges the conversation back to the tutorial
            context, maintaining flow without breaking immersion.
            <br />
          </p>
          <img
            src={sitePath("/assets/image8-p-1600-cf8965ce4a7a.webp")}
            loading="lazy"
            alt="System Architecture: Orchestrating the relationship between Gemini (Conversation), Phone (Visuals), and Glasses (Physical Input)."
            className="image-216"
          />
          <div className="caption diagram">
            <p className="para-black ture">
              <em className="italic-text-20">
                System Architecture: Orchestrating the relationship between
                Gemini (Conversation), Phone (Visuals), and Glasses (Physical
                Input).
              </em>
              <br />
            </p>
          </div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Visual Design &amp; Prototyping{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            To match the immersive nature of the hardware, I moved away from 2D
            screens to a 3D spatial interface.
            <br />‍<br />- Spatial Visuals: I utilized particle systems and VFX
            combined with motion graphics to highlight gesture indications,
            creating a &quot;tech-savvy&quot; aesthetic.
            <br />‍<br />- Feedback Loops: Visuals on the phone sync perfectly
            with physical actions on the glasses. When a user successfully
            performs a gesture, the system provides immediate visual and audio
            reinforcement (&quot;Great, now let&#x27;s move on&quot;).
            <br />
          </p>
          <img
            src={sitePath("/assets/UI-p-1600-5d70ffc2f7c9.jpg")}
            loading="lazy"
            alt=""
            className="image-217"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">Technical Execution </strong>
            <br />
          </h1>
          <p className="para-black ture">
            I was responsible for building the high-fidelity prototype and
            frontend logic in Unity.
            <br />‍<strong>State Machine:</strong> Built a robust controller to
            map AI responses to specific tutorial steps.
            <br />‍<strong>Input Simulation:</strong> Developed a system to
            simulate PUI (Physical User Interface) inputs within Unity to test
            gesture triggering.
            <br />‍<strong>Integration:</strong> Collaborated with engineering
            to connect the Unity frontend with the backend AI and device
            communication layers, ensuring low-latency responses between the
            user&#x27;s voice and the visual UI.
            <br />
          </p>
          <div className="video-block _50">
            <div className="w-embed">
              <video
                controls
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/Unity-Screen-4c2c7a1fc24d.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
          </div>
          <div className="caption video-caption">
            <p className="para-black ture">
              <em className="italic-text-20">
                Unity Implementation: Using particle systems and 3D motion to
                visualize voice activity and gesture completion.
              </em>
              <br />
            </p>
          </div>
          <img
            src={sitePath(
              "/assets/Screenshot-2025-11-25-at-11-36-05-PM-2--p-1600-1cc872ccb241.png",
            )}
            loading="lazy"
            alt=""
            className="image-218"
          />
          <h1 className="heading-black-2">
            <br />
          </h1>
          <section className="section-5">
            <div className="subtitle">OUTCOME</div>
            <h1 className="quote">
              Non-linear, &quot;human&quot; onboarding experience for XR smart
              glasses.
            </h1>
          </section>
          <div className="w-layout-grid grid-9">
            <div className="div-block-37">
              <h1 className="heading-12">
                <strong>Conversation Driven Tutorial</strong>
              </h1>
              <p className="paragraph-7">
                Users can query AI anytime; coach jumps to the step, provides
                specific explanation, or deepens a sub‑step.{" "}
              </p>
            </div>
            <div className="w-embed">
              <video
                controls
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/OOBE-4-5fa495e91faa.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
            <div className="div-block-37">
              <h1 className="heading-12">
                <strong>User PUI input</strong>
              </h1>
              <p className="paragraph-7">
                Teach core PUI gestures on the actual device (swipe/tap/press).
                PUI triggers system feedback (earcon audio/visual) on
                devices.{" "}
              </p>
            </div>
            <div className="w-embed">
              <video
                muted
                controls
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/OOBE-2-f47a88384b2e.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
            <div className="div-block-37">
              <h1 className="heading-12">
                <strong>Interactive Visual</strong>
              </h1>
              <p className="paragraph-7">
                2D gesture graphics + particle VFX for focus &amp; transitions.
                Visual polish positions us above competitors.{" "}
              </p>
            </div>
            <div className="w-embed">
              <video
                controls
                muted
                playsInline
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/OOBE-3-e3fdddf7276e.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
          </div>
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
            <strong>Status: Patent-Pending</strong>
            <br />
          </h1>
          <p className="para-black ture">
            Due to the novel approach of orchestrating multimodal inputs (Voice
            + Visual + PUI) for hardware onboarding, this work is currently
            Patent Pending.
            <br />
          </p>
          <h1 className="heading-black-2">
            <br />
          </h1>
          <h1 className="heading-black-2">
            <br />
          </h1>
        </div>
        <div className="caption"></div>
        <div className="div-block-14"></div>
      </div>
      <Navigation current="/home-project/oobe/" />
      <Interactions />
    </div>
  );
}
