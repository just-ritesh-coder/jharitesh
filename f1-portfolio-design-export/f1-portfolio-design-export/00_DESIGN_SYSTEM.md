# F1-Themed Portfolio — Design System Reference
(Extracted from live Emergent build: f1-launch.preview.emergentagent.com)

## Original React project structure (from dev overlay metadata)
```
/app/frontend/src/components/portfolio/
  Navigation.jsx
  Hero.jsx
  About.jsx
  Skills.jsx
  Projects.jsx
  Contact.jsx
App.jsx
```

## Fonts (Google Fonts)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Utility class | font-family | usage |
|---|---|---|
| `.font-display` | "Orbitron", sans-serif; letter-spacing: 0.08em | big headline / hero numbers |
| `.font-heading` | "Rajdhani", sans-serif; letter-spacing: 0.02em | section headings |
| `.font-mono` | "JetBrains Mono", monospace | labels, HUD-style text, nav links |

## Color Tokens (add to tailwind.config.js `theme.extend.colors`)
```js
colors: {
  'racing-red': '#E10600',
  'electric-cyan': '#00A3E0',
  'amber': '#F3A900',
  'carbon-gray': '#1C1C21',
  'carbon-line': '#24242B',
  'bg-base': '#0A0A0C',
  'bg-surface': '#121216',
  'text-primary': '#FFFFFF',
  'text-secondary': '#A0A0A5',
  'text-muted': '#5C5C66',
},
```
Glow shadows used inline: `rgba(225,6,0,0.45)` (red-glow), `rgba(0,163,224,0.4)` (cyan-glow)

Base radius: `0.125rem` (very sharp, near-square corners — matches the racing/HUD aesthetic)

## Custom utility classes (add to global CSS)
```css
.clip-slant {
  clip-path: polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
}
.clip-slant-r {
  clip-path: polygon(14px 0, 100% 0, 100% 100%, 0 100%);
}

.carbon-fiber {
  background-image:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 4px),
    repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 4px);
}

.hud-pulse {
  animation: hudPulse 1.4s ease-in-out infinite;
}
@keyframes hudPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px currentColor; }
  50% { opacity: 0.4; box-shadow: 0 0 2px currentColor; }
}

.btn-race {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.btn-race::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.65,0,0.35,1);
  z-index: 1;
}
.btn-race:hover::before { transform: translateX(100%); }
.btn-race > * { position: relative; z-index: 2; }
```
There are also `grid-lines-anim` and `speed-streaks` classes used as decorative background layers in the Hero section (animated grid + motion streak overlays) — recreate as subtle CSS animated background gradients/lines since exact keyframes weren't captured in this export; ask Antigravity to design a plausible racing-HUD version if the originals aren't visible.

## Section IDs / anchors
`#home` · `#about` · `#projects` · `#skills` · `#contact`
Nav labels use racing terminology: "S1 · Home", "S2 · Driver", "S3 · Grand Prix", "S4 · Garage", "S5 · Paddock"

## Overall aesthetic
- Pure black / near-black background (`#0A0A0C`), racing red (`#E10600`) and electric cyan (`#00A3E0`) as accents
- Sharp-edged "slant clip" cards/buttons (F1 livery-style diagonal cuts), not rounded
- HUD/telemetry feel: monospace labels, live status dot with pulse animation, uppercase tracked-out text
- Backdrop blur on fixed nav (`bg-black/70 backdrop-blur-xl`)

## Files in this folder
- `01_navigation.html` → Navigation.jsx markup
- `02_hero.html` → Hero.jsx markup (`#home` section)
- `03_about.html` → About.jsx markup (`#about` section)
- `04_skills.html` → Skills.jsx markup (`#skills` section)
- `05_projects.html` → Projects.jsx markup (`#projects` section)
- `06_contact.html` → Contact.jsx markup (`#contact` section)

All files are the **actual rendered DOM** (Tailwind classes + real text content), with image `src`/font `url()` data replaced by `[TRUNCATED]` placeholders (they were huge base64 blobs — swap in your real images/icons).
