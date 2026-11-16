import React from "react";

export function NeRFDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="font-semibold text-text">
          NeRF Volumetric Rendering Pipeline
        </span>
        <span className="text-text-faint">
          PyTorch · Harmonic Positional Encoding · Ray Marching
        </span>
      </div>

      <div className="w-full aspect-[640/320] flex items-center justify-center">
        <svg
          viewBox="0 0 640 320"
          className="w-full h-full"
          role="img"
          aria-label="NeRF architecture: Camera rays are cast through pixels, sampled along line of sight, mapped through harmonic positional encoding into an 8-layer MLP with density Softplus and directional color heads, and integrated via numerical quadrature volume rendering."
        >
          {/* Step 1: Camera & Ray Generation */}
          <g>
            <rect
              x="20"
              y="115"
              width="100"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="70"
              y="142"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              CAMERA POSE
            </text>
            <text
              x="70"
              y="158"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              r(t) = o + t·d
            </text>
            <text
              x="70"
              y="174"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Circular Turntable
            </text>
          </g>

          <path d="M 120 155 L 155 155" stroke="#1E2638" strokeWidth="1.5" />

          {/* Step 2: Stratified Ray Sampling */}
          <g>
            <rect
              x="155"
              y="105"
              width="110"
              height="100"
              rx="2"
              fill="var(--surface-2)"
              stroke="#00D2B4"
              strokeWidth="1"
            />
            <text
              x="210"
              y="132"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              RAY MARCHING
            </text>
            <text
              x="210"
              y="148"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Stratified Samples
            </text>
            <text
              x="210"
              y="166"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              N = 96 samples / ray
            </text>
            <text
              x="210"
              y="182"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Near: 2.0 · Far: 6.0
            </text>
          </g>

          <path d="M 265 155 L 300 155" stroke="#1E2638" strokeWidth="1.5" />

          {/* Step 3: Harmonic Positional Encoding */}
          <g>
            <rect
              x="300"
              y="110"
              width="105"
              height="90"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1"
            />
            <text
              x="352"
              y="136"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              HARMONIC
            </text>
            <text
              x="352"
              y="152"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Pos Encoding γ
            </text>
            <text
              x="352"
              y="170"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              x: 3D → 63D (L=10)
            </text>
            <text
              x="352"
              y="184"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              d: 3D → 27D (L=4)
            </text>
          </g>

          <path d="M 405 155 L 435 155" stroke="#1E2638" strokeWidth="1.5" />

          {/* Step 4: 8-Layer MLP */}
          <g>
            <rect
              x="435"
              y="90"
              width="100"
              height="130"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1.5"
            />
            <text
              x="485"
              y="116"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              8-LAYER MLP
            </text>
            <text
              x="485"
              y="134"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Hidden: 256
            </text>
            <text
              x="485"
              y="148"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Skip @ Layer 5
            </text>
            <line
              x1="445"
              y1="160"
              x2="525"
              y2="160"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="485"
              y="178"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Density σ (Softplus)
            </text>
            <text
              x="485"
              y="198"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Color c (Sigmoid)
            </text>
          </g>

          <path d="M 535 155 L 560 155" stroke="#1E2638" strokeWidth="1.5" />

          {/* Step 5: Volume Rendering */}
          <g>
            <rect
              x="560"
              y="105"
              width="65"
              height="100"
              rx="2"
              fill="var(--surface-2)"
              stroke="#00D2B4"
              strokeWidth="1.5"
            />
            <text
              x="592"
              y="136"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              VOLUME
            </text>
            <text
              x="592"
              y="152"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              INTEGRAL
            </text>
            <text
              x="592"
              y="172"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              C = Σ T·α·c
            </text>
            <text
              x="592"
              y="190"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="7"
              fontFamily="var(--font-geist-mono)"
            >
              RGB Pixel
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 4: NeRF mathematical architecture. From camera pose rays to
        stratified spatial sampling, harmonic sinusoidal coordinate expansion,
        an 8-layer deep MLP with skip connections, and numerical quadrature
        volumetric integration.
      </figcaption>
    </figure>
  );
}
