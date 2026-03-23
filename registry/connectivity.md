# Connectivity

Standards and specifications for wireless and wired communication technologies,
covering Wi-Fi, Bluetooth, cellular networks, LPWAN, satellite positioning,
vehicle-to-everything communication, and smart home device interoperability.

**Contents:** [Standard](#standard) | [Regulation](#regulation)

## Standard

- [3GPP-4G-LTE] 3GPP Long Term Evolution (4G LTE)

  Fourth-generation mobile broadband standard. Provides peak data rates of 300
  Mbit/s (downlink) and 75 Mbit/s (uplink) using OFDMA. Includes LTE-M (Cat-M1)
  for IoT with extended coverage and reduced power consumption.

  Document: 3GPP Release 17 (LTE)\
  URL: <https://www.3gpp.org/specifications-technologies/releases/release-17>\
  Label: Standard\
  Keywords: 4G, LTE, mobile broadband, OFDMA, LTE-M, Cat-M1, IoT, 3GPP

- [3GPP-5G-NR] 3GPP 5G New Radio

  Fifth-generation mobile standard providing enhanced mobile broadband (eMBB),
  ultra-reliable low-latency communication (URLLC), and massive machine-type
  communication (mMTC). Supports sub-6 GHz and mmWave bands with network slicing
  for dedicated service profiles.

  Document: 3GPP Release 18 (5G-Advanced)\
  URL: <https://www.3gpp.org/specifications-technologies/releases/release-18>\
  Label: Standard\
  Keywords: 5G, New Radio, eMBB, URLLC, mMTC, network slicing, mmWave, 3GPP

- [BLE] Bluetooth Low Energy

  Low-power wireless technology for IoT, wearables, and proximity applications.
  Operates in the 2.4 GHz ISM band with minimal energy consumption. Supports
  mesh networking, direction finding, and LE Audio (LC3 codec).

  Document: Bluetooth Core Specification 6.0 — Part F (LE)\
  URL: <https://www.bluetooth.com/specifications/specs/core-specification-6-0/>\
  Label: Standard\
  Keywords: BLE, Bluetooth Low Energy, IoT, wearables, mesh networking, LE
  Audio, LC3, low power, 2.4 GHz\
  Derived-from: IEEE-802-15-1

- [CCC-Digital-Key] Car Connectivity Consortium Digital Key

  Specification enabling smartphones and wearables to act as vehicle keys. Uses
  BLE for proximity detection, NFC for passive entry, and UWB for precise
  ranging to prevent relay attacks. Adopted by major OEMs.

  Document: CCC Digital Key Release 3.0 (2022)\
  URL: <https://carconnectivity.org/digital-key/>\
  Label: Standard\
  Keywords: digital key, CCC, smartphone key, BLE, NFC, UWB, vehicle access,
  relay attack prevention

- [C-V2X] Cellular Vehicle-to-Everything

  3GPP-based communication technology for vehicle connectivity. Supports
  vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I), vehicle-to-
  pedestrian (V2P), and vehicle-to-network (V2N) modes using both direct
  (sidelink) and network-based communication.

  Document: 3GPP Release 16+ (C-V2X)\
  URL: <https://www.3gpp.org/specifications-technologies/releases/release-16>\
  Label: Standard\
  Keywords: C-V2X, V2V, V2I, V2P, V2N, vehicle connectivity, sidelink, 3GPP,
  cellular

- [DSRC] Dedicated Short-Range Communications (IEEE 802.11p)

  Wireless communication standard for vehicle-to-everything (V2X) communication
  using the 5.9 GHz band. Provides low-latency direct communication for safety
  applications. Being superseded by C-V2X in many deployments.

  Document: IEEE 802.11p (2010) / IEEE 802.11-2020\
  URL: <https://standards.ieee.org/ieee/802.11/7028/>\
  Label: Standard\
  Keywords: DSRC, V2X, 5.9 GHz, low-latency, vehicle communication, IEEE
  802.11p, safety applications

- [GNSS] Global Navigation Satellite Systems

  Umbrella term for satellite positioning systems including GPS (U.S.), Galileo
  (EU), GLONASS (Russia), and BeiDou (China). Provides position, navigation, and
  timing (PNT) services for automotive, aviation, maritime, and consumer
  applications.

  Document: IS-GPS-200 (GPS) / Galileo OS SIS ICD\
  URL: <https://www.gps.gov/technical/icwg/>\
  Label: Standard\
  Keywords: GNSS, GPS, Galileo, GLONASS, BeiDou, satellite positioning,
  navigation, timing, PNT

