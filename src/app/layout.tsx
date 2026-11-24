
import type { Metadata } from "next";
import {
  Inter_Tight,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/profile";


const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "St. Joseph's Institute of Technology" },
  sameAs: [profile.github, profile.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nithishwar T — Full Stack Developer", template: "%s — Nithishwar T" },
  description:
    "Full Stack Developer building enterprise web applications with Angular, ASP.NET Core, React and SQL.",
  openGraph: {
    title: "Nithishwar T — Full Stack Developer",
    description: "Portfolio of Nithishwar T, Full Stack Developer based in Chennai, India.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Initialize the saved theme before the first paint.
const themeScript = `(function(){
  try {
    var t = localStorage.getItem('theme');
    document.documentElement.dataset.theme =
      t === 'light' ? 'light' : 'dark';
  } catch(e) {
    document.documentElement.dataset.theme = 'dark';
  }
})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>  
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>

        <Navbar />
         <CommandPalette />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
