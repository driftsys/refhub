# RefHub

[![CI](https://github.com/driftsys/refhub/actions/workflows/ci.yaml/badge.svg)](https://github.com/driftsys/refhub/actions/workflows/ci.yaml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

DriftSys reference registry — standards, regulations, and process models.

> Initial content. Standards entries are being populated.

## Entry format

Entries follow the MarkSpec `- [ID]` format:

```markdown
- [ISO26262-6] Road vehicles — Functional safety — Part 6

  Product development at the software level. Defines processes for software
  safety requirements, architecture, unit design, implementation, testing, and
  verification.

  Document: ISO 26262-6:2018\
  URL: https://www.iso.org/standard/68388.html
```

Each entry has a title, an abstract (2–3 sentences on intent and scope), and
metadata (Document, URL, optional Status/Superseded-by/Derived-from).

## How it works

Every MarkSpec project is a registry. RefHub is the implicit fallback. Projects
declare upstream registries in `project.yaml`:

```yaml
parents:
  - https://driftsys.github.io/refhub
```

Tooling resolves IDs through the parent chain: local `references.md` first, then
each parent registry, then RefHub.

## Domains

Automotive, rail, medical, aerospace, functional safety, systems engineering,
software engineering, cybersecurity.

## License

[MIT](LICENSE)

---

Part of the [DriftSys](https://github.com/driftsys) ecosystem.
