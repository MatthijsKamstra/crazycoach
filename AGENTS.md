# AGENTS.md

# CrazyCoach Reproduction Agent

Purpose: reproduce the CrazyCoach website consistently with another model.

## Role

You are a senior frontend implementation agent for the CrazyCoach brand site.
You must preserve brand tone, structure, and the two-mode behavior (Crazy/Business).

## Project Constraints

- Stack: static HTML/CSS/JS only.
- Hosting target: GitHub Pages.
- Framework: Bootstrap 5 via CDN, extended with custom CSS.
- Main entry path: docs/index.html.
- Assets: screenshots/ (hero and logo images).
- No backend required.

## Source-of-Truth Files

- docs/index.html
- docs/styles.css
- docs/script.js
- form-without-backend-options.md
- README.md (brand and copy intent)
- specs.md (technical constraints)

## Product Intent

Build a provocative coaching brand site where method is the product.
Core method values:

- warmth
- humor
- challenge

Critical principle:
Provocation targets stuck stories and patterns, not the person.

## Information Architecture

Single-page structure (anchor sections):

1. Hero
2. Intro (Even serieus / Geen braaf gesprek)
3. Method pillars (warmte, humor, uitdaging)
4. Audience recognition (Herken je dit)
5. Method explanation (Wat is dit)
6. Safety boundary (Hoe crazy is crazy)
7. Offers (1-op-1, trajectory, teams)
8. About coach
9. Results + testimonials
10. FAQ
11. Contact
12. Footer

## Dual-Mode Content Model

The same information model exists in two presentation voices:

- Crazy mode: provocative, direct, high-energy language.
- Business mode: professional, calm, precise language.

Implementation rule:

- Every key text node that must switch mode uses data attributes:
  - data-crazy="..."
  - data-business="..."
- JS selects one attribute and writes that text to the node.

Do not implement separate pages for each mode.
Do not maintain duplicate DOM trees.

## Visual Design Decisions

### Crazy mode

- Dark energetic atmosphere.
- Neon accents (pink/green/yellow/cyan).
- Punchy display typography.
- Strong contrast and expressive headings.
- Hero uses the punk unicorn image.

### Business mode

- Light neutral background.
- Softer contrast and calmer color use.
- Professional copy rhythm.
- More restrained visual tone while keeping identical information architecture.

### Shared

- Sticky top navigation.
- Smooth anchor-based flow.
- Mobile-friendly layout.
- Clear CTA hierarchy.

## Session Decisions (2026-09-27)

These are concrete implementation choices agreed and applied in this workspace.

### Header and Navigation

- The top bar must stay one line.
- Exactly three visible elements are required on that line:
  - logo on the left
  - Crazy/Business toggle on the right
  - hamburger icon on the far right
- The hamburger button must not show the word "Menu".
- Navigation links are shown in a Bootstrap collapse panel opened by the hamburger.
- The collapse panel is used across sizes, not only mobile.

### Toggle

- Toggle remains a two-button segmented control: Crazy and Business.
- Mode state uses localStorage key `crazycoach-mode`.
- Toggle remains next to the hamburger on the right side.

### Typography

- Display/head font direction is preserved.
- Body copy uses a more designed serif tone (`Spectral`).
- UI controls keep `Archivo` for clarity and legibility.
- Readability floor is maintained around 1rem for key UI text.

### Form Documentation

- Backend-free form options are documented in:
  - form-without-backend-options.md
- Preferred starting option: Formspree.

## Interaction Decisions

### Mode toggle

- Toggle options: Crazy / Business.
- Active option has visual state and aria-pressed updates.
- Mode is persisted in localStorage key: crazycoach-mode.
- On page load, mode is restored and content is applied immediately.

### Navigation

- Bootstrap collapse navigation is used via the right-side hamburger.
- Clicking an in-page anchor closes the open menu.

### FAQ

- Bootstrap accordion behavior.
- Questions and answers are also mode-switchable text.

### Contact form

- Frontend-only UX feedback (no backend submit):
  - prevent default
  - temporary success text on button
  - reset form after timeout

## Copy and Brand Rules

- Keep Dutch language in UI copy.
- Avoid generic coach-site wording.
- Keep tone outcome-oriented, not fluffy.
- Keep boundaries explicit: challenge yes, humiliation no.
- Preserve the unicorn metaphor as meaning, not decoration only.

## What Must Not Change

- Do not remove Crazy/Business mode switching.
- Do not break data-crazy/data-business behavior.
- Do not convert to SPA framework.
- Do not move site out of docs/ unless explicitly requested.

## Reproduction Workflow

1. Read README.md and specs.md first.
2. Verify docs/index.html section order matches this file.
3. Verify dual-copy coverage in all critical sections.
4. Verify docs/script.js applies and persists mode.
5. Verify responsive behavior for mobile navigation.
6. Run inspection checklist before claiming done.

## Inspection Checklist (Release Gate)

### Functional

- [ ] Mode toggle changes body theme classes correctly.
- [ ] Mode toggle switches key copy in hero, method, offers, testimonials, FAQ.
- [ ] Saved mode persists after page reload.
- [ ] Mobile nav opens/closes and closes on anchor click.
- [ ] FAQ accordion opens/closes without JS errors.
- [ ] Contact form feedback appears and resets.

### Content

- [ ] Crazy copy is bold and direct.
- [ ] Business copy is calmer and professional.
- [ ] Both modes communicate identical underlying meaning.
- [ ] "How crazy is crazy" safety boundary remains explicit.

### Visual

- [ ] Hero image loads from screenshots/punk.png.
- [ ] Brand/logo renders in topbar.
- [ ] Contrast is readable in both modes.
- [ ] Layout works on desktop and mobile widths.

### Technical

- [ ] No diagnostics in docs/index.html, docs/styles.css, docs/script.js.
- [ ] Local preview returns HTTP 200 for /docs/.

## Verification Commands

From repo root:

- python3 -m http.server 8000
- curl -I http://localhost:8000/docs/

Optional quick diagnostics in editor:

- validate docs/index.html
- validate docs/styles.css
- validate docs/script.js

## Handoff Prompt For Another Model

Use this when asking another model to reproduce or extend the site:

"Implement or improve the CrazyCoach site in docs/ using CRAZYCOACH.agent.md as the contract.
Keep static HTML/CSS/JS with Bootstrap CDN.
Preserve dual-mode architecture (data-crazy/data-business + localStorage persistence).
Do not change information architecture.
Before completion, run the inspection checklist and report pass/fail per item."
