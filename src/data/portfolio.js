import React from 'react';

export const heroData = {
  name: "Ajay S",
  tagline: "Data Analyst & Python Developer | Building data-driven and AI-powered solutions",
  intro: "Aspiring Data Analyst and Python Developer with hands-on experience in data analytics, machine learning, and full-stack development.",
  resumeUrl: "/resume.pdf", // Placeholder for actual resume
  socials: {
    github: "https://github.com/ajay-5001",
    linkedin: "https://linkedin.com/in/ajay-s-5b7871417",
    email: "ajayselvam1609@gmail.com",
    phone: "+91 9025209954"
  }
};

export const aboutData = {
  summary: "Data Analyst and Python Developer with hands-on experience across data analytics, machine learning, and full-stack application development. Skilled in Python, SQL, Power BI, and Excel for data cleaning, exploratory data analysis (EDA), and dashboard design, with additional experience building AI/ML solutions using LLMs and Retrieval-Augmented Generation (RAG). Delivered analytics and AI-powered applications through internships and academic projects, with a track record of turning raw data into actionable, business-ready insights."
};

export const skillsData = [
  { category: "Programming Languages", skills: ["Python", "SQL", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", skills: ["React.js"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "Relational Databases"] },
  { category: "Data Analytics & Visualization", skills: ["Data Cleaning", "Data Preprocessing", "EDA", "Statistical Analysis", "Power BI", "Microsoft Excel"] },
  { category: "AI / Machine Learning", skills: ["Generative AI", "Prompt Engineering", "LLMs", "Retrieval-Augmented Generation (RAG)", "PDF Summarization"] },
  { category: "Cloud Platforms", skills: ["Google Cloud Platform (GCP)"] },
  { category: "Tools & Version Control", skills: ["Git", "GitHub", "VS Code"] },
  { category: "Soft Skills", skills: ["Analytical Thinking", "Problem-Solving", "Communication", "Team Collaboration", "Adaptability"] }
];

export const experienceData = [
  {
    role: "Data Analyst Intern",
    company: "Cloud Institution",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Cleaned and preprocessed multiple raw datasets using Python and SQL, improving data accuracy and consistency for downstream analysis",
      "Performed exploratory data analysis (EDA) and built interactive Power BI dashboards to track key business metrics",
      "Generated data-driven reports that supported stakeholder decision-making"
    ]
  },
  {
    role: "Cloud GCP & LLM Intern",
    company: "Feautregen",
    period: "", // No period provided
    description: [
      "Explored Google Cloud Platform (GCP) services and applied prompt engineering techniques to improve LLM output quality",
      "Prototyped AI-powered cloud applications integrating Generative AI concepts"
    ]
  },
  {
    role: "Data Analytics Trainee",
    company: "Naan Mudhalvan",
    period: "", // No period provided
    description: [
      "Applied Python, SQL, Excel, and Power BI across analytics projects"
    ]
  }
];

export const projectsData = [
  {
    title: "PrepzoAI — AI-Powered Learning Assistant",
    problem: "Students needed a faster way to extract insights and answers from lengthy PDF study material.",
    solution: "Built an AI platform for PDF summarization, note generation, and question answering using Retrieval-Augmented Generation (RAG) to improve answer accuracy.",
    techStack: ["React.js", "Python", "LLMs", "RAG", "Git"],
    githubUrl: "https://github.com/ajay-5001/prepzoAI",
    demoUrl: "" // Add live demo URL when available
  },
  {
    title: "Cricket Analytics Dashboard",
    problem: "Player and team performance data was scattered and difficult to interpret.",
    solution: "Designed an interactive Power BI dashboard with cleaned datasets and KPI analysis for actionable insights.",
    techStack: ["Power BI", "Excel", "Data Cleaning", "Data Visualization"],
    githubUrl: "https://github.com/ajay-5001/cricket-analysis-project-ajay",
    demoUrl: "" // Add live demo URL when available
  }
];

export const educationData = {
  degree: "Bachelor of Technology — Information Technology",
  institution: "CSI College of Engineering",
  cgpa: "8.2/10"
};

export const certificationsData = [
  "SAP — Exploring SAP Analytics Cloud",
  "SAP — Introducing SAP Business Data Cloud",
  "Oracle — Foundation Associate Certification",
  "IBM — Mastering the Art of Prompting",
  "IBM — Generative AI in Action",
  "IBM — SQL and Relational Databases"
];
