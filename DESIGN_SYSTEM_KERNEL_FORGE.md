# Kernel Forge Design System
## Duolingo-Inspired Educational Platform Design

### Overview
Kernel Forge adapts the proven Duolingo design system to create an educational, playful, and professional software development platform. The design emphasizes accessibility, clarity, and community.

---

## Color Palette

### Primary Colors (adapted for Kernel Forge)
| Color Name | Value | Duolingo Equivalent | Use Case |
|-----------|-------|-------------------|----------|
| Kernel Orange | `#FF6B35` | Ecto Green #58cc02 | Primary actions, main headings, CTAs |
| Kernel Mint | `#65D080` | Lingot Lime #a5ed6e | Outlined borders, links, accents |
| Kernel Blue | `#1cb0f6` | Macaw Blue #1cb0f6 | Secondary actions, alt states |
| Kernel Cream | `#faf8f3` | Paper White #ffffff | Page/card backgrounds |

### Neutral Palette
| Color Name | Value | Use Case |
|-----------|-------|----------|
| Graphite | `#3c3c3c` | Primary text, structural borders |
| Ash | `#777777` | Secondary text, navigation |
| Charcoal | `#4b4b4b` | Body text, icon outlines |
| Dark Navy | `#1a1410` | Deep headings, dark emphasis |

---

## Typography

### Font Families
- **Body/UI:** Inter (substitute for din-round)
  - Weights: 500 (regular), 700 (bold)
  - Sizes: 13px, 15px, 19px, 32px
  - Letter-spacing: +0.053em (0.8-1.7px)
  - Friendly, open, approachable tone

- **Headings:** Inter Extra-Bold (substitute for feather)
  - Weights: 800-900
  - Sizes: 32px, 48px, 64px
  - Letter-spacing: -0.02em at display sizes
  - Bold, confident, announcement tone

### Type Scale
| Role | Size | Line Height | Letter Spacing | Usage |
|------|------|-------------|----------------|-------|
| Caption | 13px | 1.23 | 0.69px | Small labels, badges |
| Body | 15px | 1.47 | 0.8px | Paragraphs, standard text |
| Heading Small | 19px | 1.33 | 1.01px | Section subheadings |
| Heading | 32px | 1.21 | 1.7px | Section titles |
| Display | 48-64px | 1.2 | -1.28px | Feature headlines |

---

## Spacing & Layout

### Base Unit: 4px
| Scale | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Micro-spacing |
| sm | 8px | Component padding |
| md | 12px | Element gaps, button padding |
| lg | 16px | Section padding |
| xl | 24px | Card padding |
| 2xl | 32px | Section separation |
| 3xl | 48px | Feature spacing |
| 4xl | 64px | Layout spacing |

### Layout Structure
- **Max Width:** 1200px
- **Section Gap:** 100px (vertical separation)
- **Card Padding:** 16-24px
- **Element Gap:** 12px
- **Border Radius:** Consistent 12px

---

## Components

### Primary Filled Button
**Style:** Kernel Orange fill, white text, thick bottom border

```
Background: #FF6B35
Text: white (#ffffff)
Border: 3px solid #D94D1F (darker orange)
Padding: 16px vertical, 24px horizontal
Radius: 12px
Font: Inter 700 at 15px
Letter-spacing: 0.8px
```

**States:**
- Hover: Slightly darker orange
- Active: Pressed effect (border effect)
- Disabled: Opacity 50%

### Outlined Button / Link
**Style:** Kernel Mint border, transparent fill, matching text

```
Background: transparent or white
Border: 2px solid #65D080
Text: #65D080
Padding: 16px vertical, 24px horizontal
Radius: 12px
Font: Inter 700 at 14-15px
```

**Usage:** Secondary actions, alt CTAs, inline links

### Section Heading
**Style:** Large, bold, confident

```
Font: Inter 800-900 at 48-64px
Letter-spacing: -0.02em (-1.28px at 64px)
Color: #FF6B35 (Kernel Orange) or #1a1410 (Dark Navy)
Margin: 100px top/bottom
No background
```

### Navigation
**Style:** Clean, minimal, sticky header

```
Height: 64px
Background: white or cream
Logo: Kernel Forge mascot + wordmark
Right: Language switcher
Border: 1px bottom in #e5e5e5
Position: sticky top
```

### Feature Section
**Style:** Two-column layout, text + illustration

