# Format (dprint)
fmt:
    dprint fmt

# Lint (dprint check)
lint:
    dprint check

# Build static site
site:
    deno run --allow-read --allow-write scripts/build-site.ts

# Build and serve locally
dev: site
    open http://localhost:8000/references/
    deno run --allow-net --allow-read scripts/dev-server.ts

# Run all checks
build: lint

# Validate commits on branch and build — run before PR
verify:
    git std check --range main..HEAD
    just build
