"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/**
 * WalkingMascot
 * ─────────────
 * Pixel-art sprite that walks steadily left → right, pinned flush
 * to the very bottom of the viewport. Loops infinitely.
 *
 * Micro-interaction on click:
 * 1. Tickle/wiggle phase: squishy, energetic caterpillar jiggle/bounce.
 * 2. Sudden forward dash: sprints forward in the walking direction (+45px).
 * 3. Continues moving forward smoothly without ever stepping backward.
 * Strictly preserves orientation (no rotate, no flip).
 * Instant response on every single click with no cooldown.
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
  const [bonusX, setBonusX] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const wiggleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const flipX = facingRight ? 1 : -1;

  const handleLarvaClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // 1. Advance forward immediately on every single click (+45px)
    setBonusX((prev) => prev + 45);

    // 2. Restart squishy wiggle without remounting DOM elements
    setIsWiggling(false);
    requestAnimationFrame(() => {
      setIsWiggling(true);
    });

    if (wiggleTimerRef.current) clearTimeout(wiggleTimerRef.current);
    wiggleTimerRef.current = setTimeout(() => {
      setIsWiggling(false);
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (wiggleTimerRef.current) clearTimeout(wiggleTimerRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ─── Horizontal traverse: off-left → off-right, loops instantly ─── */
        @keyframes wm-traverse {
          0% {
            transform: translateX(-${width + 40}px);
            opacity: 1;
          }
          70% {
            /* Tiba di luar layar sebelah kanan pada 70% total durasi */
            transform: translateX(calc(100vw + ${width + 40}px));
            opacity: 1;
          }
          70.1% {
            /* Langsung sembunyikan supaya tidak terlihat balik */
            opacity: 0;
          }
          99.9% {
            /* Diam tak terlihat di luar layar sisi kiri */
            transform: translateX(-${width + 40}px);
            opacity: 0;
          }
          100% {
            /* Siap jalan lagi */
            transform: translateX(-${width + 40}px);
            opacity: 1;
          }
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

        /* ─── Tickle/wiggle: energetic squishy bounce while advancing ─── */
        @keyframes wm-tickle-wiggle {
          0%   { transform: translateY(0px)  scale(1, 1); }
          15%  { transform: translateY(-7px) scale(1.12, 0.88); }
          30%  { transform: translateY(-1px) scale(0.92, 1.08); }
          45%  { transform: translateY(-8px) scale(1.10, 0.90); }
          60%  { transform: translateY(-2px) scale(0.95, 1.05); }
          75%  { transform: translateY(-4px) scale(1.05, 0.95); }
          100% { transform: translateY(0px)  scale(1, 1); }
        }

        /*
         * Outer: pinned to bottom-left, drives the horizontal traverse.
         */
        .wm-outer {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 50;
          pointer-events: none;
          line-height: 0;
          font-size: 0;
          animation: wm-traverse ${duration}s linear infinite;
          will-change: transform;
          overflow: visible;
        }

        /* Forward dash shift: smoothly sprints forward without ever going backward */
        .wm-dash-shift {
          display: inline-block;
          line-height: 0;
          transition: transform 420ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
          will-change: transform;
        }

        /* Clickable hit-box: shifts along with dash so it is always 100% accurate */
        .wm-clickable {
          pointer-events: auto;
          cursor: pointer;
          display: inline-block;
          line-height: 0;
          outline: none;
          user-select: none;
          -webkit-user-select: none;
          -webkit-user-drag: none;
          -webkit-tap-highlight-color: transparent;
          padding: 12px;
          margin: -12px;
        }

        /* Wiggle container */
        .wm-wiggling {
          animation: wm-tickle-wiggle 450ms ease-in-out;
          transform-origin: center bottom;
        }

        /*
         * Inner: handles the walk-cycle bob.
         * During wiggle/dash, walk cycle rotation is paused to preserve strict orientation.
         */
        .wm-inner {
          display: flex;
          align-items: flex-end;
          animation: wm-cycle 3s ease-in-out infinite;
          transform-origin: center bottom;
          will-change: transform;
        }

        .wm-inner-wiggling {
          animation: none;
          transform: scaleX(${flipX});
        }

        /* Pixel-crisp image — no blur, no optimiser softening */
        .wm-img {
          display: block;
          width: 35px;
          height: auto;
          vertical-align: bottom;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.28));
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>

      {/* Outer: horizontal traverse */}
      <div
        className="wm-outer"
        aria-hidden="false"
        onAnimationIteration={(e) => {
          // Strictly only reset bonusX when the 32s traverse loop finishes (offscreen),
          // NOT on inner 3s walk-cycle bob iterations!
          if (e.animationName === "wm-traverse") {
            setBonusX(0);
          }
        }}
      >
        {/* Forward dash shift: wraps clickable target so hitbox moves WITH the sprite */}
        <div
          className="wm-dash-shift"
          style={{ transform: `translate3d(${bonusX}px, 0, 0)` }}
        >
          {/* Clickable target */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Red Larva mascot"
            onClick={handleLarvaClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleLarvaClick(e as unknown as React.MouseEvent);
              }
            }}
            className="wm-clickable"
          >
            {/* Wiggle container (no key remounting) */}
            <div className={isWiggling ? "wm-wiggling" : ""}>
              {/* Inner: walk-cycle bob */}
              <div className={`wm-inner ${isWiggling ? "wm-inner-wiggling" : ""}`}>
                <Image
                  src={src}
                  alt="Walking mascot"
                  width={width}
                  height={width}
                  className="wm-img"
                  priority={false}
                  unoptimized
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
