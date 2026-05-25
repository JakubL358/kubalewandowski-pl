"use client";

import { MotionConfig } from "framer-motion";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  // reducedMotion="user" makes every framer-motion transform respect the
  // visitor's prefers-reduced-motion setting automatically.
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
