#!/usr/bin/env -S deno run --allow-read --allow-write
// scripts/build-site.ts — Build RefHub static registry website
// Parses registry/*.md → JSON API + prerendered HTML

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Entry {
  id: string;
  title: string;
  abstract: string;
  domain: string;
  domainTitle: string;
  section: string;
  document: string;
  url: string;
  label?: string;
  keywords?: string[];
  status?: string;
  supersededBy?: string;
  derivedFrom?: string;
}

interface Section {
  name: string;
  entries: Entry[];
}

interface Domain {
  slug: string;
  title: string;
  description: string;
  sections: Section[];
}

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

function parseDomainFile(slug: string, content: string): Domain {
  const lines = content.split("\n");
  let i = 0;

  // H1 — domain title
  if (!lines[i]?.startsWith("# ")) {
    throw new Error(`${slug}.md: expected H1 on line 1`);
  }
  const title = lines[i].slice(2).trim();
  i++;

  // Skip blank lines after H1
  while (i < lines.length && lines[i].trim() === "") i++;

  // Description — lines until **Contents:** or first ##
  const descLines: string[] = [];
  while (
    i < lines.length &&
    !lines[i].startsWith("## ") &&
    !lines[i].startsWith("**Contents:**")
  ) {
    descLines.push(lines[i]);
    i++;
  }
  const description = descLines
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ");

  // Skip **Contents:** line and blanks
  if (lines[i]?.startsWith("**Contents:**")) i++;
  while (i < lines.length && lines[i].trim() === "") i++;

  // Sections
  const sections: Section[] = [];
  while (i < lines.length) {
    if (!lines[i].startsWith("## ")) {
      i++;
      continue;
    }
    const sectionName = lines[i].slice(3).trim();
    i++;
    while (i < lines.length && lines[i].trim() === "") i++;

    const sectionEntries: Entry[] = [];
    while (i < lines.length && !lines[i].startsWith("## ")) {
      if (lines[i].match(/^- \[([A-Za-z0-9-]+)\] /)) {
        const entry = parseEntry(lines, i, slug, title, sectionName);
        sectionEntries.push(entry.entry);
        i = entry.nextLine;
      } else {
        i++;
      }
    }
    sections.push({ name: sectionName, entries: sectionEntries });
  }

  return { slug, title, description, sections };
}

