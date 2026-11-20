import { Navigation } from "@/components/SiteChrome";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Watch-Glasses Interaction" };

export default function HomeProjectWatchGlassesInteraction() {
  return (
    <div
      data-wf-page="697bd954a4dde4ba37b6dbc2"
      className="portfolio-page body-7 black-bg"
    >
      <section className="section-top project watch-trackpad">
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">
            <strong className="bold-text">Watch-Glasses Interaction</strong>
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
              Design and Prototype Watch trackpad as Input for Smart Glasses
              <br /> - 4 weeks -<br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">ROLE</h1>
            <p className="para-white credit">
              Interaction / Visual Designer
              <br />
              Prototyper (JavaScript, C#)
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">COLLABORATOR</h1>
            <p className="para-white credit">
              UX Engineer
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">TOOLS</h1>
            <p className="para-white credit">
              P5.js, Unity (C#)
              <br />
              <br />
            </p>
          </div>
          <div className="credit xr">
            <div className="div-block-17"></div>
            <h1 className="heading-10">KEY CONTRIBUTION</h1>
            <p className="para-white credit">
              Design the watch trackpad interface visual and interactions with
              p5.js;
              <br />
              Built the watch trackpad interface visual in Unity.
              <br />
              <br />
              <br />
            </p>
          </div>
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
                  src={sitePath(
                    "/assets/trackpad-watch-final-b5308d7221aa.mp4",
                  )}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
          </div>
          <h1 className="heading-black-2">
            <strong className="bold-text-2"> Context </strong>
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
          <img
            src={sitePath("/assets/1-p-1600-108b07942fea.webp")}
            loading="lazy"
            alt=""
            className="image-235"
          />
          <div className="div-block-36"></div>
          <section className="section-5">
            <div className="subtitle">THE GOAL</div>
            <h1 className="quote">
              Create a high-fidelity, functional prototype to demonstrate that
              watch as trackpad for glasses input is intuitive, distinct, and
              capable of handling complex UI navigation.
            </h1>
          </section>
          <img
            src={sitePath("/assets/2-p-1600-d0d98f16d8f8.png")}
            loading="lazy"
            alt=""
            className="image-236"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Interaction &amp; Visual Flow{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            To test the limits of the watch trackpad input, we chose 3 core
            glasses UX flow to develop. These flows requires full set of
            gestures mentioned above.
            <br />
            <br />
            1. Messages: Find and navigate notifications, open, then quick reply
            <br />
            2. Invoke AI: Invoke AI, query, pause/resume, end the session.
            <br />
            3. Media control: Play songs, change volume, skip songs
            <br />
          </p>
          <img
            src={sitePath("/assets/3-p-1600-6fc7f681b544.png")}
            loading="lazy"
            alt=""
            className="image-241"
          />
          <img
            src={sitePath("/assets/4-p-1600-348ff31d120e.png")}
            loading="lazy"
            alt=""
            className="image-240"
          />
          <img
            src={sitePath("/assets/5-p-1600-b805c6044700.png")}
            loading="lazy"
            alt=""
            className="image-239"
          />
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Visual Design: The Trackpad Interface{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Rather than to design how a touch itself looks, I argued that to
            design the trackpad visual is to design the &#x27;effect&#x27; that
            a touch create. To design elegant and delightful visual and motion,
            it is important to ensure that it looks and feels
            &#x27;familiar&#x27;. I was inspired by two finger-object
            interactions from the physical world - dipping water and touching
            cloth. The physics and visual effects inspire the following trackpad
            interface design.
            <br />
          </p>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Trackpad Visual 1: The Water{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            Imagine dipping your finger into the water. The touch creates
            ripple, which travels away from the center point. The further the
            ripple travels, the weaker it gets, until it finally disappaer
            overtime. In the first proposal, the visual design simiulates the
            physics of such phenomenon: on a grid of particles, the finger touch
            would push away the particles around the touch point. The touch
            leaves a force on the surface, which creates ripple of particles
            that travels away from the center. The longer the touch holds, the
            stronger the force it creates, which creates larger ripple effect
            visually. <br />
          </p>
          <div className="div-block-40">
            <img
              src={sitePath("/assets/image-2-61d4e587106a.png")}
              loading="lazy"
              alt=""
              className="image-237"
            />
            <img
              src={sitePath("/assets/watch-water-f98396d23ffa.gif")}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="div-block-41">
            <div className="w-embed w-iframe">
              <iframe
                src={sitePath("/demos/water/index.html")}
                width="600"
                height="600"
                frameBorder="0"
                title="Trackpad Interface - Water"
              >
                &#10;
              </iframe>
            </div>
          </div>
          <div className="div-block-42"></div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">
              Trackpad Visual 2: The Cloth{" "}
            </strong>
            <br />
          </h1>
          <p className="para-black ture">
            The second proposal simulates touching a straightened cloth surface.
            The touch creates pressure on the surface and makes it sink. When
            finger is released, the sunk part would bounce back, springing back
            and forth for a few times. In this proposal, the visual design
            simiulates the physics of such phenomenon: on a grid of particles,
            the finger touch would attract the particles around the touch point
            and make them move towards the center point. When finger releases,
            the displaced particles would spring back to its original position.
            The longer the touch holds, the more particles it attracts, which
            creates larger spring effect when finger releases. <br />
          </p>
          <div className="div-block-40">
            <img
              src={sitePath("/assets/image-1-f85e53f9a91d.png")}
              loading="lazy"
              alt=""
              className="image-238"
            />
            <img
              src={sitePath("/assets/water-cloth-02d85f155274.gif")}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="div-block-41">
            <div className="w-embed w-iframe">
              <iframe
                src={sitePath("/demos/attraction/index.html")}
                width="600"
                height="600"
                frameBorder="0"
                title="Trackpad Interface - Attraction"
              >
                &#10;
              </iframe>
            </div>
          </div>
          <h1 className="heading-black-2">
            <strong className="bold-text-3">Watch Trackpad Prototype </strong>
            <br />
          </h1>
          <p className="para-black ture">
            After refining the logics in p5.js, I then transform the logics and
            realize the same visual effect in Unity. I closely worked with
            engineer to integrate it with their input framework, ensuring that
            each pre-defined watch input event is triggering the corresponding
            visual effect. <br />
          </p>
          <div className="div-block-43">
            <div className="code-embed w-embed">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{ maxWidth: "60%", width: "60%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/watch-cloth-poc-425a4ed058de.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
            <p className="para-black ture">
              <em className="italic-text-20">
                Watch Interface PoC - Cloth Effect
              </em>
              <br />
            </p>
            <div className="code-embed w-embed">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{ maxWidth: "60%", width: "60%", height: "auto" }}
              >
                &#10;{" "}
                <source
                  src={sitePath("/assets/watch-water-poc-9eb3529833cf.mp4")}
                  type="video/mp4"
                />
                &#10; Your browser does not support the video tag.&#10;
              </video>
            </div>
            <p className="para-black ture">
              <em className="italic-text-20">
                Watch Interface PoC - Water Effect
              </em>
              <br />
            </p>
          </div>
        </div>
        <div className="caption">
          <div className="div-block-36"></div>
        </div>
        <div className="div-block-14"></div>
      </div>
      <Navigation current="/home-project/watch-glasses-interaction/" />
      <Interactions />
    </div>
  );
}