- [IEEE-802-11] Wireless LAN (Wi-Fi)

  Family of standards for wireless local area networking. Defines PHY and MAC
  layer specifications for Wi-Fi communication. Includes 802.11ax (Wi-Fi 6),
  802.11be (Wi-Fi 7), and legacy amendments. The dominant WLAN technology for
  consumer, enterprise, and IoT deployments.

  Document: IEEE 802.11 (series)\
  URL: <https://standards.ieee.org/ieee/802.11/7028/>\
  Label: Standard\
  Keywords: Wi-Fi, WLAN, IEEE 802.11, Wi-Fi 6, Wi-Fi 7, wireless networking,
  PHY, MAC

- [IEEE-802-15-1] Bluetooth

  Standard for short-range wireless communication between devices. Defines Basic
  Rate/Enhanced Data Rate (BR/EDR) for streaming audio and data, and Bluetooth
  Low Energy (BLE) for low-power IoT sensors, wearables, and beacons.

  Document: Bluetooth Core Specification 6.0 (2024)\
  URL: <https://www.bluetooth.com/specifications/specs/core-specification-6-0/>\
  Label: Standard\
  Keywords: Bluetooth, BR/EDR, BLE, short-range wireless, audio streaming, IoT,
  wearables, beacons, IEEE 802.15.1

- [IEEE-802-15-4] Low-Rate Wireless Personal Area Networks (LR-WPAN)

  Physical and MAC layer standard for low-rate, low-power wireless networks.
  Foundation for Zigbee, Thread, and 6LoWPAN. Used in home automation,
  industrial sensing, and smart metering.

  Document: IEEE 802.15.4 (2020)\
  URL: <https://standards.ieee.org/ieee/802.15.4/7029/>\
  Label: Standard\
  Keywords: LR-WPAN, IEEE 802.15.4, Zigbee foundation, Thread foundation,
  6LoWPAN, low power, home automation, industrial sensing

- [LoRaWAN] LoRaWAN Specification

  Long-range, low-power wide-area network protocol for IoT. Defines MAC layer
  and network architecture operating on LoRa PHY. Provides coverage up to 15 km
  in rural areas with battery life exceeding 10 years for simple sensors.

  Document: LoRaWAN 1.0.4 / Regional Parameters RP2-1.0.4\
  URL:
  <https://lora-alliance.org/resource_hub/lorawan-104-specification-package/>\
  Label: Standard\
  Keywords: LoRaWAN, LPWAN, long-range, low-power, IoT, LoRa, wide-area network,
  sensors

- [Matter] Matter — Connectivity Standard for Smart Home

  Application-layer protocol unifying smart home device communication across
  Wi-Fi, Thread, and Ethernet. Developed by the Connectivity Standards Alliance
  (CSA). Ensures interoperability between Apple, Google, Amazon, and Samsung
  ecosystems.

  Document: Matter 1.4 (2024)\
  URL: <https://csa-iot.org/all-solutions/matter/>\
  Label: Standard\
  Keywords: Matter, smart home, CSA, interoperability, Wi-Fi, Thread, Ethernet,
  Apple, Google, Amazon

- [NB-IoT] Narrowband Internet of Things

  3GPP cellular technology optimised for low-power wide-area IoT. Provides deep
  indoor coverage, battery life exceeding 10 years, and support for massive
  device density. Used for smart metering, asset tracking, and environmental
  monitoring.

  Document: 3GPP Release 17 (NB-IoT)\
  URL: <https://www.3gpp.org/specifications-technologies/releases/release-17>\
  Label: Standard\
  Keywords: NB-IoT, narrowband, LPWAN, cellular IoT, smart metering, asset
  tracking, 3GPP, deep coverage

- [NFC] Near Field Communication

  Short-range (up to 10 cm) wireless technology for contactless data exchange.
  Operates at 13.56 MHz. Used for contactless payments, access control, device
  pairing, and electronic identification.

  Document: ISO/IEC 18092:2023 (NFCIP-1)\
  URL: <https://www.iso.org/standard/82088.html>\
  Label: Standard\
  Keywords: NFC, near field communication, contactless, payments, access
  control, 13.56 MHz, RFID, ISO 18092

