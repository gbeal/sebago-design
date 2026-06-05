# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sebago is a UI design system for web and mobile, named after Sebago Lake in southwestern Maine. The aesthetic is warm and green — think grass and broad-leafed trees in full bloom, hazy sun, blue skies, bomb pops, swimming pools, and lakes. It should inspire a smile.

## Design Identity

**Mood:** Cheerful, warm, and alive. The design should feel like the best Saturday of summer.

**Anti-patterns to avoid:**
- Cold, gray, or industrial palettes
- Thin, corporate, or sterile typography
- Sharp geometric edges where a softer radius fits better
- Heavy shadows or dark surfaces that undercut the bright outdoor feeling

## Color Palette

All colors must derive from this Maine-summer palette. Do not introduce colors outside this system.

| Token | Description | Example Hex |
|---|---|---|
| `meadow` | Rich mid-green grass in full sun — primary surface accent | `#4C8B5A` |
| `canopy` | Deep broad-leaf green, bold text and dark surfaces | `#2A5438` |
| `sky` | Hazy summer sky blue, secondary accent | `#7BAFD4` |
| `lake` | Sebago Lake blue-green, primary interactive/action | `#2C6E8A` |
| `lake-light` | Lighter lake, hover/active states | `#3D8FAD` |
| `sun` | Deep orange-amber — the sun itself, low on the horizon | `#D96B2A` |
| `pool` | Cool aqua (swimming pool), secondary action | `#4DB8C8` |
| `linen` | Warm creamy white, primary background | `#FDFBF7` |
| `pop-red` | Bomb pop red, used sparingly as a festive accent | `#E83A4A` |

**Semantic mappings:**
- Background: `linen`
- Surface (card, panel): `white` or `linen`
- Border: `meadow` at 25–35% opacity
- Primary text: `canopy`
- Secondary text: `meadow`
- Primary action: `lake`
- Secondary action: `pool`
- Highlight/warmth: `sun`
- Accent (use sparingly): `pop-red`

## Typography

Fonts should feel friendly, legible, and full of personality — not corporate, not childish.

**Recommended stack:**
- **Display/Heading:** *Fraunces* (optical-size serif with personality) or *Playfair Display* — editorial warmth
- **Body:** *DM Sans*, *Nunito*, or *Plus Jakarta Sans* — open, rounded, approachable
- **Mono:** *JetBrains Mono* or *IBM Plex Mono*

**Scale:** Strong heading hierarchy. Headings confident and warm, body text easy to read in sunlight.

**Rules:**
- Body base: 16–18px
- Heading line-height tight: 1.1–1.2
- Body line-height comfortable: 1.55–1.65
- Minimum weight 400 in UI contexts

## Layout & Spacing

**Philosophy:** Open and inviting. Elements should breathe. Think picnic blanket, not spreadsheet.

- 8px base grid
- Generous internal padding — components should feel spacious
- Section spacing substantial — content should feel unhurried
- Grid gutters: 24px desktop, 16px mobile
- Max content width: 1280px, comfortable reading column ~720px
- Touch targets minimum 44px

## Design Tokens Structure

```
{category}-{variant}-{modifier}
color-lake-light
spacing-section-lg
radius-card
```

## Commands

```bash
pnpm dev      # Start Storybook dev server at http://localhost:6006
pnpm build    # Build static Storybook to storybook-static/
```

## Toolchain

- **Storybook 10** with `@storybook/html-vite` — framework-agnostic HTML stories, Vite builder
- **No component framework** — stories return raw HTML strings
- **CSS only** — no preprocessor, no Tailwind

## File Organization

```
src/
  tokens/tokens.css   # All design tokens as CSS custom properties
  base.css            # Reset + typographic defaults, imports tokens
  components/         # One CSS file per component (BEM)
stories/
  tokens.stories.js   # Foundation — color swatches, type scale
  <component>.stories.js
.storybook/
  main.js             # Storybook config (framework, story globs)
  preview.js          # Global CSS imports, background/viewport presets
```

## Story Conventions

Stories are plain JS files. Each story `render()` returns an HTML string.

```js
export default { title: 'Components/Button' };

export const Primary = {
  render: () => `<button class="btn btn--primary">Label</button>`,
};
```

## Component CSS Conventions

BEM naming: `block__element--modifier`. One file per component in `src/components/`.

```css
/* src/components/button.css */
.btn { ... }
.btn--primary { background: var(--color-action); }
.btn--secondary { background: var(--color-action-alt); }
```

Import each component CSS in its story file, not in `preview.js`.
