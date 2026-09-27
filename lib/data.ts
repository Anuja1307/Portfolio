export const profile = {
  name: "Anuja R S",
  role: "Full-Stack & Backend Engineer",
  tagline: "Building backend systems and AI-integrated products end to end",
  summary:
    "I'm a full-stack and backend engineer working across the MERN stack and Spring Boot, focused on REST APIs, database design, and secure authentication. I've paired that backend foundation with AI/LLM integration — building semantic search and resume-analysis features and shipping containerized services on AWS.",
  location: "Coimbatore, India",
  email: "anujars541@gmail.com",
  phone: "+91 8925477535",
  github: "https://github.com/Anuja1307",
  linkedin: "https://www.linkedin.com/in/anuja-r-s-905695357/",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export type SystemNode = { label: string; kind: "client" | "api" | "data" | "ai" | "infra" };

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  problem: string;
  approach: string;
  features: string[];
  stack: string[];
  flow: SystemNode[];
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "resume-matcher",
    title: "AI-Powered Resume & Job Matcher",
    pitch: "Semantic resume-to-job matching with AI-driven skill-gap analysis.",
    problem:
      "Job seekers struggle to tell how well a resume actually fits a role, or which skills are missing, before they apply.",
    approach:
      "A Node.js/Express API handles resume ingestion, parsing, and job-matching logic, while a Python AI service layer performs NLP-based extraction, embeddings, and retrieval-augmented generation to compare resume content against job descriptions.",
    features: [
      "NLP-based resume parsing and structured extraction",
      "Embedding-based semantic matching between resumes and job postings",
      "RAG pipeline for skill-gap analysis and interview preparation",
      "ATS-style scoring surfaced through a React + Tailwind dashboard",
      "JWT-authenticated REST APIs with saved-job CRUD",
      "Redis caching to keep matching and dashboard responses fast",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker", "AWS EC2", "NLP", "RAG"],
    flow: [
      { label: "React Dashboard", kind: "client" },
      { label: "Express REST API", kind: "api" },
      { label: "MongoDB + Redis", kind: "data" },
      { label: "NLP / RAG Service", kind: "ai" },
      { label: "Docker + Nginx on EC2", kind: "infra" },
    ],
    github: "https://github.com/Anuja1307/ResumeJobMatcher",
    featured: true,
  },
  {
    slug: "e-wallet-microservices",
    title: "E-Wallet Microservices Application",
    pitch: "Event-driven microservices handling wallet transactions at scale.",
    problem:
      "A digital wallet needs to process transactions reliably across independent services without tight coupling or data loss.",
    approach:
      "Built as a set of Spring Boot microservices communicating asynchronously through Apache Kafka, with each service owning its own MySQL database and Redis-backed caching for session and performance-sensitive data.",
    features: [
      "Event-driven communication between services via Apache Kafka",
      "Atomic wallet-balance updates with full transaction lifecycle tracking",
      "PENDING / SUCCESSFUL / FAILED status management with validation",
      "Spring Security authentication with BCrypt and Role-Based Access Control",
      "Service-specific MySQL databases via Spring Data JPA",
      "Real-time email notifications through Spring Mail",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "MySQL", "Redis", "Spring Security"],
    flow: [
      { label: "Client Requests", kind: "client" },
      { label: "Spring Boot Services", kind: "api" },
      { label: "Kafka Event Bus", kind: "infra" },
      { label: "MySQL + Redis", kind: "data" },
    ],
    github: "https://github.com/Anuja1307/e-wallet",
    featured: true,
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript"] },
  { label: "Frontend", items: ["React.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend & APIs", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Postman"] },
  { label: "Databases", items: ["MongoDB", "MongoDB Atlas", "MySQL", "Redis"] },
  { label: "Auth & Security", items: ["JWT", "bcrypt", "OTP Auth", "Spring Security", "RBAC"] },
  {
    label: "AI / ML & Integration",
    items: ["NLP", "LLM APIs", "Embeddings", "RAG", "Semantic Search", "Resume Parsing", "ATS Scoring", "OpenAI API", "Prompt Engineering"],
  },
  { label: "Cloud & DevOps", items: ["AWS EC2", "Cloudinary", "Docker", "Docker Hub", "Nginx", "Git", "GitHub"] },
  { label: "Architecture", items: ["MERN Stack", "Microservices", "Event-Driven Architecture", "FastAPI"] },
];

export const education = {
  institution: "Amrita Vishwa Vidyapeetham",
  location: "Coimbatore, India",
  degree: "B.Tech in Computer Science and Engineering",
  gpa: "CGPA: 8.74 / 10",
  period: "July 2024 – August 2028",
};

export const research = {
  title:
    "A Multidimensional Assessment of Drinking Water Scarcity and its Socioeconomic Repercussions in Kolundurai Village",
  venue: "SSRN, October 2025",
  points: [
    "Conducted PRA and HCD-based field research to identify drinking-water and rural-infrastructure challenges in Kolundurai, Tamil Nadu.",
    "Analyzed community needs and co-created sustainable, community-centric solutions aligned with UN SDG 6.",
  ],
};
