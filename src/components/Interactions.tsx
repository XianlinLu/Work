"use client";

import { useEffect } from "react";
import type { AnimationItem } from "lottie-web";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCirc(progress: number, from: number, to: number) {
  const t = clamp((progress - from) / (to - from));
  return Math.sqrt(1 - (1 - t) ** 2);
}

/** Grow each cover and bring in its caption as the card travels up the viewport. */
function installCardScroll(signal: AbortSignal) {
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".link-project[data-w-id]"),
    (element) => ({
      element,
      cover: element.querySelector<HTMLElement>(".image-project-absolute"),
      caption: element.querySelector<HTMLElement>(".block-text-project"),
      progress: 0,
      target: 0,
    }),
  );
  if (!cards.length) return;
  let frame = 0;
  let needsMeasure = true;

  function render() {
    frame = 0;
    if (needsMeasure) {
      const height = document.documentElement.clientHeight;
      for (const card of cards) {
        card.target = clamp(
          1 - card.element.getBoundingClientRect().top / height,
        );
      }
      needsMeasure = false;
    }
    let unsettled = false;
    for (const card of cards) {
      const gap = card.target - card.progress;
      if (Math.abs(gap) < 0.00005) {
        card.progress = card.target;
      } else {
        // Source smoothing is 90%, i.e. move one tenth of the gap per frame.
        card.progress += gap * 0.1;
        unsettled = true;
      }
      const size = easeOutCirc(card.progress, 0.05, 0.8) * 100;
      const caption = easeOutCirc(card.progress, 0.45, 0.73);
      if (card.cover) {
        card.cover.style.width = size + "%";
        card.cover.style.height = size + "%";
      }
      if (card.caption) {
        card.caption.style.opacity = String(caption);
        card.caption.style.transform =
          "translateY(" + (caption - 1) * 5 + "em)";
      }
    }
    if (unsettled) frame = requestAnimationFrame(render);
  }

  function invalidate() {
    needsMeasure = true;
    if (!frame) frame = requestAnimationFrame(render);
  }
  const resize = new ResizeObserver(invalidate);
  resize.observe(document.body);
  cards.forEach((card) => resize.observe(card.element));
  window.addEventListener("scroll", invalidate, { passive: true, signal });
  window.addEventListener("resize", invalidate, { signal });
  document.addEventListener("animationend", invalidate, { signal });
  render();
  signal.addEventListener(
    "abort",
    () => {
      resize.disconnect();
      cancelAnimationFrame(frame);
    },
    { once: true },
  );
}

function installHero(signal: AbortSignal) {
  const hero = document.querySelector(".section-hero");
  if (!hero) return;
  const images = hero.querySelectorAll<HTMLElement>(
    ".hero-images > [class^='hero-image-']",
  );
  hero.querySelectorAll<HTMLElement>(".switcher").forEach((zone, index) => {
    const select = () => {
      images.forEach((image) => {
        image.style.display = image.classList.contains(
          "hero-image-" + (index + 1),
        )
          ? "block"
          : "none";
      });
    };
    zone.addEventListener("pointerenter", select, { signal });
  });
}

// The two shared navigation links and the contact link have a recurring underline.
// Some project and collection templates also apply it to their third navigation link.
const sharedUnderline = [
  "01a13d1b-99f4-868e-21e7-87f42aee4714",
  "01a13d1b-99f4-868e-21e7-87f42aee471a",
  "c7d97411-fde0-5fdc-da28-ecb97ee6a8fe",
];
const pageUnderlines: Record<string, string> = {
  "65bbcbb7c0cfc5f781743ed4": "cbb9ec78-8eba-a337-7644-8ad7581e83cc",
  "65bbcbb7c0cfc5f781743ed8": "d6034530-94de-6c24-cdf4-285348f9d175",
  "65bbcbb7c0cfc5f781743ed6": "74b0679e-9d09-f0d8-f330-0c5dd3c065cd",
  "6927b00eda518a2c8d7b8ea3": "cbb9ec78-8eba-a337-7644-8ad7581e83cc",
};

