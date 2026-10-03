# Layout Redesign Instructions: Navbar + Hero

## 0. Context and Goal

This is a personal portfolio for **Diaz Ridho** (Next.js, assumed Tailwind CSS). The current layout is too close to a reference portfolio (Fransiskus). Redesign **only** the **Navbar** and the **Hero section**. Do not change content in other sections, routes, data, or the color palette/fonts unless stated below.

**Core change:** the photo moves to the **left**, text to the **right**, and the structure of both the navbar and hero must differ visibly from the reference (no wide top bar with centered icons, no bordered bio box, no pixel characters).

**Keep (brand identity):**
- Colors: blue `#1A73E8` (accent), yellow `#FFD600` (CTA/highlight), near-black `#111111` (text/borders), off-white `#F7F7F7` (background)
- Neo-brutalist feel: thick 2-3px black borders, hard offset shadows (no blur), pill buttons
- Font: keep the current heading and body fonts
- Copy language: Indonesian (see content below)

**Remove from the current/reference look:**
- Full-width white navbar bar with bottom border
- The big rounded white card wrapping the hero text
- The macOS-style window frame (red/yellow/green dots, "avatar.jpg" title)
- Any pixel-art characters or floating decorative sprites

---

## 1. Navbar

### 1.1 Structure: floating pill navbar

Replace the full-width bar with a **detached, floating pill** that does not touch the screen edges.

| Property | Value |
|---|---|
| Position | `fixed`, `top-4`, horizontally centered (`left-1/2 -translate-x-1/2`) |
| Width | `w-[min(92%,960px)]` |
| Height | `h-14` (56px) |
| Shape | `rounded-full` |
| Background | `bg-white/80 backdrop-blur-md` |
| Border | `2px solid #111` |
| Shadow | `4px 4px 0 #111` (hard shadow, no blur) |
| z-index | `z-50` |
| Padding | `px-3` (inside the pill) |

### 1.2 Contents (left → right, single row, `flex items-center justify-between`)

1. **Left: logo**
   - Text `Diaz.` with the dot colored blue `#1A73E8`
   - Inside a small yellow circle badge `size-9`, `bg-[#FFD600]`, `border-2 border-[#111]`, containing only the letter **D** (bold), followed by the wordmark `Diaz.` on `md+` screens only
2. **Center: nav links** (hidden below `md`)
   - Items: `About`, `Skills`, `Projects`, `Contact`
   - Text-only (no icons), `text-sm font-semibold`, `px-4 py-2`, `rounded-full`
   - Hover: `bg-[#111]/5`
   - **Active link** (scroll-spy): `bg-[#111] text-white`, with transition `150ms`
3. **Right: actions**
   - `CV` button: icon-only on mobile, icon + text on `md+`, `rounded-full border-2 border-[#111] bg-white px-4 h-10`, download icon
   - `Hire Me` button: `rounded-full bg-[#FFD600] border-2 border-[#111] px-5 h-10 font-bold`, hover: translate `-1px -1px` and shadow `2px 2px 0 #111`

### 1.3 Behavior

- **Scroll-spy:** highlight the link of the section currently in view (IntersectionObserver, threshold ~0.5).
- **On scroll > 40px:** shrink the pill slightly (`h-12`, `w-[min(88%,880px)]`) with a `200ms` transition.
- **Smooth scroll** to section anchors; offset sections with `scroll-mt-24` so headings are not hidden behind the pill.

### 1.4 Mobile (< 768px)

- Top pill shows only: logo badge (left) and `Hire Me` (right).
- Add a **bottom tab bar** (fixed, `bottom-4`, same pill style as the top one, `w-[min(92%,420px)]`) with 4 icon+label items: About, Skills, Projects, Contact. Active item gets yellow background `#FFD600`.
- Add `padding-bottom: 96px` to the page so content is not covered.

---

## 2. Hero Section

### 2.1 Overall layout

- Container: `max-w-6xl mx-auto px-6`
- Section height: `min-h-screen`, content vertically centered, top padding `pt-28` to clear the floating navbar
- Grid: `grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16`
- **Photo column: `lg:col-span-5`, placed LEFT (first in DOM order)**
- **Text column: `lg:col-span-7`, placed RIGHT**
- On mobile (< 1024px): photo **above** text, both centered; photo max width `280px`

### 2.2 Background

- Keep the subtle dotted grid (`radial-gradient` dots, ~24px spacing, opacity ~0.15)
- Add one large soft **blue blob** (`#1A73E8`, opacity 0.08, `blur-3xl`, ~480px) behind the photo column, and one smaller **yellow blob** (opacity 0.12) at the bottom right. No other decorations.

### 2.3 Photo column (LEFT)

Use an **arch-shaped frame** instead of a square or window frame.

1. **Frame:** `aspect-[4/5]`, `w-full max-w-[380px]`
   - Shape: `rounded-t-[999px] rounded-b-3xl` (arch: fully rounded top, softly rounded bottom)
   - Border: `3px solid #111`
   - Background inside: solid blue `#1A73E8`, image uses `object-cover object-top`, image bottom aligned to the frame
