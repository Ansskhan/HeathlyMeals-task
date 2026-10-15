# Healthify — Healthy Meals Landing Page

A production-style, fully responsive landing page for **Healthify**, a healthy
meal-prep brand in Dubai, implemented from a supplied reference design.

## Live & Repository

- **Live URL (Vercel):** [https://heathly-meals-task.vercel.app/]
- **Repository:** [https://github.com/Ansskhan/HeathlyMeals-task/]

## Tech Stack

| Technology     | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React navtive web                   |
| Styling        | Tailwind CSS v4 (utility classes)       |
| Icons          | lucide-react                            |
| Fonts          | Playfair Display (headings) + Jost (UI) |

## Project Overview

The page reproduces the reference design section by section:

1. Sticky navbar with mobile hamburger menu
2. Hero with headline, CTAs, benefit indicators and food visual
3. Statistics / trust bar (1M+ meals, 30K+ customers, 4.8/5 rating, 550+ clients)
4. About section with image collage and floating card
5. Services — 4 meal-plan category cards
6. Advantages — 4 icon cards
7. Pricing plans (Essential / Balanced "Most Popular" / Performance)
8. How it works — 3 simple steps
9. Customer testimonials with ratings
10. FAQ accordion (working expand/collapse)
11. Bottom CTA banner
12. Full footer with quick links, services and contact info

## Project Structure

```
src/
├── App.jsx                    # Page composition
├── index.css                  # Tailwind theme (colors, fonts)
├── data/
│   └── content.js             # All copy/data arrays (services, plans, FAQs…)
└── components/
    ├── sections/              # One component per page section
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── StatsBar.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── Advantages.jsx
    │   ├── Plans.jsx
    │   ├── Steps.jsx
    │   ├── Testimonials.jsx
    │   ├── FAQ.jsx
    │   ├── CTA.jsx
    │   └── Footer.jsx
    ├── common/
    │   ├── Logo.jsx
    │   └── WhatsAppFloat.jsx
    └── ui/                    # Reusable primitives
        ├── Button.jsx
        ├── SectionTag.jsx
        └── Icon.jsx
```

## Getting Started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # eslint
```

## Deployment (Vercel)

The project deploys to Vercel without any extra configuration:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Every push to the linked GitHub branch triggers a fresh production deployment.

## Environment Variables

This project needs no external services or secrets — no `.env` file is
required. If future integrations need keys, add variable names to a
`.env.example` and configure real values in Vercel Project Settings →
Environment Variables (never commit secrets).

## Assets

Food photography is loaded from Unsplash (free to use under the Unsplash
license). Icons come from lucide-react. No watermarked or unlicensed assets
are used.
