import { Navigation } from "@/components/SiteChrome";
import { sitePath } from "@/lib/paths";
import Interactions from "@/components/Interactions";

export const metadata = { title: "Unreal Realm" };

export default function HomeProjectUnrealRealm() {
  return (
    <div
      data-wf-page="687dc44375039cae0cae751b"
      className="portfolio-page body-6"
    >
      <section className="section-top project unreal-realm">
        <div
          style={{ width: "100%", height: "100%" }}
          className="loading-overlap"
        ></div>
        <div className="block-top project">
          <h1 className="heading-project">unreal realm</h1>
        </div>
      </section>
      <div id="luxy" className="smooth-wrap intouch">
        <div className="encounter-main-container-4">
          <div className="credit">
            <div className="div-block-10 black"></div>
            <h1 className="heading-7 white">CREDIT</h1>
            <p className="para-white credit white">
              Graduate School of Design, Mdes Mediums
              <br />‍<br />
              Group of 3:{" "}
              <strong>
                <em className="italic-text-18">
                  Xianlin Lu, Davide Zhang, Nix Liu Xin
                </em>
              </strong>
              <br />
              My contribution:
              <br />
              Ideation, Interaction Design, Prototyping &amp; Development, Video
              producing
              <br />
            </p>
          </div>
        </div>
        <div
          style={{ paddingTop: "56.17021276595745%" }}
          className="w-embed-youtubevideo youtube-4"
        >
          <iframe
            src="https://www.youtube.com/embed/6IE64obHWz8?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
            frameBorder="0"
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "auto",
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title=""
          ></iframe>
        </div>
        <div className="encounter-part2">
          <img
            width="800"
            loading="lazy"
            alt=""
            src={sitePath(
              "/assets/extract_water_texture_optimized-176d275ad458.gif",
            )}
          />
          <h1 className="heading-black-2">
            <strong className="paragraph-heading">Unreal Realm</strong>
            <br />
          </h1>
          <p className="para-black">
            The information ecology has gradually surpassed equipment and
            physical space with the development of technology. Even with the
            emerging popularity of mixed-reality experiences today, screen
            space, AR space, and physical space have been in relative isolation.
            Digital content is limited by the existing small screen, zero
            mobility, and low communication between devices. Physical objects
            are also limited to the low efficiency of transferring them into
            digital content for productivity. Extended reality living will
            become the future trend that bridges screen-based content and
            physical objects. XR is a feasible approach for performing
            cross-spaces productivity work, albeit currently constrained by
            technical limitations that lead to inferior usability and
            performance compared to physical monitors.
            <br />‍<br />
            Despite the variety of device types and screen sizes, our experience
            rests on a handful of touch gestures (swiping, pinching, tapping)
            that act as the backbone of mobile interactions today. Gestural
            interfaces are highly cinemagic, rich with action and graphical
            possibilities. Additionally, they fit the stories of remote
            interactions that are becoming more and more relevant in the real
            world as remote technologies proliferate. <br />
          </p>
          <img
            width="1200"
            alt=""
            src={sitePath("/assets/2021-12-22-3-39-43-30c8f7b26a7c.webp")}
            loading="lazy"
            className="image-196"
          />
          <h1 className="heading-black-2">
            <strong className="paragraph-heading">Design question</strong>
            <br />
          </h1>
          <p className="para-black">
            In light of the growing prevalence of commercial stereoscopic 3D
            displays, we seek to explore the 3D equivalent of the foundational
            touch gestures as well as the interface across different spaces. We
            conduct our design research by answering the following questions:
            What are the foundational 3D interactions of a mixed-reality future?
            What are the ways through which the boundaries between spaces can be
            blurred? It is necessary that XR interfaces should allow for
            additional interactions with virtual objects, which should not only
            enable natural and intuitive interaction with them, but also it
            should help to provide seamless interactions between real and
            virtual objects at the same time.
            <br />‍<br />
            In this regard, our research creates a vocabulary of first-person
            gestural interactions within the AR context and assigns meanings to
            such interactions for certain scenarios. There are four analogues
            for the structure of interaction languages. At level one, the
            existing single gestures, namely words, constitute the foundation
            for information architecture . By combining different single
            gestures with certain logic, we come to level two where we have
            chains of gestural commands, that is, phrases. In level three, we
            assign meanings to these grestual commands in universal scenarios.
            We  finally select and curate some of the meanings to create
            narratives in AR living in level four. 
            <br />
            <br />
            <br />
          </p>
          <img
            width="800"
            alt=""
            src={sitePath("/assets/Frame-2-4-27b3eafc0469.png")}
            loading="lazy"
            className="image-117"
          />
          <p className="para-black">
            This research aims to investigate how to interact with cross-space
            objects in XR, and how to seamlessly transition between hand
            gestures for conflict-free 3D digital content arrangement. We study
            the cross-space object interactions among screen space, AR space and
            physical space. In terms of screen-AR interaction, specifically, we
            enable cross-device object manipulation between screen and AR space.
            When it comes to AR-physical interaction, we design gesture-based 3D
            scanning that transmits physical objects into AR elements. Our demo
            also investigates the potential of extracting and recognizing
            materials from physical objects, which serve as elements for AR
            space creation. Lastly, within the AR context, we define gestures
            for object manipulation, switching and deletion that open up
            dialogue for alternative XR interaction design. 
            <br />
          </p>
          <h1 className="heading-black-2">
            <strong className="paragraph-heading">Design Consideration</strong>
            <br />
          </h1>
          <p className="para-black">
            We considered the following design factors that we have taken into
            account for our hand gesture interaction techniques. In addition,
            Bezerianos &amp; Balakrishnan present various design goals for
            object selection and manipulation in remote locations. Consistency
            and minimal physical movement are examples of this. In our study, we
            focus on exploring hand gesture interaction techniques for
            cross-space content manipulation tasks.
            <br />‍<br />
            <em>
              Conflict-free
              <br />‍
            </em>
            One challenge when interacting with digital content across the
            spaces is how to transit seamlessly between these three spaces
            without conflicts. This means, for example, that screen-based
            content selection should not be triggered when a user is
            manipulating an object in the AR space.
            <br />‍<br />
            <em>
              Consistency and seamlessness
              <br />‍
            </em>
            Cross-space tasks should be considered when investigating and
            evaluating the interaction techniques. The transition between two
            spaces will lead to transition of interaction techniques. Thus,
            it&#x27;s vital for cross-space interaction techniques to be
            seamless, fluent and low effort especially when the user is
            completing a long chain of manipulation tasks. For example, a user
            manipulates the material ball in AR space after he/she indicates and
            extracts the materials in the real world.
            <br />‍<br />
            <em>
              Input combination
              <br />‍
            </em>
            We made use of a combination of gesture-based input and raycast
            pointers to offer a balance between intuitive use and precision,
            <br />‍<br />
            <em>
              Low effort
              <br />‍
            </em>
            Hand-gestures provide a universal and lower effort input mechanism
            than controllers. Physical affordances and metaphors are leveraged
            in designing interactions.
            <br />
          </p>
          <img
            width="500"
            alt=""
            src={sitePath("/assets/41637003113_-pic-p-1600-e000ad8cc961.webp")}
            loading="lazy"
          />
          <h1 className="heading-black-2">
            <strong className="paragraph-heading">
              DESIGN IMPLEMENTATION
              <br />
            </strong>
            <br />
          </h1>
          <p className="para-black">
            <em className="italic-text-19">
              We used Oculus Quest 2, Zed Mini, and Leap Motion to develop the
              interaction system. Oculus Quest 2 is a head-mounted display
              device that has a small display optic in front of each eye. It can
              track head movement and change view point following it. Zed Mini
              is a depth camera that includes stereo-IMU, inside-out tracking
              and spatial awareness. Leap Motion is an in-air controller that
              can track the hand gesture of the user. The software was
              implemented in Unity3D.
              <br />‍<br />
              To complete the technical pipeline, we set up a second in-game
              camera in Unity3D calibrated to the real-world computer monitor to
              allow for objects to transition out of the screen space to AR
              space. Hand-tracking from Leap Motion is also calibrated to match
              the real hands coming from Zed Mini’s stereo camera feed.
            </em>
            <br />
          </p>
          <img
            width="800"
            alt=""
            src={sitePath("/assets/2021-12-22-4-52-34-4da3184d47fa.png")}
            loading="lazy"
          />
          <img
            width="400"
            alt=""
            src={sitePath("/assets/IMG_6732-6f2e1bf4b85f.webp")}
            loading="lazy"
            className="image-116"
          />
          <p className="para-black unrealpara first">
            <strong className="small-para-title">
              To see how virtual objects fit in the real space 
            </strong>
            <br />
          </p>
          <p className="para-black">
            <em className="italic-text-7">
              As mentioned above, ray-casting is a grabbing technique where a
              light ray extends from the user’s palm. By intersecting an object
              with this ray and pinching the fingers, the object is attached to
              the ray (Figure 3). Users can then manipulate the object easily
              using wrist or arm motion. In our implementation scenario, the
              user raycast to the table on the screen and pinch to position it
              out of the screen into the real world so that the user can get a
              sense of  how virtual objects fit in the real space. 
            </em>
            <br />
          </p>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/drag-p-1600-a137f8b71879.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath("/assets/ezgif-2-0a720ee752-ff98d4fd3290.webp")}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-17">
                Drag to Manipulate
                <br />
                Raycast-pinch to drag an object out from computer screen into XR
                space.{" "}
              </strong>
              Envisioning a seamless transition between multiple realities
            </p>
          </div>
          <p className="para-black unrealpara">
            <strong className="small-para-title">
              To manipulate a virtual copy of a physical object
            </strong>
            <br />
          </p>
          <p className="para-black">
            <em className="italic-text-8">
              3D scanning is already a developed technology nowadays. We propose
              that this technology combining AR will make the 3D scanning
              process more intuitive and efficient, as users can directly look
              at the object that they desire to scan and the scan result at the
              same time. The user first selects the ‘Scan’ function on the hand
              menu. By palm-pointing with five fingers close together, the user
              3D-scan a real object and make a digital copy of it in AR space.
            </em>
            <br />
          </p>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/hinge-p-1600-3ec4ded2f796.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath("/assets/scan_copy_optimized-cc15f8ec2b66.gif")}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-17">
                Hinge to Scan
                <br />‍
              </strong>
              Allowing seamless digital manipulations of physical objects
            </p>
          </div>
          <p className="para-black unrealpara">
            <strong className="small-para-title">
              To manipulate a virtual copy of a physical object
            </strong>
            <br />
          </p>
          <p className="para-black">
            <em className="italic-text-9">
              Two hands moving apart diagonally while pinching is often a
              metaphor for opening things up. We propose “pull” as the gesture
              to explode a 3D object in AR space. In our implementation
              scenario, the user is exploding the chair to have a closer look at
              the product’s structure details. When the user moves the two hands
              closer while pinching, the exploded chair is manipulated back to
              its original state. 
            </em>
            <br />
          </p>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/pan-p-1600-ec89a686dfbd.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath("/assets/pull_explode_optimized-d9120867fc63.webp")}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-17">
                Pan to Disassemble
                <br />‍
              </strong>
              Hands pulling away from each other diagonally, which explode the
              object according to the gesture movements.
            </p>
          </div>
          <p className="para-black unrealpara">
            <strong className="bold-text-12">
              Extracting material from the real space and applying them to a
              digital chair to customize it
            </strong>
            <br />
          </p>
          <p className="para-black">
            <em className="italic-text-10">
              Applying materials is a common function in 3D rendering and the
              product design process. The process of obtaining a material that
              mimics the real object is not intuitive and efficient enough. In
              our implementation, we propose that users can directly search for
              and extract materials from real world objects, and transform it
              into digital content for further AR-based and screen-based
              creation. The user uses an ‘OK’ sign gesture that mimics a
              magnifier to indicate texture on a real object. The vision inside
              the magnifier will be scaled up for the user to have a detailed
              look. We give the user the feeling of magic as such an effect
              cannot be achieved in real life. We use dwell time of three
              seconds as confirmation technique so that the interaction process
              will not be interrupted. During the dwell time, a loading
              animation would prompt up around the magnifier to indicate the
              confirmation process. After the material is confirmed, a material
              ball will be generated beside the user’s hand. At the same time,
              the magnifier in the finger circle will disappear. Then, the user
              uses ‘grab to manipulate’ that mentioned above to position the
              material ball onto the digital object. We use dwell time again for
              applying confirmation when the material ball collides with the
              object. At the same time, the object is being applied with the
              material as a preview for decision making.  After three seconds of
              collision, the material is successfully applied to the object.
              <br />
            </em>
            <br />
          </p>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/circle-p-1600-900167c7f6de.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath(
                "/assets/extract_water_texture_optimized-176d275ad458.gif",
              )}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-17">
                C<br />
                ‍Gesturing a magnifying glass to locate and extract real-world
                materials
              </strong>
            </p>
          </div>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/attach-p-1600-da13a159ca4e.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath(
                "/assets/WaterTextureApply_optimized-d5cdd46d465c.webp",
              )}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-17">
                Attach to Apply
                <br />‍
              </strong>
              Move the material ball created from the real-world material and
              apply it to the virtual object
            </p>
          </div>
          <p className="para-black unrealpara">
            <strong className="small-para-title">
              Flip through a catalogue of digital objects
            </strong>
            <br />
          </p>
          <p className="para-black">
            <em className="italic-text-11">
              Swipe is a widely used gesture in the current user interaction
              field. We deploy swipe as a gesture technique for the user to
              switch between selections in AR space.
            </em>
            <br />
          </p>
          <div className="w-layout-grid grid-4">
            <img
              width="600"
              height="340"
              alt=""
              src={sitePath("/assets/swipe-p-1600-817646f4a3ff.webp")}
              loading="lazy"
              className="image-195"
            />
            <img
              width="600"
              loading="lazy"
              alt=""
              src={sitePath(
                "/assets/swipe_to_switch_optimized-15522d0a6d33.gif",
              )}
              className="image-115"
            />
            <p className="paragraph-6"></p>
            <p className="paragraph-6">
              <strong className="bold-text-28">
                Swipe to Switch
                <br />‍
              </strong>
              Swipe to switch between different catalogues of a certain object.
            </p>
          </div>
          <h1 className="heading-black-2 ifwyf">
            <strong>
              <em className="paragraph-heading">Hand Gesture Catalog</em>
            </strong>
            <br />
          </h1>
          <div className="w-layout-grid grid-5">
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath(
                "/assets/WaterTextureApply_optimized-d5cdd46d465c.webp",
              )}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/ezgif-2-0a720ee752-ff98d4fd3290.webp")}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/ezgif-5-341f9ebab3-815960c699b7.webp")}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/scan_copy_optimized-cc15f8ec2b66.gif")}
            />
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Grab to manipulate
                <br />
              </strong>
              Use five-fingers-grasp to grab a near object.
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Raycast and Pinch 
                <br />
              </strong>
              Use palm pointing to indicate target object, then use pinch
              gesture to grab a distant object.
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Magnify and Extract
                <br />
              </strong>
              Use gesture that mimics a magnifier to indicate texture on real
              object.
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Scan
                <br />‍
              </strong>
              Use palm-pointing with five fingers close together to 3d-scan a
              real object.
              <br />
              <br />
            </p>
          </div>
          <div className="w-layout-grid grid-5">
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/shoot_delete_optimized-21ad0f122818.gif")}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/menu_flip_optimized-52f66a637d32.gif")}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/ezgif-5-34655aec9f-9f789523e908.webp")}
            />
            <img
              width="300"
              loading="lazy"
              alt=""
              src={sitePath("/assets/pull_explode_optimized-d9120867fc63.webp")}
            />
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Delete
                <br />
              </strong>
              Point and shoot
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Flip to show menu
                <br />
              </strong>
              Flip the left hand to show a menu anchored to it
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Press a button
                <br />
              </strong>
              Use finger to press a virtual button on the menu
            </p>
            <p className="paragraph-6 catalog">
              <strong className="small-para-title">
                Pull to explode
                <br />
              </strong>
              Pull both hands away from each other diagonally to explode the
              object
              <br />
              <strong>
                <br />‍
              </strong>
              <br />
              <br />
            </p>
          </div>
          <h1 className="heading-black-2 ifwyf">
            <strong>
              <em className="paragraph-heading">Discussion</em>
            </strong>
            <br />
          </h1>
          <p className="para-black">
            Our research presents a novel set of gesture-based interaction
            techniques for object manipulation. They expand upon previous work
            that leverage physical affordances into AR interaction by offering
            gesture-based texture extraction, 3D scanning, exploding and so
            forth. Moreover, existing pipelines for transferring assets between
            screen space, AR space, and physical space require a steep learning
            curve and specific knowledge of 3D file formats and software
            export/import options. We aim to address that by breaking down the
            boundaries between these spaces utilizing gesture-based
            interaction. 
            <br />
            <br />
          </p>
          <h1 className="heading-black-2">
            <strong className="paragraph-heading">Future Work</strong>
            <br />
          </h1>
          <p className="para-black">
            For near future work, we plan to conduct a within-subjects user
            study to investigate the elaborated sets of interaction techniques
            for cross-space content manipulation tasks. Since a seamless set of
            hand gesture interaction techniques for cross-space content
            selection and manipulation has not been evaluated before, we are
            particularly interested in finding more about the practicality and
            consistency of the proposed techniques for these interaction tasks.
            For this, we design cross-level tasks with varied target sizes and
            respective destination areas to investigate whether the combined
            interaction techniques bring seamless transition between different
            spaces.
            <br />
            We mainly aim to receive both qualitative and quantitative user
            feedback to gain further insights into hand gesture interaction for
            cross-space workspace tasks. As a result, the goal of this
            evaluation was not to beat a certain baseline, but rather to see how
            people cope with the newly developed approaches for completing a
            given cross-space content manipulation task.
            <br />
            For a long term future plan, we aim to establish a database platform
            that collects XR hand gesture catalogs. This platform aims to
            provide reference for universal XR user experience design. We build
            this platform to allow for XR UX design community development among
            artistic, industrial, and academic usage. <br />
            <br />
          </p>
        </div>
      </div>
      <Navigation current="/home-project/unreal-realm/" />
      <Interactions />
    </div>
  );
}
