import translations from "./homepages.json";

export type Locale = "nl" | "en";

export const siteUrl = "https://b-essential.nl";

// Approved V7 page copy with the supplied V8 contact sections in both languages.
export const homePages = {
  en: { ...translations.en, locale: "en" as const },
  nl: { ...translations.nl, locale: "nl" as const }
};

export type SiteContent = (typeof homePages)[Locale];
