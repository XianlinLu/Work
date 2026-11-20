import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "AtomXR - Generative XR - Xianlin Lu" };

export default function ProjectAtomxr() {
  return (
    <div
      data-wf-page="65bbcbb7c0cfc5f781743ed6"
      className="portfolio-page body-2"
    >
      <Navigation current="/project/atomxr/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath(
              "/assets/original-df744e2e596b03e1b9bb7edcedcea7d5-63a33fde86fa.webp",
            ) +
            ")",
        }}
        className="section-top project"
      >
        <div
          style={{ width: "100%", height: "100%" }}
          className="loading-overlap"
        ></div>
        <div className="block-top project">
          <h1 className="heading-project">AtomXR - Generative XR</h1>
        </div>
      </section>
      <section style={{ opacity: "0" }} className="section">
        <div className="content">
          <div className="w-layout-grid grid">
            <div
              id="w-node-cd6c34c7-3794-3cae-9e4c-46ce5bc5b8b3-81743ed6"
              className="info padding-1-2em"
            >
              <div className="block-info w-condition-invisible">
                <div className="text-sabtitle">Role</div>
                <div className="text-info w-dyn-bind-empty"></div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Year</div>
                <div className="text-info">XR Prototyping Tool</div>
              </div>
            </div>
            <div
              id="w-node-_83629829-2e25-3c48-5233-971b72aa1ed7-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <p>
                  AtomXR is a no-code XR development tool driven by natural
                  language. It leverages AI in the form of LLMs to create
                  application logic in real-time in-headset. AtomXR started as a
                  research project with a proof-of-concept demo, and later
                  became a startup incubation where we defined an entirely new
                  immersive interface that combines natural language and
                  node-based editing.
                </p>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="video-2 w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-b49789df-d03f-8056-3710-40ac4c709e23-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h4>Problem</h4>
                <p>
                  The XR ecosystem has a supply problem. It&#x27;s difficult to
                  prototype and develop XR applications today and there are not
                  enough XR content to draw consumers in as a result. In
                  traditional 2D development workflows, designers can create
                  high-fidelity prototypes without code, ensuring a frictionless
                  hand-off to engineers.
                </p>
                <p>
                  In XR, it&#x27;s difficult to show high-fidelity designs
                  without game engines like Unity or professional 3D animation
                  tools, both of which have high learning curves. As a result,
                  there is a big drop-off from XR designs to XR prototypes.
                </p>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <ImageGallery
              listClass="collection-list-multi-image w-dyn-items"
              itemClass="w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={[
                "/assets/ezgif-2-7ad73118f1-572af657121d.gif",
                "/assets/process-001-p-1600-14900037c91d.png",
                "/assets/process-002-p-1600-34e04040f482.png",
                "/assets/process-003-p-1600-c177a55d4209.webp",
                "/assets/process-004-p-1600-9931aea81651.webp",
                "/assets/process-005-p-1600-3491af6ed1ed.png",
                "/assets/process-006-p-1600-d6dbe04d0981.png",
                "/assets/process-007-p-1600-aaa5736c123e.webp",
                "/assets/process-008-p-1600-3a6482af1bbf.webp",
              ]}
            />
            <div className="empty-state none w-dyn-hide w-dyn-empty">
              <div className="text-empty">No items found.</div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <div
              role="list"
              className="collection-list-multi-image image-b w-dyn-items w-dyn-hide"
            ></div>
            <div className="empty-state none w-dyn-empty">
              <div className="text-empty">No items found.</div>
            </div>
          </div>
        </div>
      </section>
      <Contact triangle="/assets/triangle-58cf8852f07a.svg" />
      <Footer />
      <Interactions />
    </div>
  );
}
