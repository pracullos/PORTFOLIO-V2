import { createFileRoute } from '@tanstack/react-router'

import { AllProjectsSection } from '@/components/sections/all-projects-section'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection />
    </main>
  )
}
