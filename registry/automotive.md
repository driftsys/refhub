# Automotive

Standards, regulations, and specifications for road vehicle engineering,
covering functional safety, cybersecurity, driving automation, software
processes, diagnostics, in-vehicle networking, and type approval across
international and regional frameworks.

**Contents:** [Standard](#standard) | [Regulation](#regulation)

## Standard

- [Android-Auto] Android Auto Specification

  Google specification for projecting Android phone applications onto vehicle
  displays. Defines requirements for USB and wireless connectivity, display
  rendering, voice interaction, and supported app templates for messaging,
  navigation, and media.

  Document: Android Auto Specification\
  URL: <https://developer.android.com/auto>\
  Label: Standard\
  Keywords: Android Auto, phone projection, infotainment, Google, voice
  interaction, navigation, media, vehicle display

- [Android-CDD] Android Compatibility Definition Document

  Defines the requirements that must be met by devices to be compatible with the
  Android platform. Specifies hardware, software, and API requirements that OEMs
  must fulfil for GMS certification. Includes automotive-specific requirements
  for Android Automotive OS (AAOS) builds.

  Document: Android CDD (per-release)\
  URL: <https://source.android.com/docs/compatibility/cdd>\
  Label: Standard\
  Keywords: Android compatibility, AAOS, GMS certification, Android Automotive
  OS, hardware requirements, software requirements, OEM

- [Apple-CarPlay] Apple CarPlay Specification

  Apple specification for integrating iOS devices with vehicle infotainment
  systems. Defines requirements for wired (USB) and wireless (Wi-Fi)
  connectivity, display rendering, audio routing, Siri integration, and
  supported app categories.

  Document: CarPlay Specification (MFi Program)\
  URL: <https://developer.apple.com/carplay/>\
  Label: Standard\
  Keywords: CarPlay, Apple, iOS integration, infotainment, Siri, MFi, audio
  routing, vehicle display

- [ASPICE] Automotive SPICE

  Process assessment model for the automotive industry. Defines capability
  levels for software development processes covering requirements, design,
  implementation, integration, and testing.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: Automotive SPICE, process assessment, capability levels, software
  development, requirements, integration, testing

- [ASPICE-SWE-1] ASPICE SWE.1 — Software Requirements Analysis

  Defines the process for establishing software requirements from system
  requirements and architectural constraints. Ensures traceability and
  consistency between system-level needs and software-level specifications,
  which is critical for achieving higher capability levels in OEM assessments.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: software requirements analysis, traceability, system requirements,
  capability level, OEM assessment\
  Derived-from: ASPICE

- [ASPICE-SWE-2] ASPICE SWE.2 — Software Architectural Design

  Defines the process for establishing software architecture that identifies
  software components and their interfaces. A well-defined architecture enables
  modular development, reuse, and verifiable integration, which are essential
  for managing complexity in distributed automotive ECUs.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: software architecture, software components, interfaces, modular
  development, ECU, integration\
  Derived-from: ASPICE

- [ASPICE-SWE-3] ASPICE SWE.3 — Software Detailed Design and Unit Construction

  Defines the process for software detailed design, unit implementation, and
  unit verification. Ensures that each software unit is designed against
  architectural specifications and verified before integration, reducing defect
  propagation into later development phases.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: detailed design, unit construction, unit verification, software
  implementation, defect prevention\
  Derived-from: ASPICE

- [ASPICE-SWE-4] ASPICE SWE.4 — Software Unit Verification

  Defines the process for verifying software units against detailed design and
  software requirements. Systematic unit verification catches defects at the
  lowest level where they are cheapest to fix, directly supporting automotive
  quality targets such as zero-defect delivery.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: unit verification, unit testing, defect detection, software quality,
  zero-defect\
  Derived-from: ASPICE

- [ASPICE-SWE-5] ASPICE SWE.5 — Software Integration and Integration Test

  Defines the process for integrating software components and verifying the
  integrated software. Controlled integration with defined test strategies
  ensures that component interactions behave correctly before system-level
  validation, which is essential for multi-supplier ECU development.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: software integration, integration testing, component interaction,
  multi-supplier, ECU development\
  Derived-from: ASPICE

- [ASPICE-SWE-6] ASPICE SWE.6 — Software Qualification Test

  Defines the process for qualifying the integrated software against software
  requirements. Qualification testing provides the final evidence that the
  delivered software meets all agreed requirements, serving as the acceptance
  gate between supplier and OEM.

  Document: Automotive SPICE PAM v4.0\
  URL: <https://www.automotivespice.com>\
  Label: Standard\
  Keywords: qualification testing, software acceptance, supplier-OEM handover,
  requirements verification\
  Derived-from: ASPICE

- [AUTOSAR-Adaptive] AUTOSAR Adaptive Platform

  Service-oriented software platform for high-performance automotive ECUs. Built
  on POSIX-based operating systems, supports dynamic communication (SOME/IP,
  DDS), adaptive diagnostics (UDS on IP), and OTA update capabilities. Targets
  ADAS, autonomous driving, and connected services.

  Document: AUTOSAR Adaptive Platform R24-11\
  URL: <https://www.autosar.org/standards/adaptive-platform>\
  Label: Standard\
  Keywords: AUTOSAR Adaptive, service-oriented, POSIX, SOME/IP, DDS, ADAS,
  autonomous driving, OTA, high-performance ECU

- [AUTOSAR-Classic] AUTOSAR Classic Platform

  Standardised software architecture for deeply embedded automotive ECUs.
  Defines a layered architecture with Basic Software (BSW), Runtime Environment
  (RTE), and Application Software Components (SWC). The dominant platform for
  powertrain, chassis, and body controllers.

  Document: AUTOSAR Classic Platform R24-11\
  URL: <https://www.autosar.org/standards/classic-platform>\
  Label: Standard\
  Keywords: AUTOSAR Classic, layered architecture, BSW, RTE, SWC, powertrain,
  chassis, body controller, embedded ECU

- [AUTOSAR-SOMEIP] AUTOSAR SOME/IP Protocol Specification

  Scalable service-Oriented MiddlewarE over IP. Defines a service-oriented
  communication protocol for automotive Ethernet enabling remote procedure
  calls, event notifications, and service discovery between ECUs.

  Document: AUTOSAR SOME/IP (R24-11)\
  URL: <https://www.autosar.org/standards/foundation>\
  Label: Standard\
  Keywords: SOME/IP, service-oriented, automotive Ethernet, RPC, event
  notification, service discovery, middleware\
  Derived-from: AUTOSAR-Adaptive

- [Automotive-Ethernet] IEEE 802.3 Automotive Ethernet profiles

  IEEE Ethernet standards adapted for automotive use. Includes 100BASE-T1
  (802.3bw) for 100 Mbit/s, 1000BASE-T1 (802.3bp) for 1 Gbit/s, and
  MultiGBASE-T1 (802.3ch) for 2.5/5/10 Gbit/s — all over single unshielded
  twisted pair.

  Document: IEEE 802.3bw (2015), 802.3bp (2016), 802.3ch (2020)\
  URL: <https://standards.ieee.org/ieee/802.3/10422/>\
  Label: Standard\
  Keywords: automotive Ethernet, 100BASE-T1, 1000BASE-T1, MultiGBASE-T1, twisted
  pair, in-vehicle networking, IEEE

- [COVESA-IFEX] COVESA Interface Exchange Framework (IFEX)

  Defines a technology-neutral interface description language for vehicle
  service APIs. Enables specification of service interfaces that can be mapped
  to multiple middleware technologies (SOME/IP, D-Bus, gRPC, REST).

  Document: COVESA IFEX\
  URL: <https://covesa.github.io/ifex/>\
  Label: Standard\
  Keywords: COVESA, interface description, vehicle APIs, middleware, SOME/IP,
  D-Bus, gRPC, REST, technology-neutral

- [COVESA-VISS] COVESA Vehicle Information Service Specification (VISS)

  Defines a WebSocket and HTTP-based API for accessing vehicle signals described
  by VSS. Provides get, set, and subscribe operations enabling web and mobile
  applications to interact with vehicle data in a standardised way.

  Document: W3C VISS v2 / COVESA\
  URL: <https://www.w3.org/TR/viss2-core/>\
  Label: Standard\
  Keywords: COVESA, vehicle information service, WebSocket, HTTP API, vehicle
  signals, W3C, subscribe\
  Derived-from: COVESA-VSS

- [COVESA-VSS] COVESA Vehicle Signal Specification (VSS)

  Standardised taxonomy of vehicle signals providing a canonical naming scheme
  for vehicle data (speed, location, battery state, HVAC, etc.). Enables
  consistent data access across OEMs, platforms, and cloud backends independent
  of underlying bus protocols.

  Document: COVESA VSS (v4.x)\
  URL: <https://covesa.github.io/vehicle_signal_specification/>\
  Label: Standard\
  Keywords: COVESA, vehicle signals, signal taxonomy, vehicle data, speed,
  location, battery, HVAC, canonical naming

- [GAS-Requirements] Google Automotive Services Requirements

  Requirements for integrating Google Automotive Services (Google Maps, Google
  Assistant, Google Play Store) into Android Automotive OS head units. Defines
  UX, performance, and integration criteria OEMs must meet to ship GAS on
  production vehicles.

  Document: GAS Requirements (confidential, per-release)\
  URL: <https://source.android.com/docs/automotive>\
  Label: Standard\
  Keywords: Google Automotive Services, GAS, Android Automotive OS, Google Maps,
  Google Assistant, Play Store, head unit, OEM integration

- [IATF-16949] Quality management system requirements for automotive production
  and relevant service parts organizations

  Sector-specific quality management standard for the automotive supply chain.
  Builds on ISO 9001 with additional requirements for defect prevention,
  reduction of variation, and continuous improvement specific to automotive
  manufacturing.

  Document: IATF 16949:2016\
  URL: <https://www.iatfglobaloversight.org/iatf-169492016/about/>\
  Label: Standard\
  Keywords: quality management, IATF, automotive manufacturing, defect
  prevention, continuous improvement, supply chain\
  Derived-from: ISO-9001

- [ISO-11898] Road vehicles — Controller area network (CAN)

  Multi-part standard defining the CAN protocol for in-vehicle communication.
  Covers the data link layer, physical layer, and CAN FD (flexible data rate)
  extensions. The dominant bus system for powertrain, chassis, and body
  electronics.

  Document: ISO 11898 (series, 2024)\
  URL: <https://www.iso.org/standard/83296.html>\
  Label: Standard\
  Keywords: CAN, CAN FD, in-vehicle communication, data link layer, physical
  layer, powertrain, chassis, body electronics

- [ISO-13400] Road vehicles — Diagnostics over Internet Protocol (DoIP)

  Defines diagnostic communication over IP-based vehicle networks. Enables
  high-speed diagnostics, flash programming, and remote diagnostics using
  standard Ethernet/IP infrastructure instead of legacy CAN-based diagnostics.

  Document: ISO 13400 (series, 2019)\
  URL: <https://www.iso.org/standard/74412.html>\
  Label: Standard\
  Keywords: DoIP, diagnostics over IP, flash programming, remote diagnostics,
  Ethernet, vehicle diagnostics

- [ISO-14229] Road vehicles — Unified diagnostic services (UDS)

  Defines the application-layer diagnostic protocol for road vehicles. Specifies
  diagnostic services (read/write data, routine control, download, fault memory)
  used by OEM diagnostic tools and end-of-line testers.

  Document: ISO 14229 (series, 2020)\
  URL: <https://www.iso.org/standard/72439.html>\
  Label: Standard\
  Keywords: UDS, unified diagnostic services, OBD, fault memory, routine
  control, diagnostic tools, end-of-line testing

- [ISO-15765] Road vehicles — Diagnostic communication over Controller Area
  Network (DoCAN)

  Defines the transport protocol and diagnostic communication layer for CAN.
  Maps UDS services onto the CAN bus with segmentation, flow control, and timing
  requirements.

  Document: ISO 15765 (series, 2016)\
  URL: <https://www.iso.org/standard/66574.html>\
  Label: Standard\
  Keywords: DoCAN, CAN diagnostics, transport protocol, segmentation, flow
  control, UDS over CAN\
  Derived-from: ISO-14229

- [ISO-17458] Road vehicles — FlexRay communications system

  Defines the FlexRay protocol for deterministic, high-speed, fault-tolerant
  in-vehicle communication. Supports time-triggered and event-triggered
  paradigms. Used in safety-critical applications such as steer-by-wire and
  brake-by-wire.

  Document: ISO 17458 (series, 2013)\
  URL: <https://www.iso.org/standard/59804.html>\
  Label: Standard\
  Keywords: FlexRay, deterministic communication, fault-tolerant,
  time-triggered, steer-by-wire, brake-by-wire, in-vehicle network

- [ISO-17987] Road vehicles — Local interconnect network (LIN)

  Defines the LIN protocol for low-cost, low-speed serial communication in
  vehicles. Used for body electronics such as window lifts, mirrors, seat
  adjustment, and climate controls where CAN bandwidth is not required.

  Document: ISO 17987 (series, 2016)\
  URL: <https://www.iso.org/standard/61222.html>\
  Label: Standard\
  Keywords: LIN, local interconnect network, body electronics, low-speed serial,
  window lifts, mirrors, seat adjustment, climate

- [ISO-21434] Road vehicles — Cybersecurity engineering

  Defines cybersecurity engineering for road vehicle electrical and electronic
  systems across the full lifecycle. Centres on threat analysis and risk
  assessment (TARA) to systematically identify, evaluate, and treat
  cybersecurity risks. Serves as the engineering implementation basis for UN
  R155 compliance and is increasingly required by OEMs throughout the automotive
  supply chain.

  Document: ISO/SAE 21434:2021\
  URL: <https://www.iso.org/standard/70918.html>\
  Label: Standard\
  Keywords: cybersecurity engineering, TARA, threat analysis, risk assessment,
  vehicle lifecycle, E/E systems, UN R155

- [ISO-21448] Road vehicles — Safety of the intended functionality (SOTIF)

  Addresses hazards caused by functional insufficiencies in the intended
  functionality or by reasonably foreseeable misuse, even in the absence of
  faults. Complements ISO 26262 for systems with AI, sensors, and complex
  algorithms (ADAS, autonomous driving).

  Document: ISO 21448:2022\
  URL: <https://www.iso.org/standard/77490.html>\
  Label: Standard\
  Keywords: SOTIF, safety of intended functionality, functional insufficiencies,
  ADAS, autonomous driving, AI, sensors, misuse

- [ISO-22737] Intelligent transport systems — Low-speed automated driving (LSAD)
  systems

  Performance requirements and test procedures for low-speed automated driving
  systems operating at speeds up to 10 km/h. Covers shuttles, pods, and similar
  vehicles in predefined environments.

  Document: ISO 22737:2021\
  URL: <https://www.iso.org/standard/73767.html>\
  Label: Standard\
  Keywords: LSAD, low-speed automated driving, shuttles, pods, performance
  requirements, test procedures, intelligent transport

- [ISO-22900] Road vehicles — Modular vehicle communication interface (MVCI)

  Defines a standardised interface between diagnostic applications and vehicle
  communication hardware. Enables tool-independent diagnostics through a common
  API (D-PDU API) and protocol stack.

  Document: ISO 22900 (series, 2022)\
  URL: <https://www.iso.org/standard/78208.html>\
  Label: Standard\
  Keywords: MVCI, modular vehicle communication interface, D-PDU API, diagnostic
  applications, tool-independent, protocol stack

- [ISO-22901] Road vehicles — Open diagnostic data exchange (ODX)

  Defines a standardised format (XML-based) for exchanging diagnostic data
  between OEMs, suppliers, and diagnostic tool vendors. Covers vehicle
  identification, flash data, functional diagnostics, and communication
  parameters.

  Document: ISO 22901 (series, 2020)\
  URL: <https://www.iso.org/standard/74399.html>\
  Label: Standard\
  Keywords: ODX, open diagnostic data exchange, XML, diagnostic data, vehicle
  identification, flash data, OEM, supplier

- [ISO-26262] Road vehicles — Functional safety

  Comprehensive standard for functional safety of electrical and electronic
  systems in road vehicles. Defines the safety lifecycle from concept through
  decommissioning.

  Document: ISO 26262:2018 (all parts)\
  URL: <https://www.iso.org/standard/68383.html>\
  Label: Standard\
  Keywords: functional safety, ASIL, safety lifecycle, E/E systems, road
  vehicles, hazard analysis, risk assessment\
  Derived-from: IEC-61508

- [ISO-26262-1] Road vehicles — Functional safety — Part 1

  Vocabulary. Defines terms used throughout the ISO 26262 series.

  Document: ISO 26262-1:2018\
  URL: <https://www.iso.org/standard/68383.html>\
  Label: Standard\
  Keywords: functional safety vocabulary, terminology, definitions\
  Derived-from: ISO-26262

- [ISO-26262-2] Road vehicles — Functional safety — Part 2

  Management of functional safety. Defines organizational roles, safety culture,
  and project-level safety management.

  Document: ISO 26262-2:2018\
  URL: <https://www.iso.org/standard/68384.html>\
  Label: Standard\
  Keywords: safety management, organizational roles, safety culture, project
  management\
  Derived-from: ISO-26262

- [ISO-26262-3] Road vehicles — Functional safety — Part 3

  Concept phase. Defines item definition, hazard analysis and risk assessment
  (HARA), and functional safety concept.

  Document: ISO 26262-3:2018\
  URL: <https://www.iso.org/standard/68385.html>\
  Label: Standard\
  Keywords: concept phase, HARA, hazard analysis, risk assessment, functional
  safety concept, item definition\
  Derived-from: ISO-26262

- [ISO-26262-4] Road vehicles — Functional safety — Part 4

  Product development at the system level. Defines technical safety
  requirements, system design, and system integration/testing.

  Document: ISO 26262-4:2018\
  URL: <https://www.iso.org/standard/68386.html>\
  Label: Standard\
  Keywords: system level development, technical safety requirements, system
  design, system integration, system testing\
  Derived-from: ISO-26262

- [ISO-26262-5] Road vehicles — Functional safety — Part 5

  Product development at the hardware level. Defines hardware safety
  requirements, design, and metrics (SPFM, LFM, PMHF).

  Document: ISO 26262-5:2018\
  URL: <https://www.iso.org/standard/68387.html>\
  Label: Standard\
  Keywords: hardware level development, SPFM, LFM, PMHF, hardware safety
  metrics, hardware design\
  Derived-from: ISO-26262

- [ISO-26262-6] Road vehicles — Functional safety — Part 6

  Product development at the software level. Defines processes for software
  safety requirements, architecture, unit design, implementation, testing, and
  verification.

  Document: ISO 26262-6:2018\
  URL: <https://www.iso.org/standard/68388.html>\
  Label: Standard\
  Keywords: software level development, software safety requirements, software
  architecture, unit design, testing, verification\
  Derived-from: ISO-26262

- [ISO-26262-7] Road vehicles — Functional safety — Part 7

  Production, operation, service, and decommissioning. Safety requirements for
  the full vehicle lifecycle beyond development.

  Document: ISO 26262-7:2018\
  URL: <https://www.iso.org/standard/68389.html>\
  Label: Standard\
  Keywords: production, operation, service, decommissioning, vehicle lifecycle\
  Derived-from: ISO-26262

- [ISO-26262-8] Road vehicles — Functional safety — Part 8

  Supporting processes. Covers interfaces within distributed development,
  configuration management, change management, documentation, and qualification
  of software tools and components.

  Document: ISO 26262-8:2018\
  URL: <https://www.iso.org/standard/68390.html>\
  Label: Standard\
  Keywords: supporting processes, configuration management, change management,
  tool qualification, distributed development\
  Derived-from: ISO-26262

- [ISO-26262-9] Road vehicles — Functional safety — Part 9

  ASIL-oriented and safety-oriented analyses. Defines requirements decomposition
  and dependent failure analysis (FTA, FMEA, DFA).

  Document: ISO 26262-9:2018\
  URL: <https://www.iso.org/standard/68391.html>\
  Label: Standard\
  Keywords: ASIL decomposition, FTA, FMEA, DFA, dependent failure analysis,
  safety-oriented analysis\
  Derived-from: ISO-26262

- [ISO-26262-10] Road vehicles — Functional safety — Part 10

  Guidelines on ISO 26262. Informative guidance on the application of the
  standard with examples and explanations.

  Document: ISO 26262-10:2018\
  URL: <https://www.iso.org/standard/68392.html>\
  Label: Standard\
  Keywords: guidelines, application guidance, examples, explanations,
  informative\
  Derived-from: ISO-26262

- [ISO-26262-11] Road vehicles — Functional safety — Part 11

  Guidelines on application of ISO 26262 to semiconductors. Covers IP blocks,
  ASICs, FPGAs, and standard microcontrollers.

  Document: ISO 26262-11:2018\
  URL: <https://www.iso.org/standard/68393.html>\
  Label: Standard\
  Keywords: semiconductors, IP blocks, ASICs, FPGAs, microcontrollers, hardware
  safety\
  Derived-from: ISO-26262

- [ISO-26262-12] Road vehicles — Functional safety — Part 12

  Adaptation of ISO 26262 for motorcycles. Addresses two- and three-wheeled
  vehicle-specific characteristics.

  Document: ISO 26262-12:2018\
  URL: <https://www.iso.org/standard/68394.html>\
  Label: Standard\
  Keywords: motorcycles, two-wheeled vehicles, three-wheeled vehicles,
  adaptation\
  Derived-from: ISO-26262

- [MISRA-C] MISRA C — Guidelines for the Use of the C Language in Critical
  Systems

  Coding standard defining rules and directives for safe use of C in
  safety-critical and security-critical systems. Widely mandated by ISO 26262,
  IEC 62304, and EN 50128 as a required or recommended coding guideline.

  Document: MISRA C:2023 (Edition 4)\
  URL: <https://misra.org.uk/misra-c/>\
  Label: Standard\
  Keywords: MISRA C, coding standard, C language, safety-critical, rules,
  directives, static analysis

- [MISRA-CPP] MISRA C++ — Guidelines for the Use of C++ in Critical Systems

  Coding standard for safe use of C++ in critical systems. Addresses language
  features that are undefined, implementation-defined, or error-prone. Updated
  for C++17 with guidance on templates, exceptions, and smart pointers.

  Document: MISRA C++:2023\
  URL: <https://misra.org.uk/misra-c-plus-plus/>\
  Label: Standard\
  Keywords: MISRA C++, coding standard, C++ language, safety-critical,
  templates, exceptions, smart pointers

- [SAE-J3016] Taxonomy and Definitions for Terms Related to Driving Automation
  Systems for On-Road Motor Vehicles

  Defines six levels of driving automation (0-5) from no automation to full
  automation. The globally referenced taxonomy for classifying vehicle autonomy
  used by regulators, OEMs, and industry bodies.

  Document: SAE J3016:2021\
  URL: <https://www.sae.org/standards/content/j3016_202104/>\
  Label: Standard\
  Keywords: driving automation levels, SAE levels, autonomous driving, ADAS,
  taxonomy, vehicle autonomy, Level 0-5

## Regulation

- [EU-2018-858] Regulation on the approval and market surveillance of motor
  vehicles

  EU framework regulation for whole-vehicle type approval. Defines the
  procedures for EU type approval, conformity of production, and market
  surveillance. Replaces Directive 2007/46/EC and establishes the legal basis
  for UN regulation references including R155 and R156.

  Document: Regulation (EU) 2018/858\
  URL: <https://eur-lex.europa.eu/eli/reg/2018/858/oj>\
  Label: Regulation\
  Keywords: EU type approval, whole-vehicle approval, market surveillance,
  conformity of production, framework regulation

- [EU-2019-2144] Regulation on type-approval requirements for motor vehicles —
  General Safety

  EU regulation mandating advanced safety systems for all new vehicles. Requires
  intelligent speed assistance, driver drowsiness detection, emergency lane
  keeping, advanced emergency braking, and event data recorders. Applies to all
  new vehicle types from July 2022 and all new vehicles from July 2024.

  Document: Regulation (EU) 2019/2144\
  URL: <https://eur-lex.europa.eu/eli/reg/2019/2144/oj>\
  Label: Regulation\
  Keywords: general safety regulation, intelligent speed assistance, drowsiness
  detection, emergency braking, event data recorder, ADAS mandate

- [FMVSS] Federal Motor Vehicle Safety Standards

  U.S. federal standards prescribing minimum safety performance for motor
  vehicles and equipment. Administered by NHTSA. Covers crashworthiness, crash
  avoidance, and post-crash survivability across numbered standards (e.g., FMVSS
  108, 126, 150, 214).

  Document: 49 CFR Part 571\
  URL: <https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571>\
  Label: Regulation\
  Keywords: FMVSS, NHTSA, crashworthiness, crash avoidance, vehicle safety,
  federal regulation, United States

- [UN-R155] Uniform provisions concerning the approval of vehicles with regards
  to cyber security

  UN regulation mandating cybersecurity management systems for vehicle type
  approval. Requires OEMs to demonstrate cyber risk management processes across
  the vehicle lifecycle. Mandatory in the EU since July 2024.

  Document: UN Regulation No. 155\
  URL:
  https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155\
  Label: Regulation\
  Keywords: cybersecurity management system, vehicle type approval, UNECE, cyber
  risk management, OEM compliance

- [UN-R156] Uniform provisions concerning the approval of vehicles with regards
  to software update

  UN regulation mandating software update management systems for vehicle type
  approval. Requires OEMs to demonstrate safe handling of over-the-air (OTA) and
  workshop software updates.

  Document: UN Regulation No. 156\
  URL:
  https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156\
  Label: Regulation\
  Keywords: software update management system, OTA, over-the-air, vehicle type
  approval, UNECE, workshop update
