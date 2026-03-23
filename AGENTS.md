# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project

RefHub is the DriftSys-maintained registry of standards, regulations, and
process models. It uses the MarkSpec `- [ID]` entry format and is deployed as a
static site via GitHub Pages at `driftsys.github.io/refhub`.

Every MarkSpec project is a registry. RefHub is the implicit fallback — the
shared upstream that all projects can reference without explicit configuration.

## Build commands

```bash
dprint fmt                      # Format
dprint check                    # Format check
```

Or via `just`:

```bash
just fmt                        # Format (dprint)
just lint                       # Lint (dprint check)
just build                      # lint
just verify                     # Validate commits + build
```

## Structure

- `registry/references.md` — all entries, grouped by domain
- `project.yaml` — project manifest

## Workflow

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for issue model, PR process,
severity/effort/priority, and review flow.

**Agent-specific rules:**

- **Start from the issue.** Read the acceptance criteria, propose an approach,
  and wait for approval before implementing.
- **Single PR = content + docs.** Every pull request ships content and
  documentation together.
- **Commits.** Use Conventional Commits — `feat`, `fix`, `docs`, `chore`.
  Imperative mood. One commit per PR.
- **Before PR.** Run `just verify` — all must pass.

## Conventions

- **Entry format.** Each entry has a display ID, title, 2-3 sentence abstract,
  and metadata (Document, URL, optional Status/Superseded-by/Derived-from).
- **ID format.** Reference IDs are slugs: letters, digits, and hyphens
  (`[A-Za-z0-9-]+`). Use hyphens to separate components: `ISO-26262-6`,
  `DO-178C`, `ASPICE-SWE-1`, `ISO-TS-15066`, `RFC-2119`.
- **Grouping.** Entries are split into per-domain files under `registry/`.
- **Derived-from links.** Use `Derived-from:` to show standard lineage (e.g.,
  ISO 26262 derives from IEC 61508).
