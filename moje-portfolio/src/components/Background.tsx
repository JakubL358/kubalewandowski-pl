"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Living aurora background. A bright brand-colour spotlight follows the cursor
 * directly, while the ambient blobs drift on their own (CSS) and shift with a
 * strong parallax. Everything is disabled under prefers-reduced-motion.
 */
export default function Background() {
  const started = useRef(false);
  const [visible, setVisible] = useState(false);

  // Pixel position → cursor spotlight.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const gx = useSpring(px, { stiffness: 140, damping: 26, mass: 0.5 });
  const gy = useSpring(py, { stiffness: 140, damping: 26, mass: 0.5 });

  // Ratio 0..1 → blob parallax.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rx = e.clientX / window.innerWidth;
      const ry = e.clientY / window.innerHeight;
      if (!started.current) {
        px.jump(e.clientX);
        py.jump(e.clientY);
        mx.jump(rx);
        my.jump(ry);
        started.current = true;
        setVisible(true);
      } else {
        px.set(e.clientX);
        py.set(e.clientY);
        mx.set(rx);
        my.set(ry);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py, mx, my]);

  const aX = useTransform(sx, [0, 1], [140, -140]);
  const aY = useTransform(sy, [0, 1], [110, -110]);
  const bX = useTransform(sx, [0, 1], [-170, 170]);
  const bY = useTransform(sy, [0, 1], [-120, 120]);
  const cX = useTransform(sx, [0, 1], [90, -90]);
  const cY = useTransform(sy, [0, 1], [-70, 70]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting aurora blobs (parallax) */}
      <motion.div
        style={{ x: aX, y: aY }}
        className="absolute -left-[15%] -top-[10%] h-[65vh] w-[65vh]"
      >
        <div className="h-full w-full rounded-full bg-blue/[0.30] blur-[120px] animate-[drift1_22s_ease-in-out_infinite]" />
      </motion.div>
      <motion.div
        style={{ x: bX, y: bY }}
        className="absolute -right-[12%] top-[12%] h-[60vh] w-[60vh]"
      >
        <div className="h-full w-full rounded-full bg-violet/[0.28] blur-[130px] animate-[drift2_27s_ease-in-out_infinite]" />
      </motion.div>
      <motion.div
        style={{ x: cX, y: cY }}
        className="absolute -bottom-[18%] left-[26%] h-[55vh] w-[55vh]"
      >
        <div className="h-full w-full rounded-full bg-blue/[0.20] blur-[120px] animate-[drift1_31s_ease-in-out_infinite]" />
      </motion.div>

      {/* Cursor spotlight — the clear "background reacts to you" effect */}
      <motion.div style={{ x: gx, y: gy }} className="absolute left-0 top-0">
        <div
          className={`h-[44vh] w-[44vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,151,255,0.22),rgba(157,92,255,0.10)_45%,transparent_70%)] blur-[30px] transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>

      {/* Film grain */}
      <div className="noise absolute inset-0 opacity-[0.04] mix-blend-soft-light" />

      {/* Vignette keeps content readable over the glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--ink)_92%)]" />
    </div>
  );
}
