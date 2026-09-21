# Maharatri Krishna — React Theme

React + Vite recreation of the [Maharatri Krishna](https://metropolitanhost.com/themes/themeforest/html/maharatri/krishna.html) Hindu temple homepage, built with modern React instead of jQuery.

## Quick Start

```bash
npm install
npm run download-maharatri   # fetch theme CSS & images from demo CDN
npm run dev                  # http://localhost:5173
npm run build                # production build to dist/
npm run preview              # preview production build
```

## Stack

- **React 18** + **React Router 6** — component-based routing
- **Vite 5** — fast dev server and production builds
- **react-helmet-async** — per-page SEO meta tags
- **react-countup** — animated year counter
- **Maharatri theme CSS** — original styles in `public/maharatri/`

## Krishna Home Sections

| Section | React Component |
|---------|-----------------|
| Hero slider (×2) | `KrishnaHero` + `useKrishnaSlider` hook |
| Gods name ticker | `GodsTicker` |
| About intro | `AboutIntro` |
| Temple / Puja / Donation cards | `ServiceCards` |
| Years of service counter | `AboutCounter` |
| Hotline + newsletter CTA | `CtaBlock` |
| Donation progress cards | `DonationCards` |
| Puja portfolio filter | `PujaGallery` |
| Volunteers | `VolunteersSection` |
| Live broadcast | `BroadcastSection` |
| Blog feed | `BlogSection` |

## Routes

| Route | Page |
|-------|------|
| `/` | Krishna Home (full theme) |
| `/about` | About placeholder |
| `/contact` | Contact placeholder |
| `/donate` | Donation placeholder |
| `/blog` | Blog placeholder |
| `/services` | Services placeholder |
| `/events` | Events placeholder |

Legacy Vetham static HTML is preserved in `legacy/`.