2. **Offset yellow block** behind the frame: same shape, `bg-[#FFD600]`, `border-[3px] border-[#111]`, positioned `translate-x-4 translate-y-4`, `-z-10`. This replaces the soft shadow.
3. **No rotation** on the main frame (the reference tilts its photo). Instead, keep it straight.
4. **Floating stickers** (max 3), pill-shaped, `border-2 border-[#111]`, `text-xs font-bold`, `px-3 py-1.5`, rotated between -6° and 6°:
   - `Open to Work` with green dot, placed at top-right of the frame (overlapping the arch edge), white background
   - `Coffee-Lover` placed at bottom-left, overlapping the frame edge, yellow background
   - `Fullstack Dev` placed at mid-right, overlapping the frame edge, blue background with white text
   - Animation: gentle float (`translateY` ±6px, 3-4s ease-in-out infinite, staggered delays). Respect `prefers-reduced-motion`.
5. Remove the "Click me!" sticker and the window chrome entirely.

### 2.4 Text column (RIGHT)

No card or box around the text; it sits directly on the background. Left-aligned on `lg+`, centered on mobile. Vertical stack with these gaps:

1. **Eyebrow row** (`mb-4`): two role chips, `rounded-full border-2 border-[#111] px-3 py-1 text-xs font-bold uppercase tracking-wide`
   - `FULL-STACK DEV` (blue background tint, blue text)
   - `UI DESIGNER` (red/pink tint, red text)
2. **Greeting** (`mb-1`): `Halo, saya` in `text-lg text-neutral-600`
3. **Name** (`mb-3`): stacked in **two lines**
   - Line 1: `Diaz` (black), Line 2: `Ridho` (blue `#1A73E8`) followed by a yellow dot `.`
   - Size: `text-6xl md:text-7xl xl:text-8xl`, `font-extrabold`, `leading-[0.95]`, `tracking-tight`
   - Add a hand-drawn style **underline squiggle** (SVG, yellow, 6px stroke) under `Ridho`
4. **Role line** (`mb-5`): `UI / UX Designer` with a typewriter/rotating text effect cycling through `UI / UX Designer`, `Full-Stack Developer`, `Product Builder` (2.5s per item, fade or type). Text size `text-xl md:text-2xl font-semibold`.
5. **Tagline** (`mb-8`): `"Membangun produk digital yang cepat, intuitif, dan berdampak nyata."`
   - Italic, `text-neutral-700`, `max-w-xl`
   - A **4px blue left border** (`border-l-4 border-[#1A73E8] pl-4`) instead of a boxed background
6. **CTA row** (`mb-10`, `flex flex-wrap gap-4`):
   - Primary: `Lihat Karya` with arrow icon → yellow `#FFD600`, black text, `border-2 border-[#111]`, `rounded-full`, `h-12 px-7`, hard shadow `4px 4px 0 #111`; hover: translate `2px 2px` and shadow shrinks to `2px 2px 0`; active: no shadow
   - Secondary: `Kontak` with mail icon → white, same border/shape/size, same hover behavior
7. **Stats strip** (new element, `grid grid-cols-3 gap-4 max-w-md`, separated from CTAs by a top dashed border `border-t-2 border-dashed border-[#111]/20 pt-6`):
   - Three items, each: large number (`text-3xl font-extrabold`) and label (`text-xs uppercase text-neutral-500`)
   - Placeholder values (replace with real data): `10+` Projects, `2+` Years Learning, `3` Competitions
   - Vertical dividers between items on `sm+`

### 2.5 Entrance animation (once, on load)

- Photo column: slide in from left (`translateX(-24px)` → 0) + fade, 500ms
- Text column children: stagger fade-up (`translateY(16px)` → 0), 80ms delay between elements
- Disable under `prefers-reduced-motion`

---

## 3. Responsive Summary

| Breakpoint | Navbar | Hero |
|---|---|---|
| `< 768px` | Top pill (logo + Hire Me) + bottom tab bar | Single column, photo on top (max 280px), text centered, stats 3 columns compact |
| `768–1023px` | Full pill with links, no bottom bar | Single column, photo on top (max 340px), text centered |
| `≥ 1024px` | Full pill with links | 12-col grid, photo LEFT (5), text RIGHT (7), text left-aligned |

---

## 4. Implementation Notes

- Create separate components: `Navbar.tsx`, `Hero.tsx`, optionally `HeroPhoto.tsx`, `RotatingText.tsx`, `StatsStrip.tsx`. Keep file and component names short.
- Use CSS variables or Tailwind theme tokens for the colors above instead of hard-coding hex everywhere.
- Hard shadows via utility such as `shadow-[4px_4px_0_#111]`.
- Add `aria-label`s for icon-only buttons, `aria-current="page"` on the active nav link, and meaningful `alt` text on the photo.
- Use `next/image` with `priority` on the hero photo.
- Do not use any external pixel-art assets or sprites.

---

## 5. Acceptance Checklist

- [ ] Photo is on the **left**, text on the **right** at `lg+`
- [ ] Navbar is a floating pill with hard shadow, not a full-width bar
- [ ] Nav links are text-only with active-state scroll-spy
- [ ] Mobile has a bottom tab bar
- [ ] Photo uses the arch frame with offset yellow block, no tilt, no window chrome
- [ ] Name is stacked on two lines with a squiggle underline
- [ ] Text has no wrapping card or bordered box
- [ ] Role text rotates; stats strip is present
- [ ] No pixel characters or "Click me!" sticker
- [ ] No horizontal scroll at 360px width; all tap targets ≥ 44px
- [ ] Animations are disabled with `prefers-reduced-motion`