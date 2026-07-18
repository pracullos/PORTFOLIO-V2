/**
 * Skills content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

export type SkillGroup = {
  id: string
  category: string
  skills: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    id: "skill-core",
    category: "Core Competencies",
    skills: [
      "Backend Development",
      "REST API Development",
      "Microservices Architecture",
      "Database Design",
      "API Integration",
      "Authentication & Authorization",
      "AI/ML Integration",
      "System Design",
      "Problem Solving",
    ],
  },
  {
    id: "skill-languages",
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Dart"],
  },
  {
    id: "skill-backend",
    category: "Backend",
    skills: ["Spring Boot", "Laravel", "FastAPI"],
  },
  {
    id: "skill-frontend",
    category: "Frontend",
    skills: ["React", "Vue.js", "Flutter", "React Native/Expo"],
  },
  {
    id: "skill-database",
    category: "Database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    id: "skill-devops",
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "Postman"],
  },
  {
    id: "skill-auth",
    category: "Authentication",
    skills: ["JWT", "OAuth2", "Keycloak"],
  },
  {
    id: "skill-aiml",
    category: "AI/ML",
    skills: ["TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  },
]
