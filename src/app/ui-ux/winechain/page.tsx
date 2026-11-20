import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "WineChain - Xianlin Lu" };

export default function UiUxWinechain() {
  return (
    <div data-wf-page="65c1cef9c832197eff68c7dd" className="portfolio-page">
      <Navigation current="/ui-ux/winechain/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath("/assets/Cover_WineChain-60a87984670e.webp") +
            ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">WineChain</h1>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <div className="w-layout-grid grid">
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4467-ff68c7dd"
              className="info"
            >
              <div
                id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4468-ff68c7dd"
                className="block-info"
              >
                <div className="text-sabtitle">Role</div>
                <div className="text-info">Lead UX/UI Designer</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Category</div>
                <div className="text-info">Branding &amp; Website</div>
              </div>
            </div>
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4472-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <p>
                  WineChain is the network between premium wineries and wine
                  collectors, offering traceable solutions to accessing and
                  experiencing rare wines along with world-class shipping and
                  storage. Wine collectors can also trade rare wines with other
                  collectors. WineChain is able to offer both better value and
                  higher quality to wine collectors by sourcing wines from the
                  top wineries in the world and promising traceability and
                  authenticity.{" "}
                </p>
                <p>
                  I was leading the website redesign and frontend development
                  leveraging blockchain technologies. Design flows and
                  experiences that distill down complex actions into interfaces
                  for drop events, NFT marketplace, etc.
                </p>
                <p>‍</p>
                <p>
                  <strong>
                    <br />
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "56.25%" }}
            className="video-2 w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/909207471?app_id=122963"
              width="1920"
              height="1080"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ paddingTop: "56.25%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/910638046?app_id=122963"
              width="1920"
              height="1080"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ paddingTop: "56.25%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/910638026?app_id=122963"
              width="1920"
              height="1080"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4478-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
          </div>
          <div className="w-dyn-list">
            <ImageGallery
              listClass="w-dyn-items"
              itemClass="collection-item-4 w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={["/assets/image-489-p-1600-94ef8cc04a13.webp"]}
            />
            <div className="empty-state-4 w-dyn-hide w-dyn-empty"></div>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff447b-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
          </div>
          <div className="w-dyn-list">
            <ImageGallery
              listClass="w-dyn-items w-row"
              itemClass="collection-item-3 w-dyn-item w-dyn-repeater-item w-col w-col-6"
              imageClass="multi-image"
              images={[
                "/assets/Dribble-20show-2010-e7f1c6cb46af.webp",
                "/assets/Group-1000003131-p-1600-ad97b62e1b2e.webp",
              ]}
            />
            <div className="empty-state-5 w-dyn-hide w-dyn-empty"></div>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff447e-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4480-ff68c7dd"
              alt=""
              className="w-dyn-bind-empty"
            />
          </div>
          <a href={sitePath("/uiux/")} className="link-block w-inline-block">
            <h1 className="heading-project">user experience</h1>
          </a>
        </div>
      </section>
      <Contact triangle="/assets/triangle-58cf8852f07a.svg" />
      <Footer />
      <Interactions />
    </div>
  );
}
