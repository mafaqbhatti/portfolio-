import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { NeRFDiagram } from "@/components/diagrams/nerf-diagram";
import { flagshipProjects } from "@/content/projects";
import { ExternalLink } from "lucide-react";

export function NeRFTurntableStudy() {
  const prevProject = flagshipProjects[3];
  const project = flagshipProjects[4];

  return (
    <CaseStudyLayout project={project} prevProject={prevProject}>
      {/* 1. Summary & Facts Bar */}
      <Section
        id="summary"
        index="01 / Summary"
        title="Executive Summary & Facts"
      >
        <div className="space-y-3 border-l-2 border-accent pl-4 text-text text-base">
          <p>
            <strong>Problem:</strong> Reconstructing 3D physical objects from
            sparse circular photographs traditionally requires explicit
            polygonal meshes or discrete voxel grids. These classical
            representations scale cubically in memory, fail to capture fine
            geometric details and semi-transparency, and completely miss
            view-dependent lighting phenomena such as specular reflection and
            glossy sheen.
          </p>
          <p>
            <strong>Result:</strong> Engineered a from-scratch PyTorch
            implementation of <strong>Neural Radiance Fields (NeRF)</strong>{" "}
            (Mildenhall et al., ECCV 2020) that optimizes a continuous 5D neural
            radiance function without third-party 3D graphics libraries. The
            system maps spatial coordinates and viewing angles through harmonic
            positional encoding into an 8-layer deep MLP with softplus volume
            density and directional color heads. Trained on 20 turntable
            photographs across 30,000 gradient steps, it synthesizes
            photorealistic novel views and smooth 60-frame 360° orbiting
            animations on a consumer GPU (NVIDIA RTX 3050, 4GB VRAM), wrapped in
            a full-stack FastAPI and React 19 web application.
          </p>
          <p>
            <strong>Role:</strong> Computer Vision &amp; Deep Learning Engineer;
            formulated the mathematical ray marcher, harmonic coordinate
            expansion, volumetric quadrature renderer, CUDA training loop, and
            asynchronous FastAPI background rendering engine.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Open-Source Implementation & Web App"
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/mafaqbhatti/nerf-turntable-3d",
            },
          ]}
        />
      </Section>

      {/* 2. Problem and Constraints */}
      <Section
        id="problem"
        index="02 / Problem"
        title="Problem & Theoretical Constraints"
      >
        <p>
          Novel view synthesis requires bridging the gap between discrete 2D
          sensor observations and continuous 3D reality:
        </p>

        <div className="space-y-4 my-4">
          <div className="border hairline-border rounded p-4 bg-surface space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
              The Limits of Explicit 3D Geometry
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Classical photogrammetry techniques rely on explicit surface
              reconstructions—such as Structure-from-Motion (SfM) point clouds
              or Multi-View Stereo (MVS) triangle meshes. Meshes require
              defining fixed surface topology, causing catastrophic artifacts
              when modeling thin structures (e.g., wires, foliage, fur) or
              semi-transparent volumes. Furthermore, explicit voxel grids scale
              cubically O(N³) with resolution; representing a modest 512³ grid
              consumes gigabytes of memory before accounting for color and
              directional radiance.
            </p>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
              Spectral Bias in Neural Approximators
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Standard deep Multi-Layer Perceptrons exhibit a well-documented
              spectral bias (Rahaman et al., 2019): they inherently prioritize
              low-frequency approximations. Feeding raw spatial coordinates (x,
              y, z) directly into neural layers results in blurry, over-smoothed
              renderings that completely fail to capture high-frequency surface
              textures and sharp object boundaries.
            </p>
          </div>
        </div>

        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            Audited Engineering &amp; Hardware Constraints:
          </div>
          <div>
            • <strong>Zero Third-Party 3D Frameworks:</strong> Built completely
            from first principles in raw PyTorch without relying on high-level
            frameworks (Nerfstudio, Instant-NGP, Tiny-CUDA-NN).
          </div>
          <div>
            • <strong>Consumer VRAM Ceiling:</strong> Must train and render
            strictly within the 4GB VRAM boundary of a mobile workstation GPU
            (NVIDIA GeForce RTX 3050 Laptop GPU).
          </div>
          <div>
            • <strong>Continuous Turntable Pose Ingestion:</strong> Formulate a
            deterministic spherical camera model (radius R = 4.0, elevation θ =
            30°) to compute consistent look-at rotation matrices from sequential
            uncalibrated mobile photos.
          </div>
          <div>
            • <strong>Asynchronous Production Serving:</strong> Render jobs take
            ~75 seconds for a 60-frame 360° rotation; the web service must
            employ decoupled background task queues with persistent job status
            tracking rather than blocking HTTP sockets.
          </div>
        </div>
      </Section>

      {/* 3. Architecture */}
      <Section
        id="architecture"
        index="03 / Architecture"
        title="Mathematical Formulation & Pipeline Architecture"
      >
        <p>
          The system represents a 3D scene as a continuous function
          parameterized by a neural network F_Θ: (x, d) → (c, σ), mapping
          spatial position x = (x, y, z) and viewing unit direction d = (θ, φ)
          to volume density σ and emitted RGB radiance c:
        </p>

        <NeRFDiagram />

        <div className="space-y-4 text-sm text-text-muted my-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              1. Turntable Camera Geometry &amp; Ray Generation
            </h4>
            <p className="leading-relaxed">
              Camera poses for M = 20 turntable photographs are computed along a
              circular orbit at radius R = 4.0 with elevation angle θ = 30°:
            </p>
            <div className="p-3 my-2 border hairline-border rounded bg-surface font-mono text-xs text-accent">
              camera_pos = [R · cos(elevation) · cos(φ), R · cos(elevation) ·
              sin(φ), R · sin(elevation)]
            </div>
            <p className="leading-relaxed">
              For each pixel (i, j) in an image with focal length f = W, a ray
              r(t) = o + t·d is projected into world space using the
              camera-to-world transformation matrix [R | T].
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              2. Stratified Ray Sampling with Jitter
            </h4>
            <p className="leading-relaxed">
              Rather than evaluating points on a fixed uniform grid (which leads
              to discrete banding artifacts), N = 96 sampling intervals are
              partitioned along each ray between near plane t_n = 2.0 and far
              plane t_f = 6.0. During training, uniform random jitter is added
              within each interval:
            </p>
            <div className="p-3 my-2 border hairline-border rounded bg-surface font-mono text-xs text-text-muted">
              t_i ~ U[t_n + (i-1)/N · (t_f - t_n), t_n + i/N · (t_f - t_n)]
            </div>
            <p className="leading-relaxed">
              This forces the network to learn a smooth, continuous field over
              space rather than memorizing discrete evaluation coordinates.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              3. Harmonic Sinusoidal Positional Encoding
            </h4>
            <p className="leading-relaxed">
              To circumvent spectral bias and capture crisp surface boundaries,
              coordinates are projected into higher-dimensional sinusoidal
              bases:
            </p>
            <div className="p-3 my-2 border hairline-border rounded bg-surface font-mono text-xs text-accent">
              γ(p) = [p, sin(2⁰πp), cos(2⁰πp), ..., sin(2^(L-1)πp),
              cos(2^(L-1)πp)]
            </div>
            <p className="leading-relaxed">
              Spatial coordinates x are encoded with L = 10 frequency bands (3 ×
              (1 + 20) = 63 dimensions); viewing directions d are encoded with L
              = 4 frequency bands (3 × (1 + 8) = 27 dimensions).
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              4. 8-Layer Deep MLP Network Architecture
            </h4>
            <p className="leading-relaxed">
              The network is structured to enforce view-consistent geometry:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs font-mono text-text-muted">
              <li>
                <strong className="text-text">Geometry Trunk:</strong> 8 fully
                connected layers (hidden dim 256) with ReLU activations. A skip
                connection at layer 5 concatenates the original input spatial
                encoding γ(x), preserving high-frequency spatial priors.
              </li>
              <li>
                <strong className="text-text">Density Output:</strong> Volume
                density σ is predicted strictly from spatial features
                independent of viewing direction: σ = Softplus(W_σ · h).
                Softplus ensures density remains strictly non-negative (σ ≥ 0)
                while avoiding zero-gradient death.
              </li>
              <li>
                <strong className="text-text">View-Dependent Radiance:</strong>{" "}
                A 256-dimensional feature vector is extracted and concatenated
                with directional encoding γ(d). Two additional linear layers
                with Sigmoid activation predict emitted RGB color c ∈ [0, 1]³,
                capturing specular highlights that shift as the observer moves
                around the turntable.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              5. Classical Numerical Quadrature Volumetric Rendering
            </h4>
            <p className="leading-relaxed">
              The continuous volume rendering integral is evaluated numerically
              along each ray:
            </p>
            <div className="p-3 my-2 border hairline-border rounded bg-surface font-mono text-xs text-accent">
              Ĉ(r) = Σ [i=1 to N] T_i · (1 - exp(-σ_i · δ_i)) · c_i
            </div>
            <p className="leading-relaxed">
              where T_i = exp(-Σ [j=1 to i-1] σ_j · δ_j) represents accumulated
              transmittance (the probability that the ray traverses from t_n to
              t_i without encountering an occluder), and δ_i = t_{"{i+1}"} - t_i
              represents the distance between adjacent samples. White background
              compositing is applied for transparent empty space: C_final = Ĉ +
              (1 - Σ w_i).
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Key Decisions (Defend) */}
      <Section
        id="decisions"
        index="04 / Key Decisions"
        title="Engineering Decisions & Defenses"
      >
        <DecisionCard
          decision="Implementation: Pure PyTorch from First Principles over Pre-Packaged Libraries"
          choice="From-scratch PyTorch implementation of NeRF (NeRF.py)"
          alternatives="Nerfstudio, Instant-NGP bindings, PyTorch3D, Luma AI API"
          reason="Pre-packaged NeRF frameworks abstract away ray-marching primitives, camera coordinate conversions, and volume rendering quadrature behind opaque C++/CUDA extensions. Writing from scratch guaranteed full control over memory footprint, exact algorithmic verification, educational transparency, and zero external binary dependencies."
        />

        <DecisionCard
          decision="Activation Function: Softplus for Density σ over Standard ReLU"
          choice="density = F.softplus(self.density_layer(h))"
          alternatives="Standard ReLU, LeakyReLU, Exponential activation"
          reason="Mildenhall et al. originally used ReLU for density. However, standard ReLU produces exact zero gradients for inactive units, leading to 'dead rays' where empty space fails to receive optimization updates. Softplus guarantees strictly positive density (σ ≥ 0) while maintaining smooth, non-zero derivatives everywhere, dramatically stabilizing early training convergence."
        />

        <DecisionCard
          decision="Ray Sampling: Stratified Jittered Sampling over Fixed Uniform Grid"
          choice="z_vals = z_vals + torch.rand_like(z_vals) * delta / N during training"
          alternatives="Fixed uniform sampling, purely random sampling, importance sampling alone"
          reason="Sampling points at identical static depth positions across iterations causes the MLP to learn discrete planar slice artifacts. Adding stratified random jitter across the ray interval acts as continuous stochastic regularization, forcing the network to represent a continuous 3D field."
        />

        <DecisionCard
          decision="Service Architecture: Asynchronous FastAPI Worker Queue over Blocking REST"
          choice="SQLAlchemy RenderJob model with background threading worker and polling API"
          alternatives="Synchronous blocking HTTP /render endpoint, Celery + Redis, WebSocket pipeline"
          reason="Generating a full 60-frame 360° orbiting animation requires ~75 seconds of continuous GPU ray-marching. A synchronous HTTP request would trigger browser socket timeouts and drop connections. An asynchronous database-backed job queue with SQLite/PostgreSQL allows clients to submit requests instantly, track percentage progress, and retrieve output media durably."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Training Diagnostics & Convergence Audit"
      >
        <p>
          The pipeline was evaluated across both synthetic procedural geometry
          and real circular photograph datasets:
        </p>

        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">
                  Hyperparameter / Metric
                </th>
                <th className="py-3 px-4 font-medium">Audit Setting / Value</th>
                <th className="py-3 px-4 font-medium">
                  Engineering Justification
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Training Iterations
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  30,000 Gradient Steps
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Achieves full photometric convergence without overfitting
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Ray Batch Size
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  2,048 Rays / Batch
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Saturates GPU tensor cores while preserving 4GB VRAM ceiling
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Samples per Ray (N)
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  96 Samples / Ray
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Optimal trade-off between spatial resolution and forward-pass
                  FLOPs
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Optimizer &amp; Learning Rate
                </td>
                <td className="py-3 px-4 text-text-muted">Adam (lr = 5e-4)</td>
                <td className="py-3 px-4 text-text-muted">
                  Standard exponential decay stabilizing MLP weight updates
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Loss Function
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Photometric MSE Loss
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Mean squared error across sampled ray batches
                </td>
              </tr>
              <tr className="bg-accent/10">
                <td className="py-3 px-4 text-accent font-semibold">
                  Peak GPU Memory
                </td>
                <td className="py-3 px-4 text-accent font-bold">
                  ~2.1 GB VRAM
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  Leaves 1.9 GB headroom on mobile RTX 3050 hardware
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Benchmarked on Python 3.11, PyTorch 2.x, CUDA 12.x on NVIDIA GeForce
            RTX 3050 Laptop GPU (4GB VRAM).
          </div>
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Compute, VRAM & Inference Benchmarks"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Training Duration
            </span>
            <span className="text-text text-base font-semibold">
              ~35 Minutes
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              30,000 iterations @ 300×300 px on mobile RTX 3050 GPU
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Peak VRAM Utilization
            </span>
            <span className="text-text text-base font-semibold">
              2.1 GB / 4.0 GB
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Chunked ray batching prevents CUDA Out-Of-Memory crashes
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              360° Animation Synthesis
            </span>
            <span className="text-text text-base font-semibold">
              ~75 Seconds
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Renders 60 continuous orbiting frames into GIF / MP4
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Full-Stack Web Architecture & Asynchronous Job Pipeline"
      >
        <p>
          The project includes a self-contained web platform allowing users to
          launch 3D render jobs through an intuitive browser interface:
        </p>

        <div className="my-4 border hairline-border rounded p-4 bg-surface space-y-3 font-mono text-xs text-text-muted">
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">
                FastAPI REST Server (main.py):
              </strong>{" "}
              Exposes endpoints for queueing turntable render jobs (
              <code>/render</code>), polling progress (
              <code>/render/status</code>
              ), and serving compiled static frontend assets.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">
                Asynchronous Worker Thread (generate_gif.py):
              </strong>{" "}
              Executes GPU ray-marching routines in a separate thread,
              incrementally updating job status in SQLite/PostgreSQL to prevent
              blocking the event loop.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">
                React 19 + Tailwind CSS Frontend:
              </strong>{" "}
              Modern single-page application providing real-time job status
              monitoring, interactive animation playback, and video download
              controls.
            </span>
          </div>
        </div>
      </Section>

      {/* 8. What Failed & Next Steps */}
      <Section
        id="lessons"
        index="08 / Retrospective"
        title="Engineering Retrospective: What Failed, Solved & Next Steps"
      >
        <div className="space-y-4 text-sm text-text-muted">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 1: High-Frequency Blurring without Positional Encoding
            </h4>
            <p className="text-xs leading-relaxed">
              Initial experiments passed raw (x, y, z) coordinates directly into
              the MLP without sinusoidal expansion. The network converged to a
              monolithic, blurry blob unable to resolve edges or texture
              patterns. <em>Resolution:</em> Implemented harmonic positional
              encoding with L = 10 frequency octaves for spatial positions,
              allowing the MLP to fit high-frequency visual features.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 2: Dying ReLUs Causing Empty Render Volumes
            </h4>
            <p className="text-xs leading-relaxed">
              Using standard ReLU for predicting volume density σ caused large
              regions of rays to receive zero gradients early in training,
              trapping the model in local minima where entire sections of the
              object disappeared. <em>Resolution:</em> Replaced ReLU with{" "}
              <code>Softplus</code>, guaranteeing continuous positive density
              and providing gradient flow across transparent regions.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 3: CUDA Out-of-Memory on Full-Frame Ray Marching
            </h4>
            <p className="text-xs leading-relaxed">
              Evaluating all rays for a full 300 × 300 frame simultaneously
              requires 90,000 × 96 = 8,640,000 points, exceeding the 4GB VRAM
              ceiling and crashing the CUDA driver. <em>Resolution:</em>{" "}
              Implemented chunked ray batching, splitting image frames into
              sub-batches of 2,048 rays during both training and novel-view
              synthesis.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Next Steps &amp; Future Work
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Incorporate Instant-NGP style multi-resolution hash encodings
                (Müller et al., 2022) to accelerate training from 35 minutes
                down to under 1 minute.
              </li>
              <li>
                Implement 3D Gaussian Splatting (3DGS) rasterization as an
                alternative real-time rendering backend.
              </li>
              <li>
                Add automated camera calibration via COLMAP integration for
                unconstrained casual photo collections.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 9. Links & References */}
      <Section id="links" index="09 / Links" title="Artifacts & References">
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Repository:</span>
            <a
              href="https://github.com/mafaqbhatti/nerf-turntable-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text hover:text-accent underline underline-offset-2 transition-colors duration-150"
            >
              <span>https://github.com/mafaqbhatti/nerf-turntable-3d</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Reference:</span>
            <span className="text-text-faint">
              Mildenhall, B., Srinivasan, P. P., Tancik, M., Barron, J. T.,
              Ramamoorthi, R., &amp; Ng, R. (2020). NeRF: Representing Scenes as
              Neural Radiance Fields for View Synthesis. ECCV 2020.
            </span>
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
