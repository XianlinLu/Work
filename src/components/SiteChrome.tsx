import { sitePath } from "@/lib/paths";

const navigation = [
  {
    href: "/xr/",
    text: "spatial computing",
    id: "01a13d1b-99f4-868e-21e7-87f42aee471a",
  },
  { href: "/uiux/", text: "UI/UX", id: "01a13d1b-99f4-868e-21e7-87f42aee4714" },
  {
    href: "https://xiyingbao.cargo.site/",
    text: "Digital art",
    id: "cbb9ec78-8eba-a337-7644-8ad7581e83cc",
  },
];

function Underline({ plain = false }: { plain?: boolean }) {
  const modifier = plain ? " no-difference" : "";
  return (
    <div className={"block-underline" + modifier}>
      <div className={"underline" + modifier} />
    </div>
  );
}

export function Navigation({ current }: { current: string }) {
  return (
    <div className="navbar w-nav" role="banner">
      <nav className="nav-menu w-nav-menu" aria-label="Portfolio">
        <div className="w-layout-grid grid-navbar">
          <div
            className="nav"
            id="w-node-_01a13d1b-99f4-868e-21e7-87f42aee4713-2aee4710"
          >
            {navigation.map(({ href, text, id }) => (
              <a
                key={id}
                data-w-id={id}
                href={href.startsWith("/") ? sitePath(href) : href}
                className={
                  "nav-link w-inline-block" +
                  (current === href ? " w--current" : "")
                }
                aria-current={current === href ? "page" : undefined}
                target={href.startsWith("/") ? undefined : "_blank"}
              >
                <div className="nav-text">
                  {text}
                  <br />
                </div>
                <Underline />
              </a>
            ))}
          </div>
          <a
            className="brand w-nav-brand"
            href={sitePath("/")}
            aria-label="Xianlin Lu — Home"
          >
            <img
              className="logo"
              src={sitePath("/brand/wordmark.svg")}
              alt="Xianlin Lu"
            />
          </a>
          <div
            className="nav right"
            id="w-node-_01a13d1b-99f4-868e-21e7-87f42aee4722-2aee4710"
          >
            <a
              className="nav-link w-inline-block"
              href="https://github.com/XianlinLu"
            >
              <div className="nav-text">
                github
                <br />
              </div>
              <Underline />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function Contact({ triangle }: { triangle: string }) {
  return (
    <section className="section-contact">
      <div className="content">
        <div className="contact">
          <img src={sitePath(triangle)} alt="" className="icon-triangle" />
          <a
            data-w-id="c7d97411-fde0-5fdc-da28-ecb97ee6a8fe"
            href="#"
            className="button w-inline-block"
          >
            <div className="button-text">
              Xianlin Lu
              <br />
            </div>
            <Underline plain />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <section className="section-footer">
      <div
        className="contrast-icon"
        data-w-id="3f462d43-af22-05e0-457d-e6018eb5bacc"
      />
      <div className="block-footer">
        <a className="link-footer" href={sitePath("/")}>
          Xianlin Lu
        </a>
      </div>
      <div className="block-footer">
        <a
          className="link-footer"
          href="https://www.linkedin.com/in/xianlin-lu"
        >
          linkedin
        </a>
        <a
          className="link-footer"
          href="https://www.instagram.com/xixixi_aria/"
        >
          instagram
        </a>
      </div>
    </section>
  );
}
