import galleries from "./galleries.json";
import { homePages, type Locale, type SiteContent } from "./site";

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryImage = CaseImage & {
  fit: "cover" | "contain";
  objectPosition?: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  role: string;
  title: string;
  body: string;
  logo: CaseImage;
  images: GalleryImage[];
  carousel: SiteContent["work"]["cases"][number]["carousel"];
};

// Preserve manifest order and crops. ZIP paths map to the site's image folders.
function prepareImages(
  images: (CaseImage & { fit: string; objectPosition?: string; altNl?: string })[],
  locale: Locale
): GalleryImage[] {
  return images.map((image) => ({
    ...image,
    src: image.src.replace(/^assets\//, "/images/cases/"),
    alt: locale === "nl" ? (image.altNl ?? image.alt) : image.alt,
    fit: image.fit === "contain" ? "contain" : "cover"
  }));
}

const definitions = [
  {
    id: "studio",
    name: "Studio Zelden",
    gallery: "studio-zelden" as const,
    logo: {
      src: "/images/cases/studio-zelden/logo.png",
      alt: "Studio Zelden",
      width: 750,
      height: 160
    }
  },
  {
    id: "voyah",
    name: "VOYAH",
    gallery: "voyah" as const,
    logo: {
      src: "/images/cases/voyah/logo.png",
      alt: "VOYAH",
      width: 750,
      height: 214
    }
  }
];

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return definitions.map((definition, index) => ({
    ...definition,
    ...homePages[locale].work.cases[index],
    images: prepareImages(galleries[definition.gallery], locale)
  }));
}
