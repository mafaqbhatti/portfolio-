import React from "react";

export function FloodPipelineDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded-lg bg-surface p-4 sm:p-6 card-editorial">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="uppercase tracking-wider">Pipeline Architecture</span>
        <span className="text-text-faint">PyTorch · Spatiotemporal Fusion</span>
      </div>

      <div className="w-full aspect-[640/320] flex items-center justify-center">
        <svg
          viewBox="0 0 640 320"
          className="w-full h-full"
          role="img"
          aria-label="Multi-sensor flood forecasting architecture: Multi-modal satellite inputs feed into a ResNet18 spatial feature extractor, followed by a ConvLSTM temporal encoder, and a U-Net decoder producing pixel-level probability maps with Monte Carlo Dropout uncertainty."
        >
          {/* Group 1: Inputs */}
          <g>
            <rect
              x="20"
              y="25"
              width="130"
              height="270"
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="50"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              INPUT SENSORS
            </text>

            <rect
              x="35"
              y="70"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="88"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              Sentinel-1 SAR
            </text>

            <rect
              x="35"
              y="106"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="124"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              GPM Rainfall
            </text>

            <rect
              x="35"
              y="142"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="160"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              SMAP Soil Moist.
            </text>

            <rect
              x="35"
              y="178"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="196"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              DEM Elevation
            </text>

            <rect
              x="35"
              y="214"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="232"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              Slope
            </text>

            <rect
              x="35"
              y="250"
              width="100"
              height="28"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="85"
              y="268"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              Land Cover
            </text>
          </g>

          {/* Arrow 1 */}
          <path
            d="M 150 160 L 195 160"
            stroke="var(--border)"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Group 2: ResNet18 Spatial Encoder */}
          <g>
            <rect
              x="195"
              y="80"
              width="115"
              height="160"
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="252"
              y="115"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              SPATIAL
            </text>
            <text
              x="252"
              y="130"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              ENCODER
            </text>
            <rect
              x="207"
              y="150"
              width="90"
              height="32"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="252"
              y="170"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              ResNet18
            </text>
            <text
              x="252"
              y="210"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Feature Maps
            </text>
          </g>

          {/* Arrow 2 */}
          <path
            d="M 310 160 L 350 160"
            stroke="var(--border)"
            strokeWidth="1.5"
          />

          {/* Group 3: ConvLSTM Temporal Modeling */}
          <g>
            <rect
              x="350"
              y="80"
              width="115"
              height="160"
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="407"
              y="115"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              TEMPORAL
            </text>
            <text
              x="407"
              y="130"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              RECURRENT
            </text>
            <rect
              x="362"
              y="150"
              width="90"
              height="32"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="407"
              y="170"
              textAnchor="middle"
              fill="var(--chart-2)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              ConvLSTM
            </text>
            <text
              x="407"
              y="210"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Spatiotemporal
            </text>
          </g>

          {/* Arrow 3 */}
          <path
            d="M 465 160 L 505 160"
            stroke="var(--border)"
            strokeWidth="1.5"
          />

          {/* Group 4: U-Net Decoder & MC Dropout */}
          <g>
            <rect
              x="505"
              y="80"
              width="115"
              height="160"
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text
              x="562"
              y="115"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              DECODER &
            </text>
            <text
              x="562"
              y="130"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              UNCERTAINTY
            </text>
            <rect
              x="517"
              y="145"
              width="90"
              height="30"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="562"
              y="164"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              U-Net Decoder
            </text>
            <rect
              x="517"
              y="182"
              width="90"
              height="30"
              rx="4"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="562"
              y="201"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              MC Dropout (p=0.2)
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 1: End-to-end spatiotemporal flood mapping pipeline. Spatial
        feature tensors from 6 multi-sensor bands pass through ResNet18 and
        ConvLSTM before pixel-level segmentation via U-Net.
      </figcaption>
    </figure>
  );
}
