# Robotics

Standards for robotic systems covering industrial robot safety, collaborative
robots, autonomous mobile robots, middleware and communication frameworks, and
machinery safety requirements for integrated manufacturing systems.

**Contents:** [Standard](#standard) | [Publication](#publication)

## Standard

- [DDS] Data Distribution Service for Real-Time Systems

  OMG middleware standard for real-time, publish-subscribe data distribution.
  Used in autonomous vehicles, military systems, and robotic platforms. Provides
  deterministic, low-latency communication with Quality of Service policies and
  automatic discovery.

  Document: OMG DDS 1.4 (2015)\
  URL: <https://www.omg.org/spec/DDS/>\
  Label: Standard\
  Keywords: data distribution, publish-subscribe, real-time, middleware, QoS,
  autonomous vehicles, military systems

- [DDS-RTPS] DDS Interoperability Wire Protocol (RTPS)

  Defines the wire protocol enabling interoperability between DDS
  implementations from different vendors. Specifies discovery, data
  serialisation, and reliable/best-effort delivery over UDP multicast. Ensures
  plug-and-play communication across heterogeneous DDS systems.

  Document: OMG DDSI-RTPS 2.5 (2022)\
  URL: <https://www.omg.org/spec/DDSI-RTPS/>\
  Label: Standard\
  Keywords: wire protocol, RTPS, DDS interoperability, UDP multicast, discovery,
  data serialisation, vendor interoperability\
  Derived-from: DDS

- [DDS-Security] DDS Security Specification

  Defines a plugin architecture for authentication, access control,
  cryptographic operations, and logging in DDS systems. Enables secure
  publish-subscribe communication for defense, autonomous vehicles, and critical
  infrastructure applications.

  Document: OMG DDS Security 1.1 (2018)\
  URL: <https://www.omg.org/spec/DDS-SECURITY/>\
  Label: Standard\
  Keywords: DDS security, authentication, access control, cryptography,
  publish-subscribe security, defense, critical infrastructure\
  Derived-from: DDS

- [IEC-60204-1] Safety of machinery — Electrical equipment of machines — Part 1:
  General requirements

  Requirements for electrical, electronic, and programmable electronic equipment
  and systems of machines. Covers power circuits, control circuits, protective
  bonding, EMC, and documentation for industrial machinery installations.

  Document: IEC 60204-1:2016\
  URL: <https://webstore.iec.ch/en/publication/26036>\
  Label: Standard\
  Keywords: machinery electrical safety, power circuits, control circuits, EMC,
  protective bonding, industrial machinery

- [IEC-62541] OPC Unified Architecture (OPC UA)

  Platform-independent communication standard for industrial automation and IoT.
  Provides secure, reliable data exchange with built-in information modelling.
  Supports client/server and publish/subscribe patterns for machine-to-machine
  and machine-to-cloud communication.

  Document: IEC 62541 (series, 2020)\
  URL: <https://webstore.iec.ch/en/publication/25997>\
  Label: Standard\
  Keywords: OPC UA, industrial automation, IoT, information modelling,
  client-server, publish-subscribe, machine-to-machine

- [ISO-3691-4] Industrial trucks — Safety requirements and verification — Part
  4: Driverless industrial trucks and their systems

  Safety requirements for driverless industrial trucks (automated guided
  vehicles and autonomous mobile robots) operating in industrial environments.
  Covers navigation, obstacle detection, and operational design domains.

  Document: ISO 3691-4:2023\
  URL: <https://www.iso.org/standard/83669.html>\
  Label: Standard\
  Keywords: AGV, autonomous mobile robots, driverless trucks, navigation,
  obstacle detection, industrial safety

- [ISO-10218-1] Robots and robotic devices — Safety requirements — Part 1

  Safety requirements for industrial robot design and construction. Defines
  hazard identification, risk assessment, and protective measures for the robot
  itself, independent of installation.

  Document: ISO 10218-1:2024\
  URL: <https://www.iso.org/standard/82626.html>\
  Label: Standard\
  Keywords: industrial robot safety, hazard identification, risk assessment,
  robot design, protective measures

- [ISO-10218-2] Robots and robotic devices — Safety requirements — Part 2

  Safety requirements for robot systems and integration. Covers cell layout,
  safeguarding, commissioning, and maintenance of complete robotic
  installations.

  Document: ISO 10218-2:2024\
  URL: <https://www.iso.org/standard/82627.html>\
  Label: Standard\
  Keywords: robot integration, cell layout, safeguarding, commissioning, robotic
  installations, system safety

- [ISO-11161] Safety of machinery — Integrated manufacturing systems

  Safety requirements for integrated manufacturing systems combining multiple
  machines, robots, and material handling equipment. Addresses inter-machine
  safeguarding, mode selection, and the safety of the overall integrated system.

  Document: ISO 11161:2007+AMD1:2010\
  URL: <https://www.iso.org/standard/35996.html>\
  Label: Standard\
  Keywords: integrated manufacturing, inter-machine safeguarding, mode
  selection, manufacturing safety, material handling

- [ISO-13482] Robots and robotic devices — Safety requirements for personal care
  robots

  Safety requirements for non-industrial, non-medical personal care robots.
  Covers mobile servant robots, physical assistant robots, and person carrier
  robots operating in close proximity to humans.

  Document: ISO 13482:2014\
  URL: <https://www.iso.org/standard/53820.html>\
  Label: Standard\
  Keywords: personal care robots, service robots, mobile robots, physical
  assistant, human-robot proximity, non-industrial robots

- [ISO-13850] Safety of machinery — Emergency stop function — Principles for
  design

  Design principles for the emergency stop function on machinery. Defines
  requirements for initiation, stop categories, reset, and the priority of
  emergency stop over all other functions.

  Document: ISO 13850:2015\
  URL: <https://www.iso.org/standard/59970.html>\
  Label: Standard\
  Keywords: emergency stop, machinery safety, stop categories, reset, safety
  function, e-stop\
  Derived-from: ISO-12100

- [ISO-TS-15066] Robots and robotic devices — Collaborative robots

  Safety requirements for collaborative robot systems where humans and robots
  share the workspace. Defines four collaboration methods: safety-rated
  monitored stop, hand guiding, speed and separation monitoring, and power and
  force limiting.

  Document: ISO/TS 15066:2016\
  URL: <https://www.iso.org/standard/62996.html>\
  Label: Standard\
  Keywords: collaborative robots, cobots, human-robot collaboration, power and
  force limiting, speed and separation monitoring, hand guiding\
  Derived-from: ISO-10218-2

## Publication

- [ROS-2] Robot Operating System 2

  Open-source middleware framework for robot software development. Provides
  hardware abstraction, device drivers, communication infrastructure (built on
  DDS), package management, and tools for building distributed robotic systems.

  Document: ROS 2 (Rolling / Jazzy Jalisco)\
  URL: <https://docs.ros.org/en/rolling/>\
  Label: Publication\
  Keywords: ROS, robot middleware, hardware abstraction, device drivers,
  distributed robotics, open-source, DDS\
  Derived-from: DDS
