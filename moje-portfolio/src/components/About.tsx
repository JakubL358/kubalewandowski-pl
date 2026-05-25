"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ANTI, VALUES } from "@/lib/site";

export default function About() {
  return (
    <section id="o-mnie" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="01">O mnie</SectionLabel>

        <div className="grid gap-14 md:grid-cols-12">
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

          <div className="md:col-span-5">
            <div className="flex flex-col gap-3">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div className="group rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04]">
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
      </div>
    </section>
  );
}
