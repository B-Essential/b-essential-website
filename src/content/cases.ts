import galleries from "./galleries.json";

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
};

// Keep the supplied manifest as the source of slide order, alt text and crops.
// Its ZIP-relative assets/<case>/ paths map to public/images/cases/<case>/.
function prepareImages(images: (CaseImage & { fit: string; objectPosition?: string })[]): GalleryImage[] {
  return images.map((image) => ({
    ...image,
    src: image.src.replace(/^assets\//, "/images/cases/"),
    fit: image.fit === "contain" ? "contain" : "cover"
  }));
}

export const caseStudies: CaseStudy[] = [
  {
    id: "studio",
    name: "Studio Zelden",
    role: "Founder & Creative Strategy Director",
    title: "Built from the ground up",
    body:
      "I founded Studio Zelden and grew it into a creative agency of 15 with 1,400 m² of studio space. I led the business and shaped campaigns for clients including Philips, Fever-Tree and Unilever.",
    logo: {
      src: "/images/cases/studio-zelden/logo.png",
      alt: "Studio Zelden",
      width: 750,
      height: 160
    },
    images: prepareImages(galleries["studio-zelden"])
  },
  {
    id: "voyah",
    name: "VOYAH",
    role: "Creative Strategy Director for nooom agency",
    title: "Launching VOYAH in the Benelux",
    body:
      "I led the launch of premium electric vehicle brand VOYAH in the Netherlands and Belgium. I directed a team of four, managed the marketing budget and worked with retail partners to bring the campaigns to local audiences.",
    logo: {
      src: "/images/cases/voyah/logo.png",
      alt: "VOYAH",
      width: 750,
      height: 214
    },
    images: prepareImages(galleries.voyah)
  }
];
