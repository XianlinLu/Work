import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import Interactions from "@/components/Interactions";

export const metadata = { title: "UI/UX Portfolio - Xianlin Lu" };

export default function Uiux() {
  return (
    <div data-wf-page="65bbcbb7c0cfc5f781743eda" className="portfolio-page">
      <Navigation current="/uiux/" />
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
            User experience
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
                title="the tapp"
                discipline="Mobile UI/UX"
                image="/assets/clay-google-pixel-6-pro-in-perspective-view-mockup-t-8f9c89e63f5c.webp"
                href="/ui-ux/post-purchase-experience/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="XTENDED iDENTiTY"
                discipline=""
                image="/assets/COVER_Xi-a9d9b57df75f.webp"
                href="/ui-ux/xtended-identity/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Locus"
                discipline=""
                image="/assets/shadow-overlay-two-iphone-13-on-concrete-surface-moc-70e891425520.webp"
                href="/ui-ux/locus/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="WineChain"
                discipline="Branding &amp; Website"
                image="/assets/Cover_WineChain-60a87984670e.webp"
                href="/ui-ux/winechain/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
                overlay="/assets/Cover_WineChain-60a87984670e.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="FARADA"
                discipline="Website Desigin"
                image="/assets/COVER-FARADA-1298ca677d96.gif"
                href="/ui-ux/farada/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Focus App for Study"
                discipline="Mobile Focus App Design"
                image="/assets/1-26cdb503617d.webp"
                href="/ui-ux/focus-app-for-study/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="AugMend"
                discipline="UI/UX Design"
                image="/assets/Main-203-42f63fe0a3c3.webp"
                href="/ui-ux/augmend/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
                overlay="/assets/COVER-augmend-p-1600-f5bc7a6c18ee.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Onboarding Experience"
                discipline="Mobile Onboarding Experience"
                image="/assets/cover-8e0cde12ae53.webp"
                href="/ui-ux/onboarding-experience/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Web3 Wallet Dashboard"
                discipline="UI/UX Design"
                image="/assets/Group-201000003124-264d88e77dd8.webp"
                href="/ui-ux/web3-wallet/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_234b5c27-2e2d-3622-ed3e-af3b4c91eb1e-81743eda"
                motionId="234b5c27-2e2d-3622-ed3e-af3b4c91eb1e"
                overlay="/assets/Group-201000003124-264d88e77dd8.webp"
              />
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
