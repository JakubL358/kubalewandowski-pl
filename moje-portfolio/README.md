# Kuba Lewandowski — portfolio (onepager)

Nowoczesna, interaktywna strona-wizytówka. Premium, dark-mode, z animacjami
on-scroll, magnetycznymi przyciskami i smooth scrollem — w klimacie zen.com /
aristidebenoist.com, ale ocieplona Twoją komunikacją (na „Ty", szczerze, bez
żargonu IT).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokeny w `src/app/globals.css`)
- **Framer Motion** — reveals on-scroll, hover, przejścia
- **Lenis** — smooth scroll
- **GSAP + ScrollTrigger** — oś czasu rysowana przy scrollu (sekcja „Ekosystem")

Wszystkie animacje respektują `prefers-reduced-motion`.

## Uruchomienie lokalnie

```bash
npm install
npm run dev      # http://localhost:3000
```

Build produkcyjny:

```bash
npm run build
npm start
```

## Struktura

```
src/
├── app/
│   ├── layout.tsx      # fonty (Space Grotesk / Inter / JetBrains Mono), metadata, lang="pl"
│   ├── page.tsx        # składa wszystkie sekcje
│   ├── globals.css     # design tokens (kolory, fonty), helpery, reduced-motion
│   └── icon.svg        # favicon — sygnet „JL" (placeholder, brand nie ma jeszcze logo)
├── components/
│   ├── Providers.tsx   # MotionConfig + SmoothScroll
│   ├── SmoothScroll.tsx# Lenis + sync z GSAP ScrollTrigger
│   ├── Navbar.tsx      # pływająca nawigacja + menu mobilne + aktywna sekcja
│   ├── Hero.tsx        # sekcja powitalna
│   ├── About.tsx       # „O mnie" + wartości
│   ├── Offer.tsx       # „Holistyczna oferta" (6 usług)
│   ├── Ekosystem.tsx   # „Jak to działa" — porównanie + oś czasu (GSAP)
│   ├── Contact.tsx     # formularz (mailto) + kopiowanie maila
│   ├── Footer.tsx
│   ├── Background.tsx  # gradientowe bloby + grain
│   ├── Cursor.tsx      # subtelny custom cursor (desktop)
│   └── ...prymitywy: Reveal, MagneticButton, SectionLabel, Icon, Logo
└── lib/
    ├── site.ts         # CAŁA TREŚĆ strony (teksty, usługi, proces) — edytuj tutaj
    ├── motion.ts        # wspólny easing / warianty
    └── cn.ts
```

## Co zmienić przed publikacją

- **Kontakt** → `src/lib/site.ts`: `email` (`kontakt@kubalewandowski.pl`), `whatsapp` (`48661846796`, format wa.me) i `phoneDisplay` (`+48 661 846 796`).
- **Teksty** → `src/lib/site.ts` (usługi, wartości, proces, porównanie).
- **Domena w metadanych** → `metadataBase` w `src/app/layout.tsx`.
- **Logo** → `src/app/icon.svg` + monogram w `src/components/Logo.tsx` (na razie placeholder „JL").

## Deploy na Vercel

Folder jest gotowy do wdrożenia. Dwie drogi:

**A) CLI (najszybciej):**
```bash
npm i -g vercel
vercel        # z katalogu moje-portfolio
```

**B) Git + Vercel:**
1. `git init && git add . && git commit -m "init portfolio"`
2. Wypchnij do własnego repo (GitHub).
3. Na Vercel: *New Project* → wskaż repo. Jeśli portfolio jest podfolderem,
   ustaw **Root Directory = `moje-portfolio`**. Vercel sam wykryje Next.js.

Build command: `next build` · Output: automatyczny.

---

Kolory: niebieski `#5B7CFA` → fiolet `#9D5CFF` na granatowym tle. Bez czerwieni,
pomarańczu i retro — zgodnie z briefem.
