# gbekeo.com

My portfolio site. Static site built with Astro, served by Caddy in Docker, hosted on my VPS.

## Adding things

### A new project
Add one file to `src/content/projects/`, e.g. `my-new-thing.md`:

```md
---
title: My New Thing
tagline: One line under the title
summary: What it does, in one or two sentences. Shows on the card.
group: solo            # solo = Built solo, vista = Shipped at Vista
status: Live           # Live, Running, In progress or Shipped
order: 5               # lower shows first
metric: 300 users in week one
stack: [Python, FastAPI, Claude API]
cover: /screens/my-new-thing.png
screens:
  - { src: /screens/my-new-thing-2.png, caption: The review screen }
link: { label: Try it, url: "https://example.com" }
---

## The problem
...

## What I built
...
```

- Write something under the `---` and it gets its own page. Leave it empty and it's just a card.
- `draft: true` hides it without deleting it.

### Screenshots
Drop images in `public/screens/` and point `cover:` or `screens:` at them (e.g. `/screens/rift-dashboard.png`).
Blur anything private first: client names, account numbers, balances, P&L.
Without a cover, the card shows a terminal-style placeholder made from the stack.

### Now building log
Add a file to `src/content/now/`, e.g. `2026-10-12-nova.md`:

```md
---
date: 2026-10-12
project: Nova
note: Added a kill switch that pauses trading on drawdown.
---
```
The 6 newest show on the home page.

### Your details
Email, LinkedIn, CV and an optional booking link live in `src/site.config.ts`.
To replace the CV, overwrite `public/files/Gbeke-Odubanjo-CV.pdf`.

## Running locally
```bash
npm install
npm run dev        # http://localhost:4321
```

## Deploying to the VPS

### One-time setup
1. **DNS**: wherever gbekeo.com is registered, add two A records pointing to the VPS IP: `@` and `www`.
2. **Get the code onto the VPS**: push this folder to a private GitHub repo and `git clone` it on the VPS (easiest for updates), or copy it up with `scp`.
3. **Pick a mode**:
   - **Traefik already running** (e.g. alongside RIFT): `cp deploy/site.env.example deploy/site.env`, set the network and certresolver names to match your Traefik, then run `./deploy/deploy.sh traefik`
   - **Nothing using ports 80/443**: run `./deploy/deploy.sh standalone`. Caddy gets the HTTPS certificate automatically.

### Every update after that
Commit and push, then on the VPS:
```bash
./deploy/deploy.sh            # or: ./deploy/deploy.sh standalone
```
It pulls, rebuilds and restarts in about a minute. The site runs in its own container, separate from everything else on the box.
