"use client";

import Image from "next/image";

/**
 * FlyingMascot — a pixel-art mascot that patrols smoothly across the screen.
 *
 * Implemented with pure CSS keyframes so no extra JS runtime cost.
 * pointer-events-none keeps it non-blocking for all interactions.
 */
export default function FlyingMascot() {
  return (
    <>
      {/* Keyframe definitions scoped to this component */}
      <style>{`
        /*
         * Patrol path: starts at far-left just below navbar,
         * sweeps ~85vw right, flips direction, returns — total 24s loop.
         * top anchor = 88px (navbar ~72px + 16px breathing room)
         * z-index: 40 → below navbar's z-50, above page content
         */
        @keyframes mascot-patrol {
          /* — going RIGHT — */
          0%   { transform: translateX(0vw)    translateY(0px)   rotate(-5deg) scaleX(1);  }
          12%  { transform: translateX(18vw)   translateY(-18px) rotate(-3deg) scaleX(1);  }
          25%  { transform: translateX(38vw)   translateY(0px)   rotate(-6deg) scaleX(1);  }
          38%  { transform: translateX(58vw)   translateY(-14px) rotate(-4deg) scaleX(1);  }
          49%  { transform: translateX(73vw)   translateY(-4px)  rotate(-5deg) scaleX(1);  }
          /* — flip at rightmost point — */
          51%  { transform: translateX(73vw)   translateY(-4px)  rotate(5deg)  scaleX(-1); }
          /* — going LEFT — */
          63%  { transform: translateX(55vw)   translateY(-18px) rotate(6deg)  scaleX(-1); }
          76%  { transform: translateX(36vw)   translateY(0px)   rotate(4deg)  scaleX(-1); }
          89%  { transform: translateX(16vw)   translateY(-12px) rotate(7deg)  scaleX(-1); }
          /* — flip back at leftmost point — */
          99%  { transform: translateX(0vw)    translateY(0px)   rotate(-5deg) scaleX(1);  }
          100% { transform: translateX(0vw)    translateY(0px)   rotate(-5deg) scaleX(1);  }
        }

        /* Ground shadow shrinks when mascot bobs up */
        @keyframes mascot-shadow {
          0%, 100% { transform: scaleX(1);   opacity: 0.20; }
          50%       { transform: scaleX(0.6); opacity: 0.08; }
        }

        .mascot-wrapper {
          position: fixed;
          /* Just below the navbar pill (top-4 + h-14 = ~72px) + 16px gap */
          top:  88px;
          left: 24px;
          z-index: 40;          /* navbar is z-50 — we stay below it */
          pointer-events: none;
          animation: mascot-patrol 24s ease-in-out infinite;
          will-change: transform;
        }

        .mascot-img {
          display: block;
          width:  180px;
          height: auto;
          image-rendering: pixelated;
          image-rendering: crisp-edges; /* Safari fallback */
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.22));
        }

        .mascot-ground-shadow {
          width:  90px;
          height: 10px;
          margin: 6px auto 0;
          background: radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, transparent 75%);
          border-radius: 50%;
          animation: mascot-shadow 24s ease-in-out infinite;
        }
      `}</style>

      <div className="mascot-wrapper" aria-hidden="true">
        <Image
          src="/LEVI PIXEL.png"
          alt="Levi mascot"
          width={64}
          height={64}
          className="mascot-img"
          priority={false}
          unoptimized
        />
        {/* subtle elliptical shadow beneath the mascot */}
        <div className="mascot-ground-shadow" />
      </div>
    </>
  );
}
