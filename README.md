# RefHub

[![CI](https://github.com/driftsys/refhub/actions/workflows/ci.yaml/badge.svg)](https://github.com/driftsys/refhub/actions/workflows/ci.yaml)
[![Pages](https://github.com/driftsys/refhub/actions/workflows/pages.yaml/badge.svg)](https://github.com/driftsys/refhub/actions/workflows/pages.yaml)
[![Registry](https://img.shields.io/badge/registry-live-0072B2)](https://driftsys.github.io/refhub/refs/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

DriftSys reference registry — standards, regulations, and process models.

## Entry format

Entries follow the MarkSpec `- [ID]` format:

```markdown
- [ISO-26262-6] Road vehicles — Functional safety — Part 6

  Product development at the software level. Defines processes for software
  safety requirements, architecture, unit design, implementation, testing, and
  verification.

  Document: ISO 26262-6:2018\
  URL: <https://www.iso.org/standard/68388.html>\
  Label: Standard\
  Keywords: functional safety, automotive, software
```

Each entry has a title, an abstract (2–3 sentences on intent and scope), and
metadata (Document, URL, Label, Keywords, optional
Status/Superseded-by/Derived-from).

Entries are classified as **Standard** (normative specifications),
**Regulation** (legally binding), or **Publication** (frameworks, guides,
knowledge bases).

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

| Domain                                                                     | Description                                    |
| -------------------------------------------------------------------------- | ---------------------------------------------- |
| [Accessibility](registry/accessibility.md)                                 | Inclusive design, assistive technology         |
| [Acoustics](registry/acoustics.md)                                         | Sound measurement, noise control               |
| [Aerospace](registry/aerospace.md)                                         | Aircraft, space vehicles, avionics             |
| [Artificial Intelligence](registry/artificial-intelligence.md)             | AI/ML models, ethics, safety                   |
| [Architecture](registry/architecture.md)                                   | Enterprise, software, data architecture        |
| [Automotive](registry/automotive.md)                                       | Road vehicles, type approval                   |
| [Cloud and Infrastructure](registry/cloud-infrastructure.md)               | Cloud computing, containers, orchestration     |
| [Colour and Display](registry/colour-display.md)                           | Colorimetry, display technology                |
| [Connectivity](registry/connectivity.md)                                   | Wireless, cellular, satellite, IoT             |
| [Cybersecurity and Privacy](registry/cybersecurity-privacy.md)             | Information security, data protection          |
| [Defense](registry/defense.md)                                             | Military systems, defense standards            |
| [Diagnostics and Monitoring](registry/diagnostics-monitoring.md)           | Automotive, network, server diagnostics        |
| [Electrical and Electronics](registry/electrical-electronics.md)           | Power systems, electronic components           |
| [Electromagnetic Compatibility](registry/electromagnetic-compatibility.md) | EMC testing, emissions, immunity               |
| [Energy](registry/energy.md)                                               | Power systems, smart grid, nuclear, renewables |
| [Environmental Compliance](registry/environmental-compliance.md)           | Environmental regulations, sustainability      |
| [Functional Safety](registry/functional-safety.md)                         | IEC 61508, sector safety standards             |
| [Graphics and Rendering](registry/graphics-rendering.md)                   | GPU APIs, shaders, rendering pipelines         |
| [Human Factors](registry/human-factors.md)                                 | Ergonomics, usability, cognitive load          |
| [Industrial Protocols](registry/industrial-protocols.md)                   | Fieldbus, OPC UA, industrial automation        |
| [Input Devices](registry/input-devices.md)                                 | HID, touch, gesture, controllers               |
| [Lighting and Photometry](registry/lighting-photometry.md)                 | Light measurement, LED, photometric testing    |
| [Maritime](registry/maritime.md)                                           | Shipbuilding, marine systems                   |
| [Media](registry/media.md)                                                 | Audio/video codecs, containers, streaming      |
| [Medical](registry/medical.md)                                             | Medical devices, health IT                     |
| [Methodologies](registry/methodologies.md)                                 | Agile, Scrum, development frameworks           |
| [Metrology](registry/metrology.md)                                         | Measurement science, calibration               |
| [Network Protocols](registry/network-protocols.md)                         | TCP/IP, HTTP, DNS, routing                     |
| [Programming Languages](registry/programming-languages.md)                 | Language standards, specifications             |
| [Quality](registry/quality.md)                                             | Quality management, ISO 9001                   |
| [Rail](registry/rail.md)                                                   | Railway engineering, signalling                |
| [Robotics](registry/robotics.md)                                           | Robot safety, industrial automation            |
| [Semiconductor](registry/semiconductor.md)                                 | Chip design, packaging, testing                |
| [Software Engineering](registry/software-engineering.md)                   | Software lifecycle, testing, process           |
| [Systems Engineering](registry/systems-engineering.md)                     | Systems lifecycle, architecture, V&V           |
| [Telecommunications](registry/telecommunications.md)                       | Telecom networks, protocols, broadcasting      |
| [Thermal and Climate](registry/thermal-climate.md)                         | Thermal management, environmental testing      |
| [Typography](registry/typography.md)                                       | Fonts, text rendering, OpenType                |
| [User Experience](registry/ux-ui.md)                                       | UX/UI design, interaction patterns             |
| [Web Platform](registry/web-platform.md)                                   | HTML, CSS, Web APIs                            |

## License

[MIT](LICENSE)

---

Part of the [DriftSys](https://github.com/driftsys) ecosystem.
