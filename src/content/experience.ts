import type { Award, Certificate, Education, Experience } from "./types";

export const experiences: Experience[] = [
  {
    organization: "Bengkel Koding",
    location: "Semarang, Indonesia",
    roles: [
      {
        title: "Data Science Division Lead",
        period: "Mar 2026 — Present",
        bullets: [
          "Lead a team of 18 data science members — task delegation, progress tracking, and team coordination.",
          "Primary liaison between the division and stakeholders, translating directives into actionable deliverables.",
        ],
      },
      {
        title: "Data Scientist — Computer Vision",
        period: "Jan 2025 — Present",
        bullets: [
          "Built a multi-modal emotion detection pipeline combining facial expression recognition (FER) and contextual emotion analysis (Emotic), classifying up to 26 emotion labels with continuous Valence-Arousal-Dominance scores.",
          "Integrated YOLOv8n for person detection and YuNet for face detection with margin-aware cropping.",
          "Optimized inference with frame-skipped processing and result caching for real-time multi-face performance.",
          "Deployed the inference stack on ONNX Runtime for lightweight, framework-independent execution.",
        ],
      },
    ],
  },
  {
    organization: "AI Research and Development Group",
    location: "Semarang, Indonesia",
    roles: [
      {
        title: "Teaching Assistant — Data Science",
        period: "Jan 2026 — Present",
        bullets: [
          "Teach Data Science classes totalling 100+ students in Bengkel Koding's Data Science track.",
          "Cover exploratory data analysis, preprocessing, modelling, validation, sampling, and optimization.",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Dian Nuswantoro University",
    degree: "B.Sc. Computer Science (Informatics Engineering)",
    period: "Sep 2023 — Jun 2027 (expected)",
    location: "Semarang, Indonesia",
    notes: [
      "Cumulative GPA 3.89 / 4.00.",
      "Coursework: Machine Learning, Artificial Intelligence, Computer Networks, Software Engineering, Algorithms and Programming.",
    ],
  },
  {
    institution: "Gadjah Mada University — Student Exchange",
    degree: "Computer Science, Faculty of Mathematics and Natural Sciences",
    period: "Aug 2025 — Dec 2025",
    location: "Yogyakarta, Indonesia",
    notes: [
      "Coursework: Deep Learning, NLP, Information Retrieval, Research Trends in AI (international class, in English).",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Flagship Program Student, Department of Computer Science",
    date: "Aug 2024",
    description:
      "Selected as one of 58 top-performing computer science students in Dian Nuswantoro University Batch 2023 for an accelerated academic track.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Data Scientist — Digital Talent Scholarship (LSP-BNSP)",
    issuer: "Kominfo / BNSP",
    date: "Jul 2025",
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM / Coursera",
    date: "Jan 2026",
  },
  {
    title: "IBM Python for Data Science & AI",
    issuer: "IBM / Coursera",
    date: "May 2025",
  },
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Oct 2024",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Aug 2025",
  },
];
