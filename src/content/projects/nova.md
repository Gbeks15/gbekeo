---
title: Nova
tagline: Autonomous AI trading agent
summary: An autonomous AI trading agent, live in production. It scores setups, places trades, manages its own risk and logs every decision it makes.
group: solo
status: Live
order: 2
metric: Live in production, placing trades on a demo account
stack: [Python, FastAPI, Docker, Claude API, VPS]
---

## The problem

Good trading rules are easy to write down.
Following them every single time, without emotion, is the hard part.

## What I built

Nova is an agent that trades on its own, inside rules I set.

- scores each setup with AI, using Smart Money Concepts analysis
- executes trades and manages risk automatically
- manages the portfolio as a whole, not trade by trade
- live dashboards so I can see what it's doing at any moment
- a full audit trail of every decision and why it made it

## Why the audit trail matters

An agent you can't question is an agent you can't trust.
Every call Nova makes is recorded with its reasoning, so I can review it the same way I'd review a person.

## How it's built

- Python and FastAPI
- Claude API for setup scoring
- Docker, running 24/7 on a VPS

## My role

Designed, built and deployed solo. Execution logic, risk management, dashboards, infrastructure.

## Where it is now

Live in production, placing trades on a demo account.
