# Media

## Audio Codecs

- [ISO-14496-3] Information technology — Coding of audio-visual objects — Part
  3: Audio (MPEG-4 Audio)

  Defines audio coding schemes including Advanced Audio Coding (AAC), High-
  Efficiency AAC (HE-AAC), and MPEG Surround. The dominant lossy audio codec for
  broadcast, streaming, and mobile platforms.

  Document: ISO/IEC 14496-3:2019\
  URL: <https://www.iso.org/standard/76383.html>

- [ISO-23003] Information technology — MPEG audio technologies

  Multi-part standard for advanced MPEG audio including MPEG-H 3D Audio for
  immersive object-based audio, Unified Speech and Audio Coding (USAC), and
  Spatial Audio Object Coding. Used in broadcasting, VR, and automotive sound
  systems.

  Document: ISO/IEC 23003 (series)\
  URL: <https://www.iso.org/standard/75930.html>

- [Opus] Opus Interactive Audio Codec

  Open, royalty-free audio codec optimised for real-time communication. Covers
  speech and music at bitrates from 6 kbit/s to 510 kbit/s with low latency
  (5-66 ms). Standardised by IETF, mandated in WebRTC.

  Document: RFC 6716 (2012)\
  URL: <https://www.rfc-editor.org/rfc/rfc6716>

- [LC3] Low Complexity Communication Codec

  Audio codec designed for Bluetooth LE Audio. Provides high audio quality at
  low bitrates and low computational complexity. Mandatory codec for LE Audio
  and Auracast broadcast audio.

  Document: Bluetooth SIG LC3 Specification (2020)\
  URL:
  https://www.bluetooth.com/specifications/specs/low-complexity-communication-codec/\
  Derived-from: IEEE-802-15-1

## Video Codecs

- [H264-AVC] Advanced Video Coding

  Widely deployed video compression standard. Provides efficient compression for
  broadcast, streaming, videoconferencing, and surveillance. Remains the most
  compatible codec across devices and platforms.

  Document: ITU-T H.264 / ISO/IEC 14496-10 (2021)\
  URL: <https://www.itu.int/rec/T-REC-H.264>

- [H265-HEVC] High Efficiency Video Coding

  Successor to H.264 offering approximately 50% bitrate reduction at equivalent
  quality. Used for 4K/UHD broadcast, streaming, and video surveillance.
  Supports HDR and wide colour gamut.

  Document: ITU-T H.265 / ISO/IEC 23008-2 (2021)\
  URL: <https://www.itu.int/rec/T-REC-H.265>

- [H266-VVC] Versatile Video Coding

  Latest generation video codec providing approximately 50% bitrate reduction
  over HEVC. Designed for 4K/8K, 360-degree video, HDR, and screen content.
  Targets broadcast, streaming, and immersive media.

  Document: ITU-T H.266 / ISO/IEC 23090-3 (2020)\
  URL: <https://www.itu.int/rec/T-REC-H.266>

- [AV1] AOMedia Video 1

  Open, royalty-free video codec developed by the Alliance for Open Media.
  Competitive with HEVC in compression efficiency. Widely adopted in web
  browsers, streaming platforms (YouTube, Netflix), and WebRTC.

  Document: AV1 Bitstream and Decoding Process Specification (2019)\
  URL: <https://aomedia.org/av1/specification/>

## Streaming and Transport

- [MPEG-DASH] Dynamic Adaptive Streaming over HTTP

  Standard for adaptive bitrate streaming over HTTP. Enables clients to
  dynamically switch between quality representations based on network
  conditions. The open standard alternative to proprietary protocols like HLS.

  Document: ISO/IEC 23009-1:2022\
  URL: <https://www.iso.org/standard/83314.html>

- [HLS] HTTP Live Streaming

  Apple's adaptive bitrate streaming protocol. Segments media into small chunks
  delivered over HTTP with manifest-based quality switching. Widely supported
  across Apple devices, browsers, and streaming platforms.

  Document: RFC 8216 (2017) / HLS 2nd Edition (draft)\
  URL: <https://www.rfc-editor.org/rfc/rfc8216>

- [WebRTC] Web Real-Time Communication

  W3C/IETF framework for real-time audio, video, and data communication directly
  between browsers and devices without plugins. Built on RTP, ICE, DTLS, and
  SCTP. Mandates Opus (audio) and VP8/H.264 (video) codec support.

  Document: W3C WebRTC 1.0 (2021) / IETF RFC 8825-8835\
  URL: <https://www.w3.org/TR/webrtc/>

