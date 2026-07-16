import { GraduationCap, MapPin } from "lucide-react"

import { EDUCATION } from "@/data/portfolio"
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

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <div id="education-heading">
        <SectionHeading eyebrow="Education" title="Academic background" />
      </div>

      {EDUCATION.length === 0 ? (
        <Empty className="mt-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <GraduationCap />
            </EmptyMedia>
            <EmptyTitle>No education listed</EmptyTitle>
            <EmptyDescription>Academic background will show up here once added.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <ItemGroup className="mt-10">
          {EDUCATION.map((edu) => (
            <Item key={edu.id} variant="outline" className="items-start">
              <ItemMedia variant="icon" className="mt-1">
                <GraduationCap className="size-4" aria-hidden="true" />
              </ItemMedia>
              <ItemContent>
                <ItemHeader>
                  <ItemTitle className="text-base">
                    {edu.degree} <span className="text-muted-foreground">· {edu.school}</span>
                  </ItemTitle>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </ItemHeader>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden="true" />
                  {edu.location}
                </div>
                {edu.description ? (
                  <ItemDescription className="line-clamp-none">{edu.description}</ItemDescription>
                ) : null}
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      )}
    </section>
  )
}
