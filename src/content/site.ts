export type Locale = "nl" | "en";

export const siteUrl = "https://b-essential.nl";

export const homePage = {
  locale: "en" as const,
  path: "/",
  title: "Bastiaan van Ederen | Creative Strategy Director | B.essential",
  description:
    "Bastiaan van Ederen is a Creative Strategy Director working across brand, marketing and creative leadership. Open to full-time roles, interim work and independent briefs.",
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#work" },
    { label: "Ventures", href: "#ventures" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  navNote: "Independent practice · Netherlands",
  hero: {
    eyebrow: "The independent practice of Bastiaan van Ederen",
    role: "Creative Strategy Director",
    description:
      "I connect business ambitions with brand and marketing strategy, bringing together the people, ideas and expertise to make them real.",
    primaryCta: "Work together",
    secondaryCta: "Explore experience",
    discipline: "Strategy / Marketing / Creative Direction",
    availability: "Full-time roles & independent engagements"
  },
  expertise: {
    label: "01 / Expertise",
    intro:
      "From defining a brand’s direction to leading the teams that deliver it. Strategy, creative judgement and commercial responsibility belong in the same conversation.",
    items: [
      {
        label: "01 / Define",
        title: "Brand & marketing strategy",
        body:
          "Positioning, identity, go-to-market planning, audience insights and integrated marketing and media strategy."
      },
      {
        label: "02 / Lead",
        title: "Creative strategy & direction",
        body:
          "Translating business objectives into ideas, briefs, multidisciplinary collaboration and purposeful brand experiences."
      },
      {
        label: "03 / Deliver",
        title: "Leadership & implementation",
        body:
          "Creative teams, production oversight, media investment, stakeholder alignment and evaluation, from concept through execution."
      }
    ]
  },
  work: {
    label: "02 / Selected experience",
    intro:
      "My practice is shaped by building a creative business and leading complex brand and marketing work, with responsibility for people, investment and the quality of what reaches the audience."
  },
  ways: {
    label: "03 / Ways of working",
    intro:
      "I can join your leadership team, guide a launch or help you work through a single decision.",
    items: [
      {
        title: "Full-time employment",
        body:
          "I’m open to a permanent, in-house role leading brand, marketing or creative strategy and developing the team over time."
      },
      {
        title: "Interim",
        body:
          "I step into a leadership role to guide a team through a transition, a launch or a change in direction."
      },
      {
        title: "Contract-based",
        body:
          "I join your team on a contract basis with agreed responsibilities, for a set period or a regular number of days."
      },
      {
        title: "Project-based",
        body:
          "I direct a defined piece of work, from brand positioning to a campaign or market launch."
      },
      {
        title: "Advisory & ad hoc",
        body:
          "I offer a second perspective on a brief, a creative proposal or a decision about where to invest."
      }
    ]
  },
  ventures: {
    label: "04 / Independent ventures",
    intro:
      "Alongside work for clients, I develop independent concepts and digital services. These ventures show how strategic thinking can become a focused, usable product, beyond a campaign or presentation.",
    items: [
      {
        title: "Wider Practice",
        subtitle: "Artist Opportunity Assistant",
        body:
          "A platform that researches and matches grants, residencies and open calls with artists’ individual practices, helping them spend less time searching and more time making work.",
        href: "https://artists.widerpractice.com/en"
      },
      {
        title: "Regelsein",
        subtitle: "Building regulation change monitor",
        body:
          "A Dutch monitoring service for changes in building regulations, designed to help architecture and building-advisory professionals stay informed on relevant developments.",
        href: "https://regelsein.nl"
      }
    ]
  },
  about: {
    label: "05 / About",
    portrait: {
      src: "/images/about/bastiaan-van-ederen.webp",
      alt: "Bastiaan van Ederen",
      width: 1134,
      height: 1700
    },
    paragraphs: [
      "I built my career through photography, communication design and production before founding and leading Studio Zelden. That experience shaped how I work today, combining creative judgement with entrepreneurial responsibility and a clear view of the bigger picture.",
      "I am approachable, direct and decisive. I work closely with management teams to turn business ambitions into brand and marketing strategies, while staying connected to the teams and people behind the execution."
    ]
  },
  contact: {
    label: "06 / Contact",
    body:
      "If you’re hiring for a full-time role or have an independent brief in mind, I’d be glad to hear from you.",
    cta: "Start a conversation",
    href: "mailto:bastiaanvanederen@gmail.com?subject=B.essential%20%E2%80%94%20Introduction"
  },
  footer: "Creative strategy & independent ventures"
};

export type SiteContent = typeof homePage;
