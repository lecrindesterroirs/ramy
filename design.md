# The Taste Club Design System

> Grounded from: `https://thetasteclub.fr`  
> Sources: inline critical CSS (`#rocket-critical-css`), full stylesheet (`/wp-content/cache/min/1/wp-content/themes/thetasteclub/public/app.css`), HTML structure  
> Font files: `/wp-content/themes/thetasteclub/public/font/`

---

## 1. Visual Theme & Atmosphere

The Taste Club communicates playful premium — a Parisian artisan caterer that is simultaneously serious about quality and visually exuberant. The palette is warm, organic and festive: a creamy peach background, rich purple-violet and burnt orange as primary accents, paired with unexpected lime green. Nothing here is cold, corporate, or minimal in the Swiss sense.

The typographic system creates tension between two extremes: **GT Pressura** (a geometric grotesque) handles all body and UI text with a clean, functional voice, while **ITC Souvenir** (a rounded, nostalgic serif) carries display headlines — lending warmth and a distinctly French traiteur feel without resorting to thin italics.

Layouts are cinematic and full-bleed. Sections alternate background colors from the vibrant palette, creating strong visual rhythm without a single divider line. Photography is abundant, high-contrast food imagery that covers most of the above-the-fold viewport. The hero section occupies the entire screen height.

**keyCharacteristics:**
- Warm cream page background (`#fcf5ef`) — never pure white
- Bold, unexpected color pairings: red-orange footer on lime-green text
- Viewport-relative sizing (`1vw = 1rem` on desktop) — everything scales fluidly
- Two-font system: functional grotesque (GT Pressura) + nostalgic serif (ITC Souvenir)
- Photography-dominant layout — images fill sections, not contained in cards
- Rounded elements on mobile (pill borders), subtle on desktop
- No drop shadows — depth via color contrast and overlapping elements
- Exuberant hover animation: split underline enters left, exits right

---

## 2. Color Palette & Roles

All values grounded in CSS frequency analysis (`app.css`, 163KB).

### Primary / Brand

| Hex | Occurrences | Role | Where seen |
|-----|-------------|------|------------|
| `#fcf5ef` | 55 | Page background — warm peach-cream | `body { background-color }` |
| `#1c1c1c` | 79 | Primary text — warm near-black | `body { color }` |
| `#41387e` | 111 | Brand accent — purple-violet | Buttons, highlights, `.wysiwyg.is-blue` |
| `#c53713` | 103 | Brand accent — burnt orange-red | Footer background, secondary CTAs |
| `#edf8c4` | 80 | Brand accent — lime/celery green | Footer text, logo on dark backgrounds |

### Secondary / Supporting

| Hex | Occurrences | Role | Where seen |
|-----|-------------|------|------------|
| `#8e9a31` | 62 | Olive green | Section accents, tags |
| `#ffe9be` | 66 | Warm yellow | Background tints, highlights |
| `#ffd8c7` | 42 | Peach/salmon | Background tints |
| `#fff` | 18 | White | Header background (scrolled), surface |
| `#171313` | 13 | Deep black | Overlays, dark sections |

### Semantic / Utility

| Hex | Role | Source |
|-----|------|--------|
| `rgba(23,19,19,0.6)` | Accordion border | `.c-accordion { border-top }` |
| `rgba(23,19,19,0.4)` | Subtle separator | border/divider utility |
| `#f4f4f4` | Light surface | background tints |
| `#d8d8d8` | Border grey | separators |

### Footer palette (distinctive combination)

```css
.c-footer {
  background-color: #c53713;  /* burnt orange-red */
  color: #edf8c4;             /* lime green — very high contrast, unusual */
}
```

---

## 3. Typography Rules

**Two typefaces only:**

- **GT Pressura** — custom geometric grotesque, self-hosted. Weights: 400 (Regular), 700 (Bold). Also a Mono variant.
- **ITC Souvenir** — classic rounded serif. Weights: 300 (Light), 700 (Bold). Used for display headlines.

