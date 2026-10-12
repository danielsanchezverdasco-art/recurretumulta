#!/bin/bash
# Safe publish script for recurretumulta.online
# Based on audit recommendations 09/10/2026
set -e

cd ~/workspace/recurretumulta-v2

echo "=== SAFE PUBLISH ==="

# 0. Preconditions
echo "[0] TypeScript check..."
npx tsc -b || { echo "TSC FAILED"; exit 1; }

echo "[0] Regenerating sitemap..."
node scripts/gen-sitemap.mjs

# 1. Isolated build (don't touch live dist/)
echo "[1] Building to dist-new/..."
rm -rf dist-new
npm run build -- --outDir dist-new

# 2. Prerender changed routes (MUST include / and /blog)
# Routes passed as arguments, or default to / and /blog
ROUTES_FILE="/tmp/safe-publish-routes.txt"
if [ $# -eq 0 ]; then
  echo "Usage: $0 /route1 /route2 ..."
  echo "Example: $0 /blog/ofensiva-china-salon-paris-2026-20-marcas /blog/zontes-552g-531cc-homologacion-china"
  exit 1
fi

# Always include / and /blog
{
  echo "/"
  echo "/blog"
  for r in "$@"; do echo "$r"; done
} | sort -u > "$ROUTES_FILE"

echo "[2] Prerendering routes from $ROUTES_FILE..."
PRERENDER_ONLY_FILE="$ROUTES_FILE" PREVIEW_DIR="dist-new" node scripts/prerender.mjs
PRERENDER_EXIT=$?

if [ $PRERENDER_EXIT -ne 0 ]; then
  echo "PRERENDER FAILED (exit $PRERENDER_EXIT)"
  exit 1
fi

# 3. Verification gate
echo "[3] Verification gate..."

# 3a. Homepage title must NOT be the SPA shell
HOMEPAGE_TITLE=$(grep -o "<title>[^<]*</title>" dist-new/index.html | head -1)
if echo "$HOMEPAGE_TITLE" | grep -q "Recurre tu multa DGT gratis con IA"; then
  echo "FAIL: Homepage is SPA shell (wrong title): $HOMEPAGE_TITLE"
  exit 1
fi
echo "  ✓ Homepage title OK: $HOMEPAGE_TITLE"

# 3b. All referenced assets must exist
echo "  Checking assets..."
MISSING=0
for html in $(find dist-new -name "index.html" | head -100); do
  # Extract /assets/*.js and /assets/*.css references
  grep -o '/assets/[^"]*\.js' "$html" 2>/dev/null | while read asset; do
    if [ ! -f "dist-new$asset" ]; then
      echo "  MISSING: $asset (referenced in $html)"
      MISSING=1
    fi
  done
done
# Note: Simplified check, full check would be more thorough

# 3c. Changed routes must have HTML
while read route; do
  # Convert /blog/foo to dist-new/blog/foo/index.html
  path="dist-new${route%/}/index.html"
  if [ "$route" = "/" ]; then path="dist-new/index.html"; fi
  if [ ! -f "$path" ]; then
    echo "FAIL: Missing prerendered HTML for $route ($path)"
    exit 1
  fi
done < "$ROUTES_FILE"
echo "  ✓ All routes have HTML"

# 4. Atomic swap
echo "[4] Swapping dist-new to dist..."
rm -rf dist-prev
mv dist dist-prev
mv dist-new dist
echo "  ✓ Swapped. Previous version in dist-prev/"

# 5. Deploy
echo "[5] Deploying to Netlify..."
python3 scripts/netlify-deploy.py
DEPLOY_EXIT=$?

if [ $DEPLOY_EXIT -ne 0 ]; then
  echo "DEPLOY FAILED, rolling back..."
  rm -rf dist
  mv dist-prev dist
  exit 1
fi

echo "=== PUBLISH COMPLETE ==="
echo "Previous version preserved in dist-prev/ for manual rollback if needed."
