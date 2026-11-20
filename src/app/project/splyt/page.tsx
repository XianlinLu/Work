import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Splyt - Xianlin Lu" };

export default function ProjectSplyt() {
  return (
    <div
      data-wf-page="65bbcbb7c0cfc5f781743ed6"
      className="portfolio-page body-2"
    >
      <Navigation current="/project/splyt/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath(
              "/assets/shadow-overlay-two-iphone-13-on-concrete-surface-moc-433cb13efb65.webp",
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
          <h1 className="heading-project">Splyt</h1>
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
                <div className="text-info">Design Prototyper</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Year</div>
                <div className="text-info">Social Media in XR</div>
              </div>
            </div>
            <div
              id="w-node-_83629829-2e25-3c48-5233-971b72aa1ed7-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h3>
                  Splyt is a mobile XR app that aims to capture, enhance and
                  share life memories through a 3D medium.
                </h3>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "55.885416666666664%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1006039426?h=909fb59444&amp;app_id=122963"
              width="1920"
              height="1073"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ paddingTop: "54.21875000000001%" }}
            className="video-2 w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1007459037?h=8fba188031&amp;app_id=122963"
              width="1920"
              height="1041"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ paddingTop: "55.15624999999999%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1015406649?h=2433e883b4&amp;app_id=122963"
              width="1920"
              height="1059"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-b49789df-d03f-8056-3710-40ac4c709e23-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h2>Concept</h2>
                <p>
                  This is a mobile and XR app that redefines how we capture,
                  enhance, and share life moments. In the era of spatial
                  computing, the way we interact with our memories is evolving
                  from static 2D images to immersive 3D experiences. With Splyt,
                  users can not only capture moments but also step into them,
                  creating &#x27;3D bubbles&#x27; that can be experienced in
                  real-time. This marks a significant shift in social media,
                  where people will no longer just view content—they&#x27;ll
                  walk into it.
                </p>
                <p>‍</p>
                <h2>
                  User Experience
                  <br />
                </h2>
                <p>
                  The process of creating these 3D memories is incredibly
                  intuitive. First, users shoot a video on their phone,
                  following simple guidance. Next, users can access powerful 3D
                  editing tools, available in both 3D and AR modes. With these
                  tools, they can make their memories more fun, engaging, and
                  personalized. We provide a range of high-quality templates
                  designed by professional 3D artists, so anyone can become a 3D
                  content creator. Finally, users can share their 3D memories
                  with the community, where they can be experienced on mobile
                  devices or XR headsets.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <ImageGallery
              listClass="collection-list-multi-image w-dyn-items"
              itemClass="w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={[
                "/assets/6-p-1600-d49dbd6d6895.webp",
                "/assets/7-p-1600-888b808d2b29.webp",
                "/assets/9-p-1600-fda9395b7023.webp",
                "/assets/8-p-1600-d5c10e683a80.webp",
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
