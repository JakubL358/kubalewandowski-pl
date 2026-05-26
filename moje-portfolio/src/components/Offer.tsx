"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SERVICES, PRICING } from "@/lib/site";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";
import { useLenisInstance } from "./SmoothScroll";

export default function Offer() {
  const lenis = useLenisInstance();
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="oferta" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="02">Oferta</SectionLabel>

        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Konkrety, nie tylko{" "}
              <span className="text-gradient">ładne słowa</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              Trzy pakiety na start. Ceny „od”, bo każdy projekt jest inny, ale
              zawsze wiesz, na czym stoisz, zanim zaczniemy.
            </p>
          </Reveal>
        </div>

        {/* Pakiety */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 md:p-7",
                  p.featured
                    ? "border-violet/40 bg-[linear-gradient(160deg,rgba(157,92,255,0.10),rgba(91,124,250,0.04))]"
                    : "border-line bg-white/[0.02] hover:border-white/15"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[linear-gradient(120deg,var(--blue),var(--violet))] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                    Najczęściej wybierane
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                  {p.tagline}
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-xs text-fg-dim">od</span>
                  <span className="font-display text-4xl font-bold tracking-tight">
                    {p.price}
                  </span>
                  <span className="font-display text-lg">zł</span>
                  <span className="font-mono text-sm text-fg-dim line-through decoration-violet/50">
                    {p.oldPrice} zł
                  </span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-[15px] leading-snug text-fg-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-violet-bright"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <button
                    onClick={() => go("kontakt")}
                    className={cn(
                      "relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-colors",
                      p.featured
                        ? "text-white"
                        : "border border-line text-fg hover:border-white/25 hover:bg-white/[0.05]"
                    )}
                  >
                    {p.featured && (
                      <span className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,var(--blue),var(--violet))]" />
                    )}
                    Pogadajmy o tym
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Co dochodzi do każdego projektu */}
        <div className="mt-16">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
              Co mogę dla Ciebie zrobić
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                  <span className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--violet),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-blue-bright transition-colors duration-300 group-hover:text-violet-bright">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-fg-muted">
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
