import React from 'react';

// A slowly-turning DNA double helix, rendered as the front projection of an
// orbiting base-pair ladder (pure CSS so it animates smoothly everywhere).
//
// Accuracy: B-DNA has ~10.5 base pairs per helical turn and a
// diameter:rise ratio of ~2.9, both reproduced here — BP_PER_TURN sets the
// per-rung phase advance, and the orbit radius R ≈ 2.9 × the rung spacing.
const ROWS = 36;
const SPACING = 20; // px between rungs (the "rise")
const PERIOD = 12; // seconds per full turn (slow)
const BP_PER_TURN = 10.5;

export default function DnaHelix() {
  const unit = PERIOD / BP_PER_TURN; // delay per rung for the twist
  const rows = Array.from({ length: ROWS });

  return (
    <div className="dna-helix" aria-hidden="true">
      {rows.map((_, i) => {
        const da = -(i * unit); // strand A phase for this rung
        const db = da - PERIOD / 2; // strand B is the opposite base (180°)
        return (
          <div
            key={i}
            className="dna-row"
            style={{ '--i': i, '--da': `${da.toFixed(3)}s`, '--db': `${db.toFixed(3)}s` }}
          >
            <span className="dna-bond" />
            <span className="dna-node a" />
            <span className="dna-node b" />
          </div>
        );
      })}
      <style jsx>{`
        .dna-helix {
          position: relative;
          width: 190px;
          height: ${ROWS * SPACING}px;
          filter: drop-shadow(0 0 24px rgba(56, 130, 246, 0.25));
        }
        .dna-row {
          position: absolute;
          left: 0;
          right: 0;
          height: ${SPACING}px;
          top: calc(var(--i) * ${SPACING}px);
        }
        .dna-node {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 16px;
          height: 16px;
          margin: -8px 0 0 -8px;
          border-radius: 50%;
          animation: dna-orbit ${PERIOD}s linear infinite;
          will-change: transform, opacity;
        }
        .dna-node.a {
          background: radial-gradient(circle at 34% 30%, #bdf5ff, #0891b2);
          box-shadow: 0 0 12px 2px rgba(34, 211, 238, 0.55);
          animation-delay: var(--da);
        }
        .dna-node.b {
          background: radial-gradient(circle at 34% 30%, #d3d9ff, #4338ca);
          box-shadow: 0 0 12px 2px rgba(99, 102, 241, 0.55);
          animation-delay: var(--db);
        }
        .dna-bond {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 116px;
          height: 4px;
          margin: -2px 0 0 -58px;
          border-radius: 2px;
          background: linear-gradient(90deg, #22d3ee, #6366f1);
          transform-origin: center;
          animation: dna-bond ${PERIOD}s linear infinite;
          animation-delay: var(--da);
        }
        @keyframes dna-orbit {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
            z-index: 3;
          }
          25% {
            transform: translateX(58px) scale(0.78);
            opacity: 0.85;
            z-index: 2;
          }
          50% {
            transform: translateX(0) scale(0.55);
            opacity: 0.5;
            z-index: 1;
          }
          75% {
            transform: translateX(-58px) scale(0.78);
            opacity: 0.85;
            z-index: 2;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
            z-index: 3;
          }
        }
        @keyframes dna-bond {
          0%,
          100% {
            transform: scaleX(0.05);
            opacity: 0.25;
          }
          25%,
          75% {
            transform: scaleX(1);
            opacity: 0.85;
          }
          50% {
            transform: scaleX(0.05);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
}
