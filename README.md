# Krishna International School — Website Redesign (Replica Project)

## 📋 Submission Details

| Field | Details |
|---|---|
| **Full Name** | _[KANNAN R]_ |
| **Intern ID** | _[Intern-kannan-website]_ |
| **Email Address** | _[rkannan190204@gmail.com]_ |
| **GitHub Username** | _[https://github.com/mrkannan04]_ |
| **Selected Website** | [Krishna International School, Aligarh](https://kisaligarh.com/) |
| **Live Demo Link** | _[https://dettroin-int-kannan-website.vercel.app/]_ |

---

## 🛠️ Technologies Used

- **React 18** — component-based UI
- **Vite** — build tool & dev server
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations & transitions
- **Swiper.js / react-slick** — hero image carousel
- **React Icons / Lucide React** — icon set
- **react-countup** — animated stat counters
- **React Hook Form + Yup/Zod** — form validation (Enroll/Contact)
- **EmailJS / Formspree** — form submission (no backend)

---

## ✨ Key Improvements Made

- Rebuilt the original PHP/jQuery site as a modern **React + Vite** single-page application
- Replicated the **full-screen overlay mega-menu** (grid-icon trigger, two-panel layout, animated left/right panel switching) instead of a generic dropdown navbar
- Added a smooth, **staggered scroll-reveal animation system** (shared `motionVariants.js`) across hero, stats, cards, and gallery sections
- Fixed navigation bugs from the original build: menu toggle state, broken CTA links, and SPA routing so pages update without requiring a manual refresh
- Fixed hero section layout/spacing so the headline no longer overlaps the stats counter
- Standardized the design system to a **single consistent light navy/white/gold/teal theme** (removed inconsistent dark-card styling)
- Added a **Student Showcase** section (oval-framed portraits, colored backgrounds, floating decorative accents) matching the original site's homepage
- Populated every inner route (~35–40 pages: About, Admission, Academics, Co-Curricular, Events, Gallery, etc.) with real structured demo content instead of blank placeholders
- Replaced all real external links/QR codes/portal redirects with internal, self-contained demo pages — no dependency on or redirect to the original live site
- Added downloadable sample PDF documents (Fee Structure, Mandatory Disclosure, Admission Brochure) with real multi-section content
- Added new feature enhancements inspired by other school websites: testimonial carousel, achievements showcase, faculty directory, and a school info/notice dashboard widget
- Fully responsive (mobile-first) layout matching the original site's breakpoints and mobile menu behavior
- Elevated the visual identity to a **premium design system**: refined ivory/navy/antique-gold/emerald color palette, serif+sans typography pairing, and a signature easing curve applied consistently across every animation
- Implemented a **Dark Mode / Light Mode toggle** (theme persisted via `localStorage`, no flash-of-wrong-theme on load) using a centralized CSS-variable token system so every component shares one source of truth for color
- Audited and fixed **cross-theme contrast regressions** (Stats Counter, hero overlay, notices ticker) so text, icons, and cards remain fully legible in both themes without affecting photos, which stay untouched by the theme switch
- Fixed a **broken/patchy hero overlay** so the text-legibility gradient is a clean full-bleed treatment on every hero banner, not a partial box artifact
- Fixed **non-functional breadcrumb navigation** site-wide by correcting the shared `Breadcrumb` component (was rendering as plain text instead of links)
- Fixed **non-functional filter/category tabs** (Events, Gallery, Academics) by wiring real state-driven filtering logic into a shared `<FilterTabs>` component instead of static, decorative buttons
- Eliminated **flash-of-blank-white image loading** by adding preload hints, themed placeholder backgrounds, and fade-in transitions across hero and gallery images
- Resolved **production deployment issues** (Netlify/Vercel) by adding proper SPA rewrite/redirect rules, auditing case-sensitive asset paths, and verifying environment variable configuration — so behavior in production now matches local development
- Added **new forward-looking feature previews**: AI admissions assistant (chat widget), personalized learning dashboard, accessibility mode toggle (font size, high contrast, dyslexia-friendly font), and a sustainability/green-campus metrics widgetile menu behavior
  

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/       # Header, MegaMenuOverlay, Footer
│   ├── home/          # HeroSlider, StatsCounter, AboutSection, FeatureCards, StudentShowcase
│   └── common/         # Reusable UI components
├── data/                # Site content (navigation, pages, events, gallery, staff)
├── pages/                # Route-level page components
├── routes/                # AppRoutes.jsx
└── utils/                  # motionVariants.js, theme tokens
```

---

## ⚠️ Disclaimer

This project is an independent recreation built for **learning/internship
evaluation purposes only**. It is not affiliated with, endorsed by, or
connected to Krishna International School, Aligarh, or its official website.
All page content is sample/demo data and does not represent real students,
staff, or institutional records.
