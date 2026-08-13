# Vetham Kuzhumam Spiritual Trust

React + Vite website for Vetham Kuzhumam Spiritual Trust, converted from the Trusthand HTML theme with Vetham content and cloud-optimized images.

## Quick Start

```bash
npm install
npm run download-images   # fetch images from vethamspiritualtrust.com CDN
npm run dev               # http://localhost:5173
npm run build             # production build to dist/
npm run preview           # preview production build
```

## Stack

- React 18 + React Router 6
- Vite 5 with code splitting and gzip/brotli compression
- Trusthand theme CSS/JS (jQuery carousels, sticky header)
- Images cached locally in `public/assets/` from the Vetham CDN

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/our-village` | Our Village |
| `/courses` | Courses & Services |
| `/leadership` | Leadership |
| `/events` | Events |
| `/blog` | Blog |
| `/social-media` | Gallery & Social Media |
| `/contact` | Contact |

Legacy static HTML files are preserved in `legacy/`.
