import type { Project } from "./types";

/**
 * All project facts are sourced from the CV. Do not add metrics or
 * results that are not verifiable. Use "TODO:" markers for gaps.
 */
export const projects: Project[] = [
  {
    slug: "vsa-virtual-smart-assistant",
    title: "VSA — Virtual Smart Assistant",
    summary:
      "Emotion-aware virtual assistant for university students, combining facial recognition, emotion tracking, and LLM-based conversation.",
    role: "Computer Vision Engineer",
    stack: [
      "Python",
      "TypeScript",
      "ONNX",
      "CUDA",
      "OpenCV",
      "YOLO",
      "Docker",
    ],
    year: "2025 — ongoing",
    status: "ongoing",
    featured: true,
    links: {
      // TODO: add GitHub/demo link if the repository is public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Students at Dian Nuswantoro University needed a personal assistant that could respond appropriately to their emotional state, not just their words.",
      },
      {
        heading: "My role",
        body: "Computer Vision engineer in a cross-functional team spanning Text Processing, Speech Processing, and Computer Vision divisions. I owned the facial recognition and emotion tracking pipeline.",
      },
      {
        heading: "Approach",
        body: "The system uses facial recognition and emotion tracking to detect students' emotional states, feeds that context to an LLM-based conversational engine, and responds through text-to-speech for natural interaction.",
      },
      {
        heading: "Result",
        body: "TODO: add deployment status / usage outcome when confirmed.",
      },
    ],
  },
  {
    slug: "iris-indoor-surveillance",
    title: "IRIS — Intelligent Recognition & Indoor Surveillance",
    summary:
      "Web-based multi-camera system that detects, recognizes, and tracks lecturers in real time across indoor campus spaces, with a live presence dashboard.",
    role: "AI Engineer", // TODO: confirm exact role in the team
    stack: [
      "Python",
      "YOLOv8n",
      "ByteTrack",
      "YuNet",
      "InsightFace",
      "OSNet",
      "TypeScript",
    ],
    year: "TODO",
    status: "ongoing",
    featured: true,
    links: {
      // Repositories (DS-Bengkod-23/fe-indoorv2, DS-Bengkod-23/indoor-api)
      // are private — do not link publicly unless they are made public.
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Knowing which lecturers are present on campus, where they are, and for how long normally requires checking rooms manually. IRIS automates this: it detects, recognizes, tracks, and logs lecturer presence in real time across multiple cameras in indoor campus environments.",
      },
      {
        heading: "Approach",
        body: "Real-time video from multi-room cameras flows through a staged pipeline: YOLOv8n detects people and ByteTrack tracks each individual per camera. Identity is established with YuNet for face detection and InsightFace for face recognition; when a face is not clearly visible, OSNet_x1_0 re-identifies individuals from body appearance features and supports cross-camera identity matching. Matched identities are then logged with location and duration.",
      },
      {
        heading: "Result",
        body: "Processing results are stored and presented through a web dashboard showing each lecturer's name, last known location, arrival time, presence duration, attendance status, and room-to-room movement history.",
      },
    ],
  },
  {
    slug: "wind-power-forecasting",
    title: "Wind Active Power Forecasting",
    summary:
      "Systematic benchmark of statistical, deep learning, and gradient boosting models for wind turbine power forecasting on the SDWPF dataset.",
    role: "Developer & Researcher",
    stack: ["Python", "PyTorch", "TSLib", "LightGBM", "Streamlit"],
    year: "TODO",
    status: "completed",
    featured: true,
    links: {
      // TODO: add GitHub link if the repository is public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Predicting active power output across wind turbines from multivariate time series data — a core challenge for renewable energy planning.",
      },
      {
        heading: "Dataset",
        body: "SDWPF (Spatial Dynamic Wind Power Forecasting) dataset, containing SCADA data from a large wind farm.",
      },
      {
        heading: "Approach",
        body: "Developed and benchmarked ARIMA, GRU, LSTM, and LightGBM models, evaluating statistical, deep learning, and gradient boosting approaches under a consistent comparison protocol.",
      },
      {
        heading: "Result",
        body: "TODO: add benchmark comparison summary (which model family performed best and under what conditions).",
      },
    ],
  },
  {
    slug: "nem-electricity-forecasting",
    title: "National Electricity Market Forecasting",
    summary:
      "End-to-end electricity demand forecasting application built on real market data from AEMO's National Electricity Market.",
    role: "Full-stack Developer & Researcher",
    stack: ["Python", "PyTorch", "TSLib", "XGBoost", "Streamlit", "Next.js"],
    year: "TODO",
    status: "completed",
    featured: true,
    links: {
      // TODO: add GitHub/demo link if available
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Forecasting electricity demand from live market data — where accuracy directly affects grid planning decisions.",
      },
      {
        heading: "Dataset",
        body: "Real market data from AEMO's National Electricity Market (NEM) platform, Australia.",
      },
      {
        heading: "Approach",
        body: "Benchmarked ARIMA, XGBoost, and LSTM models, then built a full-stack interface — Next.js frontend with REST API integration — to visualize forecasting results interactively.",
      },
      {
        heading: "Result",
        body: "TODO: add model comparison outcome and app status.",
      },
    ],
  },
  {
    slug: "semeval-polarization-detection",
    title: "Political Polarization Detection",
    summary:
      "SemEval competition entry using DeBERTa's disentangled attention to fix a structural weakness in baseline BERT classifiers.",
    role: "NLP Researcher",
    stack: ["Python", "HuggingFace Transformers", "PyTorch", "DeBERTa"],
    year: "TODO",
    status: "completed",
    featured: true,
    links: {
      // TODO: add paper/system description or repository link if public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Detecting political polarization in text — a SemEval shared task subtask where baseline BERT models systematically failed on certain classification patterns.",
      },
      {
        heading: "Approach",
        body: "Analyzed the root cause of classification failure in baseline BERT models, then adopted DeBERTa with its disentangled attention mechanism. Its relative position encoding directly addressed the structural weakness identified in the baselines.",
      },
      {
        heading: "Result",
        body: "TODO: add official task ranking / score once shareable.",
      },
    ],
  },
  {
    slug: "stanford-cars-interpretability",
    title: "Model Interpretability on Stanford Cars",
    summary:
      "Explainable AI study visualizing CNN decision boundaries and feature attribution on vehicle classification.",
    role: "ML Researcher",
    stack: ["Python", "PyTorch"],
    year: "TODO",
    status: "completed",
    featured: false,
    links: {
      // TODO: add repository link if public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "CNN classifiers perform well on fine-grained vehicle classification, but their decisions are opaque — which visual regions actually drive a prediction?",
      },
      {
        heading: "Dataset",
        body: "Stanford Cars — a fine-grained vehicle classification dataset.",
      },
      {
        heading: "Approach",
        body: "Applied explainable AI (XAI) techniques to analyze and visualize CNN decision boundaries, investigating feature attribution methods to connect model performance with human-interpretable explanations.",
      },
    ],
  },
  {
    slug: "automatic-meeting-minutes",
    title: "Real-Time Automatic Meeting Minutes",
    summary:
      "Speech-to-text meeting transcription for Indonesian, with rule-based post-processing into formal structured minutes.",
    role: "Contributor — STT evaluation & post-processing",
    stack: ["Python", "Faster-Whisper", "Tkinter"],
    year: "TODO",
    status: "completed",
    featured: false,
    links: {
      // TODO: add repository link if public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Writing formal meeting minutes by hand is slow. The goal: transcribe Indonesian speech in real time and produce structured, formal minutes automatically.",
      },
      {
        heading: "Approach",
        body: "Evaluated multiple speech-to-text models to find the optimal Faster-Whisper configuration for Indonesian speech, then designed a rule-based post-processing pipeline converting raw transcripts into formal meeting minutes exported as PDF and DOCX.",
      },
    ],
  },
  {
    slug: "sidata-desa",
    title: "SIDATA DESA — Village Land Data Management",
    summary:
      "Admin-side frontend for a village land management system with interactive parcel mapping, built to Permendagri regulations.",
    role: "Frontend Developer (admin side)",
    stack: ["Next.js", "Leaflet.js", "OpenStreetMap", "Postman", "AWS"],
    year: "TODO",
    status: "completed",
    featured: false,
    links: {
      // TODO: add repository/demo link if public
    },
    caseStudy: [
      {
        heading: "Problem",
        body: "Village governments need to manage land rights data (Hak Milik, Hak Guna, Hak Usaha) and ownership records in line with Permendagri regulations — usually done on paper or in spreadsheets.",
      },
      {
        heading: "My role",
        body: "Developed the admin-side frontend of the web application, handling land rights data and ownership records.",
      },
      {
        heading: "Approach",
        body: "Implemented an interactive map with OpenStreetMap and Leaflet.js so users can draw and annotate land parcels with ownership and rights information. Integrated REST APIs tested with Postman; the application is deployed on AWS.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
