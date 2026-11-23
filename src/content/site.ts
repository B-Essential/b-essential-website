import translations from "./homepages.json";

export type Locale = "nl" | "en";

export const siteUrl = "https://b-essential.nl";

// Approved V7 copy, extracted without rewriting from the supplied EN/NL pages.
export const homePages = {
  en: { ...translations.en, locale: "en" as const },
  nl: { ...translations.nl, locale: "nl" as const }
};

export type SiteContent = (typeof homePages)[Locale];
