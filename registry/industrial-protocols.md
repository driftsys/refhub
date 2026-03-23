# Industrial Communication Protocols

Standards for industrial communication, fieldbus systems, and safety
communication in automation environments. Covers serial and Ethernet-based
fieldbus protocols, precision time synchronisation, and safety overlay protocols
for SIL-rated communication.

**Contents:** [Standard](#standard)

## Standard

- [CANopen] CANopen Application Layer and Communication Profile

  Higher-layer protocol built on CAN (ISO 11898) for embedded systems and
  industrial automation. Defines object dictionary, PDO/SDO communication, NMT
  state machine, and device profiles for drives, I/O modules, and sensors.

  Document: CiA 301 V4.2 (2011)\
  URL: <https://www.can-cia.org/canopen/>\
  Label: Standard\
  Keywords: CAN, CANopen, object dictionary, PDO, SDO, NMT, embedded systems,
  industrial automation

- [CIP-Safety] CIP Safety — Common Industrial Protocol Safety

  Safety extension for EtherNet/IP and DeviceNet networks enabling SIL 3 safety
  communication. Uses CRC, time expectation, and connection ID validation over
  standard CIP transport for safety-critical I/O and interlocking.

  Document: CIP Safety (ODVA)\
  URL: <https://www.odva.org/technology-standards/key-technologies/cip-safety/>\
  Label: Standard\
  Keywords: CIP, safety communication, SIL 3, EtherNet/IP, DeviceNet, safety
  I/O, interlocking

- [EtherCAT] Ethernet for Control Automation Technology

  High-performance industrial Ethernet standard using processing-on-the-fly
  technology. Achieves sub-microsecond synchronisation and cycle times below 100
  microseconds. Dominant in motion control, CNC, and high-speed automation
  applications.

  Document: IEC 61158 / IEC 61784-2 (EtherCAT profiles)\
  URL: <https://www.ethercat.org/en/technology.html>\
  Label: Standard\
  Keywords: EtherCAT, industrial Ethernet, motion control, CNC, real-time,
  processing-on-the-fly, high-speed automation

- [FSoE] Fail Safe over EtherCAT

  Safety-over-EtherCAT protocol enabling SIL 3 safety communication over
  standard EtherCAT networks. Uses a black channel approach with independent
  safety containers embedded in regular EtherCAT frames for safe I/O and drive
  control.

  Document: ETG.5100 (EtherCAT Technology Group)\
  URL: <https://www.ethercat.org/en/technology.html>\
  Label: Standard\
  Keywords: FSoE, EtherCAT safety, SIL 3, black channel, safety containers, safe
  I/O, drive control

- [IEEE-1588] IEEE Standard for a Precision Clock Synchronization Protocol for
  Networked Measurement and Control Systems

  Defines the Precision Time Protocol (PTP) for sub-microsecond clock
  synchronisation over packet networks. Used in industrial automation, power
  systems, telecom, broadcast, and automotive Ethernet for time-critical
  applications.

  Document: IEEE 1588-2019\
  URL: <https://standards.ieee.org/ieee/1588/6825/>\
  Label: Standard\
  Keywords: PTP, precision time protocol, clock synchronisation, time-sensitive
  networking, industrial automation, telecom

- [IO-Link] IO-Link Point-to-Point Communication

  Standardised I/O technology for connecting sensors and actuators to automation
  systems. Provides parameterisation, diagnostics, and process data exchange
  over standard three-wire cables. Enables smart sensor integration with any
  fieldbus system.

  Document: IEC 61131-9:2022\
  URL: <https://io-link.com/en/Technology/Technology.php>\
  Label: Standard\
  Keywords: IO-Link, sensor integration, actuators, parameterisation,
  point-to-point, smart sensors, three-wire

- [Modbus] Modbus Communication Protocol

  Serial and TCP/IP communication protocol for industrial electronic devices.
  Defines a simple request/response model for reading and writing registers. The
  most widely deployed industrial protocol due to simplicity and openness.

  Document: Modbus Application Protocol V1.1b3 (2012)\
  URL: <https://modbus.org/specs.php>\
  Label: Standard\
  Keywords: Modbus, serial communication, TCP/IP, registers, request/response,
  industrial protocol, fieldbus

- [PROFIBUS] Process Field Bus

  IEC fieldbus standard for process and factory automation. Defines PROFIBUS DP
  (Decentralized Peripherals) for fast I/O and PROFIBUS PA (Process Automation)
  for intrinsically safe process instrumentation. Predecessor to PROFINET.

  Document: IEC 61158 / IEC 61784 (PROFIBUS profiles)\
  URL: <https://www.profibus.com/technology/profibus>\
  Label: Standard\
  Keywords: PROFIBUS, fieldbus, process automation, factory automation, PROFIBUS
  DP, PROFIBUS PA, intrinsic safety

- [PROFINET] PROFINET Industrial Ethernet

  Real-time industrial Ethernet standard from PI (PROFIBUS & PROFINET
  International). Provides three performance classes: TCP/IP for non- critical,
  RT for soft real-time, and IRT for hard real-time with sub- microsecond jitter
  via scheduled traffic.

  Document: IEC 61158 / IEC 61784-2 (PROFINET profiles)\
  URL: <https://www.profinet.com/technology/profinet>\
  Label: Standard\
  Keywords: PROFINET, industrial Ethernet, real-time, IRT, soft real-time,
  scheduled traffic, factory automation

- [PROFIsafe] PROFIsafe Safety Communication Profile

  Safety overlay protocol for PROFINET and PROFIBUS enabling SIL 3 / PL e safety
  communication over standard industrial networks. Uses a black channel approach
  with CRC, sequence numbers, and watchdog monitoring.

  Document: IEC 61784-3-3 (PROFIsafe profile)\
  URL: <https://www.profibus.com/technology/profisafe>\
  Label: Standard\
  Keywords: PROFIsafe, safety communication, SIL 3, PL e, black channel, CRC,
  PROFINET safety, PROFIBUS safety
