"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * Sygnet marki Kuba Lewandowski — sieć trzech węzłów (niebieski → fiolet → wino).
 * Gradienty mają unikalne ID (useId), więc można renderować wiele instancji
 * na jednej stronie bez kolizji url(#...).
 */
export default function Signet({ className }: { className?: string }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="30 30 140 140"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Kuba Lewandowski"
    >
      <defs>
        <radialGradient id={`${id}-main`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="50%" stopColor="#5B3FE4" />
          <stop offset="100%" stopColor="#4338CA" />
        </radialGradient>
        <linearGradient
          id={`${id}-ll`}
          x1="120"
          y1="140"
          x2="56"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#5B3FE4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient
          id={`${id}-lr`}
          x1="120"
          y1="140"
          x2="144"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#5B3FE4" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <linearGradient
          id={`${id}-lt`}
          x1="56"
          y1="70"
          x2="144"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#5B3FE4" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <radialGradient id={`${id}-sb`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#2563EB" />
        </radialGradient>
        <radialGradient id={`${id}-sw`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#BE185D" />
        </radialGradient>
      </defs>
      <g strokeWidth={6} strokeLinecap="round" fill="none">
        <line x1="120" y1="140" x2="56" y2="70" stroke={`url(#${id}-ll)`} />
        <line x1="120" y1="140" x2="144" y2="50" stroke={`url(#${id}-lr)`} />
        <line x1="56" y1="70" x2="144" y2="50" stroke={`url(#${id}-lt)`} />
      </g>
      <circle cx="56" cy="70" r="13" fill={`url(#${id}-sb)`} />
      <circle cx="144" cy="50" r="13" fill={`url(#${id}-sw)`} />
      <circle cx="120" cy="140" r="22" fill={`url(#${id}-main)`} />
    </svg>
  );
}