- [RFC-7826] Real-Time Streaming Protocol (RTSP) 2.0

  Application-level protocol for controlling delivery of real-time media
  streams. Provides VCR-like commands (play, pause, seek) for media servers.
  Used in IP cameras, surveillance systems, and media distribution.

  Document: RFC 7826 (2016)\
  URL: <https://www.rfc-editor.org/rfc/rfc7826>

- [SRT] Secure Reliable Transport

  Open-source video transport protocol optimised for low-latency live streaming
  over unpredictable networks. Provides AES encryption, forward error
  correction, and adaptive bitrate control for contribution and distribution
  workflows.

  Document: SRT Protocol Specification (SRT Alliance)\
  URL: <https://www.srtalliance.org/>

## Professional Media

- [SMPTE-ST-2110] Professional Media Over Managed IP Networks

  Suite of standards for transporting uncompressed video, audio, and ancillary
  data over IP. Covers essence (ST 2110-20 video, ST 2110-30 audio), timing, and
  metadata. The broadcast industry standard for IP-based infrastructure.

  Document: SMPTE ST 2110 (series)\
  URL: <https://www.smpte.org/standards/st2110>

- [SMPTE-ST-2022] Transport of High Bitrate Media Signals over IP Networks

  Standards for transporting MPEG and uncompressed video over IP with forward
  error correction. Predecessor to ST 2110, still widely deployed in broadcast
  contribution and distribution networks.

  Document: SMPTE ST 2022 (series)\
  URL: <https://www.smpte.org/standards/st2022>

- [AES67] AES Standard for Audio-Over-IP Interoperability

  Defines interoperability requirements for high-performance audio-over-IP
  streaming. Specifies RTP transport, PTP synchronisation, codec selection
  (linear PCM), and session management for professional audio networked
  environments.

  Document: AES67:2018\
  URL: <https://www.aes.org/publications/standards/search.cfm?docID=96>

- [AES70] AES Standard for Audio Applications of Networks — Open Control
  Architecture (OCA)

  Defines a control protocol for professional audio devices over IP networks.
  Provides device discovery, parameter control, monitoring, and firmware
  management for networked audio equipment.

  Document: AES70:2018\
  URL: <https://www.aes.org/publications/standards/search.cfm?docID=101>

- [Dante] Dante Audio Networking

  Proprietary audio-over-IP technology by Audinate for low-latency, multi-
  channel digital audio distribution. Widely deployed in professional audio,
  installed sound, and broadcast. Interoperable with AES67 for bridging.

  Document: Dante Specifications (Audinate)\
  URL: <https://www.audinate.com/meet-dante>

## Video Interfaces

- [HDMI] High-Definition Multimedia Interface

  Digital interface for transmitting uncompressed video, audio, and data between
  sources and displays. Supports up to 10K resolution, HDR, eARC, and variable
  refresh rate. The dominant consumer A/V interface.

  Document: HDMI Specification 2.1b (2023)\
  URL: <https://www.hdmi.org/spec/hdmi2_1>

- [DisplayPort] VESA DisplayPort

  Digital display interface standard for connecting video sources to displays.
  Supports daisy-chaining, adaptive sync, Display Stream Compression (DSC), and
  USB-C alternate mode. Widely used in computing and professional displays.

  Document: DisplayPort 2.1 (2022)\
  URL: <https://vesa.org/vesa-standards/>

- [MIPI-CSI-2] MIPI Camera Serial Interface 2

  High-speed serial interface for connecting cameras to application processors.
  Used in smartphones, automotive (surround view, ADAS cameras), drones, and
  embedded vision systems. Supports RAW, YUV, and compressed formats.

  Document: MIPI CSI-2 v4.0 (2023)\
  URL: <https://www.mipi.org/specifications/csi-2>

- [MIPI-DSI-2] MIPI Display Serial Interface 2

  High-speed serial interface for connecting displays to application processors.
  Used in smartphones, automotive instrument clusters, and embedded displays.
  Supports video mode, command mode, and Display Stream Compression.

  Document: MIPI DSI-2 v2.1 (2023)\
  URL: <https://www.mipi.org/specifications/dsi-2>

## Broadcast — Radio

- [ETSI-DAB] Digital Audio Broadcasting (DAB/DAB+)

  European standard for digital radio broadcasting. DAB+ uses HE-AAC v2 coding
  providing improved spectral efficiency over original DAB (MPEG-1 Layer II).
  EU-mandated in new vehicle receivers since December 2020.

  Document: ETSI EN 300 401 V2.1.1 (2017)\
  URL: <https://www.etsi.org/deliver/etsi_en/300400_300499/300401/>

