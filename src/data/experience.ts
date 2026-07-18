/**
 * Experience & internship content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

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
