/**
 * Placeholder portfolio content. Swap values here — components consume this
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

export type WorkItem = {
  id: string
  title: string
  description: string
  imageUrl?: string
  tags: string[]
  href?: string
  repoHref?: string
  featured?: boolean
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  companyHref?: string
  startDate: string
  endDate: string | "Present"
  location: string
  highlights: string[]
}

export type EducationItem = {
  id: string
  degree: string
  school: string
  startDate: string
  endDate: string
  location: string
  description?: string
}

export type SkillGroup = {
  id: string
  category: string
  skills: string[]
}

export const PROFILE: Profile = {
  name: "Jordan Rivera",
  role: "Frontend Engineer",
  tagline: "Building fast, accessible interfaces for the web.",
  summary:
    "I design and build production-grade UI systems — from design tokens to component libraries — with a focus on performance, accessibility, and developer experience.",
  location: "Remote · GMT+7",
  availability: "Open to new opportunities",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
}

export const WORKS: WorkItem[] = [
  {
    id: "work-1",
    title: "Commerce Dashboard",
    description:
      "Real-time analytics dashboard for a multi-tenant e-commerce platform, built with virtualized tables and streaming updates.",
    tags: ["React", "TypeScript", "TanStack Query"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    id: "work-2",
    title: "Design System",
    description:
      "Component library and token pipeline adopted across 6 product teams, cutting UI review time by half.",
    tags: ["Tailwind CSS", "Storybook", "Radix"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    id: "work-3",
    title: "Booking Flow Revamp",
    description:
      "Rebuilt a multi-step booking flow with optimistic updates and state-machine-driven form validation.",
    tags: ["React Router", "Zustand", "a11y"],
    href: "#",
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  // {
  //   id: "exp-1",
  //   role: "Senior Frontend Engineer",
  //   company: "Northwind Labs",
  //   startDate: "2023",
  //   endDate: "Present",
  //   location: "Remote",
  //   highlights: [
  //     "Led migration of legacy dashboard to a component-driven architecture, reducing bundle size by 38%.",
  //     "Introduced a shared design-token pipeline used across 4 product surfaces.",
  //   ],
  // },
  // {
  //   id: "exp-2",
  //   role: "Frontend Engineer",
  //   company: "Bluecrest Software",
  //   startDate: "2021",
  //   endDate: "2023",
  //   location: "Singapore",
  //   highlights: [
  //     "Built and maintained a customer-facing analytics portal serving 50k+ monthly users.",
  //     "Partnered with design to establish accessibility guidelines adopted org-wide.",
  //   ],
  // },
  // {
  //   id: "exp-3",
  //   role: "Junior Web Developer",
  //   company: "Studio Forge",
  //   startDate: "2019",
  //   endDate: "2021",
  //   location: "Jakarta",
  //   highlights: [
  //     "Shipped marketing sites and landing pages for 15+ clients using React and CMS integrations.",
  //   ],
  // },
]

export const INTERNSHIP: ExperienceItem = {
  id: "intern-1",
  role: "Software Engineer Intern",
  company: "Sindbad.Tech",
  startDate: "Feb 16, 2026",
  endDate: "May 1, 2026",
  location: "Saudi Arabia",
  highlights: [
    "Software engineering intern at Sindbad.Tech, a fintech company based in Saudi Arabia.",
  ],
}

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    startDate: "2015",
    endDate: "2019",
    location: "Jakarta, Indonesia",
    description: "Focused on human-computer interaction and distributed systems.",
  },
]

export const SKILLS: SkillGroup[] = [
  {
    id: "skill-languages",
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "skill-frontend",
    category: "Frontend",
    skills: ["React", "TanStack Router/Query", "Tailwind CSS", "Radix UI"],
  },
  {
    id: "skill-tooling",
    category: "Tooling",
    skills: ["Vite", "Vitest", "Storybook", "ESLint"],
  },
  {
    id: "skill-practices",
    category: "Practices",
    skills: ["Accessibility (WCAG)", "Design Systems", "Performance Profiling"],
  },
]
