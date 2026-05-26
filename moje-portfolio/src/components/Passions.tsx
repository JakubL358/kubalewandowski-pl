"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PASSIONS } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Passions() {
  return (
    <section
      id="poza-praca"
      aria-label="Poza pracą"
      className="relative scroll-mt-24 px-6 pt-10 pb-24 md:pt-12 md:pb-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-fg-dim">
              Poza pracą
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Co mnie <span className="text-gradient">kręci</span>, gdy nie
              buduję stron.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              Parę rzeczy, które ładują mi baterie i trzymają oko wyczulone na
              detal.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-[1.3fr_1fr_1fr]">
          {PASSIONS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <figure
                className={cn(
                  "group relative w-full overflow-hidden rounded-2xl border border-line transition-colors duration-500 hover:border-white/15",
                  p.wide ? "aspect-[16/9]" : "aspect-[4/5]",
                  "sm:aspect-auto sm:h-72 lg:h-80"
                )}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes={
                    p.wide
                      ? "(min-width: 1024px) 380px, (min-width: 640px) 34vw, 92vw"
                      : "(min-width: 1024px) 290px, (min-width: 640px) 26vw, 92vw"
                  }
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,13,0.96),rgba(7,7,13,0.7)_40%,rgba(7,7,13,0)_85%)]" />

                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                    <p className="overflow-hidden pt-1.5 text-sm leading-snug text-fg-muted">
                      {p.desc}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
