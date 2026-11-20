import { Navigation, Footer } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import Interactions from "@/components/Interactions";

export const metadata = { title: "AR/VR Portfolio - Xianlin Lu" };

export default function Xr() {
  return (
    <div data-wf-page="65bbcbb7c0cfc5f781743ed8" className="portfolio-page">
      <Navigation current="/xr/" />
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
            spatial computing
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
                title="Unreal Realm"
                discipline="XR Hand Interaction Study"
                image="/assets/extract_water_texture_optimized-176d275ad458.gif"
                href="/home-project/unreal-realm/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Nurtura"
                discipline="AR App for WFH"
                image="/assets/nurturally-1195b1da5685.webp"
                href="/home-project/nutura/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Splyt"
                discipline=""
                image="/assets/shadow-overlay-two-iphone-13-on-concrete-surface-moc-9a061fcdd1f6.webp"
                href="#"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
                overlay="/assets/shadow-overlay-two-iphone-13-on-concrete-surface-moc-433cb13efb65.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Do Androids Dream of Electronic Space?"
                discipline=""
                image="/assets/do-android-cover-gif-a6765f58112b.webp"
                href="/arvr/do-androids-dream-of-electronic-space/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Ethereal Figures"
                discipline="Experiencial Air - VR"
                image="/assets/ezgif-7-018ad98323-559f22a46535.webp"
                href="https://xiyingbao.cargo.site/Ethereal-Figures"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
                overlay="/assets/ezgif-7-018ad98323-559f22a46535.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="MusiCraft"
                discipline="VR Music Game"
                image="/assets/O7sxeN8kZyEV0Vawiz2aW2Z1u4-7f65ea79e1d4.webp"
                href="https://xiyingbao.webflow.io/musicraft"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="LookUp"
                discipline="Mobile AR Weather App"
                image="/assets/cover-lookup-2e7d42c4919f.webp"
                href="https://www.xiyingbao.org/arvr/lookup"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="AR Thermostat App"
                discipline="AR App"
                image="/assets/thermostat-7b7c2e486e5b.webp"
                href="/arvr/ar-thermostat-app/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="AR Tally Scale Instruction"
                discipline="Mobile AR App"
                image="/assets/tally-cover-bd010075e669.webp"
                href="https://www.xiyingbao.org/arvr/ar-tally-scale-instruction"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Acupressure AR"
                discipline="AR App"
                image="/assets/Screen-Shot-2022-03-26-at-2-11-34-PM-p-1600-8be4f02499e3.webp"
                href="/arvr/acupressure-ar/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Duck Dynasty"
                discipline=""
                image="/assets/DUCK_BOX500-Large-0f03471b3722.jpeg"
                href="/arvr/duck-dynasty/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
                overlay="/assets/cover-gif-9770e29f3cbf.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="AR Clock Instruction"
                discipline="WebAR App"
                image="/assets/clock-cover-5c0c301127f0.webp"
                href="https://www.xiyingbao.org/arvr/ar-clock-instruction"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
                overlay="/assets/clock-cover-50b9c9de04c6.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Acid Dream"
                discipline="AR Art Experience"
                image="/assets/MISCA-47b119444fdb.webp"
                href="#"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Collective Dream"
                discipline="VR Experience"
                image="/assets/Screen-Shot-2022-04-25-at-10-39-06-PM-p-1600-5909a5238445.webp"
                href="/arvr/collective-dream/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
                overlay="/assets/dream-gif-625833f0fb82.webp"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Atom XR"
                discipline="AI-Powered XR App"
                image="/assets/original-df744e2e596b03e1b9bb7edcedcea7d5-63a33fde86fa.webp"
                href="/arvr/atom-xr/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Glitch #1"
                discipline=""
                image="/assets/phone-7a8f6bf84b09.webp"
                href="/arvr/glitch-1/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Glitch #2"
                discipline=""
                image="/assets/computer-f4f7e7269ad0.webp"
                href="/arvr/glitch-2/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Glitch #3"
                discipline=""
                image="/assets/coke-381b751d378f.webp"
                href="/arvr/glitch-3/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_568473d5-be62-2a07-29f0-13ca1b72f893-81743ed8"
                motionId="568473d5-be62-2a07-29f0-13ca1b72f893"
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
