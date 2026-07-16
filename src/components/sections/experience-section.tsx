import { Briefcase, MapPin } from "lucide-react"

import { EXPERIENCE } from "@/data/portfolio"
import { SectionHeading } from "@/components/sections/section-heading"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <div id="experience-heading">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="My professional path so far, from junior developer to senior frontend engineer."
        />
      </div>

      {EXPERIENCE.length === 0 ? (
        <Empty className="mt-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Briefcase />
            </EmptyMedia>
            <EmptyTitle>No experience listed</EmptyTitle>
            <EmptyDescription>Work history will show up here once added.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <ItemGroup className="mt-10">
          {EXPERIENCE.map((job) => (
            <Item key={job.id} variant="outline" className="items-start">
              <ItemMedia variant="icon" className="mt-1">
                <Briefcase className="size-4" aria-hidden="true" />
              </ItemMedia>
              <ItemContent>
                <ItemHeader>
                  <ItemTitle className="text-base">
                    {job.role} <span className="text-muted-foreground">· {job.company}</span>
                  </ItemTitle>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {job.startDate} – {job.endDate}
                  </span>
                </ItemHeader>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden="true" />
                  {job.location}
                </div>
                <ul className="mt-1 flex flex-col gap-1">
                  {job.highlights.map((highlight, index) => (
                    <ItemDescription key={index} className="line-clamp-none">
                      {highlight}
                    </ItemDescription>
                  ))}
                </ul>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      )}
    </section>
  )
}
