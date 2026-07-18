/**
 * Profile content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

export type SocialLink = {
  label: string
  href: string
  icon: "github" | "linkedin" | "mail" | "twitter"
}

export type Profile = {
  name: string
  role: string
  tagline: string
  summary: string
  location: string
  availability: string
  avatarUrl?: string
  resumeUrl?: string
  socials: SocialLink[]
}

export const PROFILE: Profile = {
  name: "John Paul B. Pracullos",
  role: "Full-Stack Developer",
  tagline: "Building fast, accessible interfaces for the web.",
  summary:
    "Software Developer with hands-on experience building backend services, microservice architectures, and AI-powered applications using Python, Java, Spring Boot, FastAPI, and PostgreSQL. Experienced in developing scalable APIs, automation workflows, and machine learning solutions through internship and project work. Passionate about building reliable software systems that solve real-world problems.",
  location: "Remote · GMT+7",
  availability: "Open to new opportunities",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/pracullos", icon: "github" },
    { label: "LinkedIn", href: "www.linkedin.com/in/john-paul-pracullos", icon: "linkedin" },
    { label: "Email", href: "pracullosjohnpaul@gmail.com", icon: "mail" },
  ],
}
