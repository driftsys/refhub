# RefHub Specification

RefHub is the DriftSys implicit fallback registry for standards, regulations,
and publications. It implements the MarkSpec registry API contract and publishes
a static browsing site. Deployed via GitHub Pages with no server-side
dependencies.

---

## Part 1 — Registry content

### 1.1 Domain organisation

The registry is organised into domain files under `registry/`. Each domain file
covers a coherent subject area (e.g., automotive, cybersecurity-privacy,
energy).

Each domain file shall contain:

- An H1 title
- A 2-3 sentence description of the domain scope
- A **Contents:** line linking to the sections present
- Up to three sections in order: `## Standard`, `## Regulation`,
  `## Publication`
- Entries sorted alphabetically by ID within each section
- Empty sections omitted

### 1.2 Entry format

Each entry shall have:

- A display ID matching `[A-Za-z0-9-]+`
- A title
- An abstract of 2-3 sentences describing intent and scope
- Mandatory metadata: `Document`, `URL`, `Label`, `Keywords`
- Optional metadata: `Derived-from`, `Status`, `Superseded-by`

### 1.3 Classification

Entries are classified into one of three types:

- **Standard** — normative technical specifications published by standards
  bodies or industry consortia (ISO, IEC, IEEE, SAE, RFCs, AUTOSAR, ASPICE)
- **Regulation** — legally binding rules (EU directives and regulations, UN
  regulations, national laws, US CFR)
- **Publication** — everything else: frameworks, guides, knowledge bases, vendor
  guidelines (NIST SPs, OWASP, MITRE ATT&CK, design systems)

---

## Part 2 — Static site

### 2.1 Build

The site is built by `scripts/build-site.ts` using Deno. The build parses
`registry/*.md` and generates:

- Prerendered HTML pages (landing, domain, entry)
- A JSON API (global index, per-domain indexes, per-entry detail, search index)
- JSON schemas describing the API

The build shall complete without network access. All dependencies (CSS, JS) are
vendored in `assets/vendor/`.

### 2.2 Deployment

The site is deployed to GitHub Pages via `.github/workflows/pages.yaml`. The
output directory is `_site/`. The output subdirectory is configurable via the
`REFHUB_SITE_PREFIX` environment variable (defaults to `/references`).

### 2.3 Relative paths

All internal links (CSS, JS, navigation, breadcrumbs, cross-domain references)
shall use relative paths. The site shall render correctly regardless of the
deployment base URL, including when served from the local filesystem.

---

## Part 3 — Pages

### 3.1 Landing page

The landing page shall display:

- Project title and description
- A search bar with client-side full-text search across all entries
- Total counts (domains, entries)
- A grid of domain cards, each showing title, entry count, and a truncated
  description

### 3.2 Domain page

Each domain page shall display:

- Breadcrumb navigation (RefHub > Domain)
- Domain title and entry count
- Domain description
- A table of entries grouped by section (Standard, Regulation, Publication) with
  columns: ID (linked), Title, Label badge

### 3.3 Entry page

Each entry page shall display:

- Breadcrumb navigation (RefHub > Domain > Entry ID)
- Entry ID and title
- Abstract
- Metadata as a definition list: Document, URL, Label, Keywords, Derived-from
  (linked when target exists), Status, Superseded-by (linked when target exists)
- Domain link and section name

---

## Part 4 — Search

### 4.1 Client-side search

Search shall run entirely in the browser using [MiniSearch]. The search index
(`api/search.json`) is fetched on first interaction.

### 4.2 Search fields

Search shall query: entry ID (boosted 3x), title (boosted 2x), keywords (boosted
1.5x), and domain title. Fuzzy matching and prefix matching shall be enabled.

### 4.3 Search results

Results shall display up to 20 matches. Each result shows the entry ID, title,
domain title, and label badge. Results support keyboard navigation (arrow keys,
Enter, Escape).

---

## Part 5 — JSON API

The site shall publish a read-only JSON API implementing the MarkSpec registry
contract. The API enables tooling to resolve reference entries, build
traceability links, and power client-side search. Schemas will eventually be
defined in the MarkSpec schemas repository.

### 5.1 Endpoints

- `api/index.json` — global index with all domains and entry summaries
- `api/{domain}/index.json` — per-domain index
- `api/{domain}/{entry-id}.json` — full entry detail
- `api/search.json` — search-optimised flat list

### 5.2 Schemas

JSON schemas shall be published at `schemas/` alongside the site:

- `schemas/entry/v1.json`
- `schemas/index/v1.json`
- `schemas/search/v1.json`

Schemas use `additionalProperties: true` for forward compatibility. Required
fields are the minimum set for a valid document. Schema definitions are
generated during build and published alongside the site.

[MiniSearch]: https://lucaong.github.io/minisearch/
