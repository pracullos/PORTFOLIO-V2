export type StackGroup = {
  label: string
  items: string[]
}

export type ProjectCategory = "mvp" | "idea" | "project"

export type Project = {
  id: string
  title: string
  status: string
  description: string
  stacks: StackGroup[]
  isRecent: boolean
  category: ProjectCategory
}

export const PROJECTS: Project[] = [
  {
    id: "rental-platform",
    title: "Rental Platform",
    status: "Web & Mobile",
    description:
      "A rental platform available on web and mobile, letting users list and book rentals with a Cloudflare-backed API sitting between the client and the database.",
    stacks: [
      { label: "Frontend", items: ["React", "Expo"] },
      { label: "Backend", items: ["Supabase"] },
      { label: "Middleware", items: ["Hono", "Cloudflare Pages"] },
    ],
    isRecent: true,
    category: "project",
  },
  {
    id: "networking-saas",
    title: "Networking Platform",
    status: "In Progress",
    description:
      "A SaaS networking application currently in development, built for scale with a Python API and cloud infrastructure to match.",
    stacks: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["FastAPI"] },
      { label: "Infrastructure", items: ["AWS EC2", "VPC", "S3", "RDS"] },
    ],
    isRecent: true,
    category: "mvp",
  },
  {
    id: "dayong",
    title: "Dayong",
    status: "Planned",
    description:
      "A blockchain app for my community's mutual-aid death group — when a member passes, every remaining member contributes a fee and goods to the family. Blockchain keeps the member count and total contributions transparent to everyone in the group.",
    stacks: [{ label: "Concept", items: ["Blockchain", "Smart Contracts"] }],
    isRecent: false,
    category: "idea",
  },
  {
    id: "agri-insurance-disease-detection",
    title: "Digital Agriculture Insurance & Disease Detection Platform",
    status: "Capstone Project",
    description:
      "Developed a microservice-based platform consisting of an API Gateway, Authentication Service, Insurance Service, and AI Detection Service. Built an AI image classification model using EfficientNetV2 and TensorFlow for rice disease detection, plus web and mobile apps for agriculture personnel and farmers.",
    stacks: [
      { label: "Backend", items: ["Spring Boot", "FastAPI", "PostgreSQL"] },
      { label: "Frontend", items: ["Flutter", "Vue.js"] },
      { label: "AI/ML", items: ["TensorFlow", "EfficientNetV2"] },
    ],
    isRecent: false,
    category: "project",
  },
  {
    id: "biznest",
    title: "BizNest – Geo-Intelligent Investment Platform for Philippine Cities",
    status: "Startup Project",
    description:
      "Co-developed a geo-intelligent platform helping investors identify and evaluate investment opportunities across Philippine cities through data-driven insights. Contributed to database design, API development, and system architecture while collaborating with a startup team on Git-based workflows.",
    stacks: [
      { label: "Backend", items: ["FastAPI", "PostgreSQL"] },
      { label: "Frontend", items: ["React", "Maplibre"] },
      { label: "Tooling", items: ["Orval", "Pnpm"] },
    ],
    isRecent: false,
    category: "project",
  },
]
