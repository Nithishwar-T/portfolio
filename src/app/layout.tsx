import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"], weight: "400", style: ["normal", "italic"],
  variable: "--font-instrument", display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nithishwar T — Full Stack Developer", template: "%s — Nithishwar T" },
  description:
    "Full Stack Developer building enterprise web applications with Angular, ASP.NET Core, React and SQL.",
  openGraph: {
    title: "Nithishwar T — Full Stack Developer",
    description: "Portfolio of Nithishwar T, Full Stack Developer based in Chennai, India.",
    type: "website",
    images: ["/og-image.png"],
  },
};

// Sets the theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}