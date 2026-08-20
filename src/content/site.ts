export type Locale = "nl" | "en";

export type ServiceItem = {
  number: string;
  title: string;
  body: string;
};

export type ProcessItem = {
  title: string;
  body: string;
};

export type InitiativeItem = {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  metadata: string;
  link?: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  applications?: string[];
};

export type VentureItem = {
  title: string;
  subtitle: string;
  body: string;
  link?: {
    label: string;
    href: string;
    ariaLabel: string;
  };
};

export type SiteContent = {
  locale: Locale;
  lang: string;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  nav: {
    work: string;
    approach: string;
    about: string;
  };
  hero: {
    headline: string;
    copy: string;
    line: string;
  };
  work: {
    heading: string;
    intro: string;
    items: ServiceItem[];
  };
  approach: {
    heading: string;
    intro: string;
    process: string;
    items: ProcessItem[];
  };
  initiatives: {
    heading: string;
    intro: string;
    items: InitiativeItem[];
  };
  ventures: {
    heading: string;
    intro: string;
    items: VentureItem[];
  };
  about: {
    heading: string;
    callout: string;
    paragraphs: string[];
  };
  contact: {
    heading: string;
    copy: string;
    link: string;
    href: string;
    ariaLabel: string;
  };
};

export const siteUrl = "https://b-essential.nl";

