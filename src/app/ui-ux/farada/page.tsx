import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "FARADA - Xianlin Lu" };

export default function UiUxFarada() {
  return (
    <div data-wf-page="65c1cef9c832197eff68c7dd" className="portfolio-page">
      <Navigation current="/ui-ux/farada/" />
      <section
        style={{
          backgroundImage:
            "url(" + sitePath("/assets/COVER-FARADA-1298ca677d96.gif") + ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">FARADA</h1>
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
                <div className="text-info">Website Designer + Developer</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Category</div>
                <div className="text-info">Website Desigin</div>
              </div>
            </div>
            <div
              id="w-node-_8fae5d00-15ed-3719-f23c-4cb270ff4472-ff68c7dd"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <p>‍</p>
                <p>‍</p>
                <p>
                  <a href="https://shoe-interactive.webflow.io/">
                    View Website
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "75%" }}
            className="video-2 w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1007277339?app_id=122963"
              width="1920"
              height="1440"
              scrolling="no"
              title="Vimeo embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
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
            <div role="list" className="w-dyn-items w-dyn-hide"></div>
            <div className="empty-state-4 w-dyn-empty"></div>
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
