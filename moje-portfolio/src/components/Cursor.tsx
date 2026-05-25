"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Dot + trailing ring cursor (desktop, fine-pointer only).
 * - Dot tracks the pointer tightly (1:1 feel).
 * - Ring lags behind, expands over interactive elements and dips on press.
 * Native cursor stays visible; this is purely additive. Disabled for
 * touch devices and prefers-reduced-motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.45 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor]"));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: pressed ? 0.8 : hovering ? 1.9 : 1,
              opacity: hovering ? 1 : 0.55,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div
              className={cn(
                "h-9 w-9 rounded-full border transition-colors duration-200",
                hovering ? "border-violet-bright" : "border-white/55"
              )}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Tight dot */}
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: hovering ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
