# B.essential

Astro static website for [b-essential.nl](https://b-essential.nl/).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The approved English V4 homepage lives at `/`. The existing `/en/` address
renders the same homepage with `/` as its canonical URL. Shared metadata stays
in `src/layouts/BaseLayout.astro`; homepage copy is in `src/content/site.ts`.

## Case photographs

Original assets extracted from the approved HTML, without re-encoding:

- Studio Zelden: `public/images/cases/studio-zelden/`
- VOYAH: `public/images/cases/voyah/`
- Portrait: `public/images/about/bastiaan-van-ederen.webp`

To replace or add photographs, put the files in the corresponding case folder
and edit that case's `images` array in **`src/content/cases.ts`**. Each entry has
`src`, `alt`, `width` and `height`. Paths start with `/images/`, without `public`.
Array order determines slide order. Keep each original `logo.png` separate from
the photographs.

Both cases use `src/components/CaseCarousel.astro`. It creates arrows and dots
from the image list and hides navigation when there is fewer than two photos.
Arrow keys, Home/End, native touch swiping and trackpad scrolling are supported.
The image frame uses the approved 16:10 crop; the portrait uses the V4 responsive
size and crop in `src/styles/global.css`.

## Publishing

Pushing `main` runs `.github/workflows/deploy.yml`, which builds Astro and
deploys `dist/` through GitHub Pages to https://b-essential.nl/.
