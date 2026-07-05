import type { NavItem, SocialLink } from "./types";

export const profile = {
  name: "Muhammad Vendra Hastagiyan",
  shortName: "Vendra",
  tagline: "Data Science · Machine Learning · AI Engineering",
  location: "Semarang, Indonesia",
  email: "muhammadvendra4@gmail.com",
  /**
   * Public statement — hero / about copy.
   * Kept factual: sourced from CV profile section.
   */
  statement:
    "I'm an Informatics Engineering student at Dian Nuswantoro University specializing in Data Science and AI. I build end-to-end AI solutions — from model development to production-level optimization — across computer vision and time series forecasting.",
  focusAreas: [
    "Data Science",
    "Machine Learning",
    "Time Series Forecasting",
    "Computer Vision",
    "AI Engineering",
  ],
  /** TODO: replace with a public CV link when approved for publishing. */
  cvUrl: null as string | null,
};

export const siteUrl = "https://who-am-i-venddraa.vercel.app"; // TODO: update after Vercel deploy / custom domain

export const navigation: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/venddraa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vendra" },
  { label: "Instagram", href: "https://www.instagram.com/venddraa" },
  { label: "Email", href: "mailto:muhammadvendra4@gmail.com" },
];
