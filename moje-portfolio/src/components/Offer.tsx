"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SERVICES } from "@/lib/site";
import { Icon } from "./Icon";

export default function Offer() {
  return (
    <section id="oferta" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="02">Holistyczna oferta</SectionLabel>

        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Nie tylko strona. <span className="text-gradient">Cały ekosystem</span>{" "}
              wokół niej.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              Większość oddaje plik ze stroną i znika. Ja idę dalej i ogarniam
              wszystko, co sprawia, że strona naprawdę pracuje na Twoją markę.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                <span className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--violet),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-blue-bright transition-colors duration-300 group-hover:text-violet-bright">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-fg-muted">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
