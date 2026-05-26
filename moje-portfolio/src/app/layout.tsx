import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { SITE, PRICING } from "@/lib/site";

const SITE_URL = "https://kuba-lewandowski.vercel.app";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuba-lewandowski.vercel.app"),
  title: {
    default: "Kuba Lewandowski · strony, które mają cel",
    template: "%s · Kuba Lewandowski",
  },
  description:
    "Buduję strony z celem i spinam wokół nich cały ekosystem: domenę, hosting, firmowe maile i Google Workspace. Zdejmuję z Ciebie cały techniczny stres.",
  keywords: [
    "strony internetowe",
    "web design",
    "Google Workspace",
    "WordPress",
    "Kadence",
    "ekosystem strony",
    "portfolio",
    "Kuba Lewandowski",
  ],
  authors: [{ name: "Kuba Lewandowski" }],
  creator: "Kuba Lewandowski",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kuba Lewandowski · strony, które mają cel",
    description:
      "Strony z celem plus cały ekosystem wokół nich. Bez AI-slopu, bez szablonów. Zdejmuję z Ciebie techniczny stres.",
    url: "/",
    siteName: "Kuba Lewandowski",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kuba Lewandowski · strony, które mają cel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuba Lewandowski · strony, które mają cel",
    description:
      "Strony z celem plus cały ekosystem wokół nich. Zdejmuję z Ciebie techniczny stres.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Kuba Lewandowski",
      url: SITE_URL,
      image: `${SITE_URL}/kuba.webp`,
      email: `mailto:${SITE.email}`,
      telephone: `+${SITE.whatsapp}`,
      jobTitle: "Web designer i specjalista od stron oraz ekosystemów cyfrowych",
      sameAs: [SITE.linkedin],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Kuba Lewandowski",
      description:
        "Strony internetowe z celem plus cały ekosystem wokół nich: domena, hosting, firmowe maile i Google Workspace.",
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      provider: { "@id": `${SITE_URL}/#person` },
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: "Polska",
      availableLanguage: "pl",
      telephone: `+${SITE.whatsapp}`,
      email: `mailto:${SITE.email}`,
      sameAs: [SITE.linkedin],
      priceRange: "od 390 zł",
      makesOffer: PRICING.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.tagline,
        price: p.price,
        priceCurrency: "PLN",
        url: `${SITE_URL}/#oferta`,
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kuba Lewandowski",
      inLanguage: "pl-PL",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="bg-ink text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
