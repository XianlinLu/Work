import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Post-Purchase Experience - Xianlin Lu" };

export default function ProjectPostpurchaseApp() {
  return (
    <div
      data-wf-page="65bbcbb7c0cfc5f781743ed6"
      className="portfolio-page body-2"
    >
      <Navigation current="/project/postpurchase-app/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath(
              "/assets/clay-google-pixel-6-pro-in-perspective-view-mockup-t-8f9c89e63f5c.webp",
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
          <h1 className="heading-project">Post-Purchase Experience</h1>
        </div>
      </section>
      <section style={{ opacity: "0" }} className="section">
        <div className="content">
          <div className="w-layout-grid grid">
            <div
              id="w-node-cd6c34c7-3794-3cae-9e4c-46ce5bc5b8b3-81743ed6"
              className="info padding-1-2em"
            >
              <div className="block-info">
                <div className="text-sabtitle">Role</div>
                <div className="text-info">Lead Designer</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Year</div>
                <div className="text-info">Mobile UI/UX </div>
              </div>
            </div>
            <div
              id="w-node-_83629829-2e25-3c48-5233-971b72aa1ed7-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <p>
                  <a href="https://helpar.webflow.io/">HelpAR</a> is a platform
                  that helps brands reclaim the post purchase experience &amp;
                  unlock hidden sources of revenue —  all while delivering an
                  awesome experience to users.{" "}
                </p>
                <p>
                  As the Product Designer and Frontend Engineer of this project,
                  I designed and developed this PWA app for post-purchase
                  experience. You may experience the app on mobile{" "}
                  <a href="http://soom.helpar.app">here</a>.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "92.60416666666667%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1153237848?app_id=122963"
              width="1920"
              height="1778"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-2 w-dyn-bind-empty w-video w-embed"></div>
          <div
            style={{ paddingTop: "55.78125000000001%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1018056896?app_id=122963"
              width="1920"
              height="1071"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="w-layout-grid grid w-condition-invisible">
            <div
              id="w-node-b49789df-d03f-8056-3710-40ac4c709e23-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <ImageGallery
              listClass="collection-list-multi-image w-dyn-items"
              itemClass="w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={[
                "/assets/9-p-1600-3bf0e289f8d9.webp",
                "/assets/12-p-1600-a4251942a4d3.webp",
                "/assets/13-p-1600-52f6fdd0abcc.webp",
                "/assets/15-p-1600-957509634893.webp",
                "/assets/19-p-1600-2fb465581378.webp",
                "/assets/17-p-1600-9782e7b3cf24.png",
                "/assets/20-p-1600-315414e4ebd7.webp",
                "/assets/18-p-1600-6ef7fef5db2c.webp",
                "/assets/2-p-1600-93fd9fe1c414.png",
                "/assets/3-p-1600-a5d0dd166677.png",
                "/assets/4-p-1600-8df85a0ff0dd.png",
                "/assets/5-p-1600-c87a61677270.webp",
                "/assets/6-p-1600-62810144fdee.png",
                "/assets/7-p-1600-3622967b8909.png",
                "/assets/1-p-1600-58f9a71723f3.png",
                "/assets/2-p-1600-68f3f1e898bc.png",
                "/assets/3-p-1600-460f0ab793e5.png",
                "/assets/4-p-1600-14e793470bf7.webp",
                "/assets/5-p-1600-c24cf6749e41.png",
                "/assets/6-p-1600-e4154219cf23.png",
                "/assets/7-p-1600-b55f12379c89.png",
                "/assets/8-p-1600-182f1ae27ed8.webp",
                "/assets/10-p-1600-aba739fe4663.png",
                "/assets/11-p-1600-3970e4c037b1.png",
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
