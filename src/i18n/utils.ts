import type { Language } from './translations';

// Mapping of country codes to languages
const countryToLanguage: Record<string, Language> = {
  AT: 'de', // Austria
  DE: 'de', // Germany
  CH: 'de', // Switzerland (German)
  LI: 'de', // Liechtenstein
  LU: 'de', // Luxembourg
  // All other countries default to English
};

export function detectLanguageFromCountry(countryCode: string): Language {
  return countryToLanguage[countryCode.toUpperCase()] || 'en';
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(de|en)/, '');
  return `/${lang}${cleanPath || '/'}`;
}

export function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'de';
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'de';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  if (langCode === 'de') return 'de';
  return 'en';
}