```
Layout: Text on left, illustration on right (or alternate)
Text Column:
  - Heading: 32px Inter 700 in #1a1410 or #FF6B35
  - Paragraph: 15px Inter 500 in #4b4b4b
  - Optional CTA button below

Illustration Column:
  - Full-color flat cartoon character/scene
  - No gradient, pure solid colors
  - No frame or card container
  - Float directly on page

Spacing: 100px+ vertical gap between sections
```

### Card/Panel
**Style:** Border-heavy, no drop shadows

```
Background: white (#ffffff)
Border: 1px solid #3c3c3c or 2px solid #65D080
Padding: 16-24px
Radius: 12px
No box-shadow
```

### Banner (Hero Image)
**Style:** Full-width, reduced height

```
Height: 200px (mobile) / 250px (tablet/desktop)
Width: 100%
Border Bottom: 4px solid #FF6B35
Overlay: Gradient from black/50% to transparent
Rounded: Only if needed, typically sharp corners
```

---

## Imagery & Illustrations

### Style Guide
- **Flat vector illustrations** with no gradients
- **Solid colors only** from the brand palette
- **Kernel Forge mascot** (penguin + Creeper) appears prominently
- **Human characters** in playful scenarios
- **Bright, saturated colors** — Kernel Orange, Mint, Blue, Yellow
- **Full-color renderings** — never monochrome
- **Positioned beside text** — not as backgrounds

### Examples
- Student running toward Kernel Forge Academy building
- Penguin with Minecraft Creeper
- Developers collaborating around code
- Learning moments, celebrations, growth

### Logo Usage
- **Header:** Kernel Forge mascot (small, ~40px)
- **Brand Moment:** Full mascot illustration with wordmark
- **Consistency:** Always paired with orange accent

---

## Do's and Don'ts

### ✅ DO
- Use #FF6B35 for all primary CTAs and large headings
- Use #65D080 for outlined links, secondary buttons, and borders
- Set all border-radius to 12px consistently
- Use thick 2-3px solid borders instead of drop shadows
- Pair every feature section with an illustration
- Apply wide letter-spacing (+0.053em) for approachable feel
- Use flat, vector-style illustrations with solid colors

### ❌ DON'T
- Use drop shadows for depth — use borders instead
- Use gradients — system is strictly flat solid colors
- Use card containers with backgrounds to separate content — use white space
- Use border-radius values other than 12px
- Use feather/display font for body text
- Introduce colors outside the established palette
- Use #65D080 as a filled background — it's border/outline only

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --color-kernel-orange: #FF6B35;
  --color-kernel-mint: #65D080;
  --color-kernel-blue: #1cb0f6;
  --color-kernel-cream: #faf8f3;
  --color-graphite: #3c3c3c;
  --color-ash: #777777;
  --color-charcoal: #4b4b4b;

  /* Typography */
  --text-caption: 13px;
  --text-body: 15px;
  --text-heading: 32px;
  --text-display: 48px;

  /* Spacing */
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;

  /* Borders */
  --radius-default: 12px;
  --border-thin: 1px;
  --border-thick: 2px;
  --border-extra-thick: 3px;

  /* Layout */
  --max-width: 1200px;
  --section-gap: 100px;
}
```

---

## Page Layout Template

### Homepage Flow
1. **Header** (sticky, 64px)
   - Logo + navigation left
   - Language switcher right
   - Minimal, clean

2. **Hero Section**
   - Academy poster banner (200-250px)
   - Below banner: headline + CTA

3. **Feature Sections** (100px gaps)
   - Section 1: Illustration left, text right
   - Section 2: Text left, illustration right
   - Continue alternating

4. **CTA Section**
   - Centered headline
   - Dual button stack (primary + secondary)
   - Orange accent emphasis

5. **Footer**
   - Links, legal, social
   - Language selector
   - Minimal, text-only

---

## Responsive Breakpoints

- **Mobile:** 0-640px — Single column, full-width
- **Tablet:** 641-1024px — 2 columns, reduced padding
- **Desktop:** 1025px+ — Full 2-column layouts, max 1200px width

---

## Dark Mode Adaptation

- Background: #1a1410 (very dark, warm tint)
- Text: #faf8f3 (cream — inverted from light mode)
- Primary Orange: Slightly brighter #FF6B35
- Mint: #65D080 (maintained)
- Borders: #3c3c3c on dark

---

## Reference

**Inspired by:** Duolingo Design System
**Adapted for:** Kernel Forge Academy (educational software development)
**Philosophy:** Playful, accessible, professional, community-focused

For full Duolingo reference: See DESIGN.md
