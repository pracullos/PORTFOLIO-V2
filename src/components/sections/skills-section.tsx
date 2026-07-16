import { Sparkles } from "lucide-react"

import { SKILLS } from "@/data/portfolio"
import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div id="skills-heading">
        <SectionHeading eyebrow="Skills" title="Tools & technologies" />
      </div>

      {SKILLS.length === 0 ? (
        <Empty className="mt-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Sparkles />
            </EmptyMedia>
            <EmptyTitle>No skills listed</EmptyTitle>
            <EmptyDescription>Skills will show up here once added.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.id} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
