import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from '@/components/sections/hero-section'
import { WorksSection } from '@/components/sections/works-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { EducationSection } from '@/components/sections/education-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <HeroSection />
      <Separator className="mx-auto max-w-5xl" />
      <WorksSection variant="recent" />
      <Separator className="mx-auto max-w-5xl" />
      <ExperienceSection />
      <Separator className="mx-auto max-w-5xl" />
      <EducationSection />
      <Separator className="mx-auto max-w-5xl" />
      <SkillsSection />
    </main>
  )
}
