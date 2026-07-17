import { ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type StackGroup = {
  label: string
  items: string[]
}

type Project = {
  id: string
  title: string
  status: string
  description: string
  stacks: StackGroup[]
  isRecent: boolean
}

const PROJECTS: Project[] = [
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
  },
  {
    id: "dayong",
    title: "Dayong",
    status: "Planned",
    description:
      "A blockchain app for my community's mutual-aid death group — when a member passes, every remaining member contributes a fee and goods to the family. Blockchain keeps the member count and total contributions transparent to everyone in the group.",
    stacks: [{ label: "Concept", items: ["Blockchain", "Smart Contracts"] }],
    isRecent: false,
  },
]

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <Card className="p-0 transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 md:grid-cols-3">
        <div
          className={cn(
            "flex flex-col gap-3 md:col-span-2",
            reverse ? "md:order-2" : "md:order-1"
          )}
        >
          <Badge variant="secondary" className="w-fit">
            {project.status}
          </Badge>
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 border-indigo-500/70 p-4 md:col-span-1 dark:border-indigo-400/60",
            reverse
              ? "md:order-1 rounded-tr-lg border-t-2 border-r-2"
              : "md:order-2 rounded-tl-lg border-t-2 border-l-2"
          )}
        >
          <span className="text-sm font-medium text-foreground">Tech Stack</span>
          {project.stacks.map((stack) => (
            <div key={stack.label} className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">{stack.label}</span>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end border-t border-border px-6 py-3 sm:px-8">
        <Button asChild variant="ghost" size="sm">
          <a href="#">
            More
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Card>
  )
}

type WorksSectionProps = {
  variant?: "recent" | "all"
}

export function WorksSection({ variant = "all" }: WorksSectionProps) {
  const projects = variant === "recent" ? PROJECTS.filter((project) => project.isRecent) : PROJECTS

  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div id="works-heading">
        <SectionHeading
          eyebrow={variant === "recent" ? "Recent work" : "Portfolio"}
          title={variant === "recent" ? "Things I've built" : "All projects"}
          description={
            variant === "recent"
              ? "A few things I've shipped and am currently building lately."
              : "Every project I've shipped, am building, or have planned."
          }
          align="center"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
        ))}
      </div>

      {variant === "recent" ? (
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/projects">
              View all projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      ) : null}
    </section>
  )
}