- [HD-Radio] HD Radio (NRSC-5)

  U.S. in-band on-channel (IBOC) digital radio standard. Transmits digital audio
  alongside existing analogue FM/AM signals. Provides near-CD quality audio,
  multicasting, and data services on existing broadcast frequencies.

  Document: NRSC-5-D (2017)\
  URL:
  https://www.nrscstandards.org/standards-and-guidelines/documents/standards/nrsc-5-d.asp

- [DRM] Digital Radio Mondiale

  International digital radio standard for AM and FM bands. Provides digital
  broadcast quality on frequencies below 30 MHz (DRM30) and VHF (DRM+). Designed
  for wide-area coverage including shortwave international broadcasting.

  Document: ETSI ES 201 980 V4.2.1 (2020)\
  URL: <https://www.drm.org/>

- [IEC-62106] Radio data system (RDS) for VHF/FM sound broadcasting

  Defines the Radio Data System for embedding digital information in FM
  broadcasts. Carries programme identification, traffic announcements,
  alternative frequencies, and radiotext. Foundation for TMC traffic
  information.

  Document: IEC 62106:2015 (series)\
  URL: <https://webstore.iec.ch/en/publication/22427>

- [RadioDNS] RadioDNS Hybrid Radio

  Open standard for connecting broadcast radio with IP-delivered content.
  Enables broadcasters to augment FM and DAB with visual slides, programme
  metadata, and on-demand content via internet lookup using DNS-SD.

  Document: ETSI TS 103 270 V1.5.1 (2023)\
  URL: <https://radiodns.org/>

## Broadcast — Television

- [DVB] Digital Video Broadcasting

  European suite of standards for digital television. Covers terrestrial
  (DVB-T/T2), satellite (DVB-S/S2/S2X), cable (DVB-C/C2), and handheld (DVB-H)
  transmission. The dominant digital TV standard outside the Americas and Japan.

  Document: ETSI EN 300 468 and related (DVB Project)\
  URL: <https://dvb.org/specifications/>

- [ATSC-3] ATSC 3.0 — Next Generation Broadcast Television

  U.S. next-generation broadcast television standard. Provides 4K/UHD, HDR,
  immersive audio, IP-based delivery, and interactive services over terrestrial
  broadcast channels. Supports hybrid broadcast-broadband operation.

  Document: ATSC A/300 series (2017-2024)\
  URL: <https://www.atsc.org/standards/>

- [ISDB-T] Integrated Services Digital Broadcasting — Terrestrial

  Japanese digital broadcast standard adopted in Brazil and much of South
  America. Supports fixed, portable, and mobile reception with hierarchical
  transmission enabling robust mobile TV alongside high-quality fixed reception.

  Document: ARIB STD-B31 (2014)\
  URL: <https://www.arib.or.jp/english/std_tr/broadcasting/std-b31.html>

- [HbbTV] Hybrid Broadcast Broadband TV

  European specification for hybrid broadcast-broadband television services.
  Extends DVB with HTML5-based interactive applications enabling catch-up TV,
  targeted advertising, and second-screen experiences on smart TVs.

  Document: HbbTV 2.0.4 (2023)\
  URL: <https://www.hbbtv.org/resource-library/>

## Broadcast — Regulation

- [EU-EECC] European Electronic Communications Code

  EU directive establishing the regulatory framework for electronic
  communications networks and services. Mandates DAB+ receiver capability in new
  car radios and consumer radio equipment sold in the EU.

  Document: Directive (EU) 2018/1972\
  URL: <https://eur-lex.europa.eu/eli/dir/2018/1972/oj>

- [ITU-RR] ITU Radio Regulations

  International treaty governing the global use of the radio-frequency spectrum
  and satellite orbits. Allocates frequency bands to radio services, defines
  coordination procedures, and establishes technical standards for interference
  management.

  Document: ITU Radio Regulations (Edition 2020)\
  URL: <https://www.itu.int/pub/R-REG-RR>

## Surveillance and Monitoring

- [ONVIF] Open Network Video Interface Forum

  Industry standard for interoperability of IP-based physical security products.
  Defines profiles for video streaming (Profile S), recording (Profile G),
  access control (Profile A/C), and analytics enabling multi-vendor surveillance
  systems.

  Document: ONVIF Core Specification 24.06\
  URL: <https://www.onvif.org/specs/core/ONVIF-Core-Specification.pdf>

## Quality Assessment

- [ITU-T-P910] Subjective video quality assessment methods for multimedia
  applications

  Defines test methods for subjective assessment of video quality. Specifies
  viewing conditions, rating scales (ACR, DCR, PC), test procedures, and
  statistical analysis for evaluating perceived video quality.

  Document: ITU-T P.910 (2022)\
  URL: <https://www.itu.int/rec/T-REC-P.910>