- [Thread] Thread Networking Protocol

  IPv6-based mesh networking protocol for IoT built on IEEE 802.15.4. Provides
  reliable, low-power, secure device-to-device and device-to-cloud
  communication. Foundation transport for Matter smart home devices.

  Document: Thread 1.3 (2023)\
  URL: <https://www.threadgroup.org/What-is-Thread/Thread-Benefits>\
  Label: Standard\
  Keywords: Thread, IPv6, mesh networking, IoT, IEEE 802.15.4, Matter, low
  power, device-to-device\
  Derived-from: IEEE-802-15-4

- [UWB] Ultra-Wideband

  High-bandwidth, short-range wireless technology providing centimetre-level
  ranging accuracy. Used for secure vehicle access (CCC Digital Key), indoor
  positioning, asset tracking, and spatial awareness in consumer electronics.

  Document: IEEE 802.15.4z (2020) / FiRa Consortium\
  URL: <https://www.firaconsortium.org/>\
  Label: Standard\
  Keywords: UWB, ultra-wideband, ranging, indoor positioning, asset tracking,
  FiRa, IEEE 802.15.4z, spatial awareness

- [Wi-Fi-Alliance] Wi-Fi Alliance Certification Programs

  Industry certification programs ensuring interoperability of Wi-Fi devices.
  Includes Wi-Fi CERTIFIED 6, Wi-Fi CERTIFIED 7, WPA3, Wi-Fi Direct, Wi-Fi
  Aware, and Passpoint for hotspot roaming.

  Document: Wi-Fi Alliance Specifications\
  URL: <https://www.wi-fi.org/discover-wi-fi>\
  Label: Standard\
  Keywords: Wi-Fi Alliance, WPA3, Wi-Fi Direct, Wi-Fi Aware, Passpoint,
  certification, interoperability

- [Zigbee] Zigbee Specification

  Network and application layer protocol built on IEEE 802.15.4 for mesh
  networking in home and building automation. Supports up to 65,000 nodes per
  network with self-healing mesh topology.

  Document: Zigbee 3.0 (2016)\
  URL:
  <https://csa-iot.org/developer-resource/specifications-download-request/>\
  Label: Standard\
  Keywords: Zigbee, mesh networking, home automation, building automation, IEEE
  802.15.4, self-healing mesh, CSA\
  Derived-from: IEEE-802-15-4

## Regulation

- [ETSI-EN-303-645] Cyber Security for Consumer Internet of Things

  European standard establishing baseline cybersecurity requirements for
  consumer IoT devices. Covers no default passwords, vulnerability disclosure,
  software updates, secure communication, and data minimisation. Referenced by
  the EU Cyber Resilience Act.

  Document: ETSI EN 303 645 V2.1.1 (2020)\
  URL:
  https://www.etsi.org/deliver/etsi_en/303600_303699/303645/02.01.01_60/en_303645v020101p.pdf\
  Label: Regulation\
  Keywords: consumer IoT security, ETSI, cybersecurity, default passwords,
  vulnerability disclosure, Cyber Resilience Act

- [EU-RED] Directive on the harmonisation of the laws relating to the making
  available on the market of radio equipment

  EU directive establishing essential requirements for radio equipment placed on
  the EU market. Covers spectrum use, EMC, safety, and — from 2025 —
  cybersecurity requirements for connected devices under delegated acts.

  Document: Directive 2014/53/EU\
  URL: <https://eur-lex.europa.eu/eli/dir/2014/53/oj>\
  Label: Regulation\
  Keywords: Radio Equipment Directive, EU, spectrum, EMC, safety, cybersecurity,
  connected devices, CE marking

- [FCC-Part-15] FCC Rules Part 15 — Radio Frequency Devices

  U.S. federal regulation governing unlicensed radio frequency devices. Defines
  emission limits and operating conditions for Wi-Fi, Bluetooth, UWB, IoT
  devices, and other intentional and unintentional radiators.

  Document: 47 CFR Part 15\
  URL: <https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15>\
  Label: Regulation\
  Keywords: FCC, Part 15, unlicensed radio, emission limits, Wi-Fi, Bluetooth,
  UWB, IoT, United States