export const content: Record<Locale, SiteContent> = {
  nl: {
    locale: "nl",
    lang: "nl",
    path: "/",
    alternatePath: "/en/",
    title: "B.essential | Strategie, monitoring en digitale producten",
    description:
      "B.essential ontwikkelt producten, diensten en systemen die organisaties en professionals helpen relevante informatie beter te benutten, slimmer te werken en kansen eerder te herkennen.",
    nav: {
      work: "Werk",
      approach: "Aanpak",
      about: "Over"
    },
    hero: {
      headline: "Van complexe vraagstukken naar gerichte oplossingen.",
      copy:
        "B.essential ontwikkelt producten, diensten en systemen die organisaties en professionals helpen relevante informatie beter te benutten, slimmer te werken en kansen eerder te herkennen.",
      line:
        "Strategie & productontwikkeling · Monitoring & inzicht · Digitale producten & systemen"
    },
    work: {
      heading: "Wat B.essential doet",
      intro:
        "B.essential werkt op het snijvlak van strategie, productontwikkeling en technologie. Vanuit een concreet probleem of een duidelijke kans wordt bepaald wat werkelijk nodig is. Vervolgens wordt een passende oplossing ontwikkeld, getest en verbeterd.",
      items: [
        {
          number: "01",
          title: "Strategie & productontwikkeling",
          body:
            "Van een vraagstuk of kans naar een heldere propositie, dienst of product. Analyse, positionering, conceptontwikkeling en validatie worden direct gekoppeld aan praktische uitvoering."
        },
        {
          number: "02",
          title: "Monitoring & inzicht",
          body:
            "Complexe en versnipperde informatie terugbrengen tot relevante signalen. Van regelgeving en tenders tot subsidies en andere kansen. Niet alleen verzamelen, maar bepalen wat daadwerkelijk van belang is."
        },
        {
          number: "03",
          title: "Digitale producten & systemen",
          body:
            "Gerichte digitale producten, automatiseringen en systemen voor terugkerende problemen en processen. Technologie is daarbij een middel om iets eenvoudiger, sneller of beter te maken, niet het vertrekpunt."
        }
      ]
    },
    approach: {
      heading: "Van vraagstuk naar werkende oplossing",
      intro:
        "Niet iedere oplossing hoeft te beginnen met software. B.essential begint bij het probleem, brengt het terug tot wat werkelijk nodig is en test zo vroeg mogelijk in de praktijk.",
      process: "Begrijpen → Vereenvoudigen → Valideren → Bouwen → Verbeteren",
      items: [
        {
          title: "Begrijpen",
          body: "Het echte probleem, de behoefte of de kans begrijpen."
        },
        {
          title: "Vereenvoudigen",
          body:
            "Complexiteit terugbrengen tot wat daadwerkelijk waarde toevoegt."
        },
        {
          title: "Valideren",
          body: "Aannames vroeg toetsen in de praktijk."
        },
        {
          title: "Bouwen",
          body:
            "Gericht ontwikkelen wat nodig is als product, dienst, systeem of combinatie daarvan."
        },
        {
          title: "Verbeteren",
          body:
            "Verbeteren op basis van gebruik, resultaten en nieuwe inzichten."
        }
      ]
    },
    initiatives: {
      heading: "Geselecteerde initiatieven",
      intro:
        "Een selectie van producten en concepten die vanuit B.essential worden ontwikkeld en in de praktijk worden getest.",
      items: [
        {
          number: "01",
          title: "Regelsein",
          subtitle: "Monitoring van bouw en omgevingsregelgeving",
          body:
            "Regelsein volgt relevante wijzigingen in Nederlandse bouw en omgevingsregelgeving en vertaalt deze naar bruikbare signalen voor professionals die ermee werken.",
          metadata: "Monitoring & inzicht · Productontwikkeling",
          link: {
            label: "Bekijk Regelsein ↗",
            href: "https://regelsein.nl",
            ariaLabel: "Bekijk Regelsein"
          }
        },
        {
          number: "02",
          title: "Fit based monitoring",
          subtitle: "Van beschikbare informatie naar relevante kansen",
          body:
            "B.essential ontwikkelt monitoringconcepten die kansen niet alleen verzamelen, maar beoordelen op aansluiting bij een specifieke organisatie of professional.",
          metadata: "Monitoring & inzicht · Validatie",
          applications: [
            "Creatieve tenders",
            "Artistieke kansen",
            "Subsidiemogelijkheden"
          ]
        }
      ]
    },
    ventures: {
      heading: "Toegepast werk & ondernemerschap",
      intro:
        "Dezelfde manier van werken wordt ook toegepast binnen ondernemingen en ventures waarin ik zelf actief ben. Daar komen strategie, positionering, commerciële ontwikkeling en uitvoering direct samen.",
      items: [
        {
          title: "ooohhh.art",
          subtitle: "Hedendaagse kunst en ondernemerschap",
          body:
            "ooohhh.art is de gezamenlijke artistieke praktijk van Stefanie Zweifel en Bastiaan van Ederen. Binnen ooohhh werk ik naast de artistieke ontwikkeling aan positionering, digitale commerce, partnerships, marktontwikkeling en de systemen die nodig zijn om het werk internationaal te presenteren en verkopen.",
          link: {
            label: "ooohhh.art ↗",
            href: "https://ooohhh.art",
            ariaLabel: "Bezoek ooohhh.art"
          }
        },
        {
          title: "nooom",
          subtitle: "Creatieve productie en commerciële ontwikkeling",
          body:
            "nooom is een creatieve productiestudio. Mijn rol richt zich naast de creatieve praktijk op positionering, proposities, commerciële ontwikkeling, nieuwe marktsegmenten en het verbeteren van outreach en salesprocessen."
        }
      ]
    },
    about: {
      heading: "Over Bastiaan",
      callout:
        "25+ jaar strategie, creatie, communicatie en ondernemerschap.",
      paragraphs: [
        "B.essential is het werkplatform van Bastiaan van Ederen.",
        "Na ruim 25 jaar te hebben gewerkt op het snijvlak van strategie, creatie, communicatie en ondernemerschap richt ik me steeds meer op het ontwikkelen van gerichte producten, diensten en systemen rond concrete zakelijke vraagstukken.",
        "Mijn achtergrond ligt zowel in strategie en conceptontwikkeling als in het opbouwen en runnen van ondernemingen. Daardoor kijk ik naar een vraagstuk niet alleen vanuit idee of technologie, maar ook vanuit gebruiker, commercie en uitvoering.",
        "Binnen B.essential komt die ervaring samen in eigen initiatieven en in geselecteerde vraagstukken voor organisaties en professionals."
      ]
    },
    contact: {
      heading: "Een vraagstuk dat slimmer kan?",
      copy:
        "Ik werk aan eigen producten en initiatieven, maar denk ook mee over concrete vraagstukken waar strategie, informatie en technologie samenkomen.",
      link: "info@b-essential.nl ↗",
      href: "mailto:info@b-essential.nl",
      ariaLabel: "Mail info@b-essential.nl"
    }
  },
  en: {
    locale: "en",
    lang: "en",
    path: "/en/",
    alternatePath: "/",
    title: "B.essential | Strategy, monitoring and digital products",
    description:
      "B.essential develops products, services and systems that help organisations and professionals make better use of relevant information, work smarter and identify opportunities earlier.",
    nav: {
      work: "Work",
      approach: "Approach",
      about: "About"
    },
    hero: {
      headline: "From complex challenges to focused solutions.",
      copy:
        "B.essential develops products, services and systems that help organisations and professionals make better use of relevant information, work smarter and identify opportunities earlier.",
      line:
        "Strategy & product development · Monitoring & intelligence · Digital products & systems"
    },
    work: {
      heading: "What B.essential does",
      intro:
        "B.essential works at the intersection of strategy, product development and technology. Starting with a concrete problem or opportunity, the first step is to determine what is actually needed. From there, an appropriate solution is developed, tested and improved.",
      items: [
        {
          number: "01",
          title: "Strategy & product development",
          body:
            "From a specific challenge or opportunity to a clear proposition, service or product. Analysis, positioning, concept development and validation are directly connected to practical execution."
        },
        {
          number: "02",
          title: "Monitoring & intelligence",
          body:
            "Turning complex and fragmented information into relevant signals. From regulation and tenders to funding and other opportunities. Not simply collecting information, but determining what actually matters."
        },
        {
          number: "03",
          title: "Digital products & systems",
          body:
            "Focused digital products, automations and systems for recurring problems and processes. Technology is used as a means to make something simpler, faster or better, rather than as the starting point."
        }
      ]
    },
    approach: {
      heading: "From challenge to working solution",
      intro:
        "Not every solution needs to start with software. B.essential starts with the problem, reduces it to what is actually needed and tests ideas in practice as early as possible.",
      process: "Understand → Simplify → Validate → Build → Improve",
      items: [
        {
          title: "Understand",
          body: "Understand the real problem, need or opportunity."
        },
        {
          title: "Simplify",
          body: "Reduce complexity to what genuinely adds value."
        },
        {
          title: "Validate",
          body: "Test assumptions early in practice."
        },
        {
          title: "Build",
          body:
            "Develop what is needed as a product, service, system or combination of these."
        },
        {
          title: "Improve",
          body: "Improve based on actual use, results and new insights."
        }
      ]
    },
    initiatives: {
      heading: "Selected initiatives",
      intro:
        "A selection of products and concepts developed through B.essential and tested in practice.",
      items: [
        {
          number: "01",
          title: "Regelsein",
          subtitle: "Monitoring building and environmental regulation",
          body:
            "Regelsein monitors relevant changes in Dutch building and environmental regulation and translates them into useful signals for professionals working with these rules.",
          metadata: "Monitoring & intelligence · Product development",
          link: {
            label: "Visit Regelsein ↗",
            href: "https://regelsein.nl",
            ariaLabel: "Visit Regelsein"
          }
        },
        {
          number: "02",
          title: "Fit based monitoring",
          subtitle: "From available information to relevant opportunities",
          body:
            "B.essential develops monitoring concepts that do more than collect opportunities. They assess how well those opportunities match a specific organisation or professional.",
          metadata: "Monitoring & intelligence · Validation",
          applications: [
            "Creative tenders",
            "Artist opportunities",
            "Funding opportunities"
          ]
        }
      ]
    },
    ventures: {
      heading: "Applied work & ventures",
      intro:
        "The same approach is also applied within businesses and ventures in which I am actively involved. This is where strategy, positioning, commercial development and execution come together in practice.",
      items: [
        {
          title: "ooohhh.art",
          subtitle: "Contemporary art and entrepreneurship",
          body:
            "ooohhh.art is the joint artistic practice of Stefanie Zweifel and Bastiaan van Ederen. Alongside the artistic development, my work within ooohhh includes positioning, digital commerce, partnerships, market development and the systems needed to present and sell the work internationally.",
          link: {
            label: "ooohhh.art ↗",
            href: "https://ooohhh.art",
            ariaLabel: "Visit ooohhh.art"
          }
        },
        {
          title: "nooom",
          subtitle: "Creative production and commercial development",
          body:
            "nooom is a creative production studio. Alongside the creative practice, my role focuses on positioning, propositions, commercial development, new market segments and improving outreach and sales processes."
        }
      ]
    },
    about: {
      heading: "About Bastiaan",
      callout:
        "25+ years across strategy, creativity, communication and entrepreneurship.",
      paragraphs: [
        "B.essential is the working platform of Bastiaan van Ederen.",
        "After more than 25 years working at the intersection of strategy, creativity, communication and entrepreneurship, I increasingly focus on developing targeted products, services and systems around concrete business challenges.",
        "My background combines strategy and concept development with building and running businesses in practice. As a result, I look at a challenge not only from the perspective of an idea or technology, but also from the perspectives of the user, commercial viability and execution.",
        "Within B.essential, that experience comes together in my own initiatives and in selected challenges for organisations and professionals."
      ]
    },
    contact: {
      heading: "A challenge that could be approached smarter?",
      copy:
        "I work on my own products and initiatives, while also taking on selected challenges where strategy, information and technology come together.",
      link: "info@b-essential.nl ↗",
      href: "mailto:info@b-essential.nl",
      ariaLabel: "Email info@b-essential.nl"
    }
  }
};

export const languages = {
  nl: "NL",
  en: "EN"
} satisfies Record<Locale, string>;
