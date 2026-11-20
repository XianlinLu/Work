import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Focus App for Study - Xianlin Lu" };

export default function UiUxFocusAppForStudy() {
  return (
    <div data-wf-page="65c1cef9c832197eff68c7dd" className="portfolio-page">
      <Navigation current="/ui-ux/focus-app-for-study/" />
      <section
        style={{
          backgroundImage:
            "url(" + sitePath("/assets/1-26cdb503617d.webp") + ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">Focus App for Study</h1>
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
                <div className="text-info">
                  UI/UX Designer &amp; 3D Designer
                </div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Category</div>
                <div className="text-info">Mobile Focus App Design</div>
              </div>
            </div>
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4472-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
          </div>
          <div className="video-2 w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
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
              images={[
                "/assets/Frame-513268-p-1600-cd9a9e928962.jpeg",
                "/assets/Dribble-show-37-p-1600-c9871b47e985.jpeg",
              ]}
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
                "/assets/1-26cdb503617d.webp",
                "/assets/2-2c1ced0d4cfe.webp",
                "/assets/3-ab4c1132b787.webp",
                "/assets/4-d363ecda346a.webp",
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