function parseEntry(
  lines: string[],
  start: number,
  domain: string,
  domainTitle: string,
  section: string,
): { entry: Entry; nextLine: number } {
  let i = start;

  // First line: - [ID] Title start
  const match = lines[i].match(/^- \[([A-Za-z0-9-]+)\] (.+)/);
  if (!match) throw new Error(`Expected entry at line ${i + 1}: ${lines[i]}`);
  const id = match[1];
  const titleParts = [match[2].trim()];
  i++;

  // Multi-line title: indented lines until blank line
  while (i < lines.length && lines[i].trim() !== "" && lines[i].startsWith("  ") && !isMetadataLine(lines[i])) {
    titleParts.push(lines[i].trim());
    i++;
  }
  const title = titleParts.join(" ");

  // Skip blank lines
  while (i < lines.length && lines[i].trim() === "") i++;

  // Abstract: indented non-blank lines until blank line or metadata
  const abstractParts: string[] = [];
  while (
    i < lines.length &&
    lines[i].trim() !== "" &&
    lines[i].startsWith("  ") &&
    !isMetadataLine(lines[i])
  ) {
    abstractParts.push(lines[i].trim());
    i++;
  }
  const abstract = abstractParts.join(" ");

  // Skip blank lines before metadata
  while (i < lines.length && lines[i].trim() === "") i++;

  // Metadata block
  const metadata: Record<string, string> = {};
  while (
    i < lines.length &&
    lines[i].trim() !== "" &&
    lines[i].startsWith("  ")
  ) {
    const line = lines[i].trim().replace(/\\$/, "");
    const metaMatch = line.match(
      /^(Document|URL|Label|Keywords|Status|Superseded-by|Derived-from):\s*(.*)/,
    );
    if (metaMatch) {
      const key = metaMatch[1];
      let value = metaMatch[2].trim();

      // Handle value on next line (e.g., URL wrapping)
      if (value === "") {
        i++;
        if (i < lines.length && lines[i].startsWith("  ")) {
          value = lines[i].trim().replace(/\\$/, "");
          i++;
        }
      } else {
        i++;
      }

      // Handle continuation lines (Keywords wrapping, etc.)
      while (
        i < lines.length &&
        lines[i].startsWith("  ") &&
        lines[i].trim() !== "" &&
        !isMetadataLine(lines[i])
      ) {
        value += " " + lines[i].trim().replace(/\\$/, "");
        i++;
      }

      metadata[key] = value;
    } else {
      // Continuation of previous metadata (shouldn't happen with our parser)
      i++;
    }
  }

  // Strip angle brackets from URL
  const url = (metadata["URL"] || "")
    .replace(/^</, "")
    .replace(/>$/, "");

  // Parse keywords into array
  const keywordsRaw = metadata["Keywords"];
  const keywords = keywordsRaw
    ? keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean)
    : undefined;

  const entry: Entry = {
    id,
    title,
    abstract,
    domain,
    domainTitle,
    section,
    document: metadata["Document"] || "",
    url,
    ...(metadata["Label"] ? { label: metadata["Label"] } : {}),
    ...(keywords ? { keywords } : {}),
    ...(metadata["Status"] ? { status: metadata["Status"] } : {}),
    ...(metadata["Superseded-by"]
      ? { supersededBy: metadata["Superseded-by"] }
      : {}),
    ...(metadata["Derived-from"]
      ? { derivedFrom: metadata["Derived-from"] }
      : {}),
  };

  // Skip trailing blanks
  while (i < lines.length && lines[i]?.trim() === "") i++;

  return { entry, nextLine: i };
}

function isMetadataLine(line: string): boolean {
  return /^\s+(Document|URL|Label|Keywords|Status|Superseded-by|Derived-from):/.test(
    line,
  );
}

// ---------------------------------------------------------------------------
// JSON Output
// ---------------------------------------------------------------------------

// Schema URL base — published alongside the site
const SCHEMA_BASE = "./schemas";

interface IndexJson {
  $schema: string;
  scope: string;
  generated: string;
  count: number;
  domains?: {
    slug: string;
    title: string;
    description: string;
    count: number;
    sections: string[];
  }[];
  entries: {
    id: string;
    title: string;
    domain: string;
    section: string;
    label?: string;
    url: string;
  }[];
}

interface EntryJson extends Entry {
  $schema: string;
}

function buildEntryJson(entry: Entry): EntryJson {
  return { $schema: `${SCHEMA_BASE}/entry/v1.json`, ...entry };
}

function buildGlobalIndex(
  domains: Domain[],
  allEntries: Entry[],
  now: string,
): IndexJson {
  return {
    $schema: `${SCHEMA_BASE}/index/v1.json`,
    scope: "global",
    generated: now,
    count: allEntries.length,
    domains: domains.map((d) => ({
      slug: d.slug,
      title: d.title,
      description: d.description,
      count: d.sections.reduce((n, s) => n + s.entries.length, 0),
      sections: d.sections.map((s) => s.name),
    })),
    entries: allEntries.map(summaryEntry),
  };
}

function buildDomainIndex(domain: Domain, now: string): IndexJson {
  const entries = domain.sections.flatMap((s) => s.entries);
  return {
    $schema: `${SCHEMA_BASE}/index/v1.json`,
    scope: domain.slug,
    generated: now,
    count: entries.length,
    entries: entries.map(summaryEntry),
  };
}

function summaryEntry(
  e: Entry,
): IndexJson["entries"][number] {
  return {
    id: e.id,
    title: e.title,
    domain: e.domain,
    section: e.section,
    ...(e.label ? { label: e.label } : {}),
    url: e.url,
  };
}

