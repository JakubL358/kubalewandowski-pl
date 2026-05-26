"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { WORK } from "@/lib/site";
import { Icon } from "./Icon";

type Item = (typeof WORK)[number];

function WorkCard({ name, url, href, image }: Item) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: otwórz ${url} w nowej karcie`}
      className="group block focus:outline-none"
    >
      {/* Ekran laptopa / okno przeglądarki */}
      <div className="relative overflow-hidden rounded-t-xl border border-line bg-ink-2 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-white/15 group-hover:shadow-[0_38px_90px_-30px_rgba(91,124,250,0.35)] group-focus-visible:-translate-y-1.5 group-focus-visible:border-white/15">
        <span className="pointer-events-none absolute inset-x-0 -top-px z-20 h-px bg-[linear-gradient(90deg,transparent,var(--violet),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Chrome przeglądarki */}
        <div className="flex items-center gap-3 border-b border-line bg-ink-3/80 px-4 py-2.5">
          {/* kropki — w kolorach sygnetu (niebieski / fiolet / wino) */}
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5B3FE4]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#BE185D]/70" />
          </div>
          {/* pasek adresu */}
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-ink/60 px-3 py-1.5">
            <Icon name="lock" className="h-3.5 w-3.5 shrink-0 text-fg-dim" />
            <span className="truncate font-mono text-xs text-fg-muted">
              {url}
            </span>
          </div>
        </div>

        {/* Viewport ze zrzutem */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={`Zrzut ekranu strony ${name}`}
            fill
            sizes="(min-width: 768px) 46vw, 92vw"
            className="object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
          />
          {/* Nazwa marki — ukryta, pojawia się na hover (na dotyku widoczna zawsze) */}
          <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(7,7,13,0.94),rgba(7,7,13,0.35)_45%,transparent)] p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
            <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:translate-y-0">
              <h3 className="font-display text-2xl font-semibold text-white">
                {name}
              </h3>
              <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-fg-muted">
                Zobacz na żywo
                <Icon
                  name="arrow-up-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Podstawa laptopa */}
      <div className="relative left-1/2 h-2.5 w-[106%] -translate-x-1/2 rounded-b-xl border-x border-b border-line bg-[linear-gradient(180deg,var(--ink-3),var(--ink-2))] shadow-[0_16px_26px_-16px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-1.5">
        <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-ink/70" />
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 px-6 pt-28 pb-14 md:pt-36 md:pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="03">Portfolio</SectionLabel>

        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Strony, które <span className="text-gradient">już żyją</span> w
              sieci.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              Najedź, żeby zobaczyć, o którą markę chodzi, albo kliknij i wejdź
              na żywo. Najlepszy dowód to działająca strona, nie obietnica.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-12 md:gap-10 lg:gap-14">
          {WORK.map((w, i) => (
            <Reveal
              key={w.url}
              delay={i * 0.08}
              className="w-full max-w-2xl"
            >
              <WorkCard {...w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
