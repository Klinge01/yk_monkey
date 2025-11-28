# YAK Coaching – Yannick Aldrian-Kickinger

A modern, sleek website for **Yannick Aldrian-Kickinger**, a bodybuilder and fitness coach based in Austria. Features bilingual support (German/English), glassmorphism design, and a focus on conversion.

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** - Static site generator (outputs to `dist/`)
- **[Vite](https://vitejs.dev/)** - Build tool (built into Astro)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **ESLint + Prettier** - Code quality and formatting

## 📁 Project Structure

```
/
├── public/              # Static assets (copied as-is to dist/)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/          # Assets processed by Vite
│   │   ├── images/      # Image assets
│   │   └── videos/      # Video assets
│   ├── components/      # Reusable Astro components
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── GlassCard.astro
│   │   ├── ImagePlaceholder.astro
│   │   ├── Navbar.astro
│   │   └── SectionHeading.astro
│   ├── i18n/            # Internationalization
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # File-based routing
│       ├── index.astro  # Redirects to /de/
│       ├── de/          # German pages
│       └── en/          # English pages
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🌐 Pages

| Path | Description |
|------|-------------|
| `/` | Redirects to `/de/` (German) |
| `/de/` | Homepage (German) |
| `/en/` | Homepage (English) |
| `/de/about/` | About page (German) |
| `/en/about/` | About page (English) |
| `/de/services/` | Services & Pricing (German) |
| `/en/services/` | Services & Pricing (English) |
| `/de/contact/` | Contact page (German) |
| `/en/contact/` | Contact page (English) |
| `/de/privacy/` | Privacy Policy (German) |
| `/en/privacy/` | Privacy Policy (English) |
| `/de/imprint/` | Imprint (German) |
| `/en/imprint/` | Imprint (English) |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🎨 Design Features

- **Glassmorphism** - Frosted glass effect cards
- **Gradient accents** - Primary (red-orange) to accent (gold) gradients
- **Dark theme** - Modern dark background with subtle color accents
- **Animations** - Scroll animations and hover effects
- **Responsive** - Mobile-first design

## 🌍 Internationalization

The website supports:
- **German (de)** - Primary language
- **English (en)** - Secondary language

Language detection:
1. Checks `localStorage` for user preference
2. Falls back to browser language
3. Defaults to German for Austrian/German-speaking users

## 📦 Deployment

Build the site:

```bash
npm run build
```

Upload the contents of the `dist/` folder to your static hosting provider.

### Static Hosting Requirements

- Any static file hosting works (no server-side runtime needed)
- Make sure to configure:
  - `index.html` fallback for SPAs
  - Correct MIME types
  - Optional: gzip compression

## ✏️ Customization

### Contact Information

Update the following in contact pages (`src/pages/de/contact.astro` and `src/pages/en/contact.astro`):

```javascript
const WHATSAPP_NUMBER = '+43XXXXXXXXXX';  // Yannick's Austrian phone number
const EMAIL_ADDRESS = 'yannick@yak-coaching.at'; // Yannick's email
```

### Social Media Links

Update social media links in:
- `src/components/Footer.astro`
- Contact pages

### Legal Pages

Update placeholder content in:
- Privacy Policy (`/de/privacy/`, `/en/privacy/`)
- Imprint (`/de/imprint/`, `/en/imprint/`)

⚠️ **Important:** Have legal pages reviewed by a lawyer for GDPR/Austrian law compliance.

### Images

Replace image placeholders with actual images:
1. Add images to `src/assets/images/`
2. Update `ImagePlaceholder` components to use actual `<img>` tags
3. Recommended image dimensions are noted in placeholder descriptions

## 📝 License

Private project - All rights reserved.

---

**YAK Coaching** – Yannick Aldrian-Kickinger  
Made with ❤️ in Austria 🇦🇹

