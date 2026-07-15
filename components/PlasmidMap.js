import React, { useState, useEffect, useRef } from 'react';

// Birthday used to compute the "length" of the plasmid: whole years as
// kilobases, plus the fraction of the current year already elapsed as the
// fractional bp (e.g. 21 years + 30% of the way to 22 => ~21300 bp).
const BIRTH_MONTH_INDEX = 3; // April (0-indexed)
const BIRTH_DAY = 2;

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

const CX = 450;
const CY = 450;
const BACKBONE_R = 430;
const OUTER_R = 396;
const INNER_R = 362;
const TICK_R = 452;
const PILL_LEADER_R = 434;
const PILL_R = 470;

const COLORS = {
  yellow: '#f2d54c',
  maroon: '#b04a80',
  white: '#f4f4f4',
  purple: '#d6b8f5',
};

function Feature({ feature, total, clickable }) {
  const mid = (feature.start + feature.end) / 2;
  const { x, y, rotate } = labelTransform(CX, CY, (INNER_R + OUTER_R) / 2, mid, total);
  const d = arrowPath(CX, CY, INNER_R, OUTER_R, feature.start, feature.end, total);
  const textColor = feature.color === COLORS.white ? '#111' : '#1a1a1a';

  const content = (
    <g style={clickable ? { cursor: 'pointer' } : undefined} className={clickable ? 'plasmid-feature' : undefined}>
      <path
        d={d}
        fill={feature.color}
        stroke={feature.color === COLORS.white ? '#888' : '#00000055'}
        strokeWidth={1.5}
      />
      <text
        x={x}
        y={y}
        transform={`rotate(${rotate} ${x} ${y})`}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={17}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight={600}
        fill={textColor}
      >
        {feature.label}
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

function Pill({ bp, label, href, external, onClick, total }) {
  const angle = coordAngle(bp, total);
  const leaderStart = polar(CX, CY, PILL_LEADER_R, angle);
  const pillCenter = polar(CX, CY, PILL_R, angle);
  const width = Math.max(70, label.length * 9 + 20);
  const height = 28;

  const body = (
    <g style={{ cursor: 'pointer' }}>
      <line x1={leaderStart.x} y1={leaderStart.y} x2={pillCenter.x} y2={pillCenter.y} stroke="#d6b8f5" strokeWidth={1.5} />
      <rect
        x={pillCenter.x - width / 2}
        y={pillCenter.y - height / 2}
        width={width}
        height={height}
        rx={height / 2}
        fill={COLORS.purple}
        stroke="#9b6fce"
        strokeWidth={1.5}
      />
      <text
        x={pillCenter.x}
        y={pillCenter.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={13}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight={600}
        fill="#2a0a42"
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
        <span style={{ color: '#666', fontFamily: "'JetBrains Mono', monospace" }}>loading plasmid map...</span>
      </div>
    );
  }

  const features = [
    { start: 200, end: 750, label: 'EST. 2005', color: COLORS.yellow },
    { start: 2000, end: 5600, label: 'About Me', color: COLORS.white, href: '/aboutme' },
    { start: 6100, end: 9100, label: 'Projects', color: COLORS.white, href: '/projects' },
    { start: 9600, end: 11700, label: 'Writing', color: COLORS.white, href: '/writing' },
    { start: 12000, end: 16000, label: 'Astrophotography', color: COLORS.maroon, href: '/astrophotography' },
    { start: 18000, end: 21000, label: 'Resume', color: COLORS.maroon, href: '/resume' },
  ];

  const tickStep = 3000;
  const ticks = [];
  for (let bp = tickStep; bp < total; bp += tickStep) {
    ticks.push(bp);
  }

  return (
    <div className="flex items-center justify-center" style={{ minHeight: '100vh', background: '#000', padding: '24px' }}>
      <div style={{ width: 'min(92vmin, 820px)', height: 'min(92vmin, 820px)', position: 'relative' }}>
        <svg viewBox="0 0 900 900" width="100%" height="100%" fontFamily="'JetBrains Mono', monospace">
          <style>
            {`
              .plasmid-feature path { transition: filter 0.15s ease; }
              .plasmid-feature:hover path { filter: brightness(1.25); }
              a:hover text { filter: brightness(1.3); }
            `}
          </style>

          {/* backbone */}
          <circle cx={CX} cy={CY} r={BACKBONE_R} fill="none" stroke="#888" strokeWidth={2} />
          <circle cx={CX} cy={CY} r={BACKBONE_R - 6} fill="none" stroke="#888" strokeWidth={1} />

          {/* tick marks */}
          {ticks.map((bp) => {
            const angle = coordAngle(bp, total);
            const p1 = polar(CX, CY, BACKBONE_R - 6, angle);
            const p2 = polar(CX, CY, BACKBONE_R + 8, angle);
            const { x, y, rotate } = labelTransform(CX, CY, TICK_R, bp, total);
            return (
              <g key={bp}>
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#888" strokeWidth={1.5} />
                <text
                  x={x}
                  y={y}
                  transform={`rotate(${rotate} ${x} ${y})`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={13}
                  fill="#888"
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

          {/* social pills */}
          <Pill bp={1150} label="GitHub" href="https://github.com/ccans/neevmangalofficial" external total={total} />
          <Pill bp={1550} label="LinkedIn" href="https://www.linkedin.com/in/neev-mangal-b72186219/" external total={total} />
          <Pill bp={1900} label="Copy Link" onClick={copyLink} total={total} />

          <text
            x={polar(CX, CY, PILL_R + 46, coordAngle(1900, total)).x}
            y={polar(CX, CY, PILL_R + 46, coordAngle(1900, total)).y}
            ref={copiedRef}
            textAnchor="middle"
            fontSize={13}
            fill="#f2d54c"
            style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
          >
            copied!
          </text>

          {/* center label */}
          <text x={CX} y={CY - 18} textAnchor="middle" fontSize={40} fontWeight={700} fill="#fff" letterSpacing={1}>
            NEEV MANGAL
          </text>
          <text x={CX} y={CY + 18} textAnchor="middle" fontSize={16} fill="#999">
            pNM-SWE-Photographer-Writer
          </text>
          <text x={CX} y={CY + 46} textAnchor="middle" fontSize={16} fill="#999">
            {total.toLocaleString()} bp
          </text>
        </svg>
      </div>
    </div>
  );
}
