import React, { useState, useEffect, useRef } from 'react';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

// Birthday used to compute the "length" of the plasmid: whole years as
// kilobases, plus the fraction of the current year already elapsed as the
// fractional bp (e.g. 21 years + 30% of the way to 22 => ~21300 bp).
const BIRTH_MONTH_INDEX = 3; // April (0-indexed)
const BIRTH_DAY = 2;

const FONT = "'Rajdhani', sans-serif";

function computeBp() {
  const now = new Date();
  const thisYearBday = new Date(now.getFullYear(), BIRTH_MONTH_INDEX, BIRTH_DAY);

  let age = now.getFullYear() - 2005;
  let lastBday = thisYearBday;
  let nextBday = new Date(now.getFullYear() + 1, BIRTH_MONTH_INDEX, BIRTH_DAY);

  if (now < thisYearBday) {
    age -= 1;
    lastBday = new Date(now.getFullYear() - 1, BIRTH_MONTH_INDEX, BIRTH_DAY);
    nextBday = thisYearBday;
  }

  const fraction = (now - lastBday) / (nextBday - lastBday);
  return Math.round(age * 1000 + fraction * 1000);
}

function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// 0 bp sits at the top of the circle, bp increases clockwise.
function bpFraction(bp, total) {
  return (bp / total) * 360;
}

function coordAngle(bp, total) {
  return bpFraction(bp, total) - 90;
}

function labelTransform(cx, cy, r, bp, total) {
  const visual = ((bpFraction(bp, total) % 360) + 360) % 360;
  const flip = visual > 90 && visual < 270;
  const rotate = flip ? visual - 180 : visual;
  const { x, y } = polar(cx, cy, r, coordAngle(bp, total));
  return { x, y, rotate };
}

