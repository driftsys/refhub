# Graphics and Rendering

GPU graphics and compute APIs, safety-critical rendering profiles, display
compositing protocols, scene and asset interchange formats, and computer vision
acceleration. Covers Khronos Group specifications (Vulkan, OpenGL, OpenCL,
glTF), W3C WebGPU, the Wayland display protocol, and OpenUSD.

**Contents:** [Standard](#standard)

## Standard

- [EGL] EGL Native Platform Graphics Interface

  Khronos Group interface between rendering APIs (OpenGL ES, Vulkan) and the
  native window system. Manages graphics contexts, surfaces, and buffer binding.
  The standard abstraction layer for embedded and automotive display systems.

  Document: EGL 1.5 (Khronos Group, 2014)\
  URL: <https://www.khronos.org/egl/>\
  Label: Standard\
  Keywords: EGL, graphics context, window system, embedded, automotive displays,
  Khronos

- [glTF] GL Transmission Format

  Khronos Group runtime 3D asset format for efficient transmission and loading
  of 3D models, materials, and animations. Supports PBR materials, mesh
  compression, and extensions. The "JPEG of 3D" used in web, AR/VR, and digital
  twin applications.

  Document: glTF 2.0 (Khronos Group, 2017)\
  URL: <https://www.khronos.org/gltf/>\
  Label: Standard\
  Keywords: 3D assets, PBR materials, mesh compression, AR/VR, digital twin, 3D
  models, Khronos

- [OpenCL] Open Computing Language

  Khronos Group framework for writing programmes that execute across
  heterogeneous platforms (CPUs, GPUs, FPGAs, DSPs). Provides a C-based kernel
  language and runtime API for parallel computation in scientific, medical, and
  automotive applications.

  Document: OpenCL 3.0 (Khronos Group, 2020)\
  URL: <https://www.khronos.org/opencl/>\
  Label: Standard\
  Keywords: GPU compute, heterogeneous computing, parallel computation, FPGA,
  DSP, Khronos

- [OpenGL] Open Graphics Library

  Khronos Group cross-platform API for rendering 2D and 3D graphics. Provides a
  state machine abstraction over GPU hardware. Remains widely deployed in CAD,
  scientific visualisation, and legacy applications despite being superseded by
  Vulkan for new development.

  Document: OpenGL 4.6 (Khronos Group, 2017)\
  URL: <https://www.khronos.org/opengl/>\
  Label: Standard\
  Keywords: 3D graphics, GPU, rendering, CAD, scientific visualisation,
  cross-platform, Khronos

- [OpenGL-ES] OpenGL for Embedded Systems

  Khronos Group subset of OpenGL designed for embedded and mobile devices.
  Provides 2D and 3D graphics for smartphones, automotive instrument clusters,
  set-top boxes, and IoT devices with constrained GPU resources.

  Document: OpenGL ES 3.2 (Khronos Group, 2015)\
  URL: <https://www.khronos.org/opengles/>\
  Label: Standard\
  Keywords: embedded graphics, mobile GPU, instrument clusters, IoT, 3D
  graphics, Khronos

- [OpenGL-SC] OpenGL Safety Critical

  Khronos Group safety-critical profile of OpenGL ES for avionics, automotive,
  and industrial displays. Removes non-deterministic features and undefined
  behaviours, enabling certification under DO-178C and ISO 26262 for
  safety-critical rendering.

  Document: OpenGL SC 2.0 (Khronos Group, 2016)\
  URL: <https://www.khronos.org/openglsc/>\
  Label: Standard\
  Keywords: safety-critical graphics, avionics, DO-178C, ISO 26262,
  deterministic rendering, Khronos

- [OpenUSD] Universal Scene Description

  Open framework for describing, composing, and rendering 3D scenes. Supports
  layered scene composition, non-destructive editing, and scalable
  collaboration. Used in film (Pixar), automotive (digital factory), and
  industrial digital twins.

  Document: OpenUSD (Alliance for OpenUSD / AOUSD)\
  URL: <https://openusd.org/>\
  Label: Standard\
  Keywords: 3D scenes, scene composition, digital twin, Pixar, film production,
  AOUSD

- [OpenVX] Open Computer Vision API

  Khronos Group API for hardware-accelerated computer vision. Provides a
  graph-based execution model for vision pipelines including colour conversion,
  filtering, feature detection, and optical flow. Targets automotive ADAS,
  surveillance, and drone vision processing.

  Document: OpenVX 1.3 (Khronos Group, 2019)\
  URL: <https://www.khronos.org/openvx/>\
  Label: Standard\
  Keywords: computer vision, ADAS, feature detection, optical flow, hardware
  acceleration, Khronos

- [OpenWF-Display] OpenWF Display

  Khronos Group API for display composition and management in embedded systems.
  Defines hardware-abstracted control of display pipelines, layers, and
  composition for automotive, avionics, and industrial displays.

  Document: OpenWF Display 1.0 (Khronos Group, 2009)\
  URL: <https://www.khronos.org/openwf/>\
  Label: Standard\
  Keywords: display composition, embedded displays, automotive displays,
  avionics, Khronos

- [SYCL] SYCL — C++ Single-source Heterogeneous Programming

  Khronos Group higher-level programming model for OpenCL. Enables single-
  source C++ programming for heterogeneous processors. Used in HPC, scientific
  computing, and automotive ADAS where portability across CPU and GPU targets is
  required.

  Document: SYCL 2020 (Khronos Group)\
  URL: <https://www.khronos.org/sycl/>\
  Label: Standard\
  Keywords: heterogeneous programming, C++, HPC, GPU compute, OpenCL,
  portability, Khronos

- [Vulkan] Vulkan Graphics and Compute API

  Khronos Group low-overhead, cross-platform API for 3D graphics and GPU
  compute. Provides explicit control over GPU resources, memory management, and
  command submission. Used in gaming, automotive HMI, medical imaging, and
  simulation. Successor to OpenGL for high-performance applications.

  Document: Vulkan 1.3 (Khronos Group, 2022)\
  URL: <https://www.vulkan.org/>\
  Label: Standard\
  Keywords: GPU, 3D graphics, compute, low-overhead, gaming, automotive HMI,
  Khronos

- [Vulkan-SC] Vulkan Safety Critical

  Khronos Group safety-critical profile of Vulkan for avionics, automotive, and
  industrial displays. Removes undefined behaviours, dynamic memory allocation,
  and non-deterministic features to enable certification under DO-178C (DAL A)
  and ISO 26262 (ASIL D).

  Document: Vulkan SC 1.0 (Khronos Group, 2022)\
  URL: <https://www.khronos.org/vulkansc/>\
  Label: Standard\
  Keywords: safety-critical graphics, avionics, DO-178C, ISO 26262, ASIL D, DAL
  A, Khronos

- [Wayland] Wayland Display Server Protocol

  Linux display server protocol replacing X11. Defines a compositing protocol
  between clients and the display compositor with per-surface buffers, input
  handling, and subsurface management. The standard display protocol for modern
  Linux and automotive-grade Linux (AGL).

  Document: Wayland Protocol (1.22, 2023)\
  URL: <https://wayland.freedesktop.org/>\
  Label: Standard\
  Keywords: display protocol, compositor, Linux, X11 replacement, AGL,
  automotive displays

- [WebGPU] WebGPU

  W3C API for high-performance GPU access in web browsers. Provides modern GPU
  compute and rendering aligned with Vulkan, Metal, and Direct3D 12
  capabilities. See web platform domain for full entry.

  Document: WebGPU (W3C, 2024)\
  URL: <https://www.w3.org/TR/webgpu/>\
  Label: Standard\
  Keywords: web GPU, browser rendering, GPU compute, W3C, Vulkan, Metal,
  Direct3D 12
