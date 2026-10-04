#!/usr/bin/env bash
# Run on the VPS from the project folder:   ./deploy/deploy.sh
# Pulls the latest changes (if this is a git clone), rebuilds and restarts the site.
set -euo pipefail
cd "$(dirname "$0")/.."

MODE="${1:-traefik}"   # traefik (default) or standalone
COMPOSE="deploy/docker-compose.${MODE}.yml"
[ -f "$COMPOSE" ] || { echo "Unknown mode: $MODE (use traefik or standalone)"; exit 1; }

if [ -d .git ]; then git pull --ff-only; fi

ENV_ARGS=()
[ -f deploy/site.env ] && ENV_ARGS=(--env-file deploy/site.env)

docker compose "${ENV_ARGS[@]}" -f "$COMPOSE" up -d --build
docker image prune -f >/dev/null
echo "Deployed. Check https://gbekeo.com"
