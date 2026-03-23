# Software Engineering

Standards for software development lifecycle, quality assessment, testing,
coding practices, API design, authentication, software supply chain security,
and automated code quality measurement.

**Contents:** [Standard](#standard) | [Publication](#publication)

## Standard

- [IEEE-1012] System, Software, and Hardware Verification and Validation

  Defines processes for verification and validation (V&V) of systems, software,
  and hardware. Specifies V&V tasks, inputs, outputs, and activities mapped to
  integrity levels and lifecycle phases.

  Document: IEEE 1012-2016\
  URL: <https://standards.ieee.org/ieee/1012/5609/>\
  Label: Standard\
  Keywords: verification and validation, V&V, integrity levels, lifecycle
  phases, software assurance, hardware verification

- [ISO-5055] Information technology — Software quality — Software product
  quality — Automated source code quality measures

  Defines automated measures for four software quality characteristics:
  reliability, security, performance efficiency, and maintainability. Specifies
  detection patterns mapped to CWE weaknesses enabling consistent, tool-based
  code quality assessment.

  Document: ISO/IEC 5055:2021\
  URL: <https://www.iso.org/standard/80623.html>\
  Label: Standard\
  Keywords: automated code quality, reliability, security, maintainability,
  performance efficiency, CWE, static analysis\
  Derived-from: ISO-25010

- [ISO-12207] Systems and software engineering — Software life cycle processes

  Defines processes for managing and executing the engineering of software
  throughout its life cycle. The software-level counterpart to ISO/IEC/IEEE
  15288.

  Document: ISO/IEC/IEEE 12207:2017\
  URL: <https://www.iso.org/standard/63712.html>\
  Label: Standard\
  Keywords: software lifecycle, software processes, software development,
  software maintenance, lifecycle management

- [ISO-15504] Information technology — Process assessment

  Framework for assessing the capability of organizational processes against a
  reference model. Practically, assessors use it to rate processes on a
  six-level capability scale (0-5), identifying strengths, weaknesses, and
  improvement actions. The basis from which Automotive SPICE is derived.
  Superseded by the ISO/IEC 33001 series but still widely referenced.

  Document: ISO/IEC 15504 (series)\
  URL: <https://www.iso.org/standard/60555.html>\
  Label: Standard\
  Keywords: process assessment, capability scale, process improvement, SPICE,
  maturity, assessment model\
  Status: Superseded\
  Superseded-by: ISO-33001

- [ISO-20000-1] Information technology — Service management system requirements

  Requirements for establishing, implementing, and continually improving a
  service management system (SMS). The international certification standard for
  IT service management, aligned with ITIL practices.

  Document: ISO/IEC 20000-1:2018\
  URL: <https://www.iso.org/standard/70636.html>\
  Label: Standard\
  Keywords: IT service management, SMS, ITIL, service delivery, service level
  management, certification

- [ISO-25001] Systems and software engineering — SQuaRE — Planning and
  management

  Requirements and guidance for planning and managing software product quality
  evaluation. Used by quality managers and process owners to establish a
  structured evaluation programme based on the SQuaRE series, ensuring that
  quality requirements are defined, measured, and tracked consistently across
  projects and releases.

  Document: ISO/IEC 25001:2014\
  URL: <https://www.iso.org/standard/64016.html>\
  Label: Standard\
  Keywords: software quality evaluation, SQuaRE, quality planning, quality
  management, evaluation programme

- [ISO-25010] Systems and software engineering — Systems and software Quality
  Requirements and Evaluation (SQuaRE)

  Defines quality models for software product quality and quality in use.
  Establishes eight characteristics: functional suitability, performance
  efficiency, compatibility, usability, reliability, security, maintainability,
  and portability.

  Document: ISO/IEC 25010:2023\
  URL: <https://www.iso.org/standard/78176.html>\
  Label: Standard\
  Keywords: software quality model, SQuaRE, quality characteristics, usability,
  reliability, security, maintainability, portability

- [ISO-29119] Software and systems engineering — Software testing

  Multi-part standard defining a comprehensive framework for software testing.
  Covers test processes, test documentation, test techniques, and keyword-driven
  testing across all testing levels and types.

  Document: ISO/IEC/IEEE 29119 (series, 2022)\
  URL: <https://www.iso.org/standard/81291.html>\
  Label: Standard\
  Keywords: software testing, test processes, test documentation, test
  techniques, keyword-driven testing, test levels

- [ISO-33001] Information technology — Process assessment — Concepts and
  terminology

  Replacement for ISO/IEC 15504. Defines concepts, terminology, and framework
  for process assessment. The current normative basis for process capability
  determination.

  Document: ISO/IEC 33001:2015\
  URL: <https://www.iso.org/standard/54175.html>\
  Label: Standard\
  Keywords: process assessment, capability determination, process improvement,
  maturity, assessment framework

- [OAuth-2] The OAuth 2.0 Authorization Framework

  Framework for delegated authorisation enabling third-party applications to
  obtain limited access to HTTP services. Defines grant types (authorization
  code, client credentials, device code) and token-based access control.

  Document: RFC 6749 (2012) / RFC 9068 (2022)\
  URL: <https://www.rfc-editor.org/rfc/rfc6749>\
  Label: Standard\
  Keywords: OAuth, authorization, access tokens, grant types, delegated access,
  API security, HTTP

- [OIDC] OpenID Connect

  Identity layer built on OAuth 2.0 for authentication. Provides ID tokens,
  UserInfo endpoint, and discovery mechanisms enabling single sign-on (SSO) and
  federated identity across web and mobile applications.

  Document: OpenID Connect Core 1.0 (2014)\
  URL: <https://openid.net/specs/openid-connect-core-1_0.html>\
  Label: Standard\
  Keywords: OpenID Connect, authentication, SSO, single sign-on, federated
  identity, ID token, identity provider\
  Derived-from: OAuth-2

- [OpenAPI] OpenAPI Specification

  Standard for describing HTTP APIs in a machine-readable format. Defines
  endpoints, request/response schemas, authentication, and parameters. Enables
  automatic code generation, documentation, and testing of REST APIs.

  Document: OpenAPI 3.1.0 (2021)\
  URL: <https://spec.openapis.org/oas/v3.1.0>\
  Label: Standard\
  Keywords: API specification, REST API, HTTP API, code generation, API
  documentation, schema, endpoints

- [RFC-2119] Key words for use in RFCs to Indicate Requirement Levels

  Defines the precise meaning of MUST, SHALL, SHOULD, MAY, and their negatives
  when used in standards and specifications. The de facto convention for
  requirement language across all engineering domains.

  Document: RFC 2119 (1997)\
  URL: <https://www.rfc-editor.org/rfc/rfc2119>\
  Label: Standard\
  Keywords: requirement levels, MUST, SHALL, SHOULD, MAY, normative language,
  RFC keywords

- [RFC-8174] Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words

  Clarifies that RFC 2119 keywords are only normative when they appear in ALL
  UPPERCASE. Lowercase uses carry no special meaning. Updates RFC 2119.

  Document: RFC 8174 (2017)\
  URL: <https://www.rfc-editor.org/rfc/rfc8174>\
  Label: Standard\
  Keywords: RFC 2119, normative keywords, uppercase, requirement language,
  clarification\
  Derived-from: RFC-2119

- [SPDX] Software Package Data Exchange

  ISO standard for communicating software bill of materials (SBOM) information
  including component names, versions, licences, and security references.
  Enables automated compliance checking and vulnerability tracking across
  software supply chains.

  Document: ISO/IEC 5962:2021 (SPDX 2.3)\
  URL: <https://spdx.dev/>\
  Label: Standard\
  Keywords: SBOM, software bill of materials, licence compliance, vulnerability
  tracking, supply chain, SPDX

## Publication

- [CERT-C] SEI CERT C Coding Standard

  Secure coding rules and recommendations for C. Developed by Carnegie Mellon's
  Software Engineering Institute. Covers memory management, integer overflow,
  string handling, concurrency, and other vulnerability classes. Referenced by
  IEC 62443 and safety-critical development processes.

  Document: SEI CERT C (2016, continuously updated)\
  URL:
  <https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard>\
  Label: Publication\
  Keywords: C coding standard, secure coding, memory management, integer
  overflow, string handling, concurrency, vulnerability prevention

- [CERT-CPP] SEI CERT C++ Coding Standard

  Secure coding rules for C++. Addresses C++-specific concerns including object
  lifecycle, exceptions, templates, and container usage. Complements MISRA C++
  with a security-focused perspective.

  Document: SEI CERT C++ (2016, continuously updated)\
  URL:
  https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=88046682\
  Label: Publication\
  Keywords: C++ coding standard, secure coding, object lifecycle, exceptions,
  templates, containers, MISRA\
  Derived-from: CERT-C

- [CycloneDX] CycloneDX Software Bill of Materials Standard

  OWASP standard for creating software, hardware, and service bills of
  materials. Supports vulnerability tracking, licence compliance, and dependency
  analysis with native integration into CI/CD pipelines.

  Document: CycloneDX 1.6 (2024)\
  URL: <https://cyclonedx.org/specification/overview/>\
  Label: Publication\
  Keywords: SBOM, bill of materials, OWASP, vulnerability tracking, licence
  compliance, dependency analysis, CI/CD

- [SLSA] Supply-chain Levels for Software Artifacts

  Framework defining levels of software supply chain security assurance.
  Specifies requirements for source integrity, build integrity, and provenance
  at four levels from basic to hardened, preventing tampering and ensuring
  reproducibility.

  Document: SLSA v1.0 (2023)\
  URL: <https://slsa.dev/spec/v1.0/>\
  Label: Publication\
  Keywords: supply chain security, build integrity, source integrity,
  provenance, software artifacts, reproducibility, tamper prevention
