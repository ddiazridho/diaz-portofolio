"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DIALOGUES = ["Tch, too slow.", "Dedicate your heart."];

/**
 * FlyingMascot — a pixel-art Levi mascot that patrols smoothly across the screen.
 * Clicking Levi displays a neo-brutalist speech bubble that randomly alternates
 * between two specific dialogues and automatically fades out after 2.5s.
 */
export default function FlyingMascot() {
  const [dialogue, setDialogue] = useState<string | null>(null);
  const [bubbleState, setBubbleState] = useState<"idle" | "visible" | "leaving">("idle");
  const [bubbleKey, setBubbleKey] = useState<number>(0);

  const stayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLeviClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Clear existing timers
    if (stayTimerRef.current) clearTimeout(stayTimerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);

    // Randomly alternate between the two dialogues
    setDialogue((prev) => {
      if (!prev) {
        return DIALOGUES[Math.floor(Math.random() * DIALOGUES.length)];
      }
      return prev === DIALOGUES[0] ? DIALOGUES[1] : DIALOGUES[0];
    });

    setBubbleKey((k) => k + 1);
    setBubbleState("visible");

    // Stays visible for 2.5 seconds, then fades out
    stayTimerRef.current = setTimeout(() => {
      setBubbleState("leaving");
      fadeTimerRef.current = setTimeout(() => {
        setBubbleState("idle");
      }, 300); // fade out duration
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (stayTimerRef.current) clearTimeout(stayTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Keyframe definitions scoped to this component */}
      <style>{`
        /*
         * Position patrol path across the viewport (translateX / translateY only)
         * Kept separate from sprite tilt/flip so speech bubble remains upright.
         */
        @keyframes mascot-patrol-path {
          /* — going RIGHT — */
          0%   { transform: translateX(0vw)    translateY(0px);   }
          12%  { transform: translateX(18vw)   translateY(-18px); }
          25%  { transform: translateX(38vw)   translateY(0px);   }
          38%  { transform: translateX(58vw)   translateY(-14px); }
          49%  { transform: translateX(73vw)   translateY(-4px);  }
          /* — flip at rightmost point — */
          51%  { transform: translateX(73vw)   translateY(-4px);  }
          /* — going LEFT — */
          63%  { transform: translateX(55vw)   translateY(-18px); }
          76%  { transform: translateX(36vw)   translateY(0px);   }
          89%  { transform: translateX(16vw)   translateY(-12px); }
          /* — flip back at leftmost point — */
          99%  { transform: translateX(0vw)    translateY(0px);   }
          100% { transform: translateX(0vw)    translateY(0px);   }
        }

        /* Sprite tilt and flip — applied strictly to sprite body so text doesn't mirror */
        @keyframes mascot-sprite-facing {
          0%   { transform: rotate(-5deg) scaleX(1);  }
          12%  { transform: rotate(-3deg) scaleX(1);  }
          25%  { transform: rotate(-6deg) scaleX(1);  }
          38%  { transform: rotate(-4deg) scaleX(1);  }
          49%  { transform: rotate(-5deg) scaleX(1);  }
          51%  { transform: rotate(5deg)  scaleX(-1); }
          63%  { transform: rotate(6deg)  scaleX(-1); }
          76%  { transform: rotate(4deg)  scaleX(-1); }
          89%  { transform: rotate(7deg)  scaleX(-1); }
          99%  { transform: rotate(-5deg) scaleX(1);  }
          100% { transform: rotate(-5deg) scaleX(1);  }
        }

        /* Ground shadow shrinks when mascot bobs up */
        @keyframes mascot-shadow {
          0%, 100% { transform: scaleX(1);   opacity: 0.20; }
          50%       { transform: scaleX(0.6); opacity: 0.08; }
        }

        /* Smooth pop-up entrance for speech bubble */
        @keyframes bubble-pop-in {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(8px) scale(0.75);
          }
          65% {
            opacity: 1;
            transform: translateX(-50%) translateY(-2px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .mascot-wrapper {
          position: fixed;
          top:  88px;
          left: 24px;
          z-index: 40;
          pointer-events: none;
          animation: mascot-patrol-path 24s ease-in-out infinite;
          will-change: transform;
        }

        .mascot-clickable {
          pointer-events: auto;
          cursor: pointer;
          display: inline-block;
          position: relative;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .mascot-sprite-body {
          animation: mascot-sprite-facing 24s ease-in-out infinite;
          transform-origin: center center;
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

        /* Neo-brutalist speech bubble */
        .mascot-bubble {
          position: absolute;
          bottom: calc(100% - 22px);
          left: 50%;
          transform: translateX(-50%);
          background-color: #ffffff;
          color: #111111;
          font-family: var(--font-space-grotesk), sans-serif;
          font-weight: 800;
          font-size: 13px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          padding: 7px 14px;
          border: 2px solid #111111;
          border-radius: 8px;
          box-shadow: 3px 3px 0px #111111;
          white-space: nowrap;
          z-index: 60;
          animation: bubble-pop-in 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          pointer-events: auto;
          cursor: pointer;
        }

        .mascot-bubble.is-leaving {
          opacity: 0;
          transform: translateX(-50%) translateY(-4px) scale(0.92);
          transition: opacity 300ms ease, transform 300ms ease;
        }

        .mascot-bubble-tail {
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background-color: #ffffff;
          border-right: 2px solid #111111;
          border-bottom: 2px solid #111111;
        }
      `}</style>

      <div className="mascot-wrapper" aria-hidden="false">
        <div
          role="button"
          tabIndex={0}
          aria-label="Levi mascot"
          onClick={handleLeviClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLeviClick(e as unknown as React.MouseEvent);
            }
          }}
          className="mascot-clickable"
        >
          {/* Neo-brutalist speech bubble */}
          {bubbleState !== "idle" && dialogue && (
            <div
              key={bubbleKey}
              className={`mascot-bubble ${bubbleState === "leaving" ? "is-leaving" : ""}`}
              onClick={handleLeviClick}
            >
              <span>{dialogue}</span>
              <div className="mascot-bubble-tail" />
            </div>
          )}

          {/* Sprite container with patrol tilt and flip */}
          <div className="mascot-sprite-body">
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
        </div>
      </div>
    </>
  );
}
