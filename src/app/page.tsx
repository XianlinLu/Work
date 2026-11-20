import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Xianlin Lu" };

export default function Home() {
  return (
    <div data-wf-page="65bbcbb7c0cfc5f781743ed0" className="portfolio-page">
      <Navigation current="/" />
      <section
        data-w-id="6ad99479-d87a-8dd7-1651-23fe45115851"
        className="section-hero"
      >
        <div
          style={{
            transform:
              "translate3d(0, 7vh, 0) scale3d(1, 1, 1) rotateX(-15deg) rotateY(null) rotateZ(null) skew(0, 0)",
            opacity: "0",
            transformStyle: "preserve-3d",
          }}
          className="hero-top"
        >
          <h1 className="heading-hero">re-creating realities</h1>
        </div>
        <div
          style={{
            transform:
              "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(-15deg) rotateY(0) rotateZ(0) skew(0, 0)",
            transformStyle: "preserve-3d",
            opacity: "0",
          }}
          className="hero-bottom"
        >
          <p className="paragraph-hero">———</p>
        </div>
        <div className="hero-image-switcher">
          <div
            data-w-id="58caff48-8e2b-78f7-6c7e-622725350958"
            className="switcher"
          ></div>
          <div
            data-w-id="e6975379-c04f-ecac-de93-c2779e695532"
            className="switcher"
          ></div>
          <div
            data-w-id="bce7c04a-2a3f-e49a-8084-e4e7df209d0e"
            className="switcher"
          ></div>
          <div
            data-w-id="c5a809c0-976d-ab32-3d0d-67c258b525ec"
            className="switcher"
          ></div>
          <div
            data-w-id="b80ecf7b-aef8-3d9d-644c-a6edf4ce6d22"
            className="switcher"
          ></div>
          <div
            data-w-id="6d0845b2-717b-87f8-19cd-1c5fd3aed94f"
            className="switcher"
          ></div>
          <div
            data-w-id="8ee8d2d1-a211-f8f6-6295-a11d84ef8f0c"
            className="switcher"
          ></div>
          <div
            data-w-id="c94a20ab-3f97-7ec8-c9cc-d9781fc9d4f0"
            className="switcher"
          ></div>
          <div
            data-w-id="5b70757c-fe4d-0344-ee71-27592aeaf5ba"
            className="switcher"
          ></div>
          <div
            data-w-id="0923fc32-d3a4-8958-e6a8-2ca7b6dad7e6"
            className="switcher"
          ></div>
        </div>
        <div className="hero-images">
          <div
            style={{ width: "100%", height: "100%" }}
            className="loading-overlap"
          ></div>
          <div className="hero-image-10"></div>
          <div className="hero-image-9"></div>
          <div className="hero-image-8"></div>
          <div className="hero-image-7"></div>
          <div className="hero-image-6"></div>
          <div className="hero-image-5"></div>
          <div className="hero-image-4"></div>
          <div className="hero-image-3"></div>
          <div className="hero-image-2"></div>
          <div className="hero-image-1"></div>
        </div>
      </section>
      <section className="section-welcome">
        <div className="content">
          <div className="welcome">
            <img
              src={sitePath("/assets/triangle-58cf8852f07a.svg")}
              loading="eager"
              alt=""
              className="icon-triangle"
            />
            <h2 className="heading">
              {" "}
              Interaction Designer and Prototyper specializing in AI, XR, 3D
              interaction, and motion craft. Design and build end-to-end agentic
              experiences for wearable devices.
            </h2>
          </div>
        </div>
      </section>
      <section className="section-cms">
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="AI Glasses UX"
                  discipline="Next-Gen Wearable Interaction Study"
                  image="/assets/Gemini_Generated_Image_767mk4767mk4767m-1-p-1600-30ff6ead29cd.webp"
                  href="/ai-glasses-ux/"
                  className="link-project w-inline-block"
                  id="w-node-bd2419ec-3832-8cb8-b0e3-d193212b8e73-81743ed0"
                  motionId="bd2419ec-3832-8cb8-b0e3-d193212b8e73"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Narratron: Object-LM"
                  discipline="Physical Human-AI Interaction"
                  image="/assets/airplane-13-1-p-1600-3792c6beb6f6.webp"
                  href="/home-project/narratron/"
                  className="link-project w-inline-block"
                  id="w-node-_30ada9aa-769e-fdc9-0c94-220d44a0964c-81743ed0"
                  motionId="30ada9aa-769e-fdc9-0c94-220d44a0964c"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Post-Purchase Experience"
                  discipline="Mobile UI/UX "
                  image="/assets/clay-google-pixel-6-pro-in-perspective-view-mockup-t-8f9c89e63f5c.webp"
                  href="/project/postpurchase-app/"
                  className="link-project w-inline-block"
                  id="w-node-_39d4e97e-a140-d517-461f-81481b810ca9-81743ed0"
                  motionId="39d4e97e-a140-d517-461f-81481b810ca9"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Flowd AI - ThinkingOS"
                  discipline=""
                  image="/assets/Flowd-Cover-p-1600-30f144dceafe.webp"
                  href="https://flowd-thinking-os.com/"
                  className="link-project right w-inline-block"
                  id="w-node-a4ffa28b-c710-6e41-04c6-d5263156f757-81743ed0"
                  motionId="a4ffa28b-c710-6e41-04c6-d5263156f757"
                  newTab
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="WineChain"
                  discipline="Branding &amp; Website"
                  image="/assets/Cover_WineChain-60a87984670e.webp"
                  href="/home-project/nutura/"
                  className="link-project right w-inline-block"
                  id="w-node-_45c717e7-1e1e-fe87-a8dc-e0ae8aac8966-81743ed0"
                  motionId="45c717e7-1e1e-fe87-a8dc-e0ae8aac8966"
                  newTab
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Nurtura"
                  discipline="Focus App in XR"
                  image="/assets/nurturally-1195b1da5685.webp"
                  href="/project/nurtura/"
                  className="link-project w-inline-block"
                  id="w-node-a5774aca-4530-e7b1-419f-f8f0ed89ef29-81743ed0"
                  motionId="a5774aca-4530-e7b1-419f-f8f0ed89ef29"
                  newTab
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="AtomXR - Generative XR"
                  discipline="XR Prototyping Tool"
                  image="/assets/original-df744e2e596b03e1b9bb7edcedcea7d5-63a33fde86fa.webp"
                  href="/project/atomxr/"
                  className="link-project w-inline-block"
                  id="w-node-_8f9047b7-2191-2b4a-94eb-fc3914ba1e2e-81743ed0"
                  motionId="8f9047b7-2191-2b4a-94eb-fc3914ba1e2e"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Splyt"
                  discipline="Social Media in XR"
                  image="/assets/shadow-overlay-two-iphone-13-on-concrete-surface-moc-433cb13efb65.webp"
                  href="/project/splyt/"
                  className="link-project right link w-inline-block"
                  id="w-node-_7fd40b7e-1023-e1a7-0def-dbc3cd9dbe5d-81743ed0"
                  motionId="7fd40b7e-1023-e1a7-0def-dbc3cd9dbe5d"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="w-layout-grid grid-project">
                <ProjectCard
                  title="Sound Plug"
                  discipline="Industrial Design"
                  image="/assets/cover-p-1600-5880be415088.jpeg"
                  href="/home-project/sound-plug/"
                  className="link-project right w-inline-block"
                  id="w-node-_4cfd59ea-3a8d-8fab-dffd-a20e9b571fa3-81743ed0"
                  motionId="4cfd59ea-3a8d-8fab-dffd-a20e9b571fa3"
                  newTab
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div className="empty-state w-dyn-empty">
            <div className="text-empty">No items found.</div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div className="empty-state w-dyn-empty">
            <div className="text-empty">No items found.</div>
          </div>
        </div>
      </section>
      <div className="w-layout-grid grid-3">
        <a
          href={sitePath("/creative-tech/")}
          className="link-block w-inline-block"
        >
          <h1 className="heading-project">creative tech</h1>
        </a>
        <a href={sitePath("/uiux/")} className="link-block w-inline-block">
          <h1 className="heading-project">user experience</h1>
        </a>
        <a href={sitePath("/xr/")} className="link-block w-inline-block">
          <h1 className="heading-project">spatial computing</h1>
        </a>
      </div>
      <Contact triangle="/assets/triangle-58cf8852f07a.svg" />
      <Footer />
      <Interactions />
    </div>
  );
}
