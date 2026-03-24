# RefHub API Specification

RefHub publishes a read-only JSON API alongside the static site. The API enables
tooling to resolve reference entries, build traceability links, and power
client-side search without requiring a backend.

---

## Part 1 — Principles

### 1.1 Immutability

Every published API version is immutable. Fields may be added to future versions
but existing fields shall not be removed or change semantics within the same
major version.

### 1.2 Forward compatibility

All JSON schemas use `additionalProperties: true`. Consumers must ignore unknown
fields so that new fields can be introduced without breaking existing clients.

### 1.3 Relative paths

All internal references (including `$schema`) use relative paths. The API works
regardless of the deployment base URL.

### 1.4 No authentication

The API is fully public. No authentication or rate limiting is applied.

---

## Part 2 — Endpoints

The API is served under `api/` relative to the site root.

### 2.1 Global index

**Path:** `api/index.json`\
**Schema:** `schemas/index/v1.json`

Returns the full registry index including all domains and a summary of every
entry.

_Table: Global index fields_

| Field       | Type    | Required | Description                         |
| ----------- | ------- | -------- | ----------------------------------- |
| `$schema`   | string  | no       | Relative path to the index schema   |
| `scope`     | string  | yes      | Always `"global"` for this endpoint |
| `generated` | string  | yes      | ISO 8601 timestamp of the build     |
| `count`     | integer | yes      | Total number of entries             |
| `domains`   | array   | no       | List of domain summaries            |
| `entries`   | array   | yes      | List of entry summaries             |

Each domain summary contains:

_Table: Domain summary fields_

| Field         | Type    | Required | Description                                                |
| ------------- | ------- | -------- | ---------------------------------------------------------- |
| `slug`        | string  | yes      | Domain file stem (e.g., `automotive`)                      |
| `title`       | string  | yes      | Human-readable domain title                                |
| `description` | string  | no       | Domain description paragraph                               |
| `count`       | integer | yes      | Number of entries in the domain                            |
| `sections`    | array   | no       | Section names present (e.g., `["Standard", "Regulation"]`) |

Each entry summary contains:

_Table: Entry summary fields (index)_

| Field     | Type   | Required | Description                                            |
| --------- | ------ | -------- | ------------------------------------------------------ |
| `id`      | string | yes      | Entry identifier (e.g., `ISO-26262`)                   |
| `title`   | string | yes      | Full entry title                                       |
| `domain`  | string | yes      | Domain slug                                            |
| `section` | string | no       | Section name (`Standard`, `Regulation`, `Publication`) |
| `label`   | string | no       | Entry classification                                   |
| `url`     | string | yes      | URL to the official source                             |

### 2.2 Domain index

**Path:** `api/{domain-slug}/index.json`\
**Schema:** `schemas/index/v1.json`

Returns the index for a single domain. Same schema as the global index but
`scope` is the domain slug and `domains` is absent.

### 2.3 Entry detail

**Path:** `api/{domain-slug}/{entry-id}.json`\
**Schema:** `schemas/entry/v1.json`

Returns the full detail for a single entry.

_Table: Entry detail fields_

| Field          | Type   | Required | Description                                  |
| -------------- | ------ | -------- | -------------------------------------------- |
| `$schema`      | string | no       | Relative path to the entry schema            |
| `id`           | string | yes      | Entry identifier                             |
| `title`        | string | yes      | Full entry title                             |
| `abstract`     | string | yes      | 2-3 sentence description of intent and scope |
| `domain`       | string | no       | Domain slug                                  |
| `domainTitle`  | string | no       | Human-readable domain title                  |
| `section`      | string | no       | Section name                                 |
| `document`     | string | yes      | Official document name and version           |
| `url`          | string | yes      | URL to the official source                   |
| `label`        | string | no       | Entry classification                         |
| `keywords`     | array  | no       | Topic tags                                   |
| `status`       | string | no       | e.g., `Superseded`                           |
| `supersededBy` | string | no       | ID of the replacement entry                  |
| `derivedFrom`  | string | no       | ID of the parent standard                    |

### 2.4 Search index

**Path:** `api/search.json`\
**Schema:** `schemas/search/v1.json`

Returns a flat list of all entries optimised for client-side search. This
endpoint is designed for use with MiniSearch or similar libraries.

_Table: Search index fields_

| Field     | Type   | Required | Description                        |
| --------- | ------ | -------- | ---------------------------------- |
| `$schema` | string | no       | Relative path to the search schema |
| `entries` | array  | yes      | List of search entries             |

Each search entry contains:

_Table: Search entry fields_

| Field         | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| `id`          | string | yes      | Entry identifier               |
| `title`       | string | yes      | Full entry title               |
| `domain`      | string | yes      | Domain slug                    |
| `domainTitle` | string | yes      | Human-readable domain title    |
| `section`     | string | yes      | Section name                   |
| `label`       | string | no       | Entry classification           |
| `keywords`    | array  | no       | Topic tags for search boosting |

---

## Part 3 — Schemas

JSON schemas are published alongside the site under `schemas/`.

_Table: Published schemas_

| Schema    | Path                     | Description                |
| --------- | ------------------------ | -------------------------- |
| Entry v1  | `schemas/entry/v1.json`  | Single reference entry     |
| Index v1  | `schemas/index/v1.json`  | Global or per-domain index |
| Search v1 | `schemas/search/v1.json` | Client-side search index   |

All schemas follow [JSON Schema 2020-12]. Required fields are the minimum set
needed for a valid entry. All schemas permit additional properties for forward
compatibility.

### 3.1 Versioning

Schemas are versioned by path: `schemas/{type}/v{major}.json`. A new major
version is required when:

- A required field is removed
- A field changes type or semantics
- A structural change breaks existing consumers

Adding optional fields or new endpoints does not require a version bump.

---

## Part 4 — Entry identifiers

Entry IDs are slugs matching `[A-Za-z0-9-]+`. They use hyphens to separate
components: `ISO-26262-6`, `DO-178C`, `ASPICE-SWE-1`, `RFC-2119`.

The entry JSON filename is the lowercase form of the ID:
`api/automotive/iso-26262.json`.

IDs are unique within a domain but may appear in multiple domains when a
standard is cross-referenced (e.g., `IEC-61513` in both `energy` and
`functional-safety`).

[JSON Schema 2020-12]: https://json-schema.org/draft/2020-12/schema
