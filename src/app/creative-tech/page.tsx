import { Navigation, Footer } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Art Portfolio - Xianlin Lu" };

export default function CreativeTech() {
  return (
    <div data-wf-page="65bbcbb7c0cfc5f781743ed4" className="portfolio-page">
      <Navigation current="/creative-tech/" />
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
            creative tech
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
                title="Spatial Interaction Framework"
                discipline=""
                image="/assets/Gemini_Generated_Image_767mk4767mk4767m-1-p-1600-30ff6ead29cd.webp"
                href="/spatial-interaction-framework/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Narratron"
                discipline="Large Language Object"
                image="/assets/airplane-14-1-p-1600-0376dc1347c6.webp"
                href="/home-project/narratron/"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Telecon"
                discipline="Tangible Interface"
                image="/assets/image41-p-1600-9a8cd718a179.webp"
                href="https://www.xiyingbao.org/home-project/telecon"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Fashion GAN"
                discipline="Machine Learning Design"
                image="/assets/FashionGAN_Plants-2022-08-13-15_32_44-9778f5bc5240.gif"
                href="https://www.xiyingbao.org/home-project/fashiongan"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Geometry Jungle"
                discipline="ThreeJS"
                image="/assets/ezgif-39aa9531255f19-f57e798a3ee0.gif"
                href="https://www.xiyingbao.org/project/geometry-jungle"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
                motionId="7aeaf220-817d-7251-25e7-602390ebf19a"
              />
            </div>
            <div role="listitem" className="collection-item---works w-dyn-item">
              <ProjectCard
                title="Emo"
                discipline="Immersive Interactive Installation"
                image="/assets/image56-p-1600-2f5d9c06c0be.webp"
                href="https://www.xiyingbao.org/home-project/emo"
                className="link-project _w-50 w-inline-block"
                id="w-node-_7aeaf220-817d-7251-25e7-602390ebf19a-81743ed4"
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
