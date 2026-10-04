---
title: RIFT Trade Journal
tagline: Reflective Intelligence for Traders
summary: A trading journal with an AI coach that judges each trade against your own rules, not generic stats.
group: solo
status: Live
order: 1
metric: 1,000+ trades synced and reviewed
stack: [React, Vite, Tailwind, FastAPI, PostgreSQL, Redis, Celery, Claude API, TradingView, Docker, Traefik]
links:
  - { label: Visit RIFT, url: "https://www.rifttradejournal.com/" }
  - { label: Try the live demo, url: "https://demo.rifttradejournal.com/dashboard", card: Live demo }
---

## The problem

Most trading journals tell you your win rate.
They don't tell you why you keep making the same mistake.

And most AI coaches would say the same thing to every trader on the planet.

## What I built

RIFT pulls in your trade history automatically from your broker, or from a CSV, and turns it into something you can actually learn from:

- performance analytics
- a review screen for every trade, with the chart
- an emotional journal
- setup grading against your own written rules

## Meet Mira

Mira is the AI coach running through all of it.

She knows your strategy, not just your numbers. She uses your vocabulary, reads the chart around each trade and checks it against the playbook you wrote.

So instead of "your win rate is 54%", she says "you took this without the confirmation your rules require."

She'll also tell you when your own grading system isn't predicting anything. Most tools would avoid saying that.

## How it's built

- Frontend: React, Vite, Tailwind, dark and light themes
- Backend: FastAPI and PostgreSQL
- Background sync and AI jobs: Redis and Celery
- AI: Claude via the Anthropic API
- Charts: TradingView Advanced Charts, under licence
- Infrastructure: Docker Compose behind Traefik, on a VPS

## My role

All of it. Product, design, code, infrastructure.
RIFT is now set up as a company, RIFT Trade Journal Limited.

## Where it is now

Live and in daily use, syncing real cTrader accounts with over 1,000 trades reviewed. Access is by request, and the public demo is open to anyone.
