"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * WalkingMascot
 * ─────────────
 * Pixel-art sprite that walks steadily left → right, pinned flush
 * to the very bottom of the viewport. Loops infinitely.
 *
 * Micro-interaction on click:
 * 1. Recoil/tickle phase: steps backward while wiggling/jiggling.
 * 2. Short dash phase: sudden quick forward sprint.
 * 3. Reset: smoothly restores to original position, ready to be clicked again.
 * Strictly preserves orientation (no rotate or flip).
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
  const [isReacting, setIsReacting] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const flipX = facingRight ? 1 : -1;

  const handleLarvaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReacting(true);
    setAnimKey((prev) => prev + 1);
  };

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

        /*
         * Sequential click animation for Larva:
         * 1. Recoil / tickle phase: stepping backward a few pixels with a brief wiggle/jiggle
         * 2. Short dash phase: quick, sudden forward sprint for a short distance
         * 3. Reset phase: smoothly restore the sprite to its original position
         * STRICT: Keep exact same orientation (no rotation, no flipping).
         */
        @keyframes wm-larva-interaction {
          /* 1. Recoil/tickle phase: stepping backward with wiggle/jiggle */
          0% {
            transform: translate3d(0, 0, 0);
          }
          6% {
            transform: translate3d(-4px, -2px, 0);
          }
          12% {
            transform: translate3d(-8px, 3px, 0);
          }
          18% {
            transform: translate3d(-14px, -3px, 0);
          }
          24% {
            transform: translate3d(-10px, 2px, 0);
          }
          30% {
            transform: translate3d(-16px, -2px, 0);
          }
          36% {
            transform: translate3d(-12px, 1px, 0);
          }
          42% {
            transform: translate3d(-15px, 0, 0);
          }

          /* 2. Short dash phase: sudden quick forward sprint */
          48% {
            transform: translate3d(10px, 0, 0);
          }
          56% {
            transform: translate3d(48px, -2px, 0);
          }
          64% {
            transform: translate3d(58px, 0, 0);
          }
          72% {
            transform: translate3d(54px, 0, 0);
          }

          /* 3. Reset phase: smoothly restore sprite to original position */
          84% {
            transform: translate3d(24px, 0, 0);
          }
          94% {
            transform: translate3d(6px, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
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

        /* Clickable hit-box */
        .wm-clickable {
          pointer-events: auto;
          cursor: pointer;
          display: inline-block;
          line-height: 0;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          padding: 8px;
          margin: -8px;
        }

        /* Middle container: executes click reaction */
        .wm-reacting {
          animation: wm-larva-interaction 1.1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          will-change: transform;
        }

        /*
         * Inner: handles the walk-cycle bob.
         * During reaction, walk cycle rotation is paused to preserve strict orientation.
         */
        .wm-inner {
          display: flex;
          align-items: flex-end;
          animation: wm-cycle 3s ease-in-out infinite;
          transform-origin: center bottom;
          will-change: transform;
        }

        .wm-inner-reacting {
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
        }
      `}</style>

      {/* Outer: horizontal traverse */}
      <div className="wm-outer" aria-hidden="false">
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
          {/* Reaction container (recoil -> dash -> restore) */}
          <div
            key={animKey}
            className={isReacting ? "wm-reacting" : ""}
            onAnimationEnd={() => setIsReacting(false)}
          >
            {/* Inner: walk-cycle bob */}
            <div className={`wm-inner ${isReacting ? "wm-inner-reacting" : ""}`}>
              <Image
                src={src}
                alt="Walking mascot"
                width={width}
                height={width}
                className="wm-img"
                priority={false}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
