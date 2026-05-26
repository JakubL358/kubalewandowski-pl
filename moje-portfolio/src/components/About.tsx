"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ANTI, VALUES } from "@/lib/site";

export default function About() {
  return (
    <section id="o-mnie" className="relative scroll-mt-24 px-6 pt-28 pb-14 md:pt-36 md:pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="01">O mnie</SectionLabel>

        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* Tekst */}
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
                Łączę techniczne klikanie z artystycznym okiem do detali.
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-7 text-lg leading-relaxed text-fg-muted">
                Od zawsze kręciły mnie komputery. Zaczęło się od składania i
                naprawiania sprzętu, przez budowanie stanowisk pracy, pierwszą
                robotę jako social media manager, aż dwa lata temu postawiłem
                swoje pierwsze strony, które realnie konwertowały. I wtedy
                wskoczyło: <span className="text-fg">to jest to.</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                Najbardziej jaram się szukaniem rozwiązań. Każda marka ma inne
                potrzeby, dla mnie to za każdym razem nowa zagadka do
                rozkminienia. Nie jesteś kolejnym ticketem do odklepania. Chcę
                poznać Twój biznes i zbudować coś, co naprawdę z Tobą gra.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
                  Czego u mnie nie znajdziesz
                </p>
                <div className="flex flex-wrap gap-2">
                  {ANTI.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm text-fg-dim line-through decoration-violet/60"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Zdjęcie */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <figure className="group relative mx-auto max-w-[18rem] md:max-w-none">
                {/* Brandowy glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(91,124,250,0.35),rgba(157,92,255,0.22),transparent_70%)] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line transition-colors duration-500 group-hover:border-white/15">
                  <Image
                    src="/kuba.webp"
                    alt="Kuba Lewandowski"
                    width={896}
                    height={1284}
                    sizes="(min-width: 768px) 40vw, 18rem"
                    className="h-auto w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Scrim + podpis */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(7,7,13,0.92),rgba(7,7,13,0.4)_40%,transparent)] p-5 pt-14">
                    <p className="font-display text-lg font-semibold text-white">
                      Kuba Lewandowski
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-fg-dim">
                      Strony, które mają cel
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Wartości */}
        <div className="mt-14">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
              Na czym mi zależy
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} className="h-full">
                <div className="group h-full rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-violet-bright">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
