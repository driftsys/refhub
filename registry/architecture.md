# Architecture

## Enterprise Architecture Frameworks

- [TOGAF] The Open Group Architecture Framework

  Enterprise architecture methodology providing a structured approach to
  designing, planning, implementing, and governing IT architecture. Defines the
  Architecture Development Method (ADM), content framework, and enterprise
  continuum. The most widely adopted EA framework globally.

  Document: TOGAF 10th Edition (2022)\
  URL: <https://www.opengroup.org/togaf>

- [ArchiMate] ArchiMate Enterprise Architecture Modeling Language

  The Open Group visual modelling language for enterprise architecture. Provides
  a uniform representation for business, application, technology, and strategy
  layers with standardised viewpoints. Companion language to TOGAF.

  Document: ArchiMate 3.2 (2022)\
  URL: <https://www.opengroup.org/archimate-forum/archimate-overview>

- [Zachman] Zachman Framework for Enterprise Architecture

  Classification scheme for enterprise architecture artifacts organised as a
  two-dimensional matrix. Rows represent stakeholder perspectives (planner
  through operator), columns represent interrogatives (what, how, where, who,
  when, why). Foundational taxonomy for EA.

  Document: Zachman Framework (Version 3.0)\
  URL: <https://zachman.com/about-the-zachman-framework>

## Defense and Government Architecture

- [DODAF] Department of Defense Architecture Framework

  U.S. DoD framework for architecture description. Defines viewpoints
  (operational, systems, services, standards, capability) and data models for
  describing military systems, their interconnections, and alignment with joint
  capabilities.

  Document: DoDAF 2.02 (2010)\
  URL: <https://dodcio.defense.gov/library/dod-architecture-framework/>

- [NAF] NATO Architecture Framework

  NATO framework for developing architecture descriptions across allied nations.
  Defines viewpoints covering concepts, services, systems, standards, and
  programmes enabling interoperability assessment of coalition systems and
  capabilities.

  Document: NAF v4 (2018)\
  URL: <https://www.nato.int/cps/en/natohq/topics_157575.htm>

## Software Architecture

- [ISO-42010] Systems and software engineering — Architecture description

  Defines a conceptual model for architecture descriptions. Establishes
  viewpoints, views, and concerns as the basis for documenting system and
  software architectures. See systems engineering domain for full entry.

  Document: ISO/IEC/IEEE 42010:2022\
  URL: <https://www.iso.org/standard/74393.html>

- [C4-Model] C4 Model for Visualising Software Architecture

  Hierarchical approach to software architecture diagramming using four levels
  of abstraction: Context, Containers, Components, and Code. Provides a common
  vocabulary and notation for communicating architecture to both technical and
  non-technical stakeholders.

  Document: C4 Model (Simon Brown)\
  URL: <https://c4model.com/>

- [4plus1] 4+1 Architectural View Model

  Software architecture framework organising documentation into five views:
  Logical (functionality), Development (implementation), Process (concurrency),
  Physical (deployment), and Scenarios (use cases). Widely referenced in
  UML-based architecture documentation.

  Document: Philippe Kruchten, IEEE Software (1995)\
  URL: <https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf>

## Architecture Patterns

- [SOA] Service-Oriented Architecture Reference Model

  OASIS reference model defining the concepts and relationships of service-
  oriented architecture. Covers service description, visibility, interaction,
  real-world effects, and contracts. Foundation for enterprise integration and
  web services.

  Document: OASIS SOA Reference Model V1.0 (2006)\
  URL: <https://docs.oasis-open.org/soa-rm/v1.0/>

- [Microservices] Microservices Architecture Style

  Architectural approach decomposing applications into independently deployable
  services organised around business capabilities. Each service owns its data,
  communicates via APIs, and can be developed, deployed, and scaled
  independently.

  Document: Martin Fowler / Sam Newman (2014)\
  URL: <https://martinfowler.com/articles/microservices.html>

- [EDA] Event-Driven Architecture

  Architectural pattern where components communicate through asynchronous
  events. Supports event notification, event-carried state transfer, and event
  sourcing patterns. Enables loose coupling, scalability, and real-time
  responsiveness in distributed systems.

  Document: Reactive Manifesto (2014) / CloudEvents (CNCF)\
  URL: <https://www.reactivemanifesto.org/>

## Hardware and Platform Architecture

- [ARINC-653] Avionics Application Software Standard Interface

  Defines the RTOS partitioning API for Integrated Modular Avionics (IMA).
  Specifies temporal and spatial partitioning ensuring applications on shared
  hardware cannot interfere with each other. Required for DO-297 IMA
  certification.

  Document: ARINC Specification 653 (Part 1-4)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-653>

- [ARINC-661] Cockpit Display System Interfaces

  Defines a standard interface between cockpit display systems (CDS) and user
  applications. Specifies a widget library (buttons, labels, maps) and
  communication protocol enabling avionics applications to render on
  interchangeable displays.

  Document: ARINC Specification 661 (Supplement 8)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-661>
