# B.essential

Astro static website for [b-essential.nl](https://b-essential.nl/).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

English lives at `/` and `/en/`, with `/` as the canonical URL. Dutch lives at
`/nl/`. The EN/NL switch keeps the current section. Per-language titles,
descriptions, canonical URLs and hreflang links use `src/layouts/BaseLayout.astro`.
The sitemap contains both canonical language URLs from the approved V7 package.

Approved copy, headings, case descriptions and accessibility labels are in
`src/content/homepages.json`; `src/content/site.ts` exposes the typed locales.
Both languages share the existing homepage and carousel components.

## Case photographs

Original web assets from the approved V7 ZIP, without re-encoding:

- Studio Zelden: `public/images/cases/studio-zelden/`
- VOYAH: `public/images/cases/voyah/`
- Portrait: `public/images/about/bastiaan-van-ederen.webp`

To replace or add photographs, put the files in the corresponding case folder
and edit that case's array in **`src/content/galleries.json`**. This is the supplied
manifest, with 16 Studio Zelden photographs and 8 VOYAH photographs. Each entry
has `src`, `alt`, `width`, `height` and `fit` (`contain` or `cover`), with an optional
`objectPosition`. Use `alt` for English and `altNl` for Dutch. Paths retain the ZIP format, `assets/<case>/<filename>`;
`src/content/cases.ts` maps them to `/images/cases/<case>/<filename>` on this site.
Array order determines slide order. Keep each original `logo.png` separate from
the photographs. Image dimensions describe the original file; `contain` keeps
complete artwork and phone compositions visible without changing their ratios.

Both cases use `src/components/CaseCarousel.astro`. It creates arrows and dots
from the image list and hides navigation when there is fewer than two photos.
Arrow keys, Home/End, native touch swiping and trackpad scrolling are supported.
The image frame uses the approved 16:9 stage and each photograph's manifest crop.
The portrait retains the approved smaller responsive size in `src/styles/global.css`.

## Publishing

Pushing `main` runs `.github/workflows/deploy.yml`, which builds Astro and
deploys `dist/` through GitHub Pages to https://b-essential.nl/.
