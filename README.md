# B.essential

Astro static website for [b-essential.nl](https://b-essential.nl/).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The approved English homepage lives at `/`. The existing `/en/` address
renders the same homepage with `/` as its canonical URL. Shared metadata stays
in `src/layouts/BaseLayout.astro`; homepage copy is in `src/content/site.ts`.

## Case photographs

Original web assets from the approved V6 ZIP, without re-encoding:

- Studio Zelden: `public/images/cases/studio-zelden/`
- VOYAH: `public/images/cases/voyah/`
- Portrait: `public/images/about/bastiaan-van-ederen.webp`

To replace or add photographs, put the files in the corresponding case folder
and edit that case's array in **`src/content/galleries.json`**. This is the supplied
manifest, with 17 Studio Zelden photographs and 8 VOYAH photographs. Each entry
has `src`, `alt`, `width`, `height` and `fit` (`contain` or `cover`), with an optional
`objectPosition`. Paths retain the ZIP format, `assets/<case>/<filename>`;
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
