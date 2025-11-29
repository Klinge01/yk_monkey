import type { Language } from './translations';

/**
 * Detects the base path from the current URL.
 * Works for:
 * - localhost: returns '/'
 * - GitHub Pages: returns '/yk_monkey/' (or whatever the repo name is)
 * - Production: returns '/'
 * 
 * @param pathname - The pathname from Astro.url.pathname or window.location.pathname
 * @returns The detected base path (always ends with '/')
 */
export function getBasePath(pathname: string): string {
  // Check if pathname starts with known GitHub Pages base paths
  // This list can be extended if you have multiple preview environments
  const knownBasePaths = ['/yk_monkey/', '/yk_monkey_public/'];
  
  for (const basePath of knownBasePaths) {
    if (pathname.startsWith(basePath)) {
      return basePath;
    }
  }
  
  // Default to root for localhost and production
  return '/';
}

/**
 * Gets the base path for use in Astro components (server-side)
 * @param url - The Astro.url object
 * @returns The detected base path
 */
export function getBasePathFromAstroUrl(url: URL): string {
  return getBasePath(url.pathname);
}

/**
 * Gets the base path for use in client-side JavaScript
 * @returns The detected base path
 */
export function getBasePathClient(): string {
  if (typeof window === 'undefined') return '/';
  return getBasePath(window.location.pathname);
}

/**
 * Normalizes a base path to always end with '/'
 */
export function normalizeBasePath(base: string): string {
  return base.endsWith('/') ? base : base + '/';
}

export function detectLanguageFromCountry(countryCode: string): Language {
  // Countries where German is commonly spoken
  const germanCountries = ['AT', 'DE', 'CH', 'LI', 'LU'];
  return germanCountries.includes(countryCode.toUpperCase()) ? 'de' : 'en';
}

export function getLocalizedPath(path: string, lang: Language): string {
  return `/${lang}${path}`;
}

export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'de';
  
  const browserLang = navigator.language || 'de';
  const langCode = browserLang.split('-')[0].toLowerCase();
  return langCode === 'de' ? 'de' : 'en';
}
