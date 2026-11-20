import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "AugMend - Xianlin Lu" };

export default function UiUxAugmend() {
  return (
    <div data-wf-page="65c1cef9c832197eff68c7dd" className="portfolio-page">
      <Navigation current="/ui-ux/augmend/" />
      <section
        style={{
          backgroundImage:
            "url(" + sitePath("/assets/Main-203-42f63fe0a3c3.webp") + ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">AugMend</h1>
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
                <div className="text-info">Lead UI/UX Designer</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Category</div>
                <div className="text-info">UI/UX Design</div>
              </div>
            </div>
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4472-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h5>
                  The mental health dashboard design provides users with a clear
                  overview of their emotional well-being and progress. Through
                  intuitive graphs and charts, users can track their mood
                  trends, journal entries, and activity levels, fostering
                  self-awareness and mindfulness. With customizable goal-setting
                  features and access to resources like meditation exercises,
                  the dashboard empowers users to prioritize their mental health
                  and take proactive steps towards emotional balance and
                  resilience.
                </h5>
                <h2>‍</h2>
              </div>
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
                "/assets/Frame-513271-p-1600-6ffd02218a38.jpeg",
                "/assets/Frame-513272-p-1600-fbadbc6fd792.jpeg",
                "/assets/Frame-513273-p-1600-8dce59193c5c.webp",
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
            <div role="list" className="w-dyn-items w-row w-dyn-hide"></div>
            <div className="empty-state-5 w-dyn-empty"></div>
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