```css
html {
  font-family: "GT Pressura", Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1vw;  /* viewport-relative: 1rem = 1vw at ≥1000px */
}
body {
  font-size: 16px; line-height: 24px;  /* mobile fallback */
  /* desktop: font-size: 1vw; line-height: normal */
}
```

**Viewport-relative scale** — all `rem` values are effectively `vw` at 1000px+:

| Role | rem value | ≈px at 1440px | Font | Weight | Notes |
|------|-----------|---------------|------|--------|-------|
| Hero / Display | 4.1026rem | ~59px | ITC Souvenir | 700 | `line-height: 5.1282rem` (~74px) |
| H2 / Section | ~2.5rem | ~36px | ITC Souvenir or GT Pressura Bold | 700 | inferred from DOM structure |
| Nav links | ~1rem | ~14px | GT Pressura | 400 | `font-size: 0.8333rem` in some contexts |
| Body | 1rem | ~14.4px | GT Pressura | 300/400 | `line-height: normal` |
| Small / Labels | 0.8333rem | ~12px | GT Pressura | 400 | footer, metadata |
| Mono | – | – | GT Pressura Mono | 400 | code contexts only |

**Key typographic rules:**
- Font size is 100% viewport-relative on desktop — no fixed pixel sizes except on mobile
- `font-smooth: always` applied globally for maximum crispness
- `-webkit-font-smoothing: antialiased` on `html`
- Headlines use ITC Souvenir for warmth; GT Pressura handles everything functional

---

## 4. Component Stylings

### Navigation (`.c-header`)

```css
.c-header {
  position: fixed; top: 0; left: 0; width: 100vw;
  height: 6.6666667rem; /* ≈96px at 1440px */
  background: #fff;
  color: #1c1c1c;
  transition: opacity .4s cubic-bezier(0,.55,.45,1),
              background-color .4s cubic-bezier(0,.55,.45,1),
              transform .7s cubic-bezier(0,.55,.45,1);
  transform: translateY(-100%); /* enters from top on page load */
}
.c-header.is-home {
  background-color: rgba(0,0,0,0); /* transparent on homepage */
}
.c-header.is-home .c-header__logo {
  color: #edf8c4; /* lime logo on transparent nav */
}
```

Logo: `4.53125rem × 4.1667rem` (≈65px × 60px) on desktop.  
Container: centered, `max-width: 95.8333rem`, padding `0 2.7083rem`.

### Links (`.a` — animated underline)

Distinctive 2-line split underline animation:

```css
.a { display: inline; position: relative; padding-bottom: 0.2604rem; }
.a::before, .a::after {
  content: ""; position: absolute; bottom: 0.5128rem; left: 0;
  border: 0.2564rem solid currentColor; width: 100%;
  transition: transform .75s cubic-bezier(.83,0,.17,1);
}
.a::before { transform-origin: left; transform: scaleX(0); }
.a::after { transform-origin: right; /* starts at scaleX(1) */ }
.a:hover::before { transition-delay: .2s; transform: scaleX(1); }
.a:hover::after { transition-delay: 0s; transform: scaleX(0); }
```

On hover: underline enters from the left while another exits from the right — a "wipe" animation.

### Footer (`.c-footer`)

```css
.c-footer {
  background-color: #c53713;
  color: #edf8c4;
  padding-top: 1.8229rem;
  padding-bottom: 2.8646rem;
}
```

No shadow, no border — color contrast alone distinguishes it.

### Accordion (`.c-accordion`)

```css
.c-accordion {
  padding: 1.71875rem 0;
  border-top: 0.0521rem solid rgba(23,19,19,0.6);
  overflow: hidden;
  cursor: pointer;
}
```

### Border radius (`.dft-border-radius`)

```css
/* Mobile */
.dft-border-radius { border-radius: 5.1282rem; overflow: hidden; }
/* Desktop (≥1000px) */
.dft-border-radius { border-radius: 2.0833rem; }
```

At 1440px vw-base: ≈30px on desktop — generous, not pill-shaped.

### Image aspect ratios (`.dft-image`)

