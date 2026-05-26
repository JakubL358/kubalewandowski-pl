"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Icon } from "./Icon";
import { EASE, stagger } from "@/lib/motion";
import { useLenisInstance } from "./SmoothScroll";
import Typewriter from "./Typewriter";

export default function Hero() {
  const lenis = useLenisInstance();
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <section
      id="start"
      className="relative flex min-h-dvh flex-col justify-center px-6 pb-24 pt-32"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
          </span>
          Dostępny dla nowych projektów
        </motion.div>

        <motion.p variants={item} className="mb-6 font-mono text-sm text-fg-dim">
          Cześć, jestem Kuba. Buduję strony i ekosystemy wokół nich.
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-fg"
        >
          <span className="block">Twoja strona ma</span>
          <span className="block">
            <Typewriter />
          </span>
          <span className="block">Nie tylko ładnie wyglądać.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          Buduję strony z celem i spinam wokół nich cały ekosystem: domenę,
          hosting, firmowe maile i Google Workspace. Ty robisz swoje, a ja
          zdejmuję z Ciebie cały techniczny stres.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <MagneticButton onClick={() => go("kontakt")}>
            Pogadajmy
            <Icon name="arrow-right" className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => go("oferta")}>
            Co dokładnie robię
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() => go("o-mnie")}
        aria-label="Przewiń niżej"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit cursor-pointer flex-col items-center gap-2 text-fg-dim transition-colors hover:text-fg"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="arrow-down" className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
