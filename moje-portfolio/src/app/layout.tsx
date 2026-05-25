import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
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
  openGraph: {
    title: "Kuba Lewandowski · strony, które mają cel",
    description:
      "Strony z celem + cały ekosystem wokół nich. Bez AI-slopu, bez szablonów. Zdejmuję z Ciebie techniczny stres.",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
