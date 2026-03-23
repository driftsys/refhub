# Network Protocols

Standards and specifications for network communication covering IP, transport
protocols, application-layer protocols, security, routing, messaging, and
software-defined networking. Encompasses the foundational protocols of the
internet and modern distributed systems.

**Contents:** [Standard](#standard) | [Publication](#publication)

## Standard

- [AMQP] Advanced Message Queuing Protocol

  Wire-level protocol for message-oriented middleware. Provides reliable,
  interoperable messaging with queuing, routing, publish-subscribe, and
  transactions. Used in enterprise integration and cloud messaging services.

  Document: AMQP v1.0 (ISO/IEC 19464:2014)\
  URL: <https://www.amqp.org/specification/1.0/amqp-org-download>\
  Label: Standard\
  Keywords: messaging, AMQP, middleware, publish-subscribe, queuing, routing,
  enterprise integration, cloud messaging

- [MQTT] MQTT — Message Queuing Telemetry Transport

  Lightweight publish-subscribe messaging protocol for IoT and M2M
  communication. Designed for constrained devices and unreliable networks.
  Provides three QoS levels, retained messages, and last-will notifications.

  Document: MQTT v5.0 (OASIS Standard, 2019)\
  URL: <https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html>\
  Label: Standard\
  Keywords: MQTT, IoT, M2M, publish-subscribe, messaging, constrained devices,
  QoS, telemetry

- [RFC-1035] Domain Name System (DNS)

  Defines the distributed naming system mapping domain names to IP addresses and
  other records. Foundation of internet navigation, email routing (MX), service
  discovery (SRV), and security (DNSSEC). The most queried distributed database
  on earth.

  Document: RFC 1035 (1987), updated by many\
  URL: <https://www.rfc-editor.org/rfc/rfc1035>\
  Label: Standard\
  Keywords: DNS, domain name, IP address resolution, MX record, SRV, DNSSEC,
  name resolution, distributed database

- [RFC-2131] Dynamic Host Configuration Protocol (DHCP)

  Protocol for automatically assigning IP addresses, subnet masks, gateways, and
  DNS servers to network hosts. Eliminates manual IP configuration in
  enterprise, home, and industrial networks. Extended by DHCPv6 (RFC 8415) for
  IPv6.

  Document: RFC 2131 (1997)\
  URL: <https://www.rfc-editor.org/rfc/rfc2131>\
  Label: Standard\
  Keywords: DHCP, IP address assignment, network configuration, DHCPv6, lease,
  subnet mask, gateway, automatic configuration

- [RFC-2328] OSPF Version 2

  Link-state interior gateway protocol for routing within an autonomous system.
  Uses Dijkstra's algorithm to compute shortest paths with support for VLSM,
  ECMP, and area hierarchy. The dominant IGP in enterprise networks.

  Document: RFC 2328 (1998)\
  URL: <https://www.rfc-editor.org/rfc/rfc2328>\
  Label: Standard\
  Keywords: OSPF, routing, link-state, IGP, Dijkstra, ECMP, autonomous system,
  enterprise routing

- [RFC-2784] Generic Routing Encapsulation (GRE)

  Tunneling protocol for encapsulating any network-layer protocol inside IP.
  Used for site-to-site VPNs, connecting non-contiguous subnets, and
  transporting multicast or non-IP traffic across IP networks.

  Document: RFC 2784 (2000)\
  URL: <https://www.rfc-editor.org/rfc/rfc2784>\
  Label: Standard\
  Keywords: GRE, tunneling, encapsulation, VPN, multicast, site-to-site, overlay
  network

- [RFC-2865] Remote Authentication Dial-In User Service (RADIUS)

  Protocol for centralised authentication, authorisation, and accounting (AAA)
  of network access. Used by Wi-Fi controllers, VPN gateways, and network
  switches to validate user credentials against a central server.

  Document: RFC 2865 (2000)\
  URL: <https://www.rfc-editor.org/rfc/rfc2865>\
  Label: Standard\
  Keywords: RADIUS, AAA, authentication, authorisation, accounting, network
  access, Wi-Fi, VPN

- [RFC-3031] Multiprotocol Label Switching (MPLS)

  Forwarding mechanism using short labels instead of long IP addresses for
  high-speed packet switching. Enables traffic engineering, VPN services (L2VPN,
  L3VPN), and QoS in service provider and enterprise WAN networks.

  Document: RFC 3031 (2001)\
  URL: <https://www.rfc-editor.org/rfc/rfc3031>\
  Label: Standard\
  Keywords: MPLS, label switching, traffic engineering, L2VPN, L3VPN, QoS,
  service provider, WAN

- [RFC-4253] The Secure Shell (SSH) Transport Layer Protocol

  Provides encrypted remote login, command execution, and file transfer over
  insecure networks. Defines key exchange, server authentication, and channel
  multiplexing. The universal protocol for secure server administration and Git
  operations.

  Document: RFC 4253 (2006)\
  URL: <https://www.rfc-editor.org/rfc/rfc4253>\
  Label: Standard\
  Keywords: SSH, secure shell, remote login, key exchange, encrypted
  communication, server administration, file transfer

- [RFC-4271] A Border Gateway Protocol 4 (BGP-4)

  The inter-domain routing protocol of the internet. Exchanges reachability
  information between autonomous systems using path-vector routing. Determines
  how traffic flows between ISPs, cloud providers, and enterprise networks
  globally.

  Document: RFC 4271 (2006)\
  URL: <https://www.rfc-editor.org/rfc/rfc4271>\
  Label: Standard\
  Keywords: BGP, border gateway, inter-domain routing, autonomous system, ISP,
  path-vector, internet routing

- [RFC-4301] Security Architecture for the Internet Protocol (IPsec)

  Framework for providing cryptographic security services at the IP layer.
  Defines Authentication Header (AH), Encapsulating Security Payload (ESP), and
  Security Associations for protecting IP traffic. Foundation for site-to-site
  and remote-access VPNs.

  Document: RFC 4301 (2005)\
  URL: <https://www.rfc-editor.org/rfc/rfc4301>\
  Label: Standard\
  Keywords: IPsec, AH, ESP, Security Association, VPN, IP security,
  cryptographic protection, network security

- [RFC-4511] Lightweight Directory Access Protocol (LDAP)

  Protocol for accessing and maintaining distributed directory information. Used
  for centralised user authentication, authorisation, and address book services.
  Foundation for Active Directory, OpenLDAP, and enterprise identity management.

  Document: RFC 4511 (2006)\
  URL: <https://www.rfc-editor.org/rfc/rfc4511>\
  Label: Standard\
  Keywords: LDAP, directory service, authentication, Active Directory, OpenLDAP,
  identity management, user directory

- [RFC-5321] Simple Mail Transfer Protocol (SMTP)

  Defines the protocol for sending email between mail servers. Specifies
  envelope addressing, mail routing via MX records, and relay/delivery
  procedures. The foundational protocol for all internet email transport.

  Document: RFC 5321 (2008)\
  URL: <https://www.rfc-editor.org/rfc/rfc5321>\
  Label: Standard\
  Keywords: SMTP, email, mail transfer, MX record, mail relay, mail delivery,
  internet email

- [RFC-5905] Network Time Protocol Version 4 (NTPv4)

  Protocol for synchronising clocks across packet-switched networks with
  millisecond accuracy. Defines a hierarchical stratum model from reference
  clocks to end hosts. Essential for logging, authentication, certificates, and
  distributed system coordination.

  Document: RFC 5905 (2010)\
  URL: <https://www.rfc-editor.org/rfc/rfc5905>\
  Label: Standard\
  Keywords: NTP, time synchronisation, clock, stratum, network time, logging,
  distributed systems, reference clock

- [RFC-6455] The WebSocket Protocol

  Enables full-duplex communication over a single TCP connection. Provides
  persistent, bidirectional channels for real-time web applications, live
  dashboards, chat systems, and IoT device communication.

  Document: RFC 6455 (2011)\
  URL: <https://www.rfc-editor.org/rfc/rfc6455>\
  Label: Standard\
  Keywords: WebSocket, full-duplex, real-time, bidirectional, TCP, web
  application, live dashboard, persistent connection

- [RFC-7252] The Constrained Application Protocol (CoAP)

  RESTful application protocol for constrained IoT devices and networks.
  Provides GET, PUT, POST, DELETE operations over UDP with low overhead,
  multicast support, and built-in resource discovery. The HTTP equivalent for
  resource-constrained environments.

  Document: RFC 7252 (2014)\
  URL: <https://www.rfc-editor.org/rfc/rfc7252>\
  Label: Standard\
  Keywords: CoAP, IoT, constrained devices, RESTful, UDP, resource discovery,
  lightweight protocol, sensor network

- [RFC-7296] Internet Key Exchange Protocol Version 2 (IKEv2)

  Defines the negotiation protocol for establishing IPsec Security Associations.
  Handles authentication, key exchange, and SA management for site-to-site and
  remote-access VPN deployments. Used in enterprise and telecom VPN
  infrastructure.

  Document: RFC 7296 (2014)\
  URL: <https://www.rfc-editor.org/rfc/rfc7296>\
  Label: Standard\
  Keywords: IKEv2, IPsec, key exchange, Security Association, VPN, site-to-site,
  remote access, authentication

- [RFC-7348] Virtual Extensible Local Area Network (VXLAN)

  Network virtualisation overlay protocol encapsulating Layer 2 frames in UDP/IP
  for transport across Layer 3 networks. Provides up to 16 million logical
  network segments. The dominant overlay protocol in data centre fabrics.

  Document: RFC 7348 (2014)\
  URL: <https://www.rfc-editor.org/rfc/rfc7348>\
  Label: Standard\
  Keywords: VXLAN, network virtualisation, overlay, data centre, Layer 2, UDP,
  network segmentation, fabric

- [RFC-768] User Datagram Protocol (UDP)

  Connectionless transport protocol providing best-effort datagram delivery with
  minimal overhead. Used where low latency is preferred over reliability: DNS,
  VoIP, streaming media, gaming, and real-time IoT telemetry.

  Document: RFC 768 (1980)\
  URL: <https://www.rfc-editor.org/rfc/rfc768>\
  Label: Standard\
  Keywords: UDP, datagram, connectionless, transport protocol, low latency,
  best-effort, VoIP, streaming

- [RFC-791] Internet Protocol Version 4 (IPv4)

  Defines the fundamental network-layer protocol for the internet. Specifies
  addressing (32-bit), fragmentation, time-to-live, and datagram routing.
  Remains the dominant IP version despite IPv6 deployment, carried by every
  internet-connected device.

  Document: RFC 791 (1981)\
  URL: <https://www.rfc-editor.org/rfc/rfc791>\
  Label: Standard\
  Keywords: IPv4, IP addressing, network layer, datagram, routing,
  fragmentation, TTL, internet protocol

- [RFC-793] Transmission Control Protocol (TCP)

  Connection-oriented transport protocol providing reliable, ordered byte stream
  delivery over IP. Handles congestion control, flow control, and
  retransmission. Foundation of most internet communication including HTTP, TLS,
  SSH, and application-layer protocols.

  Document: RFC 793 (1981), updated by RFC 9293 (2022)\
  URL: <https://www.rfc-editor.org/rfc/rfc9293>\
  Label: Standard\
  Keywords: TCP, transport protocol, reliable delivery, congestion control, flow
  control, retransmission, connection-oriented, byte stream

- [RFC-8200] Internet Protocol Version 6 (IPv6)

  Next-generation network-layer protocol with 128-bit addressing, simplified
  headers, built-in IPsec support, and stateless autoconfiguration. Mandatory
  for new deployments in many government and telecom networks as IPv4 address
  space is exhausted.

  Document: RFC 8200 (2017)\
  URL: <https://www.rfc-editor.org/rfc/rfc8200>\
  Label: Standard\
  Keywords: IPv6, 128-bit addressing, autoconfiguration, IPsec, network layer,
  next-generation IP, internet protocol

- [RFC-8259] The JavaScript Object Notation (JSON) Data Interchange Format

  Lightweight text-based data interchange format. The dominant serialisation
  format for REST APIs, configuration files, and inter-service communication
  across web and IoT ecosystems.

  Document: RFC 8259 (2017)\
  URL: <https://www.rfc-editor.org/rfc/rfc8259>\
  Label: Standard\
  Keywords: JSON, data interchange, serialisation, REST API, configuration,
  lightweight format, web, IoT

- [RFC-8446] The Transport Layer Security (TLS) Protocol Version 1.3

  Authenticated encryption for communication channels. Reduces handshake to one
  round trip, removes legacy ciphersuites, and mandates forward secrecy. The
  baseline security protocol for HTTPS, MQTT/TLS, SMTP/TLS, and all modern
  secured transports.

  Document: RFC 8446 (2018)\
  URL: <https://www.rfc-editor.org/rfc/rfc8446>\
  Label: Standard\
  Keywords: TLS, encryption, HTTPS, forward secrecy, handshake, ciphersuite,
  transport security, authenticated encryption

- [RFC-9000] QUIC — A UDP-Based Multiplexed and Secure Transport

  UDP-based transport protocol with built-in TLS 1.3 encryption, multiplexed
  streams, and connection migration. Eliminates head-of-line blocking and
  reduces handshake latency. The transport layer underlying HTTP/3.

  Document: RFC 9000 (2021)\
  URL: <https://www.rfc-editor.org/rfc/rfc9000>\
  Label: Standard\
  Keywords: QUIC, HTTP/3, UDP, multiplexing, TLS 1.3, connection migration, low
  latency, transport protocol

- [RFC-9051] Internet Message Access Protocol (IMAP) Version 4rev2

  Protocol for accessing and managing email on a remote server. Supports folder
  management, search, flags, and selective download enabling multi-device email
  access without removing messages from the server.

  Document: RFC 9051 (2021)\
  URL: <https://www.rfc-editor.org/rfc/rfc9051>\
  Label: Standard\
  Keywords: IMAP, email access, mail server, folder management, multi-device,
  email protocol, message retrieval

- [RFC-9110] HTTP Semantics

  Defines the semantics of HTTP — methods, status codes, headers, and content
  negotiation — independent of transport version. The consolidated specification
  for HTTP/1.1, HTTP/2, and HTTP/3. The dominant application protocol of the
  internet.

  Document: RFC 9110 (2022)\
  URL: <https://www.rfc-editor.org/rfc/rfc9110>\
  Label: Standard\
  Keywords: HTTP, web protocol, REST, status codes, methods, content
  negotiation, HTTP/2, HTTP/3, application layer

## Publication

- [gNMI] gRPC Network Management Interface

  gRPC-based protocol for network device configuration and telemetry streaming.
  Provides model-driven management using YANG models with support for
  subscribe-based streaming telemetry. The modern replacement for SNMP polling
  in SDN environments.

  Document: gNMI Specification (OpenConfig)\
  URL: <https://github.com/openconfig/gnmi>\
  Label: Publication\
  Keywords: gNMI, network management, gRPC, YANG, telemetry streaming,
  OpenConfig, SDN, model-driven management

- [gRPC] gRPC Remote Procedure Call

  High-performance RPC framework using HTTP/2 and Protocol Buffers. Supports
  unary, server-streaming, client-streaming, and bidirectional streaming. Widely
  used in microservice architectures and cloud-native applications.

  Document: gRPC (CNCF Graduated Project)\
  URL: <https://grpc.io/docs/>\
  Label: Publication\
  Keywords: gRPC, RPC, HTTP/2, Protocol Buffers, microservices, streaming,
  cloud-native, CNCF

- [OpenFlow] OpenFlow Switch Specification

  Protocol for communication between SDN controllers and network switches.
  Enables centralised, programmable control of forwarding tables separating the
  control plane from the data plane. Foundation of software-defined networking.

  Document: OpenFlow 1.5.1 (ONF, 2015)\
  URL: <https://opennetworking.org/software-defined-standards/specifications/>\
  Label: Publication\
  Keywords: OpenFlow, SDN, software-defined networking, forwarding table,
  control plane, data plane, network switch, ONF

- [WireGuard] WireGuard VPN Protocol

  Modern, minimal VPN protocol using state-of-the-art cryptography (Curve25519,
  ChaCha20, Poly1305, BLAKE2). Provides a simple, auditable codebase with high
  performance. Integrated into the Linux kernel since 5.6 and adopted across all
  major platforms.

  Document: WireGuard Whitepaper (2020)\
  URL: <https://www.wireguard.com/>\
  Label: Publication\
  Keywords: WireGuard, VPN, Curve25519, ChaCha20, Linux kernel, tunneling,
  cryptography, network security
