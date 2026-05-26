"use client";

import { Reveal } from "./Reveal";
import { BRANDS } from "@/lib/site";

export default function Brands() {
  return (
    <section
      id="marki"
      aria-label="Marki, przy których pracowałem"
      className="relative scroll-mt-24 pt-8 pb-20 md:pt-10 md:pb-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-fg-dim">
              Doświadczenie
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold tracking-[-0.02em]">
              Marki, przy których{" "}
              <span className="text-gradient">pracowałem</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted">
              Projekty, przy których coś po mnie zostało. W dużej części
              realizowane pod skrzydłami Chersky Marketing.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee na pełną szerokość */}
      <Reveal delay={0.1}>
        <div className="marquee-group marquee-mask relative mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className={`flex shrink-0 items-center ${
                  copy === 1 ? "marquee-dupe" : ""
                }`}
              >
                {BRANDS.map((b) => (
                  <li
                    key={`${copy}-${b.name}`}
                    className="mr-12 flex h-12 w-[120px] shrink-0 items-center justify-center sm:mr-16"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.file}
                      alt={b.name}
                      loading="lazy"
                      className="max-h-9 w-auto max-w-[120px] object-contain opacity-50 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
