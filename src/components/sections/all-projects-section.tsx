import { useState } from "react"

import { SectionHeading } from "@/components/sections/section-heading"
import { ProjectCard } from "@/components/cards/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import { PROJECTS, type Project, type ProjectCategory } from "@/data/projects"

type TabValue = "all" | "recent" | ProjectCategory

const TABS: { value: TabValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "recent", label: "Recent" },
  { value: "mvp", label: "MVP" },
  { value: "idea", label: "Idea" },
  { value: "project", label: "Project" },
]

function filterProjects(tab: TabValue, projects: Project[]) {
  switch (tab) {
    case "all":
      return projects
    case "recent":
      return projects.filter((project) => project.isRecent)
    default:
      return projects.filter((project) => project.category === tab)
  }
}

export function AllProjectsSection() {
  const [tab, setTab] = useState<TabValue>("all")

  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div id="works-heading">
        <SectionHeading
          eyebrow="Portfolio"
          title="All projects"
          description="Every project I've shipped, am building, or have planned."
          align="center"
        />
      </div>

      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as TabValue)}
        className="mt-10"
      >
        <TabsList className="mx-auto h-10 gap-1 p-1">
          {TABS.map(({ value, label }) => (
            <TabsTrigger key={value} value={value} className="px-4 py-1.5">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map(({ value }) => {
          const projects = filterProjects(value, PROJECTS)

          return (
          <TabsContent key={value} value={value} className="mt-8">
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  < ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
                ))}
              </div>
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyTitle>No projects here yet</EmptyTitle>
                  <EmptyDescription>Check back later or browse another tab.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
          </TabsContent>
          )
        })}
      </Tabs>
    </section>
  )
}
