export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  id: string;
  name: string;
  role: string;
  title: string;
  body: string;
  logo: CaseImage;
  images: CaseImage[];
};

// Add or replace photos in public/images/cases/<case>/, then update that case's
// images list below. Its order controls the slides; arrows and dots adapt to it.
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
    images: [
      {
        src: "/images/cases/studio-zelden/production-crew.webp",
        alt: "Studio Zelden’s production crew setting up lights and a camera for a shoot.",
        width: 1000,
        height: 667
      },
      {
        src: "/images/cases/studio-zelden/fever-tree.webp",
        alt: "Studio Zelden campaign photograph of a Fever-Tree bottle and a glass with grapefruit.",
        width: 1200,
        height: 675
      }
    ]
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
    images: [
      {
        src: "/images/cases/voyah/blue-vehicle-in-motion.webp",
        alt: "VOYAH campaign photograph of a blue vehicle in motion between trees.",
        width: 1500,
        height: 948
      },
      {
        src: "/images/cases/voyah/blue-vehicle-front.webp",
        alt: "Front view of a blue VOYAH, with light tracing the grille and bonnet.",
        width: 1500,
        height: 844
      }
    ]
  }
];
