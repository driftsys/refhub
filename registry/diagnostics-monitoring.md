# Diagnostics and Monitoring

## Automotive Diagnostics

- [OBD-II] On-Board Diagnostics II

  Mandated vehicle self-diagnostic and reporting system. Defines standard
  diagnostic trouble codes (DTCs), data PIDs, and the physical connector (SAE
  J1962) for accessing emissions-related diagnostic data. Required by US EPA and
  EU type approval regulations.

  Document: SAE J1979 / ISO 15031 (series)\
  URL: <https://www.iso.org/standard/71093.html>

- [WWH-OBD] World-Wide Harmonized On-Board Diagnostics

  Next-generation OBD standard harmonising diagnostic requirements worldwide.
  Uses UDS (ISO 14229) over CAN and IP transport, replacing legacy OBD-II
  protocols. Supports enhanced diagnostic data reporting and remote monitoring
  capabilities.

  Document: ISO 27145 (series, 2021)\
  URL: <https://www.iso.org/standard/79133.html>

- [SAE-J2534] Recommended Practice for Pass-Thru Vehicle Programming

  Defines a standardised API for vehicle ECU reprogramming through a generic
  pass-through device. Enables independent workshops to perform flash
  programming without OEM-proprietary tools. Mandated by US Right-to-Repair
  regulations.

  Document: SAE J2534 (2004)\
  URL: <https://www.sae.org/standards/content/j2534_200412/>

- [ISO-13209] Road vehicles — Open test sequence exchange (OTX)

  Defines an XML-based language for describing diagnostic and test sequences in
  an implementation-independent format. Enables exchange of test logic between
  diagnostic authoring tools, runtime environments, and OEMs.

  Document: ISO 13209 (series, 2022)\
  URL: <https://www.iso.org/standard/79125.html>

## Network Diagnostics

- [SNMP] Simple Network Management Protocol

  IETF protocol for monitoring and managing network devices. Defines MIBs
  (Management Information Bases), GET/SET operations, and trap notifications.
  The dominant protocol for infrastructure monitoring in enterprise and telecom
  networks.

  Document: RFC 3411-3418 (SNMPv3, 2002)\
  URL: <https://www.rfc-editor.org/rfc/rfc3411>

- [NETCONF] Network Configuration Protocol

  IETF protocol for installing, manipulating, and deleting configuration of
  network devices. Uses XML-encoded RPC over SSH providing transactional
  configuration management with rollback capabilities.

  Document: RFC 6241 (2011)\
  URL: <https://www.rfc-editor.org/rfc/rfc6241>

- [YANG] YANG Data Modeling Language

  IETF data modelling language for network configuration and state data. Defines
  the structure, constraints, and semantics of data exchanged via NETCONF and
  RESTCONF. The standard data model for software-defined networking and network
  automation.

  Document: RFC 7950 (2016)\
  URL: <https://www.rfc-editor.org/rfc/rfc7950>

## Server and Hardware Monitoring

- [Redfish] Redfish Scalable Platforms Management API

  DMTF standard RESTful API for server and infrastructure management. Replaces
  IPMI with a modern, secure, and scalable interface for hardware monitoring,
  firmware update, and out-of-band management of data centre equipment.

  Document: Redfish Specification (DSP0266, 2024)\
  URL: <https://www.dmtf.org/standards/redfish>

- [IPMI] Intelligent Platform Management Interface

  Intel specification for monitoring and managing server hardware independently
  of the host OS. Provides sensor data (temperature, voltage, fan speed), event
  logging, and remote power control via a baseboard management controller (BMC).

  Document: IPMI v2.0 (2013)\
  URL:
  <https://www.intel.com/content/www/us/en/products/docs/servers/ipmi/ipmi-home.html>

## Aerospace Diagnostics

- [ARINC-624] Design Guidance for Onboard Maintenance System

  Defines the onboard maintenance system (OMS) architecture for commercial
  aircraft. Covers central maintenance computing, built-in test equipment (BITE)
  interfaces, fault correlation, and troubleshooting data used by line
  maintenance technicians.

  Document: ARINC Report 624-2 (2013)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-624>

- [ARINC-615A] Software Data Loader Using Ethernet Interface

  Defines protocols for loading software parts into aircraft LRUs (line-
  replaceable units) via Ethernet. Covers file transfer, load verification, and
  status reporting for field-loadable software in avionics systems.

  Document: ARINC Specification 615A-4 (2014)\
  URL: <https://aviation-ia.sae-itc.com/standards/arinc-615a>

- [ATA-iSpec-2200] Information Standards for Aviation Maintenance

  Defines data standards for aircraft maintenance documentation including
  illustrated parts catalogues, troubleshooting data, wiring diagrams, and
  maintenance procedures. The standard interchange format between aircraft OEMs,
  airlines, and MRO providers.

  Document: ATA iSpec 2200 (2019)\
  URL:
  <https://publications.airlines.org/CommerceProductDetail.aspx?Product=317>
