import { Navigation, Footer } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Spatial Interaction Framework" };

export default function AiGlassesUx() {
  return (
    <div data-wf-page="6927b00eda518a2c8d7b8ea3" className="portfolio-page">
      <Navigation current="/ai-glasses-ux/" />
      <section style={{ opacity: "0" }} className="section-top">
        <div
          style={{
            transform:
              "translate3d(0, 7vh, 0) scale3d(1, 1, 1) rotateX(-15deg) rotateY(0) rotateZ(0) skew(0, 0)",
            transformStyle: "preserve-3d",
          }}
          className="block-top"
        >
          <h1 className="heading-top">
            agentic wearables
            <br />
          </h1>
        </div>
      </section>
      <section
        style={{
          opacity: "0",
          transform:
            "translate3d(0, 5vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        }}
        className="section-cms"
      >
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Agentic Interface for Glasses (Coming soon)"
                discipline=""
                image="/assets/genui-image-01-p-1600-349880e3b31c.webp"
                href="#"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-8d7b8ea3"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Agentic Launcher for Glasses (Coming soon)"
                discipline=""
                image="/assets/agentic-launcher-cover-p-1600-eb60b80a5c5a.webp"
                href="#"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-8d7b8ea3"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Conversational OOBE for Smart Glasses"
                discipline=""
                image="/assets/cover-p-1600-e65d61b6bd99.jpg"
                href="/home-project/oobe/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-8d7b8ea3"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Ring-Input Glasses Interaction"
                discipline=""
                image="/assets/cover-p-1600-3b6e67619395.webp"
                href="/home-project/ring-input-glasses-interaction/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-8d7b8ea3"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Watch-Glasses Interaction"
                discipline=""
                image="/assets/tap-to-capture-p-1600-169b2619b76a.webp"
                href="/home-project/watch-glasses-interaction/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-8d7b8ea3"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Interactions />
    </div>
  );
}
