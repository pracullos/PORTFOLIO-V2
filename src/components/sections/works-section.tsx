import { ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/data/projects"
import { ProjectCard } from "@/components/cards/project-card"

export function WorksSection() {
  const projects = PROJECTS.filter((project) => project.isRecent)

  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div id="works-heading">
        <SectionHeading
          eyebrow="Recent work"
          title="Things I've built"
          description="A few things I've shipped and am currently building lately."
          align="center"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <Link to="/projects">
            View all projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
