"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";
import { useLenisInstance } from "./SmoothScroll";
import { cn } from "@/lib/cn";
import Logo from "./Logo";
import { Icon } from "./Icon";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lenis = useLenisInstance();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function go(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  function goTop() {
    setOpen(false);
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500 sm:px-4",
            scrolled
              ? "glass shadow-[0_10px_50px_-16px_rgba(0,0,0,0.7)]"
              : "border border-transparent"
          )}
        >
          <button
            onClick={goTop}
            aria-label="Na górę strony"
            className="cursor-pointer rounded-full"
          >
            <Logo className="[&>span:last-child]:hidden sm:[&>span:last-child]:inline" />
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={cn(
                  "relative cursor-pointer rounded-full px-4 py-2.5 text-sm transition-colors",
                  active === n.id ? "text-fg" : "text-fg-muted hover:text-fg"
                )}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                  />
                )}
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("kontakt")}
              className="relative hidden cursor-pointer overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium text-white sm:inline-flex"
            >
              <span className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,var(--blue),var(--violet))]" />
              Pogadajmy
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={open}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line text-fg md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink/95 px-8 backdrop-blur-xl md:hidden"
          >
            {NAV.map((n, i) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06, ease: EASE, duration: 0.5 }}
                onClick={() => go(n.id)}
                className="py-2 text-left font-display text-4xl font-semibold tracking-tight text-fg"
              >
                {n.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              href={`mailto:${SITE.email}`}
              className="mt-8 font-mono text-sm text-fg-muted"
            >
              {SITE.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
