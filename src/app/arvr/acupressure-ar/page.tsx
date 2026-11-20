import { Navigation, Footer, Contact } from "@/components/SiteChrome";
import { ImageGallery } from "@/components/ImageGallery";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Acupressure AR - Xianlin Lu" };

export default function ArvrAcupressureAr() {
  return (
    <div data-wf-page="65c04293eda4b307b1ae9a1f" className="portfolio-page">
      <Navigation current="/arvr/acupressure-ar/" />
      <section
        style={{
          backgroundImage:
            "url(" +
            sitePath(
              "/assets/Screen-Shot-2022-03-26-at-2-11-34-PM-p-1600-8be4f02499e3.webp",
            ) +
            ")",
        }}
        className="section-top project"
      >
        <div className="loading-overlap"></div>
        <div className="block-top project">
          <h1 className="heading-project">Acupressure AR</h1>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <div className="w-layout-grid grid">
            <div
              id="w-node-_5b4d9643-8902-1809-8e92-b175e1199524-b1ae9a1f"
              className="info"
            >
              <div
                id="w-node-_5098defb-ffa6-73cd-a79b-96bafd3afb65-b1ae9a1f"
                className="block-info"
              >
                <div className="text-sabtitle">Role</div>
                <div className="text-info">Unity Developer</div>
              </div>
              <div className="block-info">
                <div className="text-sabtitle">Category</div>
                <div className="text-info">AR App</div>
              </div>
            </div>
            <div
              id="w-node-_863412c1-bdfc-64bd-6d4d-d1e193e1489d-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h6>
                  Acupressure is an ancient healing art based on the traditional
                  Chinese medicine practice of acupuncture. With acupressure,
                  you put pressure on acupoints on your body. Massaging these
                  points regularly can help release muscle tension, alleviate
                  diseases symptoms and promote holistic wellbeing. We aim to
                  educate users to locate acupoints, connect symptoms with
                  acupoints, as well as promote daily practice for a healthier
                  lifestyle.
                </h6>
                <p>
                  Xianlin Lu, Davide Zhang, Meijie, Yubo Zhao @ MIT Reality Hack
                  2022
                </p>
                <p>
                  <br />
                </p>
                <p>‍</p>
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "56.20608899297424%" }}
            className="video-2 w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="https://www.youtube.com/embed/6fNKvbL9pM0?feature=oembed"
              width="854"
              height="480"
              scrolling="no"
              title="YouTube embed"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="video w-dyn-bind-empty w-video w-embed"></div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_54df6952-2616-4fe4-be74-b2ba4748c2d4-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-richtext">
                <h5>
                  <strong>What it does</strong>
                </h5>
                <p>
                  Our product provides hand-based acupoints AR visualization and
                  rich interactive guidance to make the acupressure process easy
                  and informative. It also reminds users of practicing
                  acupressure according to their daily health status. For
                  example, notification would pop up when the device detects
                  poor sleep quality to remind the user to massage the point
                  that reflects liver to alleviate dizziness.
                </p>
                <h5>
                  <strong>How we built it</strong>
                </h5>
                <p>
                  We used Oculus Quest 2, Zed Mini, and Leap Motion to develop
                  the interaction system. Zed Mini is a depth camera that
                  includes stereo-IMU, inside-out tracking and spatial
                  awareness. Leap Motion is an in-air controller that can track
                  the hand gesture of the user. The software was implemented in
                  Unity3D. With the accurate bone mapping from leap motion’s
                  hand-tracking features, we mapped the acupoints AR
                  visualization and user interface on the left hand. Davide led
                  the technical prototyping, Yubo, Aria and Meijie created the
                  user experience and visual design.
                </p>
                <h5>
                  <strong>Accomplishments that we&#x27;re proud of</strong>
                </h5>
                <p>
                  <strong>Hacking hardware together</strong>
                </p>
                <p>
                  After we encountered development issues with Hololens2 and
                  MRTK, we decided to switch gears and hack an AR device
                  ourselves with Oculus Quest, Leap Motion and Zed Mini. We were
                  able to figure out the new pipeline quickly and realize the
                  product in a very limited timeframe.
                </p>
                <p>
                  <strong>
                    Expand our project beyond technical prototyping
                  </strong>
                </p>
                <p>
                  Using our background in design we are not only satisfied with
                  making a viable product. We pushed our concept further to
                  imagine how it can make meaningful impacts in everyday
                  scenarios and solve actual user problems.
                </p>
                <p>
                  <strong>Maintain a high visual quality</strong>
                </p>
                <p>
                  We created all customized materials and UI assets to make sure
                  the visual design is tailored to the specific interactions we
                  prototyped. We added artistic interpretation to the user
                  interface design rather than just achieving the basic
                  functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_265dfd4d-1c96-4e5d-ad4c-5b8ddf89b139-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
          </div>
          <div className="collection-list-wrapper w-dyn-list">
            <ImageGallery
              listClass="w-dyn-items"
              itemClass="collection-item-7 w-dyn-item w-dyn-repeater-item"
              imageClass="image-3"
              images={[
                "/assets/Screen-Shot-2022-03-26-at-2-11-19-PM-p-1600-04be3303c85e.webp",
                "/assets/Screen-Shot-2022-03-26-at-2-11-34-PM-p-1600-8be4f02499e3.webp",
                "/assets/Screen-Shot-2022-03-26-at-2-11-55-PM-p-1600-4f0eb944a5ba.webp",
                "/assets/Screen-Shot-2022-03-26-at-2-12-51-PM-p-1600-52c9edfae7c9.webp",
                "/assets/Frame-2-p-1600-201536dc8b3a.webp",
              ]}
            />
            <div className="empty-state-2 w-dyn-hide w-dyn-empty"></div>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-dcef98e5-429a-475f-3e32-2d450c4b7d3d-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-_8a38a33a-22c9-880b-a3c9-f86df1fc4b62-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <div className="collection-list-wrapper w-dyn-list">
            <div
              role="list"
              className="collection-list w-dyn-items w-row w-dyn-hide"
            ></div>
            <div className="empty-state-3 w-dyn-empty"></div>
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-aaba73df-2287-3a37-499d-8f5e7d194b80-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-aaba73df-2287-3a37-499d-8f5e7d194b82-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_43405f43-a199-3c45-9636-5dbdf72d2fb0-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-_43405f43-a199-3c45-9636-5dbdf72d2fb2-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-f9f3da69-f49a-91b3-c4f2-de89cb197320-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-f9f3da69-f49a-91b3-c4f2-de89cb197322-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_26354134-a80e-93b4-0537-bcc5e6d4d306-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-_26354134-a80e-93b4-0537-bcc5e6d4d308-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <div className="w-layout-grid grid">
            <div
              id="w-node-_65841d61-8977-ccd5-199f-1002988cfabf-b1ae9a1f"
              className="rich-text"
            >
              <div className="rich-text-block w-dyn-bind-empty w-richtext"></div>
            </div>
            <img
              loading="lazy"
              id="w-node-_65841d61-8977-ccd5-199f-1002988cfac1-b1ae9a1f"
              alt=""
              className="grid-image w-dyn-bind-empty"
            />
          </div>
          <a href={sitePath("/xr/")} className="link-block w-inline-block">
            <h1 className="heading-project">spatial computing</h1>
          </a>
        </div>
      </section>
      <Contact triangle="/assets/triangle-58cf8852f07a.svg" />
      <Footer />
      <Interactions />
    </div>
  );
}
