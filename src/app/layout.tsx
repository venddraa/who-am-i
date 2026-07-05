import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile, siteUrl } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Data Science & AI Engineering`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Informatics student focused on Data Science, Machine Learning, Time Series Forecasting, and AI Engineering. Building end-to-end AI systems from data to deployed models.",
  openGraph: {
    title: `${profile.name} — Data Science & AI Engineering`,
    description:
      "Informatics student focused on Data Science, Machine Learning, Time Series Forecasting, and AI Engineering.",
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-ink focus:text-inverse focus:px-4 focus:py-2 text-meta"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