// ---------------------------------------------------------------------------
// JSON Schemas
// ---------------------------------------------------------------------------

function entrySchemaV1(): object {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "entry/v1.json",
    title: "RefHub Entry",
    description: "A single reference entry (standard, regulation, or publication).",
    type: "object",
    required: ["id", "title", "abstract", "document", "url"],
    properties: {
      $schema: { type: "string" },
      id: { type: "string", pattern: "^[A-Za-z0-9-]+$", description: "Unique entry identifier (slug)." },
      title: { type: "string", description: "Full title." },
      abstract: { type: "string", description: "2-3 sentence description of intent and scope." },
      domain: { type: "string", description: "Domain slug." },
      domainTitle: { type: "string", description: "Human-readable domain title." },
      section: { type: "string", description: "Section name (Standard, Regulation, Publication)." },
      document: { type: "string", description: "Official document name and version." },
      url: { type: "string", format: "uri", description: "URL to the official source." },
      label: { type: "string", description: "Entry classification." },
      keywords: { type: "array", items: { type: "string" }, description: "Topic tags." },
      status: { type: "string", description: "e.g. Superseded." },
      supersededBy: { type: "string", description: "ID of the replacement entry." },
      derivedFrom: { type: "string", description: "ID of the parent standard." },
    },
    additionalProperties: true,
  };
}

function indexSchemaV1(): object {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "index/v1.json",
    title: "RefHub Index",
    description: "Global or per-domain index of reference entries.",
    type: "object",
    required: ["scope", "generated", "count", "entries"],
    properties: {
      $schema: { type: "string" },
      scope: { type: "string", description: "\"global\" or a domain slug." },
      generated: { type: "string", format: "date-time" },
      count: { type: "integer", minimum: 0 },
      domains: {
        type: "array",
        description: "Present only in the global index.",
        items: {
          type: "object",
          required: ["slug", "title", "count"],
          properties: {
            slug: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            count: { type: "integer", minimum: 0 },
            sections: { type: "array", items: { type: "string" } },
          },
          additionalProperties: true,
        },
      },
      entries: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "title", "domain", "url"],
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            domain: { type: "string" },
            section: { type: "string" },
            label: { type: "string" },
            url: { type: "string", format: "uri" },
          },
          additionalProperties: true,
        },
      },
    },
    additionalProperties: true,
  };
}

interface SearchEntry {
  id: string;
  title: string;
  domain: string;
  domainTitle: string;
  section: string;
  label?: string;
  keywords?: string[];
}

function buildSearchIndex(allEntries: Entry[]): { entries: SearchEntry[] } {
  return {
    entries: allEntries.map((e) => ({
      id: e.id,
      title: e.title,
      domain: e.domain,
      domainTitle: e.domainTitle,
      section: e.section,
      ...(e.label ? { label: e.label } : {}),
      ...(e.keywords ? { keywords: e.keywords } : {}),
    })),
  };
}

// ---------------------------------------------------------------------------
// HTML Templates
// ---------------------------------------------------------------------------

// Output subdirectory — configurable via env for CI
const SITE_PREFIX = Deno.env.get("REFHUB_SITE_PREFIX") ?? "/references";

// Relative root prefix, computed per page depth (0 = landing, 1 = domain/entry)
function relRoot(depth: number): string {
  return depth === 0 ? "." : "..";
}

function entrySlug(id: string): string {
  return id.toLowerCase();
}

