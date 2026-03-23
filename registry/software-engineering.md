# Software Engineering

- [ISO-12207] Systems and software engineering — Software life cycle processes

  Defines processes for managing and executing the engineering of software
  throughout its life cycle. The software-level counterpart to ISO/IEC/IEEE
  15288.

  Document: ISO/IEC/IEEE 12207:2017\
  URL: https://www.iso.org/standard/63712.html

- [ISO-15504] Information technology — Process assessment

  Framework for process assessment. The basis from which Automotive SPICE is
  derived. Superseded by the ISO/IEC 33001 series but still widely referenced.

  Document: ISO/IEC 15504 (series)\
  URL: https://www.iso.org/standard/60555.html\
  Status: Superseded\
  Superseded-by: ISO-33001

- [ISO-25010] Systems and software engineering — Systems and software Quality
  Requirements and Evaluation (SQuaRE)

  Defines quality models for software product quality and quality in use.
  Establishes eight characteristics: functional suitability, performance
  efficiency, compatibility, usability, reliability, security, maintainability,
  and portability.

  Document: ISO/IEC 25010:2023\
  URL: https://www.iso.org/standard/78176.html

- [ISO-25001] Systems and software engineering — SQuaRE — Planning and
  management

  Requirements and guidance for managing the evaluation of software product
  quality. Defines the framework for applying the SQuaRE series in practice.

  Document: ISO/IEC 25001:2014\
  URL: https://www.iso.org/standard/64016.html

- [RFC-2119] Key words for use in RFCs to Indicate Requirement Levels

  Defines the precise meaning of MUST, SHALL, SHOULD, MAY, and their negatives
  when used in standards and specifications. The de facto convention for
  requirement language across all engineering domains.

  Document: RFC 2119 (1997)\
  URL: https://www.rfc-editor.org/rfc/rfc2119

- [RFC-8174] Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words

  Clarifies that RFC 2119 keywords are only normative when they appear in ALL
  UPPERCASE. Lowercase uses carry no special meaning. Updates RFC 2119.

  Document: RFC 8174 (2017)\
  URL: https://www.rfc-editor.org/rfc/rfc8174\
  Derived-from: RFC-2119

- [ISO-33001] Information technology — Process assessment — Concepts and
  terminology

  Replacement for ISO/IEC 15504. Defines concepts, terminology, and framework
  for process assessment. The current normative basis for process capability
  determination.

  Document: ISO/IEC 33001:2015\
  URL: https://www.iso.org/standard/54175.html

- [IEEE-1012] System, Software, and Hardware Verification and Validation

  Defines processes for verification and validation (V&V) of systems, software,
  and hardware. Specifies V&V tasks, inputs, outputs, and activities mapped to
  integrity levels and lifecycle phases.

  Document: IEEE 1012-2016\
  URL: https://standards.ieee.org/ieee/1012/5609/

- [ISO-29119] Software and systems engineering — Software testing

  Multi-part standard defining a comprehensive framework for software testing.
  Covers test processes, test documentation, test techniques, and keyword-driven
  testing across all testing levels and types.

  Document: ISO/IEC/IEEE 29119 (series, 2022)\
  URL: https://www.iso.org/standard/81291.html

- [ISO-20000-1] Information technology — Service management system requirements

  Requirements for establishing, implementing, and continually improving a
  service management system (SMS). The international certification standard for
  IT service management, aligned with ITIL practices.

  Document: ISO/IEC 20000-1:2018\
  URL: https://www.iso.org/standard/70636.html

## Internet and Communication Protocols

- [RFC-793] Transmission Control Protocol (TCP)

  Defines TCP, the connection-oriented transport protocol providing reliable,
  ordered byte stream delivery over IP. Foundation of most internet
  communication including HTTP, TLS, and application-layer protocols.

  Document: RFC 793 (1981), updated by RFC 9293 (2022)\
  URL: https://www.rfc-editor.org/rfc/rfc9293

- [RFC-768] User Datagram Protocol (UDP)

  Defines UDP, the connectionless transport protocol providing best-effort
  datagram delivery. Used where low latency is preferred over reliability: DNS,
  VoIP, streaming media, and real-time IoT telemetry.

  Document: RFC 768 (1980)\
  URL: https://www.rfc-editor.org/rfc/rfc768

- [RFC-9110] HTTP Semantics

  Defines the semantics of HTTP — methods, status codes, headers, and content
  negotiation — independent of transport version. The consolidated specification
  for HTTP/1.1, HTTP/2, and HTTP/3.

  Document: RFC 9110 (2022)\
  URL: https://www.rfc-editor.org/rfc/rfc9110

