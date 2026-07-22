export const heroData = {
  name: "Ajay S",
  tagline: "Data Analyst & Python Developer",
  subTagline: "Building Data-Driven Insights, ML Pipelines & AI-Powered Solutions",
  intro: "Aspiring Data Analyst and Python Developer with hands-on experience in exploratory data analysis (EDA), interactive Power BI dashboards, machine learning, and full-stack AI applications.",
  resumeUrl: "/resume.pdf",
  availability: "Open to Data Analyst & Python Developer Roles",
  socials: {
    github: "https://github.com/ajay-5001",
    linkedin: "https://linkedin.com/in/ajay-s-5b7871417",
    email: "ajayselvam1609@gmail.com",
    phone: "+91 9025209954",
    location: "Tamil Nadu, India"
  }
};

export const statsData = [
  { label: "Data & AI Projects", value: "5+", icon: "Folder" },
  { label: "Industry Certifications", value: "6", icon: "Award" },
  { label: "Academic CGPA", value: "8.2 / 10", icon: "GraduationCap" },
  { label: "Data Quality & Accuracy", value: "100%", icon: "CheckCircle" }
];

export const aboutData = {
  summary: "Data Analyst and Python Developer with hands-on experience across data analytics, machine learning, and full-stack application development. Skilled in Python, SQL, Power BI, and Excel for data cleaning, exploratory data analysis (EDA), and dashboard design, with additional experience building AI/ML solutions using LLMs and Retrieval-Augmented Generation (RAG). Delivered analytics and AI-powered applications through internships and academic projects, with a proven track record of turning raw datasets into actionable business insights.",
  highlights: [
    "Expertise in cleaning, transforming, and modeling complex relational & unstructured datasets.",
    "Proficient in building interactive Power BI & Python analytics dashboards for business KPIs.",
    "Hands-on experience with Generative AI, Prompt Engineering, and RAG-based AI applications.",
    "Strong foundation in Cloud Services (GCP), MySQL, MongoDB, and Git version control."
  ]
};

export const skillsData = [
  { 
    category: "Programming & Web", 
    tag: "Languages",
    skills: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"] 
  },
  { 
    category: "Frameworks & Libraries", 
    tag: "Web & ML",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Pandas", "NumPy", "Scikit-Learn"] 
  },
  { 
    category: "Databases & Storage", 
    tag: "Data",
    skills: ["MySQL", "MongoDB", "Relational Databases", "Data Lakes"] 
  },
  { 
    category: "Data Analytics & Visualization", 
    tag: "Analytics",
    skills: ["Data Cleaning", "Data Preprocessing", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Power BI", "Microsoft Excel"] 
  },
  { 
    category: "AI & Machine Learning", 
    tag: "AI/ML",
    skills: ["Generative AI", "Prompt Engineering", "LLMs", "Retrieval-Augmented Generation (RAG)", "PDF Summarization"] 
  },
  { 
    category: "Cloud, Tools & Version Control", 
    tag: "Tools",
    skills: ["Google Cloud Platform (GCP)", "Git", "GitHub", "VS Code", "EmailJS"] 
  }
];

export const experienceData = [
  {
    role: "Data Analyst Intern",
    company: "Cloud Institution",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    description: [
      "Cleaned and preprocessed multiple raw datasets using Python and SQL, improving data accuracy and consistency by 25% for downstream analytics.",
      "Performed exploratory data analysis (EDA) and engineered interactive Power BI dashboards to monitor core key performance indicators (KPIs).",
      "Generated comprehensive data-driven reports supporting strategic decision-making for internal stakeholders."
    ]
  },
  {
    role: "Cloud GCP & LLM Intern",
    company: "Feautregen",
    period: "2025",
    type: "Internship",
    description: [
      "Explored Google Cloud Platform (GCP) cloud infrastructure services and applied advanced prompt engineering techniques to optimize LLM performance.",
      "Prototyped AI-powered cloud micro-applications integrating Generative AI and vector search concepts."
    ]
  },
  {
    role: "Data Analytics Trainee",
    company: "Naan Mudhalvan",
    period: "2024 – 2025",
    type: "Traineeship",
    description: [
      "Mastered and applied Python, SQL, Excel, and Power BI across hands-on analytics case studies and real-world domain datasets."
    ]
  }
];

export const projectsData = [
  {
    id: "prepzo-ai",
    title: "PrepzoAI — AI-Powered Learning Assistant",
    category: "AI & LLMs",
    problem: "Students and researchers struggle to rapidly extract structured insights and answers from extensive multi-page PDF study materials.",
    solution: "Developed an AI-driven platform for PDF automated summarization, key note generation, and context-aware Q&A utilizing Retrieval-Augmented Generation (RAG) to ensure high answer accuracy.",
    techStack: ["React.js", "Python", "LLMs", "RAG", "Tailwind CSS", "Git"],
    githubUrl: "https://github.com/ajay-5001/prepzoAI",
    demoUrl: "",
    featured: true
  },
  {
    id: "cricket-analytics",
    title: "Cricket Performance Analytics Dashboard",
    category: "Data Analytics",
    problem: "Cricket player statistics and match performance metrics were fragmented across raw spreadsheets, making team selection and strategy difficult.",
    solution: "Designed an interactive Power BI dashboard featuring data cleaning pipelines, player KPI comparison, strike-rate trends, and visual match analytics.",
    techStack: ["Power BI", "Excel", "Python", "Data Cleaning", "Data Visualization"],
    githubUrl: "https://github.com/ajay-5001/cricket-analysis-project-ajay",
    demoUrl: "",
    featured: true
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction & Retention Analytics",
    category: "Data Analytics",
    problem: "Businesses faced revenue loss due to unforeseen customer attrition without proactive identification of at-risk accounts.",
    solution: "Built a Python-based exploratory analysis and predictive model classifying churn drivers, generating actionable retention strategies.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "SQL", "Power BI"],
    githubUrl: "https://github.com/ajay-5001",
    demoUrl: "",
    featured: false
  },
  {
    id: "resume-parser",
    title: "Automated Resume Parser & Insight Extractor",
    category: "AI & LLMs",
    problem: "Recruiters manually screen hundreds of candidate resumes, taking valuable hours and missing key skill correlations.",
    solution: "Built a Python NLP tool parsing PDF resumes, extracting candidate skills, experience years, and matching relevance against job descriptions.",
    techStack: ["Python", "Generative AI", "Prompt Engineering", "React.js"],
    githubUrl: "https://github.com/ajay-5001",
    demoUrl: "",
    featured: false
  }
];

export const educationData = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "CSI College of Engineering",
  cgpa: "8.2 / 10",
  period: "2021 – 2025",
  highlights: ["Specialized in Data Analytics & Software Engineering", "Active contributor to technical workshops and hackathons"]
};

export const certificationsData = [
  { title: "Exploring SAP Analytics Cloud", issuer: "SAP", icon: "Award" },
  { title: "Introducing SAP Business Data Cloud", issuer: "SAP", icon: "Award" },
  { title: "Oracle Foundation Associate Certification", issuer: "Oracle", icon: "Award" },
  { title: "Mastering the Art of Prompting", issuer: "IBM", icon: "Award" },
  { title: "Generative AI in Action", issuer: "IBM", icon: "Award" },
  { title: "SQL and Relational Databases", issuer: "IBM", icon: "Award" }
];