function layoutHtml(
  title: string,
  content: string,
  depth: number,
  breadcrumbs?: { label: string; href?: string }[],
): string {
  const root = relRoot(depth);
  const crumbs = breadcrumbs
    ? `<nav aria-label="breadcrumb"><ul>${breadcrumbs
        .map((b, i) =>
          i === breadcrumbs.length - 1
            ? `<li>${esc(b.label)}</li>`
            : `<li><a href="${b.href}">${esc(b.label)}</a></li>`,
        )
        .join("")}</ul></nav>`
    : "";

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="base-path" content="${root}">
  <title>${esc(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${root}/assets/vendor/pico.classless.min.css">
  <link rel="stylesheet" href="${root}/assets/style.css">
</head>
<body>
  <header>
    <nav>
      <ul><li><a href="${root}/"><strong>RefHub</strong></a></li></ul>
      <ul><li><a href="https://github.com/driftsys/refhub" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a></li></ul>
    </nav>
  </header>
  <main>
    ${crumbs}
    ${content}
  </main>
  <footer>
    <small>
      <a href="https://driftsys.github.io">DriftSys</a> &middot;
      <a href="https://github.com/driftsys/refhub">Source</a> &middot;
      MIT License
    </small>
  </footer>
</body>
</html>`;
}

function landingPageHtml(
  domains: Domain[],
  totalEntries: number,
): string {
  const totalDomains = domains.length;

  const domainCards = domains
    .map((d) => {
      const count = d.sections.reduce((n, s) => n + s.entries.length, 0);
      const desc = d.description
        ? `<p>${esc(truncate(d.description, 120))}</p>`
        : "";
      return `<article class="domain-card">
        <a href="./${d.slug}/">
          <hgroup>
            <h3>${esc(d.title)}</h3>
            <p><small>${count} reference${count !== 1 ? "s" : ""}</small></p>
          </hgroup>
          ${desc}
        </a>
      </article>`;
    })
    .join("\n");

  const content = `
    <p class="lead">DriftSys reference registry — standards, regulations, and process models.</p>

    <div class="filter-bar">
      <input type="search" id="search-input" placeholder="Search ${totalEntries} references\u2026" autocomplete="off">
    </div>
    <div id="search-results" class="search-results" hidden></div>

    <p class="stats">${totalDomains} domains &middot; ${totalEntries} references</p>

    <div class="grid-domains">
      ${domainCards}
    </div>

    <script type="module" src="./assets/search.js"></script>`;

  return layoutHtml("RefHub — DriftSys Reference Registry", content, 0);
}

function domainPageHtml(
  domain: Domain,
  entryMap: Map<string, Entry>,
): string {
  const entryCount = domain.sections.reduce(
    (n, s) => n + s.entries.length,
    0,
  );

  const desc = domain.description
    ? `<p>${esc(domain.description)}</p>`
    : "";

  let tableRows = "";
  for (const section of domain.sections) {
    tableRows += `<tr class="section-row"><td colspan="3"><strong>${esc(section.name)}</strong></td></tr>\n`;
    for (const entry of section.entries) {
      const badge = entry.label ? labelBadge(entry.label) : "";
      const statusCls = entry.status === "Superseded" ? ' class="superseded"' : "";
      tableRows += `<tr${statusCls}>
        <td><code><a href="./${entrySlug(entry.id)}.html">${esc(entry.id)}</a></code></td>
        <td>${esc(entry.title)}</td>
        <td>${badge}</td>
      </tr>\n`;
    }
  }

  const content = `
    <hgroup>
      <h1>${esc(domain.title)}</h1>
      <p>${entryCount} reference${entryCount !== 1 ? "s" : ""}</p>
    </hgroup>
    ${desc}

    <table role="grid">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Label</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>`;

  return layoutHtml(
    `${domain.title} — RefHub`,
    content,
    1,
    [
      { label: "RefHub", href: "../" },
      { label: domain.title },
    ],
  );
}

function entryPageHtml(
  entry: Entry,
  entryMap: Map<string, Entry>,
): string {
  const dlItems: string[] = [];

  dlItems.push(`<dt>Document</dt><dd>${esc(entry.document)}</dd>`);
  dlItems.push(
    `<dt>URL</dt><dd><a href="${esc(entry.url)}" rel="noopener">${esc(entry.url)}</a></dd>`,
  );
  if (entry.label) {
    dlItems.push(`<dt>Label</dt><dd>${labelBadge(entry.label)}</dd>`);
  }
  if (entry.keywords?.length) {
    dlItems.push(
      `<dt>Keywords</dt><dd>${entry.keywords.map((k) => `<kbd>${esc(k)}</kbd>`).join(" ")}</dd>`,
    );
  }
  if (entry.derivedFrom) {
    const target = entryMap.get(entry.derivedFrom);
    const link = target
      ? `<a href="../${target.domain}/${entrySlug(target.id)}.html"><code>${esc(entry.derivedFrom)}</code></a>`
      : `<code>${esc(entry.derivedFrom)}</code>`;
    dlItems.push(`<dt>Derived from</dt><dd>${link}</dd>`);
  }
  if (entry.status) {
    dlItems.push(`<dt>Status</dt><dd><mark>${esc(entry.status)}</mark></dd>`);
  }
  if (entry.supersededBy) {
    const target = entryMap.get(entry.supersededBy);
    const link = target
      ? `<a href="../${target.domain}/${entrySlug(target.id)}.html"><code>${esc(entry.supersededBy)}</code></a>`
      : `<code>${esc(entry.supersededBy)}</code>`;
    dlItems.push(`<dt>Superseded by</dt><dd>${link}</dd>`);
  }

  const content = `
    <article>
      <hgroup>
        <h1><code>${esc(entry.id)}</code></h1>
        <p>${esc(entry.title)}</p>
      </hgroup>

      <p>${esc(entry.abstract)}</p>

      <dl>
        ${dlItems.join("\n        ")}
      </dl>

      <p><small>Domain: <a href="../${entry.domain}/">${esc(entry.domainTitle)}</a> &middot; ${esc(entry.section)}</small></p>
    </article>`;

  return layoutHtml(
    `${entry.id} — RefHub`,
    content,
    1,
    [
      { label: "RefHub", href: "../" },
      { label: entry.domainTitle, href: "./" },
      { label: entry.id },
    ],
  );
}

function labelBadge(label: string): string {
  const cls = label.toLowerCase().replace(/\s+/g, "-");
  return `<span class="badge badge-${cls}">${esc(label)}</span>`;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "\u2026" : s;
}

// ---------------------------------------------------------------------------
// CSS
// ---------------------------------------------------------------------------

function styleCss(): string {
  return `/* RefHub — MarkSpec token overrides on Pico CSS classless */

:root {
  /* Typography */
  --pico-font-family: "IBM Plex Sans", "Segoe UI", "Helvetica Neue",
    "DejaVu Sans", sans-serif;
  --pico-font-family-monospace: "IBM Plex Mono", "Cascadia Mono", "SF Mono",
    "DejaVu Sans Mono", monospace;
  --pico-font-size: 100%;
  --pico-line-height: 1.6;
  --pico-font-weight: 400;

  /* Colors — MarkSpec document palette */
  --pico-color: #1a1a1a;
  --pico-h1-color: #1a1a1a;
  --pico-h2-color: #1a1a1a;
  --pico-h3-color: #1a1a1a;
  --pico-muted-color: #6b6b6b;
  --pico-primary: #0072b2;
  --pico-primary-hover: #005580;
  --pico-primary-focus: rgba(0, 114, 178, 0.15);
  --pico-secondary: #6b6b6b;
  --pico-code-background-color: #f5f5f5;
  --pico-muted-border-color: #d4d4d4;
  --pico-background-color: #ffffff;
  --pico-card-background-color: #ffffff;
  --pico-card-border-color: #d4d4d4;

  /* Spacing — tighter than Pico defaults */
  --pico-block-spacing-vertical: 1rem;
  --pico-block-spacing-horizontal: 1.25rem;
}

/* Headings */
h1 { font-weight: 600; }
h2 { font-weight: 600; }
h3 { font-weight: 600; }

/* Lead text (landing page) */
.lead {
  font-size: 1.1rem;
  color: var(--pico-muted-color);
  margin-bottom: 1.5rem;
}

/* GitHub icon in nav */
header nav svg {
  vertical-align: -0.15em;
  opacity: 0.6;
  transition: opacity 0.15s;
}
header nav a:hover svg { opacity: 1; }

/* Breadcrumb nav */
nav[aria-label="breadcrumb"] ul {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  padding: 0;
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
  color: var(--pico-muted-color);
}
nav[aria-label="breadcrumb"] li + li::before {
  content: "›";
  margin-right: 0.25rem;
}

/* Stats line */
.stats {
  color: var(--pico-muted-color);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

/* Domain card grid */
.grid-domains {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.domain-card {
  margin: 0;
  padding: 0;
}
.domain-card a {
  display: block;
  padding: 1rem 1.25rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--pico-muted-border-color);
  border-radius: 0.375rem;
  transition: border-color 0.15s;
}
.domain-card a:hover {
  border-color: var(--pico-primary);
}
.domain-card hgroup {
  margin-bottom: 0.5rem;
}
.domain-card hgroup h3 {
  margin: 0;
  font-size: 1rem;
}
.domain-card hgroup p {
  margin: 0;
}
.domain-card > a > p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--pico-muted-color);
  line-height: 1.4;
}

/* Filter bar */
.filter-bar {
  margin-bottom: 1rem;
}
.filter-bar input[type="search"] {
  margin-bottom: 0;
}

/* Search results dropdown */
.search-results {
  border: 1px solid var(--pico-muted-border-color);
  border-radius: 0.375rem;
  max-height: 24rem;
  overflow-y: auto;
  margin-bottom: 1rem;
  background: var(--pico-background-color);
}
.search-results a {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--pico-muted-border-color);
  font-size: 0.875rem;
}
.search-results a:last-child { border-bottom: none; }
.search-results a:hover,
.search-results a[aria-selected="true"] {
  background: var(--pico-code-background-color);
}
.search-results .sr-id {
  font-family: var(--pico-font-family-monospace);
  font-size: 0.8rem;
  white-space: nowrap;
  color: var(--pico-primary);
}
.search-results .sr-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-results .sr-domain {
  font-size: 0.75rem;
  color: var(--pico-muted-color);
  white-space: nowrap;
}

/* Badges */
.badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  white-space: nowrap;
}
.badge-standard {
  background: rgba(0, 114, 178, 0.1);
  color: #005580;
}
.badge-regulation {
  background: rgba(179, 89, 0, 0.1);
  color: #b35900;
}
.badge-publication {
  background: rgba(45, 125, 45, 0.1);
  color: #2d7d2d;
}

