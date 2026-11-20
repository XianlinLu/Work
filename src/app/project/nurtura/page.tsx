import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Nurtura - Xianlin Lu" };

export default function ProjectNurtura() {
  return (
    <div
      data-wf-page="65bbcbb7c0cfc5f781743ed6"
      className="portfolio-page body-2"
    >
      <Navigation current="/project/nurtura/" />
      <section
        style={{
          backgroundImage:
            "url(" + sitePath("/assets/nurturally-1195b1da5685.webp") + ")",
        }}
        className="section-top project"
      >
        <div
          style={{ width: "100%", height: "100%" }}
          className="loading-overlap"
        ></div>
        <div className="block-top project">
          <h1 className="heading-project">Nurtura</h1>
        </div>
      </section>
      <section
        style={{ backgroundColor: "white", opacity: "0" }}
        className="section"
      >
        <div className="content">
          <div className="w-layout-grid grid">
            <div
              id="w-node-cd6c34c7-3794-3cae-9e4c-46ce5bc5b8b3-81743ed6"
              className="info padding-1-2em"
            >
              <div className="block-info w-condition-invisible">
                <div className="text-sabtitle">Role</div>
                <div className="text-info w-dyn-bind-empty"></div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Year</div>
                <div className="text-info">Focus App in XR</div>
              </div>
            </div>
            <div
              id="w-node-_83629829-2e25-3c48-5233-971b72aa1ed7-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h5>
                  Core 77 awarded project Nurtura is an AR experience designed
                  for work-from-home. It helps remote workers balance work and
                  life in their home environment by providing a wellness system.
                  Only when the user strikes a balance between work and life,
                  will the plants thrive in their AR workspace.
                </h5>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "56.25%" }}
            className="video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/911471814?app_id=122963"
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
            style={{ paddingTop: "53.125%" }}
            className="video-2 w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://player.vimeo.com/video/1018114197?app_id=122963"
              width="1920"
              height="1020"
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
              id="w-node-b49789df-d03f-8056-3710-40ac4c709e23-81743ed6"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <p>
                  It&#x27;s generally acknowledged that great work improves
                  wellbeing, while low quality business are detrimental to
                  wellbeing. Flexible working, that is laborer&#x27;s command
                  over when and where they work, has expanded significantly over
                  the course of the years across most industrialized nations.
                  This situation has become the norm rather than the exception
                  in the context of Covid-19. Although remote work is considered
                  to bring freedom, flexibility and comfort, along with which is
                  longer working hours, loneliness, and the disappearing
                  boundary of work and life. Individuals need to perceive and
                  deal with the high pressure environment that work from home
                  can make for some individuals.
                </p>
                <p>
                  Taking this scenario into account, it&#x27;s noticeable that
                  Augmented Reality (AR) is a promising technology concerning
                  work and it has the potential to enhance engagement. Augmented
                  reality simulation provide another layer that augments
                  users&#x27; experience of reality by overlaying virtual
                  graphic on physical environment. It is a calm technology that
                  makes human-computer interaction become hidden and invisible.
                  Through the contextual knowledge of the user, the user&#x27;s
                  attention is minimized and the computing device is functioning
                  in the background.
                </p>
                <p>
                  We propose a work-life balance system based on augmented
                  reality in the context of pandemic, aiming at assisting users
                  to maintain healthy time management as well as wellbeing while
                  working from home. It outlines the design research through a
                  narrative of the development of Nurturally, an ambient,
                  glasses-based augmented reality gamified simulation designed
                  to support balanced work from home. Our goal is to understand
                  the potential of augmented reality simulation system in the
                  context of remote work while also proposing the idea of an
                  application concept — a nature nurturing system which can be
                  used for incentivizing work-life balance. This system includes
                  growing plants that visualize the user&#x27;s work-life
                  regularity. Physical rewarding is also designed to motivate
                  users in terms of balanced lifestyle. Nurturally is an
                  AR-based system that transforms your work-from-home day into a
                  balanced, productive and enjoyable experience. It aims to
                  enhance remote workers&#x27; self-management and innovate a
                  sustainable, beneficial and inspiring lifestyle.{" "}
                </p>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <ImageGallery
              listClass="collection-list-multi-image w-dyn-items"
              itemClass="w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={[
                "/assets/Frame-1-e2cc078c0092.webp",
                "/assets/Frame-2-83470dd449ad.webp",
                "/assets/Portfolio-Samsung-001-p-1600-8bddde55d88b.webp",
                "/assets/Portfolio-Samsung-002-p-1600-404206ca5eb1.webp",
                "/assets/image20-p-1600-212d0153ca64.webp",
              ]}
            />
            <div className="empty-state none w-dyn-hide w-dyn-empty">
              <div className="text-empty">No items found.</div>
            </div>
          </div>
          <div className="cms-multi-image w-dyn-list">
            <ImageGallery
              listClass="collection-list-multi-image image-b w-dyn-items"
              itemClass="w-dyn-item w-dyn-repeater-item"
              imageClass="multi-image"
              images={[
                "/assets/1126510_185547_104581_DVJr8bP4C-de178395f7cc.jpg",
                "/assets/1126513_185547_104581_W_PYBbEPi-b51b435b2da7.jpg",
                "/assets/1126514_185547_104581_xoapppEeG-3765a85d424f.webp",
                "/assets/1126519_185547_104581_egeRIY7hv-54d2a552913f.jpg",
                "/assets/1126521_185547_104581_pP6qYeEqi-25ffcc9fe3c5.webp",
                "/assets/1126522_185547_104581_6Upiwm7wT-a5b8ed1d8112.webp",
                "/assets/1126523_185547_104581_mfFwvw8uN-203d61b6efda.jpg",
                "/assets/1126524_185547_104581_rW90GfME_-3db096a95511.webp",
                "/assets/1126525_185547_104581_eNANLjw4K-c40d76bce6b5.webp",
              ]}
            />
            <div className="empty-state none w-dyn-hide w-dyn-empty">
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
