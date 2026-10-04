# gbekeo.com

Gbeke's portfolio site. Positions him as a Product Manager and AI builder: 8+ years shipping products at Vista Global, plus his own AI products built end to end.

## How the site works
- Astro static site. Built in Docker, served by Caddy, routed by Traefik (host network mode) on this VPS.
- Projects: one markdown file each in `src/content/projects/`. Frontmatter schema is in `src/content.config.ts`.
  - `group: solo` = Built solo (RIFT is always first, then Nova, then Elon). `group: vista` = Shipped at Vista.
  - A file with body text gets its own page at `/work/<filename>/`. No body = card only.
  - `draft: true` hides a project (Smart Mirror is on hold, so it's hidden).
- Screenshots go in `public/screens/` and are referenced as `/screens/name.png` in `cover:` or `screens:`.
- "Now building" log: one small file per update in `src/content/now/`.
- Contact details, CV and booking link: `src/site.config.ts`.
- Home page copy: `src/pages/index.astro`.

## Deploying
After any change, from `/opt/gbekeo`:
```
npm run build            # check it builds first (run `npm ci` once if node_modules is missing)
bash deploy/deploy.sh traefik
```
Then commit and push to GitHub (`Gbeks15/gbekeo`) so GitHub stays the source of truth.

## Voice rules (important)
The copy must sound like Gbeke, not like AI.
- Short sentences. Plain words. One idea per line where it helps.
- No em dashes. Use full stops, commas or colons.
- No corporate or self-promotional language. Avoid "leveraged", "spearheaded", "influenced", "passionate about", "synergy", "cutting-edge".
- Credibility through specifics and outcomes, not adjectives. Keep claims grounded and checkable.
- Active delivery language: built, shipped, launched, cut, saved.
- Warm and direct. A little punch is fine ("These days I don't just write the spec. I build the thing.").
- Core belief to keep consistent: the key to any product is understanding the problem it's trying to solve and the value it brings.

## Privacy
- Never show client or business names for Elon (say "two UK service businesses").
- Blur or crop out balances, P&L, account numbers, emails, phone numbers and customer names in screenshots.
- Nova trades a demo account. Never imply real-money returns.
