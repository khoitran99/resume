# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR on localhost:5173)
npm run build      # Type-check (tsc -b) then Vite production build → dist/
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
```

No test suite is configured in this project.

## Architecture

This is a single-page portfolio/CV site built with React 19, TypeScript, Vite, and TailwindCSS v4.

**Routing** — `src/App.tsx` mounts `BrowserRouter` with three routes:
- `/` → `src/pages/Home.tsx` (the full single-page CV)
- `/certification/:id` → `src/pages/CertificationDetail.tsx` (standalone cert detail page)
- `/project/:id` → redirects to `/#projects` (legacy route kept for backward compatibility)

`ScrollManager` in `App.tsx` handles hash-based scrolling on route change, with a retry loop for late-mounted DOM elements.

**Content data** — All CV content lives as typed TypeScript arrays, not fetched from an API:
- `src/data/experiences.ts` — `ProjectEntry[]` with full case-study fields (challenge/approach/impact)
- `src/data/certifications.ts` / `src/data/certificationsVi.ts` — `Certification[]` for EN/VI
- `src/data/experiencesVi.ts` — Vietnamese version of project entries
- `src/constants/resume.ts` — PDF path and download filename constants

**i18n** — `src/i18n.ts` configures i18next with EN (default) and VI locales from `src/locales/`. Language is locked to English (`lng: "en"`); the toggle is disabled. The `CertificationDetail` page switches between `certifications` and `certificationsVi` based on `i18n.language`.

**Theme** — `src/context/ThemeContext.tsx` provides `useTheme()`. Theme is stored in `localStorage` under `portfolio-theme`, defaults to `"light"`. Applied via a `dark` class on `<html>` for Tailwind dark mode.

**UI components** (`src/components/ui/`):
- `FloatingNav` — fixed right-side icon nav, hidden on mobile (`hidden md:flex`), tracks active section via `IntersectionObserver`
- `FloatingActions` — floating action buttons (theme toggle, CV download, etc.)
- `MaskedHeading`, `ParallaxBackgroundText`, `SpotlightCard` — visual effect components

**Section components** (`src/components/`) map directly to `div#id` wrappers in `Home.tsx`: `hero`, `summary`, `strengths`, `techstack`, `projects`, `education`.

**Build** — Vite manually chunks vendors: `vendor-react` (react/react-dom/react-router-dom), `vendor-motion` (framer-motion), `vendor-icons` (lucide-react).

**Static assets** — Certificate images live under `public/cert/`, project media under `public/project/`, and the CV PDF under `public/cv/`.