| Class | Padding-bottom | Ratio |
|-------|---------------|-------|
| `.is-square` | 100% | 1:1 |
| `.is-portrait` | 130% | ~3:4 |
| `.is-169` | 56.25% | 16:9 |
| `.is-landscape` | 70% | ~10:7 |

### Table/Card (`.c-table`)

```css
.c-table {
  padding: 2.6042rem;
  width: 19.8958rem; /* ≈287px at 1440px */
  border-radius: 0.4167rem; /* ≈6px at 1440px */
  min-height: 29.7917rem;
}
```

---

## 5. Layout Principles

**Viewport-relative sizing system:** `html { font-size: 1vw }` means all `rem` values scale linearly with viewport width on desktop.

### Breakpoints

| Name | min-width | Notes |
|------|-----------|-------|
| Mobile | 0 | `font-size: 1vw`, larger padding ratios |
| Tablet | 650px | `font-size: 0.9vw` |
| Desktop | 1000px | `font-size: 1vw`, layout switches to flex/grid |

### Spacing scale (in rem = vw on desktop)

Inferred from component padding values:

| Token | rem | ≈px at 1440px | Usage |
|-------|-----|---------------|-------|
| xs | 0.2604 | ~3.75px | borders, fine elements |
| sm | 0.5208 | ~7.5px | internal gaps |
| md | 1.0417 | ~15px | component gaps |
| lg | 1.8229 | ~26px | section paddings |
| xl | 2.7083 | ~39px | nav padding, hero gaps |
| 2xl | 5.1282 | ~73px | mobile padding, section top |

### Max-width

```css
max-width: 95.8333rem; /* ≈1380px at 1440px — very wide, nearly full-bleed */
```

### Grid philosophy

- Sections alternate between full-bleed color blocks and centered content
- No gutters visible — content runs edge to edge or to container margin only
- Photography fills sections completely, no card-boxing of images
- Mobile: single column, large paddings proportional to viewport

---

## 6. Depth & Elevation

**Philosophy: zero shadows.** The site achieves visual hierarchy entirely through:
- Color contrast between sections (cream → violet → red → white → cream)
- Z-index layering (header fixed over content, `z-index: 10`)
- Scale and size contrast (hero image full-viewport vs. small body text)
- Opacity overlays for header on images: `rgba(0,0,0,0.71)`, `rgba(0,0,0,0.5)`

| Level | Technique | CSS value |
|-------|-----------|-----------|
| Header above content | `z-index: 10` | `.c-header { z-index: 10 }` |
| Image overlay (dark) | rgba overlay | `rgba(0,0,0,0.71)` |
| Image overlay (medium) | rgba overlay | `rgba(0,0,0,0.5)` |
| Loading state | white overlay | `hsla(0,0%,100%,0.6)` on `.dft-fetching::before` |

No `box-shadow` values found in the stylesheet with meaningful frequency. Elevation is purely chromatic.

---

## 7. Interaction & Motion

### Header entrance

```css
transition: transform .7s cubic-bezier(0,.55,.45,1);
transform: translateY(-100%); /* starts off-screen */
/* JS adds class to bring it in on page load/scroll */
```

### Link underline wipe (`.a`)

```css
transition: transform .75s cubic-bezier(.83,0,.17,1);
/* Hover: enter delay 0.2s, exit delay 0s — staggered */
```

The `cubic-bezier(.83,0,.17,1)` is an **ease-in-out-quart** variant — slow start, fast middle, slow end.

### Header color/opacity transition

```css
transition: opacity .4s cubic-bezier(0,.55,.45,1),
            color .4s cubic-bezier(0,.55,.45,1),
            background-color .4s cubic-bezier(0,.55,.45,1);
```

`cubic-bezier(0,.55,.45,1)` = **ease-out-circ** variant — fast start, gentle landing.

### Swiper/carousel

- Transition timing: `var(--swiper-wrapper-transition-timing-function, initial)`
- Navigation button size: `--swiper-navigation-size: 44px`
- Pagination bullet active color: `--swiper-theme-color: #007aff` (likely overridden per instance)