// A simple single-arc path (for text to ride along via <textPath>). When the
// midpoint sits in the bottom half of the circle, the path is drawn in
// reverse so the text riding on it reads upright instead of upside-down.
function arcTextPath(cx, cy, r, startBp, endBp, total) {
  const startAngle = coordAngle(startBp, total);
  const endAngle = coordAngle(endBp, total);
  const mid = (bpFraction(startBp, total) + bpFraction(endBp, total)) / 2;
  const visual = ((mid % 360) + 360) % 360;
  const flip = visual > 90 && visual < 270;

  const a1 = flip ? endAngle : startAngle;
  const a2 = flip ? startAngle : endAngle;
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const sweep = flip ? 0 : 1;

  const p1 = polar(cx, cy, r, a1);
  const p2 = polar(cx, cy, r, a2);

  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} ${sweep} ${p2.x} ${p2.y}`;
}

function arrowPath(cx, cy, innerR, outerR, startBp, endBp, total) {
  const startAngle = coordAngle(startBp, total);
  const endAngle = coordAngle(endBp, total);
  const span = endAngle - startAngle;
  const headAngle = Math.min(5, Math.abs(span) * 0.3);
  const shaftEnd = endAngle - headAngle;
  const rMid = (innerR + outerR) / 2;
  const flare = (outerR - innerR) * 0.35;

  const large = Math.abs(shaftEnd - startAngle) > 180 ? 1 : 0;

  const pStartOuter = polar(cx, cy, outerR, startAngle);
  const pShaftEndOuter = polar(cx, cy, outerR, shaftEnd);
  const pHeadOuter = polar(cx, cy, outerR + flare, shaftEnd);
  const pTip = polar(cx, cy, rMid, endAngle);
  const pHeadInner = polar(cx, cy, innerR - flare, shaftEnd);
  const pShaftEndInner = polar(cx, cy, innerR, shaftEnd);
  const pStartInner = polar(cx, cy, innerR, startAngle);

  return [
    `M ${pStartOuter.x} ${pStartOuter.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${pShaftEndOuter.x} ${pShaftEndOuter.y}`,
    `L ${pHeadOuter.x} ${pHeadOuter.y}`,
    `L ${pTip.x} ${pTip.y}`,
    `L ${pHeadInner.x} ${pHeadInner.y}`,
    `L ${pShaftEndInner.x} ${pShaftEndInner.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${pStartInner.x} ${pStartInner.y}`,
    'Z',
  ].join(' ');
}

function slug(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const CX = 570;
const CY = 570;
const BACKBONE_R = 430;
const OUTER_R = 396;
const INNER_R = 362;
const TICK_R = 452;
const PILL_R = 470;
const HILITE_R = BACKBONE_R;

// Drifting background nucleotides — decorative "floating DNA bases". Generated
// once (deterministically) so positions are stable across renders.
const NUC_CHARS = ['A', 'T', 'G', 'C'];
const NUC_COLORS = { A: '#6fb7e0', T: '#f2a154', G: '#8bd17c', C: '#c15fa0' };
const NUCS = Array.from({ length: 20 }, (_, i) => {
  const ch = NUC_CHARS[i % 4];
  return {
    ch,
    color: NUC_COLORS[ch],
    left: (i * 41 + 7) % 100,
    delay: (i * 31) % 22,
    duration: 18 + ((i * 7) % 12),
    size: 14 + (i % 3) * 6,
  };
});

// A small triangle sitting on the backbone at `angle`, pointing radially
// inward — a bracket marker at each edge of a highlighted feature section.
function inwardArrowPoints(angle) {
  const wDeg = 1.3;
  const tip = polar(CX, CY, HILITE_R - 20, angle);
  const b1 = polar(CX, CY, HILITE_R + 3, angle + wDeg);
  const b2 = polar(CX, CY, HILITE_R + 3, angle - wDeg);
  return `${tip.x},${tip.y} ${b1.x},${b1.y} ${b2.x},${b2.y}`;
}

// Lights up the matching section of the outer ring (as if highlighting that
// stretch of DNA) with inward-pointing arrowheads bracketing each end.
// Purely an opacity toggle on hover — cheap, no per-frame filters/animation.
function FeatureHighlight({ feature, total }) {
  const a1 = coordAngle(feature.start, total);
  const a2 = coordAngle(feature.end, total);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const p1 = polar(CX, CY, HILITE_R, a1);
  const p2 = polar(CX, CY, HILITE_R, a2);
  const d = `M ${p1.x} ${p1.y} A ${HILITE_R} ${HILITE_R} 0 ${large} 1 ${p2.x} ${p2.y}`;

  return (
    <g className="plasmid-highlight">
      <path d={d} fill="none" stroke={feature.color} strokeWidth={14} strokeLinecap="round" opacity={0.3} />
      <path d={d} fill="none" stroke={feature.color} strokeWidth={5} strokeLinecap="round" />
      <polygon points={inwardArrowPoints(a1)} fill={feature.color} />
      <polygon points={inwardArrowPoints(a2)} fill={feature.color} />
    </g>
  );
}

// A "DNA Polymerase" — a stylized enzyme that, on hover, travels along the
// outer backbone ring (the DNA strand itself) across the feature's span, as
// if replicating that stretch. offset-path keeps it glued to the ring; the
// animation only runs while the feature is hovered.
function Polymerase({ feature, total }) {
  const a1 = coordAngle(feature.start, total);
  const a2 = coordAngle(feature.end, total);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const p1 = polar(CX, CY, BACKBONE_R, a1);
  const p2 = polar(CX, CY, BACKBONE_R, a2);
  const travelPath = `path('M ${p1.x} ${p1.y} A ${BACKBONE_R} ${BACKBONE_R} 0 ${large} 1 ${p2.x} ${p2.y}')`;

  return (
    <g className="plasmid-pol" style={{ offsetPath: travelPath, offsetRotate: '0deg' }}>
      {/* feature-colored activation glow */}
      <ellipse cx={0} cy={-3} rx={28} ry={24} fill={feature.color} opacity={0.22} />
      {/* enzyme illustration (grayscale blob on a pedestal base) */}
      <rect x={-17} y={5} width={34} height={15} rx={7} fill="#f0f0f0" stroke="#8c8c8c" strokeWidth={1.6} />
      <path
        d="M -18 3 C -21 -11 -11 -23 2 -21 C 8 -20 9 -16 14 -15 C 21 -14 23 -5 18 1 C 16 3 13 4 9 4 L -13 4 C -17 4 -18 4 -18 3 Z"
        fill="#ececec"
        stroke="#8c8c8c"
        strokeWidth={1.6}
      />
      <ellipse cx={-6} cy={-12} rx={7} ry={5} fill="#f8f8f8" opacity={0.75} />
      <path d="M 9 -15 C 5 -8 6 0 8 4" fill="none" stroke="#9a9a9a" strokeWidth={1.2} opacity={0.8} />
    </g>
  );
}

function Feature({ feature, total, clickable, index, onHover }) {
  const rMid = (INNER_R + OUTER_R) / 2;
  const d = arrowPath(CX, CY, INNER_R, OUTER_R, feature.start, feature.end, total);
  const pathId = `arc-${slug(feature.label)}`;
  const textD = arcTextPath(CX, CY, rMid, feature.start, feature.end, total);

  const content = (
    <g
      style={{ cursor: clickable ? 'pointer' : 'default', color: feature.color, animationDelay: `${0.15 + index * 0.12}s` }}
      className={clickable ? 'plasmid-feature plasmid-enter' : 'plasmid-enter'}
      onMouseEnter={clickable && onHover ? () => onHover(feature) : undefined}
      onMouseLeave={clickable && onHover ? () => onHover(null) : undefined}
    >
      {clickable && <FeatureHighlight feature={feature} total={total} />}
      <path
        className="plasmid-arrow"
        d={d}
        fill={feature.color}
        stroke={feature.textColor === '#fff' ? '#00000055' : '#00000040'}
        strokeWidth={1.5}
      />
      <defs>
        <path id={pathId} d={textD} fill="none" />
      </defs>
      <text
        className="plasmid-feature-label"
        fontSize={18}
        fontFamily={FONT}
        fontWeight={700}
        letterSpacing={0.6}
        fill={feature.textColor}
        dominantBaseline="central"
        style={{ userSelect: 'none' }}
      >
        <textPath xlinkHref={`#${pathId}`} href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {feature.label}
        </textPath>
      </text>
      {clickable && <Polymerase feature={feature} total={total} />}
    </g>
  );

  if (!clickable) return content;

  return (
    <a href={feature.href} aria-label={feature.label} target={feature.external ? '_blank' : undefined} rel={feature.external ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  );
}

function CutSite({ bp, label, href, external, onClick, total, accent }) {
  const angle = coordAngle(bp, total);
  const tickInner = polar(CX, CY, BACKBONE_R - 21, angle);
  const tickOuter = polar(CX, CY, BACKBONE_R + 21, angle);
  const labelAnchor = polar(CX, CY, PILL_R + 8, angle);
  const width = Math.max(96, label.length * 12 + 34);
  const height = 36;

  const body = (
    <g style={{ cursor: 'pointer' }} className="plasmid-cutsite">
      <line x1={tickInner.x} y1={tickInner.y} x2={tickOuter.x} y2={tickOuter.y} stroke={accent} strokeWidth={3} />
      <circle className="plasmid-cutsite-dot" cx={tickOuter.x} cy={tickOuter.y} r={3.75} fill={accent} />
      <line x1={tickOuter.x} y1={tickOuter.y} x2={labelAnchor.x} y2={labelAnchor.y} stroke={accent} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.8} />
      <rect
        x={labelAnchor.x - width / 2}
        y={labelAnchor.y - height / 2}
        width={width}
        height={height}
        rx={6}
        fill="#0a0a0a"
        stroke={accent}
        strokeWidth={1.75}
      />
      <line
        x1={labelAnchor.x - width / 2 + 6}
        y1={labelAnchor.y - height / 2 + 6}
        x2={labelAnchor.x - width / 2 + 6}
        y2={labelAnchor.y + height / 2 - 6}
        stroke={accent}
        strokeWidth={3}
      />
      <text
        x={labelAnchor.x + 5}
        y={labelAnchor.y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={19}
        fontFamily={FONT}
        fontWeight={600}
        letterSpacing={0.4}
        fill={accent}
        style={{ userSelect: 'none' }}
      >
        {label}
      </text>
    </g>
  );

  if (onClick) {
    return (
      <g onClick={onClick} aria-label={label}>
        {body}
      </g>
    );
  }

  return (
    <a href={href} aria-label={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {body}
    </a>
  );
}

function OriMarker({ total }) {
  const angle = coordAngle(0, total);
  const inner = polar(CX, CY, BACKBONE_R - 8, angle);
  const dot = polar(CX, CY, BACKBONE_R, angle);
  const labelPos = polar(CX, CY, BACKBONE_R - 30, angle);
  return (
    <g>
      <circle className="plasmid-ori-dot" cx={dot.x} cy={dot.y} r={5} fill="#f2d54c" />
      <circle cx={dot.x} cy={dot.y} r={2.5} fill="#fff" />
      <text
        x={labelPos.x}
        y={labelPos.y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fontFamily={FONT}
        fontStyle="italic"
        fontWeight={600}
        fill="#f2d54c"
      >
        ori
      </text>
    </g>
  );
}

export default function PlasmidMap() {
  const [total, setTotal] = useState(null);
  const [hovered, setHovered] = useState(null);
  const copiedRef = useRef(null);

  useEffect(() => {
    setTotal(computeBp());
    // The displayed bp count only ticks up by 1 roughly every ~8-9 hours (1/1000
    // of a year), so there's no need to re-render the whole diagram every
    // minute — that just causes the rotation animation to hitch. Every 10
    // minutes keeps it "live" without the stutter.
    const id = setInterval(() => setTotal(computeBp()), 600000);
    return () => clearInterval(id);
  }, []);

  async function copyLink() {
    navigator.clipboard.writeText('neevmangal.com');
    if (copiedRef.current) {
      copiedRef.current.style.opacity = '1';
      await new Promise((res) => setTimeout(res, 1000));
      copiedRef.current.style.opacity = '0';
    }
  }

  if (!total) {
    return (
      <div className="flex items-center justify-center" style={{ minHeight: '100vh', background: '#000' }}>
        <span style={{ color: '#666', fontFamily: FONT }}>loading plasmid map...</span>
      </div>
    );
  }

  const features = [
    { start: 2000, end: 5600, label: 'About Me', color: '#6fb7e0', textColor: '#08202e', href: '/aboutme' },
    // { start: 6100, end: 9100, label: 'Projects', color: '#f2a154', textColor: '#3a1f00', href: '/projects' },
    { start: 9600, end: 11700, label: 'Writing', color: '#8bd17c', textColor: '#0e2b0a', href: '/writing' },
    { start: 12000, end: 16000, label: 'Astrophotography', color: '#c15fa0', textColor: '#2b0a20', href: '/astrophotography' },
    { start: 18000, end: 21000, label: 'Resume', color: '#f2d54c', textColor: '#332900', href: '/resume' },
  ];

  const tickStep = 3000;
  const ticks = [];
  for (let bp = tickStep; bp < total; bp += tickStep) {
    ticks.push(bp);
  }

  return (
    <div className="plasmid-page flex items-center justify-center">
      <div className="plasmid-topo-bg" aria-hidden="true" />
      <div className="nuc-field" aria-hidden="true">
        {NUCS.map((n, i) => (
          <span
            key={i}
            className="nuc"
            style={{
              left: `${n.left}%`,
              color: n.color,
              fontSize: `${n.size}px`,
              animationDelay: `${n.delay}s`,
              animationDuration: `${n.duration}s`,
            }}
          >
            {n.ch}
          </span>
        ))}
      </div>

      <div className="plasmid-stage">
        <svg viewBox="0 0 1140 1140" width="100%" height="100%" fontFamily={FONT}>
          <style>
            {`
              .plasmid-arrow {
                transition: filter 0.2s ease, transform 0.2s ease;
                transform-box: fill-box;
                transform-origin: center;
              }
              .plasmid-feature-label { transition: filter 0.2s ease; }
              .plasmid-feature:hover .plasmid-arrow {
                filter: brightness(1.55) saturate(1.5);
                transform: scale(1.045);
              }
              .plasmid-feature:hover .plasmid-feature-label { filter: brightness(1.25); }

              .plasmid-highlight { opacity: 0; transition: opacity 0.2s ease; }
              .plasmid-feature:hover .plasmid-highlight { opacity: 1; }

              /* DNA polymerase travels the region only while hovered */
              .plasmid-pol { opacity: 0; offset-distance: 0%; transition: opacity 0.2s ease; }
              .plasmid-feature:hover .plasmid-pol {
                opacity: 1;
                animation: pol-travel 2.4s linear infinite;
              }
              @keyframes pol-travel {
                from { offset-distance: 0%; }
                to { offset-distance: 100%; }
              }

              /* one-time staggered entrance */
              .plasmid-enter {
                opacity: 0;
                transform-box: fill-box;
                transform-origin: center;
                animation: feat-in 0.55s ease forwards;
              }
              @keyframes feat-in {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
              }

              .plasmid-cutsite rect { transition: filter 0.15s ease; }
              .plasmid-cutsite:hover rect { filter: brightness(1.6); }
              .plasmid-cutsite-dot { animation: cutsite-pulse 2.4s ease-in-out infinite; }
              @keyframes cutsite-pulse {
                0%, 100% { r: 2.5px; opacity: 1; }
                50% { r: 4px; opacity: 0.65; }
              }

              .plasmid-ori-dot { animation: ori-pulse 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
              @keyframes ori-pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.55; transform: scale(1.5); }
              }

              .center-glow { animation: center-breathe 6s ease-in-out infinite; transform-box: view-box; transform-origin: ${CX}px ${CY}px; }
              @keyframes center-breathe {
                0%, 100% { opacity: 0.55; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.08); }
              }

              .plasmid-ring {
                animation: plasmid-spin 1800s linear infinite;
                transform-origin: ${CX}px ${CY}px;
                will-change: transform;
                backface-visibility: hidden;
              }
              @keyframes plasmid-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>

          <defs>
            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#9b6fce" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle className="center-glow" cx={CX} cy={CY} r={200} fill="url(#centerGlow)" />

          <g className="plasmid-ring">
            {/* backbone */}
            <circle cx={CX} cy={CY} r={BACKBONE_R} fill="none" stroke="#666" strokeWidth={2} />
            <circle cx={CX} cy={CY} r={BACKBONE_R - 6} fill="none" stroke="#666" strokeWidth={1} />

            {/* tick marks */}
            {ticks.map((bp) => {
              const angle = coordAngle(bp, total);
              const p1 = polar(CX, CY, BACKBONE_R - 6, angle);
              const p2 = polar(CX, CY, BACKBONE_R + 8, angle);
              const { x, y, rotate } = labelTransform(CX, CY, TICK_R, bp, total);
              return (
                <g key={bp}>
                  <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#666" strokeWidth={1.5} />
                  <text
                    x={x}
                    y={y}
                    transform={`rotate(${rotate} ${x} ${y})`}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight={500}
                    fill="#777"
                  >
                    {bp.toLocaleString()}
                  </text>
                </g>
              );
            })}

            <OriMarker total={total} />

            {/* feature arrows */}
            {features.map((f, i) => (
              <Feature key={f.label} feature={f} total={total} clickable={!!f.href} index={i} onHover={setHovered} />
            ))}

            {/* social cut-sites — spread to three opposing sides of the plasmid */}
            <CutSite bp={800} label="GitHub" href="https://github.com/ccans/neevmangalofficial" external total={total} accent="#e5e5e5" />
            <CutSite bp={9350} label="Copy Link" onClick={copyLink} total={total} accent="#d6b8f5" />
            <CutSite bp={17000} label="LinkedIn" href="https://www.linkedin.com/in/neev-mangal-b72186219/" external total={total} accent="#5fa8e0" />

            <text
              x={polar(CX, CY, PILL_R + 32, coordAngle(9350, total)).x}
              y={polar(CX, CY, PILL_R + 32, coordAngle(9350, total)).y}
              ref={copiedRef}
              textAnchor="middle"
              fontSize={13}
              fontFamily={FONT}
              fontWeight={600}
              fill="#d6b8f5"
              style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
            >
              copied!
            </text>
          </g>

          {/* center label - stays fixed while the ring rotates. Reads out the
              hovered feature's name + span, or the default identity otherwise. */}
          <text x={CX} y={CY - 18} textAnchor="middle" fontSize={44} fontWeight={700} fill="#fff" letterSpacing={1}>
            NEEV MANGAL
          </text>
          <text x={CX} y={CY + 18} textAnchor="middle" fontSize={17} fontWeight={500} fill={hovered ? hovered.color : '#999'}>
            {hovered ? hovered.label : 'Synthetic-Biologist'}
          </text>
          <text x={CX} y={CY + 46} textAnchor="middle" fontSize={17} fontWeight={500} fill="#999">
            {hovered ? `${hovered.start.toLocaleString()} – ${hovered.end.toLocaleString()} bp` : `${total.toLocaleString()} bp`}
          </text>
        </svg>
      </div>

      <style jsx>{`
        .plasmid-page {
          position: relative;
          min-height: 100vh;
          background: #000;
          padding: 24px;
          overflow: hidden;
        }
        .plasmid-stage {
          width: min(92vmin, 820px);
          height: min(92vmin, 820px);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 640px) {
          .plasmid-page {
            padding: 0;
          }
          .plasmid-stage {
            width: 100vw;
            height: 100vw;
          }
        }
        .nuc-field {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .nuc {
          position: absolute;
          bottom: -50px;
          font-family: ${FONT};
          font-weight: 700;
          opacity: 0;
          animation-name: nuc-rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes nuc-rise {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          12% {
            opacity: 0.16;
          }
          88% {
            opacity: 0.16;
          }
          100% {
            transform: translateY(-108vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
