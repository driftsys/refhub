# Format (dprint)
fmt:
    dprint fmt

# Lint (dprint check)
lint:
    dprint check

# Build static site
site:
    deno run --allow-read --allow-write --allow-env scripts/build-site.ts

# Build and serve locally
dev: site
    open http://localhost:8000/refs/
    deno run --allow-net --allow-read scripts/dev-server.ts

# Install Playwright test dependencies
setup-e2e:
    npm install
    npx playwright install chromium

# Run end-to-end tests (builds site first)
e2e: site
    npx playwright test

# Run e2e with headed browser (debugging)
e2e-headed: site
    npx playwright test --headed

# Run all checks
build: lint

# Validate commits on branch and build — run before PR
verify:
    git std check --range main..HEAD
    just build
