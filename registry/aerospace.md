# Aerospace

Standards and specifications for civil and military aviation and space systems,
covering software certification, hardware assurance, safety assessment,
environmental testing, avionics data buses, and quality management for the
aerospace supply chain.

**Contents:** [Standard](#standard)

## Standard

- [ARINC-429] Mark 33 Digital Information Transfer System

  The predominant avionics data bus for commercial aircraft. Defines a simplex,
  point-to-point data bus operating at 12.5 or 100 kbit/s using twisted-pair
  wiring. Carries flight parameters, navigation data, and system status between
  line-replaceable units (LRUs).

  Document: ARINC Specification 429 (Part 1-17)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-429>\
  Label: Standard\
  Keywords: avionics data bus, ARINC, aircraft communication, twisted-pair, LRU,
  flight parameters, navigation data

- [ARINC-664] Aircraft Data Network

  Defines the Avionics Full-Duplex Switched Ethernet (AFDX) network for
  deterministic aircraft data communication. Provides bounded latency and
  guaranteed bandwidth using virtual links over standard Ethernet hardware. Used
  in A380, A350, B787, and military platforms.

  Document: ARINC Specification 664 (Parts 1-8)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-664>\
  Label: Standard\
  Keywords: AFDX, avionics Ethernet, aircraft data network, deterministic
  communication, virtual links, bounded latency

- [ARINC-825] General Standardization of CAN Bus Protocol in Airborne Systems

  Adapts Controller Area Network (CAN) for aerospace applications. Defines CAN
  identifiers, message formats, and fault management for airborne use including
  engine controls, environmental systems, and cabin management.

  Document: ARINC Specification 825-7 (2019)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-825>\
  Label: Standard\
  Keywords: CAN bus, aerospace CAN, airborne systems, engine controls, cabin
  management, fault management

- [ARP-4754A] Guidelines for Development of Civil Aircraft and Systems

  Development assurance guidance for aircraft and systems. Defines processes for
  requirements capture, validation, verification, and configuration management
  at the aircraft and system level. Complements DO-178C (software) and DO-254
  (hardware).

  Document: SAE ARP 4754A (2010)\
  URL: <https://www.sae.org/standards/content/arp4754a/>\
  Label: Standard\
  Keywords: aircraft development, systems assurance, development assurance
  level, requirements, validation, verification, configuration management, SAE

- [ARP-4761] Guidelines and Methods for Conducting the Safety Assessment Process
  on Civil Airborne Systems and Equipment

  Defines safety assessment methods for civil airborne systems including
  Functional Hazard Assessment (FHA), Preliminary System Safety Assessment
  (PSSA), Fault Tree Analysis (FTA), and Common Cause Analysis (CCA).

  Document: SAE ARP 4761 (1996)\
  URL: <https://www.sae.org/standards/content/arp4761/>\
  Label: Standard\
  Keywords: safety assessment, FHA, PSSA, FTA, CCA, airborne systems, hazard
  analysis, SAE

- [AS9100] Quality Management Systems — Requirements for Aviation, Space, and
  Defense Organizations

  Sector-specific quality management standard built on ISO 9001 for aviation,
  space, and defense. Adds requirements for configuration management, risk
  management, design validation, and key characteristics unique to the aerospace
  supply chain.

  Document: AS9100D (2016)\
  URL: <https://www.sae.org/standards/content/as9100d/>\
  Label: Standard\
  Keywords: quality management, aerospace QMS, aviation, space, defense, supply
  chain, configuration management, risk management, SAE\
  Derived-from: ISO-9001

- [DO-160] Environmental Conditions and Test Procedures for Airborne Equipment

  Defines standard environmental test conditions and procedures for airborne
  equipment. Covers temperature, altitude, vibration, humidity, electromagnetic
  interference, and other environmental factors that equipment must withstand.

  Document: DO-160G / ED-14G (2010)\
  URL: <https://www.rtca.org/products/do-160g/>\
  Label: Standard\
  Keywords: environmental testing, airborne equipment, temperature, altitude,
  vibration, humidity, EMI, RTCA

- [DO-178C] Software Considerations in Airborne Systems and Equipment
  Certification

  Primary software certification standard for civil aviation. Provides guidance
  for producing airborne software with a level of confidence commensurate with
  airworthiness requirements. Defines five Design Assurance Levels (DAL A-E).

  Document: DO-178C / ED-12C (2011)\
  URL: <https://www.rtca.org/products/do-178c/>\
  Label: Standard\
  Keywords: airborne software, certification, design assurance level, DAL,
  airworthiness, RTCA, civil aviation

- [DO-254] Design Assurance Guidance for Airborne Electronic Hardware

  Certification guidance for complex electronic hardware used in airborne
  systems. Counterpart to DO-178C for hardware. Defines processes for planning,
  design, verification, and configuration management.

  Document: DO-254 / ED-80 (2000)\
  URL: <https://www.rtca.org/products/do-254/>\
  Label: Standard\
  Keywords: airborne hardware, electronic hardware, certification, design
  assurance, verification, RTCA

- [DO-278A] Guidelines for Communication, Navigation, Surveillance, and Air
  Traffic Management Systems Software Integrity Assurance

  Software assurance guidance for ground-based CNS/ATM systems. Counterpart to
  DO-178C for non-airborne systems. Defines assurance levels (AL 1-6) and
  objectives for air traffic management, surveillance, and communication
  systems.

  Document: DO-278A / ED-109A (2011)\
  URL: <https://www.rtca.org/products/do-278a/>\
  Label: Standard\
  Keywords: CNS/ATM, ground-based systems, air traffic management, software
  assurance, surveillance, communication, RTCA

- [DO-297] Integrated Modular Avionics (IMA) Development Guidance and
  Certification Considerations

  Guidance for developing and certifying Integrated Modular Avionics platforms
  where multiple aircraft functions share computing resources. Addresses
  partitioning, scheduling, health monitoring, and incremental certification.

  Document: DO-297 / ED-124 (2005)\
  URL: <https://www.rtca.org/products/do-297/>\
  Label: Standard\
  Keywords: integrated modular avionics, IMA, partitioning, scheduling, health
  monitoring, incremental certification, RTCA

- [DO-326A] Airworthiness Security Process Specification

  Defines the security process for airborne systems and equipment. Addresses
  intentional unauthorized electronic interaction (IUEI) threats to aircraft
  systems. Integrates cybersecurity into the airworthiness certification
  process.

  Document: DO-326A / ED-202A (2014)\
  URL: <https://www.rtca.org/products/do-326a/>\
  Label: Standard\
  Keywords: airworthiness security, cybersecurity, IUEI, aircraft systems,
  certification, RTCA

- [DO-330] Software Tool Qualification Considerations

  Companion document to DO-178C defining criteria and processes for qualifying
  software tools used in airborne software development. Classifies tools by
  their potential impact on airborne software and specifies qualification
  objectives accordingly.

  Document: DO-330 / ED-215 (2011)\
  URL: <https://www.rtca.org/products/do-330/>\
  Label: Standard\
  Keywords: software tool qualification, airborne software development, tool
  classification, qualification objectives, RTCA\
  Derived-from: DO-178C

- [DO-332] Object-Oriented Technology and Related Techniques Supplement to
  DO-178C

  Supplement providing guidance for using object-oriented technology in airborne
  software. Addresses inheritance, polymorphism, type conversion, and related
  verification challenges specific to OOT.

  Document: DO-332 / ED-217 (2011)\
  URL: <https://www.rtca.org/products/do-332/>\
  Label: Standard\
  Keywords: object-oriented technology, OOT, inheritance, polymorphism, airborne
  software, verification, RTCA\
  Derived-from: DO-178C

- [DO-333] Formal Methods Supplement to DO-178C

  Supplement providing guidance for using formal methods in airborne software
  development. Addresses the use of mathematical proofs as an alternative or
  complement to testing for verification objectives.

  Document: DO-333 / ED-216 (2011)\
  URL: <https://www.rtca.org/products/do-333/>\
  Label: Standard\
  Keywords: formal methods, mathematical proofs, verification, airborne
  software, RTCA\
  Derived-from: DO-178C

- [ECSS-E-ST-40C] Space engineering — Software

  European space software engineering standard. Defines requirements for
  software development in space projects covering all phases from requirements
  to validation. Applies criticality categories (A-D) analogous to DAL.

  Document: ECSS-E-ST-40C (2009)\
  URL: <https://ecss.nl/standard/ecss-e-st-40c-software-general-requirements/>\
  Label: Standard\
  Keywords: space engineering, space software, ECSS, criticality categories,
  software development lifecycle, European space

- [MIL-STD-882E] Department of Defense Standard Practice — System Safety

  U.S. military standard for system safety engineering. Defines hazard severity
  categories, probability levels, and risk assessment matrices. Mandates a
  systematic approach to identifying and mitigating hazards across the full
  system lifecycle.

  Document: MIL-STD-882E (2012)\
  URL: <https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=36027>\
  Label: Standard\
  Keywords: system safety, hazard analysis, risk assessment, severity
  categories, probability levels, military, DoD

- [MIL-STD-1553] Digital Time Division Command/Response Multiplex Data Bus

  Military standard for serial data bus communication. Defines a dual-
  redundant, command/response protocol at 1 Mbit/s used in military aircraft,
  spacecraft, and ground vehicles. Mandated by NATO STANAG 3838.

  Document: MIL-STD-1553B (1978, Notice 4: 2020)\
  URL: <https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=36973>\
  Label: Standard\
  Keywords: military data bus, serial communication, command/response,
  redundant, NATO, STANAG, military aircraft, spacecraft
