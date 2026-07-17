import { createFileRoute } from '@tanstack/react-router'

import { WorksSection } from '@/components/sections/works-section'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main>
      <WorksSection variant="all" />
    </main>
  )
}