function installUnderlines(pageId: string, signal: AbortSignal) {
  const selectors = [...sharedUnderline, pageUnderlines[pageId]]
    .filter(Boolean)
    .map((id) => '[data-w-id="' + id + '"]')
    .join(",");
  document.querySelectorAll<HTMLElement>(selectors).forEach((link) => {
    const line = link.querySelector<HTMLElement>(".underline");
    if (!line) return;
    let animation: Animation | undefined;
    function move(entering: boolean) {
      if (!line) return;
      const start = getComputedStyle(line).transform;
      animation?.cancel();
      animation = line.animate(
        [
          { transform: start },
          { transform: entering ? "translateX(0)" : "translateX(105%)" },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(.25,.46,.45,.94)",
          fill: "forwards",
        },
      );
      if (!entering) animation.onfinish = () => animation?.cancel();
    }
    link.addEventListener("pointerenter", () => move(true), { signal });
    link.addEventListener("pointerleave", () => move(false), { signal });
    link.addEventListener("focusin", () => move(true), { signal });
    link.addEventListener("focusout", () => move(false), { signal });
    signal.addEventListener("abort", () => animation?.cancel(), { once: true });
  });
}

function installContrast(signal: AbortSignal) {
  const root = document.documentElement;
  const buttons = document.querySelectorAll<HTMLElement>(".contrast-icon");
  if (!buttons.length) return;
  function toggle() {
    const light = root.dataset.contrast !== "light";
    root.dataset.contrast = light ? "light" : "dark";
    buttons.forEach((button) =>
      button.setAttribute("aria-pressed", String(light)),
    );
  }
  buttons.forEach((button) => {
    button.setAttribute("role", "button");
    button.tabIndex = 0;
    button.setAttribute("aria-label", "Toggle contrast");
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", toggle, { signal });
    button.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      },
      { signal },
    );
  });
  signal.addEventListener(
    "abort",
    () => {
      delete root.dataset.contrast;
    },
    { once: true },
  );
}

function installScrollReveals(signal: AbortSignal) {
  const elements = document.querySelectorAll<HTMLElement>(
    '.mapping, .image-64[data-w-id], [data-w-id^="d6859be6-25bc-87fa-3fbb-57ba4b9836"]',
  );
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  });
  elements.forEach((element) => {
    element.classList.add("scroll-appear");
    observer.observe(element);
  });
  signal.addEventListener("abort", () => observer.disconnect(), { once: true });
}

async function installAnimations(signal: AbortSignal) {
  const containers = document.querySelectorAll<HTMLElement>(
    '[data-animation-type="lottie"][data-src]',
  );
  if (!containers.length) return;
  const { default: lottie } = await import("lottie-web");
  if (signal.aborted) return;
  const animations: AnimationItem[] = [];
  containers.forEach((container) => {
    const animation = lottie.loadAnimation({
      container,
      renderer: "canvas",
      loop: container.dataset.loop === "1",
      autoplay: container.dataset.autoplay === "1",
      path: container.dataset.src,
    });
    animations.push(animation);
  });
  signal.addEventListener(
    "abort",
    () => animations.forEach((animation) => animation.destroy()),
    { once: true },
  );
}

export default function Interactions() {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const pageId =
      document.querySelector<HTMLElement>("[data-wf-page]")?.dataset.wfPage ??
      "";
    installHero(signal);
    installUnderlines(pageId, signal);
    installCardScroll(signal);
    installContrast(signal);
    installScrollReveals(signal);
    void installAnimations(signal);
    // Empty source contact links leave the current position unchanged.
    document.querySelectorAll('a[href="#"]').forEach((link) =>
      link.addEventListener("click", (event) => event.preventDefault(), {
        signal,
      }),
    );
    return () => controller.abort();
  }, []);
  return null;
}
