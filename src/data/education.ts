/**
 * Education content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

export type EducationItem = {
  id: string
  degree: string
  school: string
  startDate: string
  endDate: string
  location: string
  description?: string
}

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Information Technology",
    school: "Caraga State University",
    startDate: "2022",
    endDate: "2026",
    location: "Philippines",
  },
  {
    id: "edu-2",
    degree: "Senior High School (HUMSS)",
    school: "Agusan Del Sur College",
    startDate: "2020",
    endDate: "2022",
    location: "Philippines",
  },
  {
    id: "edu-3",
    degree: "Junior High School",
    school: "Bayugan City Comprehensive High School",
    startDate: "2016",
    endDate: "2020",
    location: "Philippines",
  },
]
