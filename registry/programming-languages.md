# Programming Languages

## Systems and Embedded

- [ISO-C] Programming languages — C

  The standard for the C programming language. Defines syntax, semantics,
  library functions, and undefined behaviours. The dominant language for
  embedded systems, operating systems, safety-critical software, and hardware
  interfaces. Required by MISRA C and CERT C coding standards.

  Document: ISO/IEC 9899:2024 (C23)\
  URL: <https://www.iso.org/standard/82075.html>

- [ISO-CPP] Programming languages — C++

  The standard for the C++ programming language. Defines object-oriented,
  generic, and functional programming features including templates, RAII, move
  semantics, and coroutines. Used in automotive (AUTOSAR), aerospace, finance,
  and gaming. Required by MISRA C++ and CERT C++.

  Document: ISO/IEC 14882:2024 (C++23)\
  URL: <https://www.iso.org/standard/83626.html>

- [Rust] The Rust Programming Language

  Systems programming language providing memory safety without garbage
  collection through ownership and borrowing. Eliminates data races at compile
  time. Increasingly adopted in safety-critical domains (automotive, aerospace)
  and infrastructure (Linux kernel, Android, Windows).

  Document: The Rust Reference (Edition 2024)\
  URL: <https://doc.rust-lang.org/reference/>

## Enterprise and Application

- [Java-SE] Java Platform, Standard Edition

  Specification for the Java programming language and platform. Defines language
  semantics, JVM bytecode, standard library (Collections, IO, Concurrency), and
  module system. The dominant platform for enterprise applications, Android (via
  Kotlin/JVM), and financial services.

  Document: JSR 397 (Java SE 23, 2024)\
  URL: <https://docs.oracle.com/en/java/javase/>

- [ECMA-334] C# Language Specification

  Standard for the C# programming language. Defines type system, LINQ,
  async/await, pattern matching, and records. The primary language for .NET
  platform, Unity game engine, and Microsoft enterprise stack.

  Document: ECMA-334 (7th Edition, 2023)\
  URL:
  <https://ecma-international.org/publications-and-standards/standards/ecma-334/>

- [Python] Python Language Reference

  Reference for the Python programming language. Defines syntax, data model,
  execution model, and standard library. The dominant language for AI/ML, data
  science, scripting, and test automation. Increasingly used in automotive (test
  frameworks) and DevOps.

  Document: Python 3.13 (2024)\
  URL: <https://docs.python.org/3/reference/>

## Industrial Automation

- [IEC-61131-3] Programmable controllers — Programming languages

  Defines five programming languages for PLCs: Ladder Diagram (LD), Function
  Block Diagram (FBD), Structured Text (ST), Instruction List (IL), and
  Sequential Function Chart (SFC). The universal standard for industrial
  automation programming across all PLC vendors.

  Document: IEC 61131-3:2013\
  URL: <https://webstore.iec.ch/en/publication/4552>

- [IEC-61499] Function blocks for industrial-process measurement and control
  systems

  Defines a component-based model for distributed industrial automation. Extends
  IEC 61131 with event-driven execution, distribution across networked devices,
  and application portability. Used in Industry 4.0 and smart manufacturing
  architectures.

  Document: IEC 61499 (series, 2012)\
  URL: <https://webstore.iec.ch/en/publication/5506>

## Model-Based and Domain-Specific

- [MATLAB-Simulink] MATLAB/Simulink

  MathWorks platform for model-based design, simulation, and automatic code
  generation. The de facto standard for control system development in automotive
  (ISO 26262 tool qualification), aerospace, and industrial automation.
  Generates production C/C++ code from graphical models.

  Document: MATLAB R2024b / Simulink R2024b\
  URL: <https://www.mathworks.com/products/simulink.html>

- [SCADE] SCADE Suite

  Ansys certified model-based development environment for safety-critical
  embedded software. Qualified as a development tool under DO-178C (DAL A), EN
  50128 (SIL 4), IEC 61508, and ISO 26262. Generates certifiable C code from
  synchronous dataflow models.

  Document: SCADE Suite (Ansys)\
  URL: <https://www.ansys.com/products/embedded-software/ansys-scade-suite>

## Hardware Description

- [VHDL] VHSIC Hardware Description Language

  IEEE standard for describing digital electronic systems. Used for FPGA and
  ASIC design, simulation, and synthesis. Dominant in European aerospace,
  defence, and safety-critical hardware development where formal verification
  and determinism are required.

  Document: IEEE 1076-2019\
  URL: <https://standards.ieee.org/ieee/1076/6496/>

- [Verilog] SystemVerilog — Unified Hardware Design, Specification, and
  Verification Language

  IEEE standard for hardware design, simulation, and verification. Extends
  Verilog with classes, assertions, coverage, and constrained randomisation. The
  dominant HDL in the semiconductor industry for ASIC and FPGA development.

  Document: IEEE 1800-2023\
  URL: <https://standards.ieee.org/ieee/1800/7702/>

## Scripting and Configuration

- [YAML] YAML Ain't Markup Language

  Human-readable data serialisation format used for configuration files, CI/CD
  pipelines, Kubernetes manifests, and infrastructure-as-code. Superset of JSON
  with support for comments, anchors, and multi-document streams.

  Document: YAML 1.2.2 (2021)\
  URL: <https://yaml.org/spec/1.2.2/>

- [TOML] Tom's Obvious Minimal Language

  Minimal configuration file format designed to be unambiguous and easy to
  parse. Used in Rust (Cargo.toml), Python (pyproject.toml), and various build
  systems. Provides typed values (datetime, arrays, tables) without YAML's
  complexity.

  Document: TOML v1.0.0 (2021)\
  URL: <https://toml.io/en/v1.0.0>
