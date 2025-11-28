export const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über Mich',
      services: 'Leistungen',
      contact: 'Kontakt',
    },
    // Homepage
    hero: {
      tagline: 'Fitness-Coach & Personal Trainer',
      headline: 'Erreiche Dein Ziel.',
      headlineAccent: 'Nachhaltig & effektiv.',
      description:
        'Ich helfe dir, deine Fitnessziele zu erreichen – egal ob Muskelaufbau, Fettabbau, Leistungssteigerung oder ein gesünderer Lebensstil. Mit über 13 Jahren Erfahrung und bewährten Methoden.',
      cta: 'Kostenlose Beratung',
      ctaSecondary: 'Mehr erfahren',
    },
    features: {
      title: 'Warum mit mir trainieren?',
      subtitle: 'Über 13 Jahre Erfahrung, internationale Wettkampferfolge und ein Ansatz, der funktioniert.',
      items: [
        {
          title: 'Individuelle Trainingspläne',
          description:
            'Jeder Plan wird an deine Ziele, dein Level und deine Möglichkeiten angepasst – vom Anfänger bis zum Athleten.',
        },
        {
          title: 'Wissenschaftlich fundiert',
          description:
            'Mein Ansatz kombiniert praktisches Training mit wissenschaftlich fundierten Methoden für nachhaltige Ergebnisse.',
        },
        {
          title: 'Motivierende Betreuung',
          description:
            'Persönliche Unterstützung, die dich am Ball hält. Training soll Spaß machen und effektiv sein.',
        },
        {
          title: 'Wettkampferfahrung',
          description:
            'Zwei Wettkampfsaisons mit internationalen Platzierungen – ich weiß, was es braucht, um Höchstleistung zu erreichen.',
        },
      ],
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Bald findest du hier Feedback von echten Kunden.',
    },
    cta: {
      title: 'Bereit für deine Transformation?',
      description:
        'Starte jetzt mit einem kostenlosen Erstgespräch und entdecke, wie wir gemeinsam deine Ziele erreichen können.',
      button: 'Jetzt Kontakt aufnehmen',
    },
    // About Page
    about: {
      title: 'Über Mich',
      subtitle: 'Yannick Aldrian-Kickinger',
      story: {
        title: 'Meine Geschichte',
        paragraphs: [
          'Hi, ich bin Yannick – leidenschaftlicher Fitness-Coach und Personal Trainer mit über 13 Jahren Erfahrung in Training, Coaching und individueller Betreuung.',
          'Ich helfe Menschen dabei, ihre Fitnessziele zu erreichen – egal, ob es um Muskelaufbau, Fettabbau, Leistungssteigerung oder einfach um einen gesünderen Lebensstil geht. Mein Ansatz kombiniert praktisches Training, motivierende Betreuung und wissenschaftlich fundierte Methoden.',
          'Ich habe zwei Wettkampfsaisons mit internationalen Platzierungen hinter mir und arbeite dieses Jahr daran, die Profikarte zu erreichen. Diese Erfahrung fließt direkt in mein Coaching ein.',
        ],
      },
      credentials: {
        title: 'Meine Erfahrung',
        items: [
          'Über 13 Jahre aktives Training',
          'Internationale Wettkampfplatzierungen',
          'Auf dem Weg zur Profikarte',
          'Erfolgreiche Betreuung vom Anfänger bis zum Athleten',
          'Wissenschaftlich fundierte Methoden',
          'Fokus auf Sicherheit & Effektivität',
        ],
      },
      philosophy: {
        title: 'Mein Ansatz',
        text: 'Ich passe Trainingspläne individuell an unterschiedliche Menschen, Ziele und Levels an, um maximale Ergebnisse zu erzielen. Dabei lege ich Wert auf Sicherheit, Effektivität und Spaß am Training.',
      },
    },
    // Services Page
    services: {
      title: 'Meine Leistungen',
      subtitle: 'Für alle Levels – vom Anfänger bis zum Athleten',
      packages: [
        {
          name: 'Basic',
          price: '99',
          period: 'einmalig',
          description: 'Der perfekte Einstieg: Dein individueller Trainings- und Ernährungsplan.',
          features: [
            'Ausführliches Erstgespräch',
            'Individueller Trainingsplan',
            'Ernährungsempfehlungen',
            'Anleitung zur Umsetzung',
          ],
          popular: false,
        },
        {
          name: 'Premium',
          price: '199',
          period: '/Monat',
          description: 'Kontinuierliche Betreuung für nachhaltige Ergebnisse.',
          features: [
            'Alles aus Basic',
            'Laufende Anpassungen',
            'Wöchentliche Check-ins',
            'WhatsApp Support',
            'Fortschrittskontrolle',
          ],
          popular: true,
        },
        {
          name: 'Elite',
          price: '349',
          period: '/Monat',
          description: 'Vollumfängliche Betreuung mit direktem Zugang zu mir.',
          features: [
            'Alles aus Premium',
            'Permanenter Zugang',
            'Live Support bei Fragen',
            'Video-Calls nach Bedarf',
            'Wettkampfvorbereitung',
          ],
          popular: false,
        },
      ],
      cta: 'Jetzt anfragen',
      customTitle: 'Individuelle Anforderungen?',
      customDescription:
        'Wettkampfvorbereitung? Spezielle Ziele? Lass uns gemeinsam den richtigen Plan finden.',
      customCta: 'Kontaktiere mich',
    },
    // Contact Page
    contact: {
      title: 'Kontakt',
      subtitle: 'Lass uns ins Gespräch kommen',
      intro:
        'Hast du Fragen oder möchtest du ein kostenloses Erstgespräch vereinbaren? Ich freue mich, von dir zu hören!',
      methods: {
        whatsapp: {
          title: 'WhatsApp',
          description: 'Schnell und unkompliziert – schreib mir direkt eine Nachricht.',
          cta: 'Jetzt schreiben',
        },
        email: {
          title: 'E-Mail',
          description: 'Für ausführlichere Anfragen erreichst du mich per E-Mail.',
          cta: 'E-Mail senden',
        },
      },
      availability: {
        title: 'Verfügbarkeit',
        text: 'Ich antworte in der Regel innerhalb von 24 Stunden. Für dringende Anfragen nutze bitte WhatsApp.',
      },
      location: {
        title: 'Standort',
        text: 'Ich arbeite von Wien aus und biete sowohl Online-Coaching als auch Personal Training vor Ort an.',
      },
    },
    // Footer
    footer: {
      tagline: 'Dein Partner für nachhaltige Fitness-Transformation.',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      imprint: 'Impressum',
      rights: 'Alle Rechte vorbehalten.',
    },
    // Common
    common: {
      learnMore: 'Mehr erfahren',
      getStarted: 'Jetzt starten',
      contactMe: 'Kontaktiere mich',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Me',
      services: 'Services',
      contact: 'Contact',
    },
    // Homepage
    hero: {
      tagline: 'Fitness Coach & Personal Trainer',
      headline: 'Reach Your Goal.',
      headlineAccent: 'Sustainable & Effective.',
      description:
        'I help you achieve your fitness goals – whether muscle building, fat loss, performance improvement or a healthier lifestyle. With over 13 years of experience and proven methods.',
      cta: 'Free Consultation',
      ctaSecondary: 'Learn More',
    },
    features: {
      title: 'Why Train With Me?',
      subtitle: 'Over 13 years of experience, international competition success and an approach that works.',
      items: [
        {
          title: 'Individual Training Plans',
          description:
            'Every plan is adapted to your goals, your level and your possibilities – from beginner to athlete.',
        },
        {
          title: 'Science-Based',
          description:
            'My approach combines practical training with science-based methods for sustainable results.',
        },
        {
          title: 'Motivating Support',
          description:
            'Personal support that keeps you on track. Training should be fun and effective.',
        },
        {
          title: 'Competition Experience',
          description:
            'Two competition seasons with international placements – I know what it takes to achieve peak performance.',
        },
      ],
    },
    testimonials: {
      title: 'Client Feedback',
      subtitle: 'Feedback from real clients coming soon.',
    },
    cta: {
      title: 'Ready for Your Transformation?',
      description:
        'Start now with a free initial consultation and discover how we can achieve your goals together.',
      button: 'Contact Me Now',
    },
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'Yannick Aldrian-Kickinger',
      story: {
        title: 'My Story',
        paragraphs: [
          'Hi, I\'m Yannick – a passionate fitness coach and personal trainer with over 13 years of experience in training, coaching and individual support.',
          'I help people achieve their fitness goals – whether it\'s muscle building, fat loss, performance improvement or simply a healthier lifestyle. My approach combines practical training, motivating support and science-based methods.',
          'I have two competition seasons with international placements behind me and am working this year to achieve my pro card. This experience flows directly into my coaching.',
        ],
      },
      credentials: {
        title: 'My Experience',
        items: [
          'Over 13 years of active training',
          'International competition placements',
          'Working towards pro card',
          'Successfully coached beginners to athletes',
          'Science-based methods',
          'Focus on safety & effectiveness',
        ],
      },
      philosophy: {
        title: 'My Approach',
        text: 'I adapt training plans individually to different people, goals and levels to achieve maximum results. I value safety, effectiveness and fun in training.',
      },
    },
    // Services Page
    services: {
      title: 'My Services',
      subtitle: 'For all levels – from beginner to athlete',
      packages: [
        {
          name: 'Basic',
          price: '99',
          period: 'one-time',
          description: 'The perfect start: Your individual training and nutrition plan.',
          features: [
            'Detailed initial consultation',
            'Individual training plan',
            'Nutrition recommendations',
            'Implementation guide',
          ],
          popular: false,
        },
        {
          name: 'Premium',
          price: '199',
          period: '/month',
          description: 'Continuous support for sustainable results.',
          features: [
            'Everything from Basic',
            'Ongoing adjustments',
            'Weekly check-ins',
            'WhatsApp support',
            'Progress tracking',
          ],
          popular: true,
        },
        {
          name: 'Elite',
          price: '349',
          period: '/month',
          description: 'Full support with direct access to me.',
          features: [
            'Everything from Premium',
            'Permanent access',
            'Live support for questions',
            'Video calls as needed',
            'Competition prep',
          ],
          popular: false,
        },
      ],
      cta: 'Inquire Now',
      customTitle: 'Individual Requirements?',
      customDescription:
        'Competition prep? Special goals? Let\'s find the right plan together.',
      customCta: 'Contact Me',
    },
    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s Get in Touch',
      intro:
        'Do you have questions or would you like to schedule a free initial consultation? I look forward to hearing from you!',
      methods: {
        whatsapp: {
          title: 'WhatsApp',
          description: 'Quick and easy – send me a direct message.',
          cta: 'Message Now',
        },
        email: {
          title: 'Email',
          description: 'For more detailed inquiries, reach me via email.',
          cta: 'Send Email',
        },
      },
      availability: {
        title: 'Availability',
        text: 'I usually respond within 24 hours. For urgent inquiries, please use WhatsApp.',
      },
      location: {
        title: 'Location',
        text: 'I work from Vienna and offer both online coaching and in-person training.',
      },
    },
    // Footer
    footer: {
      tagline: 'Your partner for sustainable fitness transformation.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
      rights: 'All rights reserved.',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactMe: 'Contact Me',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.de;

export function getTranslation(lang: Language) {
  return translations[lang] || translations.de;
}

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'de';
}

export function getAlternateUrl(currentUrl: URL, targetLang: Language): string {
  const pathParts = currentUrl.pathname.split('/').filter(Boolean);
  if (pathParts[0] === 'de' || pathParts[0] === 'en') {
    pathParts[0] = targetLang;
  } else {
    pathParts.unshift(targetLang);
  }
  return '/' + pathParts.join('/');
}