/* Table — domain pages */
table { font-size: 0.875rem; }
table code { font-size: 0.8rem; }
.section-row td {
  background: var(--pico-code-background-color);
  border-bottom: 2px solid var(--pico-muted-border-color);
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
}
tr.superseded td { opacity: 0.6; }
tr.superseded td:first-child code { text-decoration: line-through; }

/* Entry page */
article hgroup h1 code {
  font-size: 1.75rem;
}
dl dt {
  font-weight: 500;
  color: var(--pico-muted-color);
  font-size: 0.85rem;
  margin-top: 0.75rem;
}
dl dd {
  margin-left: 0;
  margin-top: 0.125rem;
}
dl dd kbd {
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  background: #e8e8e8;
  border: 1px solid #c0c0c0;
  border-radius: 0.25rem;
  font-family: var(--pico-font-family);
  color: #1a1a1a;
}
`;
}

// ---------------------------------------------------------------------------
// Search JS
// ---------------------------------------------------------------------------

function searchJs(): string {
  return `// RefHub search — powered by minisearch
const BASE = document.querySelector("meta[name='base-path']")?.content || "";
import MiniSearch from "./vendor/minisearch.esm.min.js";

const input = document.getElementById("search-input");
const resultsEl = document.getElementById("search-results");
if (!input || !resultsEl) throw new Error("Missing search DOM elements");

