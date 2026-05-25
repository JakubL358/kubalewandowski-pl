"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { NAV } from "@/lib/site";
import { useLenisInstance } from "./SmoothScroll";
import { cn } from "@/lib/cn";

const MARKERS = [{ id: "start", label: "Start" }, ...NAV];

export default function ScrollProgress() {
  const lenis = useLenisInstance();
  const [active, setActive] = useState("start");
  const progress = useMotionValue(0);

  // Overall page progress → driven by Lenis when present, else native scroll.
  useEffect(() => {
    if (lenis) {
      const handler = () => progress.set(lenis.progress ?? 0);
      handler();
      lenis.on("scroll", handler);
      return () => lenis.off("scroll", handler);
    }
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.set(max > 0 ? window.scrollY / max : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lenis, progress]);

  // Which section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    MARKERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function go(id: string) {
    if (id === "start") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-6 lg:flex">
      <span className="absolute right-[5px] top-1 bottom-1 w-px bg-line" />
      <motion.span
        style={{ scaleY: progress }}
        className="absolute right-[5px] top-1 bottom-1 w-px origin-top bg-[linear-gradient(var(--blue),var(--violet))]"
      />
      {MARKERS.map((m) => {
        const isActive = active === m.id;
        return (
          <button
            key={m.id}
            onClick={() => go(m.id)}
            aria-label={`Przejdź do sekcji ${m.label}`}
            aria-current={isActive ? "true" : undefined}
            className="group relative z-10 flex cursor-pointer items-center gap-3"
          >
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300",
                isActive
                  ? "text-fg opacity-100"
                  : "text-fg-dim opacity-0 group-hover:opacity-100"
              )}
            >
              {m.label}
            </span>
            <span
              className={cn(
                "grid h-2.5 w-2.5 place-items-center rounded-full border bg-ink transition-all duration-300",
                isActive
                  ? "scale-110 border-violet-bright"
                  : "border-white/40 group-hover:border-white/70"
              )}
            >
              <span
                className={cn(
                  "h-1 w-1 rounded-full bg-violet-bright transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
