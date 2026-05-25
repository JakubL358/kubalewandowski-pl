"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  useRef,
  type ReactNode,
  type MouseEvent,
  type RefObject,
} from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  external,
  ariaLabel,
  className,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.3 });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium tracking-tight will-change-transform";
  const styles =
    variant === "primary"
      ? "text-white"
      : "border border-line text-fg transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]";

  const inner = (
    <>
      {variant === "primary" && (
        <>
          <span className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(120deg,var(--blue),var(--violet))]" />
          <span className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(120deg,var(--blue-bright),var(--violet-bright))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute inset-0 -z-20 rounded-full bg-[linear-gradient(120deg,var(--blue),var(--violet))] opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-80" />
        </>
      )}
      <span className="relative flex items-center gap-2">{children}</span>
    </>
  );

  const cls = cn(base, styles, className);

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cls}
    >
      {inner}
    </motion.button>
  );
}