let ms = null;
let entries = null;
let selectedIdx = -1;

async function init() {
  if (ms) return;
  const res = await fetch(BASE + "/api/search.json");
  const data = await res.json();
  entries = data.entries;
  ms = new MiniSearch({
    fields: ["id", "title", "domainTitle", "keywordsStr"],
    storeFields: ["id", "title", "domain", "domainTitle", "section", "label"],
    searchOptions: {
      boost: { id: 3, title: 2, keywordsStr: 1.5 },
      fuzzy: 0.2,
      prefix: true,
    },
  });
  const docs = entries.map((e, i) => ({
    ...e,
    _id: i,
    keywordsStr: (e.keywords || []).join(", "),
  }));
  ms.addAll(docs);
}

function render(results) {
  if (!results.length) {
    resultsEl.hidden = true;
    return;
  }
  resultsEl.hidden = false;
  selectedIdx = -1;
  resultsEl.innerHTML = results
    .slice(0, 20)
    .map(
      (r, i) =>
        \`<a href="\${BASE}/\${r.domain}/\${r.id.toLowerCase()}.html" data-idx="\${i}">
          <span class="sr-id">\${r.id}</span>
          <span class="sr-title">\${r.title}</span>
          <span class="sr-domain">\${r.domainTitle}</span>
          \${r.label ? \`<span class="badge badge-\${r.label.toLowerCase()}">\${r.label}</span>\` : ""}
        </a>\`,
    )
    .join("");
}

let timer = null;
input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(async () => {
    await init();
    const q = input.value.trim();
    if (!q) { resultsEl.hidden = true; return; }
    const results = ms.search(q);
    render(results);
  }, 150);
});

input.addEventListener("keydown", (e) => {
  const links = resultsEl.querySelectorAll("a");
  if (!links.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedIdx = Math.min(selectedIdx + 1, links.length - 1);
    updateSelection(links);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedIdx = Math.max(selectedIdx - 1, 0);
    updateSelection(links);
  } else if (e.key === "Enter" && selectedIdx >= 0) {
    e.preventDefault();
    links[selectedIdx].click();
  } else if (e.key === "Escape") {
    resultsEl.hidden = true;
    selectedIdx = -1;
  }
});

function updateSelection(links) {
  links.forEach((a, i) => a.setAttribute("aria-selected", i === selectedIdx));
  if (links[selectedIdx]) links[selectedIdx].scrollIntoView({ block: "nearest" });
}

input.addEventListener("focus", () => {
  if (input.value.trim() && resultsEl.children.length) resultsEl.hidden = false;
});

document.addEventListener("click", (e) => {
  if (!resultsEl.contains(e.target) && e.target !== input) resultsEl.hidden = true;
});
`;
}

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

async function ensureDir(path: string): Promise<void> {
  try {
    await Deno.mkdir(path, { recursive: true });
  } catch (e) {
    if (!(e instanceof Deno.errors.AlreadyExists)) throw e;
  }
}

async function writeFile(path: string, content: string): Promise<void> {
  const dir = path.replace(/\/[^/]+$/, "");
  await ensureDir(dir);
  await Deno.writeTextFile(path, content);
}

async function copyFile(src: string, dest: string): Promise<void> {
  const dir = dest.replace(/\/[^/]+$/, "");
  await ensureDir(dir);
  await Deno.copyFile(src, dest);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const root = new URL("../", import.meta.url).pathname.replace(/\/$/, "");
  const registryDir = `${root}/registry`;
  const outDir = `${root}/_site`;

  // Clean output
  try {
    await Deno.remove(outDir, { recursive: true });
  } catch { /* ok if missing */ }

  // Parse all domain files
  const domains: Domain[] = [];
  const dirEntries: string[] = [];
  for await (const f of Deno.readDir(registryDir)) {
    if (f.isFile && f.name.endsWith(".md")) dirEntries.push(f.name);
  }
  dirEntries.sort();

  for (const filename of dirEntries) {
    const slug = filename.replace(/\.md$/, "");
    const content = await Deno.readTextFile(`${registryDir}/${filename}`);
    const domain = parseDomainFile(slug, content);
    domains.push(domain);
  }

  // Flatten all entries and build lookup map
  const allEntries: Entry[] = domains.flatMap((d) =>
    d.sections.flatMap((s) => s.entries),
  );
  const entryMap = new Map<string, Entry>();
  for (const e of allEntries) {
    if (entryMap.has(e.id)) {
      console.warn(`Warning: duplicate entry ID "${e.id}"`);
    }
    entryMap.set(e.id, e);
  }

  // Validate cross-references
  for (const e of allEntries) {
    if (e.derivedFrom && !entryMap.has(e.derivedFrom)) {
      console.warn(
        `Warning: ${e.id} Derived-from "${e.derivedFrom}" not found`,
      );
    }
    if (e.supersededBy && !entryMap.has(e.supersededBy)) {
      console.warn(
        `Warning: ${e.id} Superseded-by "${e.supersededBy}" not found`,
      );
    }
  }

  const now = new Date().toISOString();
  let filesWritten = 0;
  const siteDir = `${outDir}${SITE_PREFIX}`;

  // --- JSON API ---
  // Global index
  await writeFile(
    `${siteDir}/api/index.json`,
    JSON.stringify(buildGlobalIndex(domains, allEntries, now), null, 2),
  );
  filesWritten++;

  // Search index
  await writeFile(
    `${siteDir}/api/search.json`,
    JSON.stringify(buildSearchIndex(allEntries)),
  );
  filesWritten++;

  // Per-domain indexes and entry files
  for (const domain of domains) {
    await writeFile(
      `${siteDir}/api/${domain.slug}/index.json`,
      JSON.stringify(buildDomainIndex(domain, now), null, 2),
    );
    filesWritten++;

    for (const section of domain.sections) {
      for (const entry of section.entries) {
        await writeFile(
          `${siteDir}/api/${domain.slug}/${entrySlug(entry.id)}.json`,
          JSON.stringify(buildEntryJson(entry), null, 2),
        );
        filesWritten++;
      }
    }
  }

  // --- HTML ---
  // Landing page
  await writeFile(
    `${siteDir}/index.html`,
    landingPageHtml(domains, allEntries.length),
  );
  filesWritten++;

  // Domain pages
  for (const domain of domains) {
    await writeFile(
      `${siteDir}/${domain.slug}/index.html`,
      domainPageHtml(domain, entryMap),
    );
    filesWritten++;

    // Entry pages
    for (const section of domain.sections) {
      for (const entry of section.entries) {
        await writeFile(
          `${siteDir}/${domain.slug}/${entrySlug(entry.id)}.html`,
          entryPageHtml(entry, entryMap),
        );
        filesWritten++;
      }
    }
  }

  // --- Schemas ---
  await writeFile(
    `${siteDir}/schemas/entry/v1.json`,
    JSON.stringify(entrySchemaV1(), null, 2),
  );
  await writeFile(
    `${siteDir}/schemas/index/v1.json`,
    JSON.stringify(indexSchemaV1(), null, 2),
  );
  filesWritten += 2;

  // --- Assets ---
  await copyFile(
    `${root}/assets/vendor/pico.classless.min.css`,
    `${siteDir}/assets/vendor/pico.classless.min.css`,
  );
  await copyFile(
    `${root}/assets/vendor/minisearch.esm.min.js`,
    `${siteDir}/assets/vendor/minisearch.esm.min.js`,
  );
  await writeFile(`${siteDir}/assets/style.css`, styleCss());
  await writeFile(`${siteDir}/assets/search.js`, searchJs());
  filesWritten += 4;

  // Summary
  console.log(`\nRefHub build complete`);
  console.log(`  Domains: ${domains.length}`);
  console.log(`  Entries: ${allEntries.length}`);
  console.log(`  Files written: ${filesWritten}`);
  console.log(`  Output: ${outDir}/`);
}

main();
