# Xianlin Lu · Work

A desktop portfolio built with Next.js App Router, React and TypeScript. The homepage, four collections, 29 project pages and one historical redirect are exported as static HTML. The reference viewport is 1440 × 900.

[Open the portfolio](https://xianlinlu.github.io/Work/)

## Develop locally

Use Node.js 24 and run the following commands in the repository root.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000/). Edit each page in `src/app/<route>/page.tsx`. The homepage is `src/app/page.tsx`.

## Edit the site

- `src/components/SiteChrome.tsx` contains the shared navigation, wordmark, contact label, social links and footer.
- `src/components/ProjectCard.tsx` and `ImageGallery.tsx` render work previews and project galleries.
- `src/components/Interactions.tsx` controls the ten hero image zones, scrolling card transitions, entrance effects and contrast toggle.
- `public/styles/` contains the desktop layout, typography and animation definitions.
- `public/assets/` contains the local fonts, photographs, illustrations, animated covers and eleven MP4 videos.
- `public/demos/` contains the two editable p5.js watch prototypes. YouTube and Vimeo players load from their respective providers.
- `.codex/skills/clone-website/` contains the project-local Codex skill used for the reconstruction.

## Build and publish

```sh
npm run typecheck
npm run build
```

The static site is written to `out/`. Pushing to `main` triggers the Pages workflow. It builds with `NEXT_PUBLIC_BASE_PATH=/Work` so direct links to nested projects and media work under the repository URL. The default local build uses the domain root.

## Content and media

The site retains the original navigation targets and project materials, with the portfolio author shown as Xianlin Lu. The GitHub and LinkedIn links use the new author’s public profiles. The contact button displays the name because the original button had no mail action. Digital Art and Instagram retain their original external destinations.

The Sound Plug page preserves the space for an exploded-view animation. The source animation file returned HTTP 403. Its images and text are available. Some case-study sections are taller than on a visit to the reference site where the original video host fails, since the local MP4s render at their actual aspect ratios.

The template license is included in `LICENSE`. The bundled p5.js runtime carries its license in `public/demos/vendor/`.
