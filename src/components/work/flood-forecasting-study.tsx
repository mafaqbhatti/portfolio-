import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { FloodPipelineDiagram } from "@/components/diagrams/flood-pipeline-diagram";
import { flagshipProjects } from "@/content/projects";
import { TodoMarker } from "@/components/ui/todo-marker";

export function FloodForecastingStudy() {
  const project = flagshipProjects[0];
  const nextProject = flagshipProjects[1];

  return (
    <CaseStudyLayout project={project} nextProject={nextProject}>
      {/* 1. Summary & Facts Bar */}
      <Section
        id="summary"
        index="01 / Summary"
        title="Executive Summary & Facts"
      >
        <div className="space-y-2 border-l-2 border-accent pl-4 text-text text-base">
          <p>
            <strong>Problem:</strong> Monsoon floods across the Indus River
            basin in Pakistan cause widespread infrastructure loss; optical
            satellite imagery is blinded by continuous monsoon cloud cover,
            preventing timely spatial inundation mapping.
          </p>
          <p>
            <strong>Result:</strong> Engineered an end-to-end spatiotemporal
            fusion pipeline achieving an IoU of 0.6496 and Dice/F1 of 0.7876
            across 19,964 held-out multi-sensor samples, with pixel-level
            uncertainty bounds derived from Monte Carlo Dropout.
          </p>
          <p>
            <strong>Role:</strong> Lead AI/ML Engineer for final-year capstone
            project; owned dataset ingestion, spatiotemporal model architecture,
            PyTorch training pipelines, and spatial validation metrics.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Research Evaluation / Capstone"
          links={[
            {
              label: "Code Repository",
              marker: "TODO(owner): repository link",
            },
            {
              label: "Evaluation Notebook",
              marker: "TODO(owner): notebook link",
            },
            { label: "Project Report", marker: "TODO(owner): write-up link" },
          ]}
        />
      </Section>

      {/* 2. Problem and Constraints */}
      <Section
        id="problem"
        index="02 / Problem"
        title="Problem & Environmental Constraints"
      >
        <p>
          Pakistan experiences catastrophic recurring floods during the annual
          summer monsoon season. Optical satellites (such as Sentinel-2 or
          Landsat) are frequently unusable for active disaster response because
          cloud cover obscures flood extents during critical rainfall windows.
        </p>
        <p>
          Addressing this requires cloud-penetrating Synthetic Aperture Radar
          (SAR) combined with hydrometeorological indicators. However, SAR
          backscatter contains severe speckle noise and topographical
          distortions in mountainous terrain, and precipitation alone fails to
          account for soil saturation limits or river gradient dynamics.
        </p>
        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            Primary Constraints:
          </div>
          <div>
            • Compute: Trained strictly on Google Colab using a single NVIDIA
            Tesla T4 GPU (16 GB VRAM).
          </div>
          <div>
            • Alignment: Heterogeneous spatial resolutions (Sentinel-1 at 10m vs
            SMAP soil moisture at ~9km) requiring re-gridding and raster
            reprojection.
          </div>
          <div>
            • Reliability: Evacuations and emergency dispatch require actionable
            spatial confidence intervals rather than raw black-box segmentation.
          </div>
        </div>
      </Section>

      {/* 3. Architecture */}
      <Section
        id="architecture"
        index="03 / Architecture"
        title="Spatiotemporal Model Architecture"
      >
        <p>
          The pipeline fuses 6 geospatial inputs across spatial and temporal
          dimensions. The input raster volume contains dual-polarization
          Sentinel-1 SAR backscatter (VV + VH), GPM precipitation accumulation,
          SMAP surface soil moisture, SRTM elevation, derived topographic slope,
          and ESA WorldCover land use masks.
        </p>

        <FloodPipelineDiagram />

        <p className="text-sm text-text-muted">
          A truncated ResNet18 acts as the spatial feature extractor, projecting
          high-resolution spatial contexts into latent embeddings. These
          embeddings are passed through a ConvLSTM cell to model the temporal
          progression of rainfall accumulation and antecedent moisture over
          multi-day lag windows. A symmetric U-Net decoder with skip connections
          restores spatial resolution to output a 1-channel probability map.
        </p>
      </Section>

      {/* 4. Key Decisions (Defend) */}
      <Section
        id="decisions"
        index="04 / Key Decisions"
        title="Engineering Decisions & Defenses"
      >
        <p className="text-sm text-text-muted">
          Every structural choice was selected against specific baselines and
          hardware trade-offs:
        </p>

        <DecisionCard
          decision="Sensor Selection: Sentinel-1 SAR over Sentinel-2 Optical"
          choice="Sentinel-1 C-band Synthetic Aperture Radar (VV and VH polarizations)"
          alternatives="Sentinel-2 multispectral MSI, MODIS flood products"
          reason="Optical bands exhibit complete data dropouts during heavy monsoon precipitation events due to 100% cloud occlusions. Active C-band radar penetrates cloud cover and precipitation directly, allowing continuous surface water observation."
        />

        <DecisionCard
          decision="Spatial Feature Extractor: ResNet18 over ResNet50 or Vision Transformer"
          choice="Pretrained ResNet18 encoder with tailored 6-channel input stem"
          alternatives="ResNet50, Swin Transformer, SegFormer"
          reason="The training runtime was constrained to a single Tesla T4 (16 GB VRAM). ResNet18 fit the spatio-temporal batch dimensions alongside the memory-heavy ConvLSTM hidden states without out-of-memory crashes, while preventing overfitting on limited historical SAR flood pairs."
        />

        <DecisionCard
          decision="Uncertainty Quantification: Monte Carlo Dropout over Deep Ensembles"
          choice="Test-time Monte Carlo Dropout (p = 0.2 across 20 forward passes)"
          alternatives="Deep Ensemble of 5 distinct models, Conformal Prediction"
          reason="Training and serving a full deep ensemble of 5 spatiotemporal models was computationally prohibitive on Colab and in latency-sensitive emergency pipelines. MC Dropout provides pixel-level variance and uncertainty bounds with zero additional model storage."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Empirical Evaluation & Error Analysis"
      >
        <p>
          The model was evaluated against an independent, held-out spatial test
          set consisting of <strong>19,964 samples</strong> across diverse
          regional terrain throughout Pakistan.
        </p>

        {/* Metrics Table */}
        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">Metric</th>
                <th className="py-3 px-4 font-medium">Score</th>
                <th className="py-3 px-4 font-medium">Target / Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Intersection over Union (IoU)
                </td>
                <td className="py-3 px-4 text-accent font-semibold">0.6496</td>
                <td className="py-3 px-4 text-text-muted">
                  Pixel-level overlap of predicted flood extent vs ground-truth
                  mask
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Dice / F1-Score
                </td>
                <td className="py-3 px-4 text-accent font-semibold">0.7876</td>
                <td className="py-3 px-4 text-text-muted">
                  Harmonic mean of spatial precision and recall across water
                  bodies
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">Precision</td>
                <td className="py-3 px-4 text-text font-semibold">0.7642</td>
                <td className="py-3 px-4 text-text-muted">
                  Fraction of predicted water pixels that were actual flood
                  water
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">Recall</td>
                <td className="py-3 px-4 text-accent font-semibold">0.8125</td>
                <td className="py-3 px-4 text-text-muted">
                  High recall prioritized to avoid missing flooded villages /
                  disaster zones
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Evaluated on held-out test split of 19,964 raster tiles across the
            Indus basin.
          </div>
        </div>

        <div className="my-4">
          <TodoMarker label="TODO(owner): confirm these are the final numbers; baseline model and its scores; sample prediction maps; error analysis" />
        </div>

        <div className="space-y-3 mt-4 text-sm">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
            Error Analysis & Known Failure Modes:
          </h4>
          <p className="text-text-muted text-xs leading-relaxed">
            1. <strong>Specular Reflection in Arid Sandy Basins:</strong> Very
            dry, flat sandy soil occasionally produces very low radar
            backscatter resembling open, calm water, causing localized false
            positive predictions.
          </p>
          <p className="text-text-muted text-xs leading-relaxed">
            2. <strong>Dense Urban Flooding:</strong> Double-bounce radar
            reflections from flooded building walls create intense bright
            backscatter rather than dark specular reflection, occasionally
            leading to false negatives in narrow city streets.
          </p>
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Compute Cost & Latency Profile"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Inference Latency
            </span>
            <span className="text-text text-base font-semibold">
              ~420 ms / tile
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Forward pass on Tesla T4 (batch size 1, 512×512 input)
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Training Compute
            </span>
            <span className="text-text text-base font-semibold">
              Google Colab (Tesla T4)
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Mixed-precision training (FP16), AdamW optimizer, Cosine Annealing
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Deployment Status & Limitations"
      >
        <p>
          <strong>Honest deployment status:</strong> This model is currently an
          offline research pipeline and evaluation harness. It is not currently
          deployed as an autonomous real-time public early warning service due
          to satellite orbit revisit latency (Sentinel-1 operates on a 6 to
          12-day revisit interval per orbit path).
        </p>
        <p className="text-sm text-text-muted">
          Inference can be executed on-demand via Python CLI scripts on newly
          acquired Copernicus open-access hub imagery.
        </p>
      </Section>

      {/* 8. What Failed & What I Would Do Next */}
      <Section
        id="lessons"
        index="08 / Retrospective"
        title="What Failed, What Is Unfinished & Next Steps"
      >
        <div className="space-y-4 text-sm text-text-muted">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              What Failed:
            </h4>
            <p className="text-xs leading-relaxed">
              Initial experiments attempting to train a 3D-CNN directly on
              multi-temporal raw SAR stacks suffered from severe overfitting due
              to spatial speckle and temporal sparsity across orbits. Moving to
              a decoupled ResNet18 spatial feature extractor + ConvLSTM
              stabilized gradient propagation.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              What I Would Do Next:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Integrate hydrological river routing physics (e.g. 1D
                Saint-Venant equations) as physics-informed neural loss terms.
              </li>
              <li>
                Incorporate daily optical MODIS data via cross-modal knowledge
                distillation to bridge the SAR revisit time gap.
              </li>
              <li>
                Package the inference worker into a containerized AWS Lambda or
                ECS task triggered by Copernicus S3 notifications.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 9. Links & References */}
      <Section id="links" index="09 / Links" title="Artifacts & References">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-text-muted">Primary Codebase:</span>
            <TodoMarker label="TODO(owner): confirm repository link" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-muted">Test Evaluation Dataset:</span>
            <span className="text-text">
              19,964 held-out multi-sensor tiles
            </span>
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
