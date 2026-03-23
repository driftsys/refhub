# Cloud and Infrastructure

## Container and Orchestration

- [OCI] Open Container Initiative

  Linux Foundation standards defining container image format and runtime
  specification. Ensures portability of container images across Docker, Podman,
  containerd, and CRI-O runtimes. The foundational standard for cloud-native
  containerisation.

  Document: OCI Image Spec 1.1 / Runtime Spec 1.2 (2024)\
  URL: <https://opencontainers.org/>

- [Kubernetes-API] Kubernetes API

  CNCF standard API for container orchestration. Defines declarative resource
  management for pods, services, deployments, and custom resources. The de facto
  standard for deploying, scaling, and managing containerised applications.

  Document: Kubernetes API v1.31 (2024)\
  URL: <https://kubernetes.io/docs/reference/kubernetes-api/>

- [Helm] Helm — Kubernetes Package Manager

  CNCF standard for packaging, distributing, and managing Kubernetes
  applications. Defines chart format, templating, dependency management, and
  release lifecycle for reproducible deployments.

  Document: Helm 3 (CNCF Graduated, 2024)\
  URL: <https://helm.sh/>

## Observability

- [OpenTelemetry] OpenTelemetry

  CNCF observability framework providing vendor-neutral APIs, SDKs, and tools
  for collecting traces, metrics, and logs. Defines OTLP (OpenTelemetry
  Protocol) for exporting telemetry data. The emerging standard replacing
  vendor-specific instrumentation.

  Document: OpenTelemetry Specification 1.x (CNCF)\
  URL: <https://opentelemetry.io/docs/specs/>

- [CloudEvents] CloudEvents

  CNCF specification for describing event data in a common format. Defines
  required attributes (source, type, id), transport bindings (HTTP, AMQP, Kafka,
  MQTT), and content modes enabling interoperable event-driven architectures.

  Document: CloudEvents 1.0.2 (CNCF, 2022)\
  URL: <https://cloudevents.io/>

- [Prometheus] Prometheus Exposition Format

  CNCF standard for metrics exposition. Defines a text-based and protobuf format
  for exposing application metrics (counters, gauges, histograms, summaries)
  scraped by monitoring systems. The dominant metrics format in cloud-native
  environments.

  Document: OpenMetrics 1.0 (CNCF)\
  URL: <https://openmetrics.io/>

## Operating System Interfaces

- [POSIX] Portable Operating System Interface

  IEEE/ISO standard defining a portable OS API for Unix-like systems. Covers
  system calls, shell commands, threading (pthreads), file I/O, signals, and
  inter-process communication. Required by AUTOSAR Adaptive, QNX, and
  safety-critical RTOS platforms.

  Document: IEEE 1003.1-2017 / ISO/IEC 9945\
  URL: <https://pubs.opengroup.org/onlinepubs/9699919799/>

## Database and Query

- [SQL] Structured Query Language

  ISO standard for relational database management. Defines data definition,
  manipulation, querying, access control, and transaction management. The
  universal language for structured data operations across all major RDBMS
  platforms.

  Document: ISO/IEC 9075:2023\
  URL: <https://www.iso.org/standard/76583.html>

- [GraphQL] GraphQL

  Query language and runtime for APIs enabling clients to request exactly the
  data they need. Provides strongly typed schemas, introspection, and real-time
  subscriptions. Alternative to REST for complex data requirements in web and
  mobile applications.

  Document: GraphQL Specification (June 2024)\
  URL: <https://spec.graphql.org/>

## Infrastructure as Code

- [OpenTofu] OpenTofu (Terraform-compatible IaC)

  Open-source infrastructure as code tool for provisioning and managing cloud
  resources declaratively. Uses HCL (HashiCorp Configuration Language) to define
  infrastructure across AWS, Azure, GCP, and on-premises providers with state
  management and plan/apply workflow.

  Document: OpenTofu 1.x (Linux Foundation)\
  URL: <https://opentofu.org/>

## Service Mesh and Networking

- [SMI] Service Mesh Interface

  CNCF specification defining a standard interface for service meshes on
  Kubernetes. Covers traffic access control, traffic specs, traffic split, and
  traffic metrics enabling portability across Istio, Linkerd, and other mesh
  implementations.

  Document: SMI v0.6 (CNCF)\
  URL: <https://smi-spec.io/>
