"use client";

import Image from "next/image";

/**
 * WalkingMascot
 * ─────────────
 * Pixel-art sprite that walks steadily left → right, pinned flush
 * to the very bottom of the viewport. Loops infinitely.
 *
 * Props
 * ─────
 * src         – public image path
 * width       – sprite width in px (default 180)
 * duration    – seconds per full crossing (default 32 = slow & steady)
 * facingRight – false → flip sprite horizontally with scaleX(-1)
 */
interface WalkingMascotProps {
  src?: string;
  width?: number;
  duration?: number;
  facingRight?: boolean;
}

export default function WalkingMascot({
  src = "/Red Larva.png",
  width = 10,
  duration = 32,
  facingRight = true,
}: WalkingMascotProps) {
  const flipX = facingRight ? 1 : -1;

  return (
    <>
      <style>{`
        /* ─── Horizontal traverse: off-left → off-right, loops instantly ─── */
        @keyframes wm-traverse {
          from { transform: translateX(-${width + 40}px); }
          to   { transform: translateX(calc(100vw + ${width + 40}px)); }
        }

        /* ─── Walk-cycle: step-bob + slight tilt on each footfall ─── */
        @keyframes wm-cycle {
          0%   { transform: scaleX(${flipX}) translateY(0px)  rotate(0deg);    }
          12%  { transform: scaleX(${flipX}) translateY(-8px) rotate(-2deg);   }
          25%  { transform: scaleX(${flipX}) translateY(0px)  rotate(0deg);    }
          37%  { transform: scaleX(${flipX}) translateY(-8px) rotate(2deg);    }
          50%  { transform: scaleX(${flipX}) translateY(0px)  rotate(0deg);    }
          62%  { transform: scaleX(${flipX}) translateY(-6px) rotate(-1.5deg); }
          75%  { transform: scaleX(${flipX}) translateY(0px)  rotate(0deg);    }
          87%  { transform: scaleX(${flipX}) translateY(-6px) rotate(1.5deg);  }
          100% { transform: scaleX(${flipX}) translateY(0px)  rotate(0deg);    }
        }

        /*
         * Outer: pinned to bottom-left, drives the horizontal traverse.
         * position: fixed + bottom: 0 + line-height: 0 ensures the element's
         * own bottom edge is exactly the viewport bottom — no gap at all.
         */
        .wm-outer {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 50;
          pointer-events: none;
          /* Remove any baseline / line-height gap beneath the image */
          line-height: 0;
          font-size: 0;
          /* Steady, linear walk */
          animation: wm-traverse ${duration}s linear infinite;
          will-change: transform;
          overflow: visible;
        }

        /*
         * Inner: handles the walk-cycle bob.
         * display: flex + align-items: flex-end keeps the sprite's
         * feet touching the floor at all times.
         */
        .wm-inner {
          display: flex;
          align-items: flex-end;
          animation: wm-cycle 3s ease-in-out infinite;
          transform-origin: center bottom;
          will-change: transform;
        }

        /* Pixel-crisp image — no blur, no optimiser softening */
        .wm-img {
          display: block;
          width: 35px;
          height: auto;
          /* Keep sprite glued to the very bottom */
          vertical-align: bottom;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.28));
        }
      `}</style>

      {/* Outer: horizontal traverse */}
      <div className="wm-outer" aria-hidden="true">
        {/* Inner: walk-cycle bob */}
        <div className="wm-inner">
          <Image
            src={src}
            alt="Walking mascot"
            width={width}
            height={width}
            className="wm-img"
            priority={false}
            unoptimized /* preserve pixel art — skip Next.js blur/optimiser */
          />
        </div>
      </div>
    </>
  );
}
