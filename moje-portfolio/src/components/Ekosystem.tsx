"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { COMPARE, PROCESS } from "@/lib/site";
import { Icon } from "./Icon";

gsap.registerPlugin(ScrollTrigger);

export default function Ekosystem() {
  const timeline = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reduced motion: show the line fully drawn, no scrub.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(fill.current, { scaleY: 1 });
        return;
      }
      gsap.fromTo(
        fill.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: timeline }
  );

  return (
    <section id="ekosystem" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="04">Jak to działa</SectionLabel>

        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              <span className="text-gradient">Zbuduj i wspieraj.</span> Nie „zrób
              i zapomnij”.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              Najczęstsza plaga: ktoś kiedyś coś postawił, jakoś stoi, i każdy
              boi się tego dotknąć. U mnie strona to żywy ekosystem, który ktoś
              naprawdę ogarnia.
            </p>
          </Reveal>
        </div>

        {/* Contrast: typowo vs u mnie */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white/[0.01] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
                Zwykle dostajesz
              </p>
              <ul className="space-y-3">
                {COMPARE.bad.map((b) => (
                  <li key={b} className="flex gap-3 text-fg-dim">
                    <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-[15px] leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-violet/30 bg-[linear-gradient(160deg,rgba(157,92,255,0.09),rgba(91,124,250,0.04))] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-violet-bright">
                U mnie dostajesz
              </p>
              <ul className="space-y-3">
                {COMPARE.good.map((g) => (
                  <li key={g} className="flex gap-3 text-fg">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-violet-bright"
                    />
                    <span className="text-[15px] leading-snug">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Proces — oś czasu z linią rysowaną przy scrollu (GSAP) */}
        <div ref={timeline} className="mt-16">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
            Proces krok po kroku
          </p>
          <div className="relative pl-12 md:pl-16">
            <div className="absolute left-[15px] top-1 h-[calc(100%-0.5rem)] w-px bg-line md:left-[19px]" />
            <div
              ref={fill}
              className="absolute left-[15px] top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-[linear-gradient(var(--blue),var(--violet))] md:left-[19px]"
            />
            <div className="space-y-9">
              {PROCESS.map((p, i) => (
                <Reveal key={p.title}>
                  <div className="relative">
                    <span className="absolute -left-12 top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-ink-2 font-mono text-xs text-violet-bright md:-left-16 md:h-10 md:w-10">
                      0{i + 1}
                    </span>
                    <div className="rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/15 md:p-6">
                      <h3 className="font-display text-lg font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
