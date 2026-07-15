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

const CX = 530;
const CY = 530;
const BACKBONE_R = 430;
const OUTER_R = 396;
const INNER_R = 362;
const TICK_R = 452;
const PILL_LEADER_R = 434;
const PILL_R = 470;

function Feature({ feature, total, clickable }) {
  const rMid = (INNER_R + OUTER_R) / 2;
  const d = arrowPath(CX, CY, INNER_R, OUTER_R, feature.start, feature.end, total);
  const pathId = `arc-${slug(feature.label)}`;
  const textD = arcTextPath(CX, CY, rMid, feature.start, feature.end, total);

  const content = (
    <g style={clickable ? { cursor: 'pointer' } : undefined} className={clickable ? 'plasmid-feature' : undefined}>
      <path
        d={d}
        fill={feature.color}
        stroke={feature.textColor === '#fff' ? '#00000055' : '#00000040'}
        strokeWidth={1.5}
      />
      <defs>
        <path id={pathId} d={textD} fill="none" />
      </defs>
      <text
        fontSize={17}
        fontFamily={FONT}
        fontWeight={600}
        letterSpacing={0.3}
        fill={feature.textColor}
      >
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {feature.label}
        </textPath>
      </text>
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
  const tickInner = polar(CX, CY, BACKBONE_R - 14, angle);
  const tickOuter = polar(CX, CY, BACKBONE_R + 14, angle);
  const leaderStart = polar(CX, CY, BACKBONE_R + 14, angle);
  const labelAnchor = polar(CX, CY, PILL_R, angle);
  const width = Math.max(64, label.length * 8 + 24);
  const height = 24;
  const onRight = Math.cos(((angle) * Math.PI) / 180) >= -0.05;

  const body = (
    <g style={{ cursor: 'pointer' }} className="plasmid-cutsite">
      <line x1={tickInner.x} y1={tickInner.y} x2={tickOuter.x} y2={tickOuter.y} stroke={accent} strokeWidth={2} />
      <circle cx={tickOuter.x} cy={tickOuter.y} r={2.5} fill={accent} />
      <line x1={leaderStart.x} y1={leaderStart.y} x2={labelAnchor.x} y2={labelAnchor.y} stroke={accent} strokeWidth={1} strokeDasharray="2 2" opacity={0.8} />
      <rect
        x={labelAnchor.x - width / 2}
        y={labelAnchor.y - height / 2}
        width={width}
        height={height}
        rx={4}
        fill="#0a0a0a"
        stroke={accent}
        strokeWidth={1.25}
      />
      <line
        x1={labelAnchor.x - width / 2 + 4}
        y1={labelAnchor.y - height / 2 + 4}
        x2={labelAnchor.x - width / 2 + 4}
        y2={labelAnchor.y + height / 2 - 4}
        stroke={accent}
        strokeWidth={2}
      />
      <text
        x={labelAnchor.x + 3}
        y={labelAnchor.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={13}
        fontFamily={FONT}
        fontWeight={600}
        letterSpacing={0.3}
        fill={accent}
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

export default function PlasmidMap() {
  const [total, setTotal] = useState(null);
  const copiedRef = useRef(null);

  useEffect(() => {
    setTotal(computeBp());
    const id = setInterval(() => setTotal(computeBp()), 60000);
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
    { start: 6100, end: 9100, label: 'Projects', color: '#f2a154', textColor: '#3a1f00', href: '/projects' },
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
    <div className="flex items-center justify-center" style={{ minHeight: '100vh', background: '#000', padding: '24px' }}>
      <div style={{ width: 'min(92vmin, 820px)', height: 'min(92vmin, 820px)', position: 'relative' }}>
        <svg viewBox="0 0 1060 1060" width="100%" height="100%" fontFamily={FONT}>
          <style>
            {`
              .plasmid-feature path { transition: filter 0.15s ease; }
              .plasmid-feature:hover path { filter: brightness(1.3); }
              .plasmid-cutsite rect { transition: filter 0.15s ease; }
              .plasmid-cutsite:hover rect { filter: brightness(1.6); }
              .plasmid-ring {
                animation: plasmid-spin 300s linear infinite;
                transform-origin: ${CX}px ${CY}px;
              }
              @keyframes plasmid-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>

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
                    dominantBaseline="middle"
                    fontSize={13}
                    fontWeight={500}
                    fill="#777"
                  >
                    {bp.toLocaleString()}
                  </text>
                </g>
              );
            })}

            {/* feature arrows */}
            {features.map((f) => (
              <Feature key={f.label} feature={f} total={total} clickable={!!f.href} />
            ))}

            {/* social cut-sites */}
            <CutSite bp={1150} label="GitHub" href="https://github.com/ccans/neevmangalofficial" external total={total} accent="#e5e5e5" />
            <CutSite bp={1550} label="LinkedIn" href="https://www.linkedin.com/in/neev-mangal-b72186219/" external total={total} accent="#5fa8e0" />
            <CutSite bp={1950} label="Copy Link" onClick={copyLink} total={total} accent="#d6b8f5" />

            <text
              x={polar(CX, CY, PILL_R + 32, coordAngle(1950, total)).x}
              y={polar(CX, CY, PILL_R + 32, coordAngle(1950, total)).y}
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

          {/* center label - stays fixed while the ring rotates */}
          <text x={CX} y={CY - 18} textAnchor="middle" fontSize={44} fontWeight={700} fill="#fff" letterSpacing={1}>
            NEEV MANGAL
          </text>
          <text x={CX} y={CY + 18} textAnchor="middle" fontSize={17} fontWeight={500} fill="#999">
            pNM-SWE-Photographer-Writer
          </text>
          <text x={CX} y={CY + 46} textAnchor="middle" fontSize={17} fontWeight={500} fill="#999">
            {total.toLocaleString()} bp
          </text>
        </svg>
      </div>
    </div>
  );
}
