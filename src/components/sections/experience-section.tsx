import { ArrowRight, Briefcase, MapPin } from "lucide-react"

import { EXPERIENCE, INTERNSHIP, PROFILE } from "@/data/portfolio"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const HIRE_ME_HREF = PROFILE.socials.find((social) => social.icon === "mail")?.href ?? "#"

function ExperienceRow({
  role,
  company,
  startDate,
  endDate,
  location,
  highlights,
}: {
  role: string
  company: string
  startDate: string
  endDate: string
  location: string
  highlights: string[]
}) {
  return (
    <Item variant="outline" className="items-start">
      <ItemMedia variant="icon" className="mt-1">
        <Briefcase className="size-4" aria-hidden="true" />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle className="text-base">
            {role} <span className="text-muted-foreground">· {company}</span>
          </ItemTitle>
          <span className="shrink-0 text-xs text-muted-foreground">
            {startDate} – {endDate}
          </span>
        </ItemHeader>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" aria-hidden="true" />
          {location}
        </div>
        <ul className="mt-1 flex flex-col gap-1">
          {highlights.map((highlight, index) => (
            <ItemDescription key={index} className="line-clamp-none">
              {highlight}
            </ItemDescription>
          ))}
        </ul>
        <ItemFooter className="justify-end">
          <Button asChild variant="ghost" size="sm">
            <a href="#">
              More
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </ItemFooter>
      </ItemContent>
    </Item>
  )
}

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
          title="My journey so far"
          description="Where I've worked, and the internship that got me started."
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-foreground">Where I've Worked</h3>

          {EXPERIENCE.length === 0 ? (
            <div className="relative">
              <div aria-hidden="true" className="flex flex-col gap-4 blur-sm select-none">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border p-3"
                  >
                    <Skeleton className="size-8 shrink-0 rounded-lg" />
                    <div className="flex flex-1 flex-col gap-2">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-3 w-1/3" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button asChild size="lg">
                  <a href={HIRE_ME_HREF}>Please Hire Me</a>
                </Button>
              </div>
            </div>
          ) : (
            <ItemGroup>
              {EXPERIENCE.map((job) => (
                <ExperienceRow key={job.id} {...job} />
              ))}
            </ItemGroup>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-foreground">Internship</h3>

          <ItemGroup>
            <ExperienceRow key={INTERNSHIP.id} {...INTERNSHIP} />
          </ItemGroup>
        </div>
      </div>
    </section>
  )
}
