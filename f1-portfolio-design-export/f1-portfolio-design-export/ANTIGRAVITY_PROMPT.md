# How to use this with Antigravity

1. Create a new Vite + React + Tailwind project (your usual MERN-adjacent frontend stack).
2. Paste the contents of `00_DESIGN_SYSTEM.md` into your `tailwind.config.js` (colors) and
   `index.css` (custom classes + font imports) first.
3. Give Antigravity a prompt like this (edit paths to match your project):

---
**Prompt for Antigravity:**

"Rebuild this F1-racing-themed portfolio site as React components using Tailwind CSS.
I'm giving you the actual rendered HTML (with real Tailwind classes and text content)
for each section — recreate them as clean, componentized JSX:

- Navigation.jsx (from 01_navigation.html)
- Hero.jsx (from 02_hero.html)
- About.jsx (from 03_about.html)
- Skills.jsx (from 04_skills.html)
- Projects.jsx (from 05_projects.html)
- Contact.jsx (from 06_contact.html)

Use the design tokens and custom utility classes from 00_DESIGN_SYSTEM.md
(colors: racing-red, electric-cyan, amber, carbon-gray, bg-base, bg-surface;
fonts: Orbitron for font-display, Rajdhani for font-heading, JetBrains Mono for font-mono;
custom classes: clip-slant, clip-slant-r, carbon-fiber, hud-pulse, btn-race).

Keep every bit of text content exactly as written in the source HTML.
Replace the `data:[TRUNCATED]` image placeholders with props so I can
swap in my own images later. Add smooth entrance animations (fade+slide)
using Framer Motion since the original used opacity/transform inline styles
suggesting scroll-triggered animation."

---

4. Feed the six HTML files **plus the matching screenshots in `screenshots/`** as attachments/context alongside this prompt — the screenshots show exact spacing, colors, and the racing HUD widgets (velocity/gear/tyre telemetry overlays on the hero image, progress bars on project cards, race history timeline, tyre-compound skill cards) that are easy to miss from HTML/classes alone.

Screenshot ↔ section mapping:
- `screenshots/05_hero_home.png` → Hero (`02_hero.html`) — note the live telemetry overlay boxes (Velocity, Gear, ERS Deploy, Tyres, Fuel/Lap, Engine) positioned on top of the racing photo
- `screenshots/01_about_driver.png` → About (`03_about.html`) — "THE DRIVER" heading, Career Telemetry stat grid, Race History timeline
- `screenshots/02_projects_top.png` + `screenshots/03_projects_full.png` → Projects (`05_projects.html`) — 6 project cards (P1–P6) in a 3-column grid, each with colored position badge, lap time, tech-stack progress bars
- `screenshots/04_skills_garage.png` → Skills (`04_skills.html`) — 3 "tyre compound" cards (Soft/Medium/Hard) with colored top border + glowing tyre icon
- `screenshots/06_contact_paddock.png` → Contact (`06_contact.html`) — centered "OPEN CHANNEL" heading, radio-dial icon, email/LinkedIn cards

5. Once Antigravity generates the components, test each section against the
   live site (f1-launch.preview.emergentagent.com) side-by-side to catch
   spacing/detail differences.
