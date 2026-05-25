"use client";

import { SITE } from "@/lib/site";
import { useLenisInstance } from "./SmoothScroll";
import { Icon } from "./Icon";

export default function Footer() {
  const lenis = useLenisInstance();
  const toTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-line px-6 py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[linear-gradient(135deg,var(--blue),var(--violet))] font-display text-sm font-bold text-white">
              JL
            </span>
            <span className="font-display text-base font-semibold">
              Kuba Lewandowski
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-dim">
            Zbudowane z głową, nie z szablonu. Strony z celem + cały ekosystem
            wokół nich.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-fg-muted transition-colors hover:text-fg"
          >
            {SITE.email}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <button
            onClick={toTop}
            className="inline-flex cursor-pointer items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Na górę
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </button>
          <p className="font-mono text-xs text-fg-dim">
            © {new Date().getFullYear()} · JL
          </p>
        </div>
      </div>
    </footer>
  );
}
