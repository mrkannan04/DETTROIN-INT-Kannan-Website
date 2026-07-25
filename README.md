# Krishna International School — Website Redesign (Replica Project)

## 📋 Submission Details

| Field | Details |
|---|---|
| **Full Name** | _[KANNAN R]_ |
| **Intern ID** | _[Not Assigned]_ |
| **Email Address** | _[rkannan190204@gmail.com]_ |
| **GitHub Username** | _[https://github.com/mrkannan04]_ |
| **Selected Website** | [Krishna International School, Aligarh](https://kisaligarh.com/) |
| **Live Demo Link** | _[https://dettroin-int-kannan-website.netlify.app/]_ |

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
- Added downloadable sample PDF documents (Fee Structure, Mandatory Disclosure, Admission Brochure)
- Added new feature enhancements inspired by other school websites: testimonial carousel, achievements showcase, faculty directory, and a school info/notice dashboard widget
- Fully responsive (mobile-first) layout matching the original site's breakpoints and mobile menu behavior

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