### Inferred interactions (from CSS structure)

- Images likely scale on hover (no explicit CSS found — may be JS-driven)
- Accordion open/close: `overflow: hidden` + JS height animation implied
- `will-change: opacity` on `.c-header` — GPU-accelerated opacity

---

## 8. Responsive Behavior

### Breakpoint table

| Breakpoint | Width | Font scale | Layout change |
|-----------|-------|-----------|---------------|
| Mobile | 0–649px | `1vw` | single column, stacked nav |
| Tablet | 650–999px | `0.9vw` | partial two-column |
| Desktop | ≥1000px | `1vw` | full flex/grid layouts |

### Navigation collapse

- Mobile: full-screen overlay nav (height `20.5128rem` ≈ full viewport height)
- Desktop: horizontal flex row (height `6.6667rem`)

### Padding behavior

Mobile padding: `5.1282rem` = `5.1282vw` at 390px ≈ **20px** (exactly 5% viewport)  
Desktop padding: `2.7083rem` = `2.7083vw` at 1440px ≈ **39px**

### Touch targets

- Header logo: `12.8205rem × 12.8205rem` on mobile ≈ 50px × 50px (minimum AA)
- Accordion click area: full row (`padding: 1.71875rem 0`)

### Image behavior

- Images use `<picture>` with multiple `<source media="...">` breakpoints (3 image widths)
- WebP format by default (`/wp-content/webp-express/webp-images/`)
- Aspect ratio maintained via CSS padding-bottom trick

---

## 9. Agent Prompt Guide

### Quick color reference

```
Background:  #fcf5ef  (warm cream)
Text:        #1c1c1c  (warm near-black)
Purple:      #41387e  (primary brand accent)
Orange-red:  #c53713  (secondary accent, footer)
Lime:        #edf8c4  (lime accent, footer text)
Olive:       #8e9a31
Warm yellow: #ffe9be
Peach:       #ffd8c7
White:       #ffffff  (nav, surfaces)
```

### Fonts

```
Body/UI:    "GT Pressura" (grotesque sans) — 400, 700
Display:    "ITC Souvenir" (rounded serif) — 300, 700
Mono:       "GT Pressura Mono" — 400
```
*Both fonts are proprietary and self-hosted. For open-source substitutes:*  
- GT Pressura → **Plus Jakarta Sans** or **DM Sans**  
- ITC Souvenir → **Fraunces** (has the same rounded warmth) or **Young Serif**

### Example prompts

1. **"Reproduce the visual style of The Taste Club for a B2B food delivery homepage. Use a warm cream background (#fcf5ef), GT Pressura (or DM Sans) for body text, ITC Souvenir (or Fraunces) for headlines in bold. Primary CTA in purple (#41387e). Full-bleed food photography as the hero with a dark overlay. Footer in burnt orange-red (#c53713) with lime text (#edf8c4)."**

2. **"Build a hero section in the style of The Taste Club: centered headline in ITC Souvenir bold (~60px), centered subtext in GT Pressura regular, one CTA button, and a grid mosaic of 8–14 food photos below the text. Background: #fcf5ef. No overlay on the mosaic."**

3. **"Apply The Taste Club's link animation: a double-underline that wipes in from the left and out from the right on hover, using cubic-bezier(.83,0,.17,1) at 750ms duration with 200ms stagger between the two lines."**

### Iteration tips

- **Scale everything with viewport width** — use `clamp()` or `vw` units, not fixed px, to match their fluid sizing system
- **Never use pure white as a page background** — always warm it with `#fcf5ef` or a tinted variant
- **Pair the two fonts deliberately**: ITC Souvenir (or Fraunces) for emotional/marketing copy, GT Pressura (or DM Sans) for all functional text (nav, buttons, labels, body)
- **Make the footer bold** — a strongly colored footer (red, dark green, violet) with high-contrast text is central to this aesthetic
- **Photography first** — sections are built around full-bleed images, not images inside cards
- **No box-shadows anywhere** — use color contrast and scale to create depth