- [RFC-9000] QUIC — A UDP-Based Multiplexed and Secure Transport

  Defines QUIC, a UDP-based transport protocol with built-in TLS 1.3 encryption,
  multiplexed streams, and connection migration. Designed for low- latency web
  communication and the transport layer underlying HTTP/3.

  Document: RFC 9000 (2021)\
  URL: https://www.rfc-editor.org/rfc/rfc9000

- [RFC-8446] The Transport Layer Security (TLS) Protocol Version 1.3

  Defines TLS 1.3 for authenticated encryption of communication channels.
  Reduces handshake latency, removes legacy ciphersuites, and mandates forward
  secrecy. The baseline security protocol for HTTPS, MQTT/TLS, and other secured
  transports.

  Document: RFC 8446 (2018)\
  URL: https://www.rfc-editor.org/rfc/rfc8446

- [RFC-6455] The WebSocket Protocol

  Defines the WebSocket protocol enabling full-duplex communication over a
  single TCP connection. Used for real-time web applications, live dashboards,
  and bidirectional IoT device communication.

  Document: RFC 6455 (2011)\
  URL: https://www.rfc-editor.org/rfc/rfc6455

- [RFC-7252] The Constrained Application Protocol (CoAP)

  Application protocol for constrained IoT devices and networks. Provides a
  RESTful interaction model (GET, PUT, POST, DELETE) over UDP with low overhead,
  multicast support, and built-in resource discovery.

  Document: RFC 7252 (2014)\
  URL: https://www.rfc-editor.org/rfc/rfc7252

## IoT and Messaging Protocols

- [MQTT] MQTT — Message Queuing Telemetry Transport

  Lightweight publish-subscribe messaging protocol for IoT and M2M
  communication. Designed for constrained devices and unreliable networks.
  Provides three QoS levels, retained messages, and last-will notifications.

  Document: MQTT v5.0 (OASIS Standard, 2019)\
  URL: https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html

- [AMQP] Advanced Message Queuing Protocol

  Wire-level protocol for message-oriented middleware. Provides reliable,
  interoperable messaging with queuing, routing, publish-subscribe, and
  transactions. Used in enterprise integration and cloud messaging services.

  Document: AMQP v1.0 (ISO/IEC 19464:2014)\
  URL: https://www.amqp.org/specification/1.0/amqp-org-download

- [gRPC] gRPC Remote Procedure Call

  High-performance RPC framework using HTTP/2 and Protocol Buffers. Supports
  unary, server-streaming, client-streaming, and bidirectional streaming. Widely
  used in microservice architectures and cloud-native applications.

  Document: gRPC (CNCF Graduated Project)\
  URL: https://grpc.io/docs/

- [RFC-8259] The JavaScript Object Notation (JSON) Data Interchange Format

  Defines JSON, the lightweight text-based data interchange format. The dominant
  serialisation format for REST APIs, configuration files, and inter-service
  communication across web and IoT ecosystems.

  Document: RFC 8259 (2017)\
  URL: https://www.rfc-editor.org/rfc/rfc8259

## Coding Standards

- [CERT-C] SEI CERT C Coding Standard

  Secure coding rules and recommendations for C. Developed by Carnegie Mellon's
  Software Engineering Institute. Covers memory management, integer overflow,
  string handling, concurrency, and other vulnerability classes. Referenced by
  IEC 62443 and safety-critical development processes.

  Document: SEI CERT C (2016, continuously updated)\
  URL: https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard

- [CERT-CPP] SEI CERT C++ Coding Standard

  Secure coding rules for C++. Addresses C++-specific concerns including object
  lifecycle, exceptions, templates, and container usage. Complements MISRA C++
  with a security-focused perspective.

  Document: SEI CERT C++ (2016, continuously updated)\
  URL:
  https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=88046682\
  Derived-from: CERT-C

## Quality Measurement

- [ISO-5055] Information technology — Software quality — Software product
  quality — Automated source code quality measures

  Defines automated measures for four software quality characteristics:
  reliability, security, performance efficiency, and maintainability. Specifies
  detection patterns mapped to CWE weaknesses enabling consistent, tool-based
  code quality assessment.

  Document: ISO/IEC 5055:2021\
  URL: https://www.iso.org/standard/80623.html\
  Derived-from: ISO-25010
