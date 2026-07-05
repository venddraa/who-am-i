export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  organization: string;
  location?: string;
  roles: ExperienceRole[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
};

export type Award = {
  title: string;
  date: string;
  description: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short one-line description for index listings. */
  summary: string;
  role: string;
  stack: string[];
  /** Year or period. Use "TODO" if unknown. */
  year: string;
  status: "completed" | "ongoing";
  featured: boolean;
  links: {
    github?: string;
    demo?: string;
  };
  /** Structured case study content. Omit sections that don't apply. */
  caseStudy: CaseStudySection[];
};
