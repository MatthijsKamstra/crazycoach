# CrazyCoach landing page

Single-page website for CrazyCoach with two visual modes:
- Crazy mode (playful and expressive)
- Business mode (cleaner and more premium)

## What changed

- Replaced the headline font setup:
  - Crazy mode now uses Satisfy for a more readable handwritten style
  - Business mode uses Cormorant Garamond for a more elegant look
- Added a top navigation toggle that switches between Crazy and Business mode.
- Added a mobile hamburger menu in the top bar.
- Added screenshot-based logo usage in the navigation:
  - `screenshots/logo-new.jpeg`
- Improved readability by increasing small font sizes and reducing forced uppercase styling.
- Improved mobile layout for phones:
  - Reduced side padding
  - Full-width content behavior
  - Better spacing and tap-friendly nav/buttons

## Files updated

- `docs/index.html`
- `docs/styles.css`
- `docs/script.js`

## Run locally

This is a static site.

1. Open `docs/index.html` in a browser.
2. Or run any static server from repository root, for example:

```bash
cd docs
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Mode toggle behavior

- Click `Crazy` or `Business` in the top bar.
- Selected mode is saved in `localStorage` under key `crazycoach-mode`.
- Text content swaps using `data-crazy` and `data-business` attributes.

## Mobile behavior

- On smaller screens, navigation collapses under `Menu`.
- Tapping a navigation link auto-closes the menu.
- Layout is optimized for full screen width with controlled padding.
