# Garibook Homepage — Endow Tech Frontend Intern Assessment

A pixel-faithful recreation of the **Garibook** homepage (`https://garibook.com/`) as a
React single-page application, built with Vite + Tailwind CSS + GSAP.

## Features

- **Hero typewriter** — HTML-aware typing animation matching the reference site exactly
  (60ms/char, 2s hold, CSS blinking caret, highlight `<span>` preserved).
- **Sticky navbar** — transparent at top, `fixed` white bar with `slideDown` animation on
  scroll; desktop underlines animate on hover; full-width blue **mobile offcanvas** menu
  with the brand-vector watermark.
- **English ⇄ বাংলা language switcher** — blue pill toggle in the navbar. All copy
  (nav, hero, stats, booking widget, sections, footer) switches language, the logo
  swaps to the Bangla variant, the page font switches to Noto Sans Bengali, and the
  choice persists in `localStorage` (`garibook_language`).
- **Booking widget** — Location/airport/car/date-time pickers with responsive fields.
- **Animated counters, city skyline + sedan GIF** — GSAP entry animations and an
  infinitely scrolling skyline band.
- **Homepage sections** — Services (tabbed rides/feature panes), Freedom, People Together,
  Booking→Arrival, 0% Commission Smart Driver, Newsroom + Passenger + Blog sliders/cards,
  Download App CTA, and a full footer.
- **Live data hooks** — newsroom / blogs / passenger-speak are fetched from the real
  Garibook API (`api.garibookadmin.com`) with a graceful fallback to embedded data.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`, design tokens in `@theme`)
- GSAP 3 (`ScrollTrigger` for reveals/counters)
- react-icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build
```

## Structure

```
src/
  components/      # Navbar, Hero, Stats, Services, ..., Footer
  hooks/           # useTypewriter, useSlider, useGsapReveal
  i18n/            # LanguageProvider + useI18n (EN ⇄ BN)
  data/            # siteData.js (EN), bn.js (BN mirror + message dict), fetchData.js
  utils/           # gsapLib (gsap + ScrollTrigger)
  App.jsx          # composition, wrapped in LanguageProvider
  index.css        # Tailwind v4 @theme tokens + reference-faithful custom CSS
```