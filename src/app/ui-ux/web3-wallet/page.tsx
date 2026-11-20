import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Web3 Wallet Dashboard - Xianlin Lu" };

export default function UiUxWeb3Wallet() {
  return (
    <div data-wf-page="65c1cef9c832197eff68c7dd" className="portfolio-page">
      <Navigation current="/ui-ux/web3-wallet/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath("/assets/Group-201000003124-264d88e77dd8.webp") +
            ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">Web3 Wallet Dashboard</h1>
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
                <div className="text-info">Lead Designer</div>
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
                  This Web3 wallet dashboard design offers users a seamless
                  interface to manage their cryptocurrency assets and
                  transactions securely. With real-time balance updates and
                  intuitive navigation, users can track their portfolio
                  performance and interact with decentralized applications
                  (dApps) on the blockchain.
                </h5>
                <p>
                  <br />
                </p>
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
                "/assets/Frame-513275-p-1600-2de08c00a143.webp",
                "/assets/Frame-513276-p-1600-3b776f235f87.webp",
                "/assets/Frame-20513265-8e41b3800e1e.webp",
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
