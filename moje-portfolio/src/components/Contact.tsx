"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SITE } from "@/lib/site";
import { Icon } from "./Icon";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Nowy projekt${name ? `: ${name}` : ""}`
    );
    const body = encodeURIComponent(
      `Cześć Kuba,\n\n${message}\n\nPozdrawiam,\n${name}\n${email}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-violet/50 focus:bg-white/[0.04]";

  return (
    <section id="kontakt" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="04">Kontakt</SectionLabel>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-[-0.02em]">
                Dobra, <span className="text-gradient">gadajmy.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                Napisz mi w paru zdaniach, co masz i czego potrzebujesz. Zerknę
                na Twoją stronę i maile, a potem szczerze powiem, co bym zmienił.
                Bez ściemy i bez naciągania budżetu.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-line bg-white/[0.02] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
                  Albo napisz wprost
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all font-display text-lg text-fg transition-colors hover:text-violet-bright"
                  >
                    {SITE.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    aria-label="Skopiuj adres e-mail"
                    className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
                  >
                    <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.13}>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                  "Cześć Kuba! Mam temat strony do ogarnięcia 👋"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-blue-bright transition-colors group-hover:text-violet-bright">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
                      WhatsApp
                    </span>
                    <span className="block font-display text-lg text-fg">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="h-4 w-4 text-fg-muted transition-colors group-hover:text-fg"
                />
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 font-mono text-sm text-fg-dim">
                Do usłyszenia, JL. (i smacznej kawusi ☕)
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="rounded-2xl border border-line bg-white/[0.02] p-6 md:p-7"
            >
              {sent ? (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(135deg,var(--blue),var(--violet))] text-white">
                    <Icon name="check" className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    Otworzyłem Ci maila ✦
                  </h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-fg-muted">
                    Wyślij go śmiało, a ja odezwę się szybko. Gdyby coś nie
                    wyskoczyło, pisz wprost na {SITE.email}.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <label className="block">
                    <span className="mb-2 block text-sm text-fg-muted">
                      Jak masz na imię?
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      placeholder="Mareczek"
                      className={field}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-fg-muted">
                      Twój e-mail
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      placeholder="ty@twojafirma.pl"
                      className={field}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-fg-muted">
                      O co chodzi?
                    </span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      placeholder="Mam stronę z 2008 roku i maile lecą w spam. Ratunku."
                      className={`${field} resize-none`}
                    />
                  </label>

                  <MagneticButton type="submit" className="w-full">
                    Wyślij wiadomość
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </MagneticButton>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
