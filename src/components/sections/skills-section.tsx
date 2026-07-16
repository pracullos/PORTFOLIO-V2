import { useEffect, useRef } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import ScrollReveal from "scrollreveal"
import { Sparkles } from "lucide-react"

import runningServerUrl from "@/assets/animations/running_server.lottie?url"
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

const SPLIT_INDEX = Math.ceil(SKILLS.length / 2)
const LEFT_GROUPS = SKILLS.slice(0, SPLIT_INDEX)
const RIGHT_GROUPS = SKILLS.slice(SPLIT_INDEX)

function SkillColumn({
  groups,
  reveal,
  align,
}: {
  groups: typeof SKILLS
  reveal: "left" | "right"
  align: "start" | "end"
}) {
  return (
    <div className={`flex flex-col gap-6 ${align === "end" ? "md:items-end" : ""}`}>
      {groups.map((group) => (
        <div
          key={group.id}
          className={`flex flex-col gap-1.5 ${align === "end" ? "md:items-end md:text-right" : ""}`}
        >
          <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
          <div className={`flex flex-wrap gap-1.5 ${align === "end" ? "md:justify-end" : ""}`}>
            {group.skills.map((skill) => (
              <Badge key={skill} data-reveal={reveal} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (SKILLS.length === 0) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const container = containerRef.current
    if (!container) return

    const sr = ScrollReveal()
    const shared = {
      distance: "48px",
      duration: 800,
      interval: 90,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    }

    sr.reveal(container.querySelectorAll("[data-reveal='left']"), {
      ...shared,
      origin: "left",
    })
    sr.reveal(container.querySelectorAll("[data-reveal='right']"), {
      ...shared,
      origin: "right",
    })

    return () => sr.destroy()
  }, [])

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
        <div
          ref={containerRef}
          className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.7fr_1fr]"
        >
          <SkillColumn groups={LEFT_GROUPS} reveal="left" align="end" />

          <div className="flex items-center justify-center" aria-hidden="true">
            <DotLottieReact
              src={runningServerUrl}
              autoplay
              loop
              backgroundColor="transparent"
              className="aspect-square w-full max-w-40 sm:max-w-48"
            />
          </div>

          <SkillColumn groups={RIGHT_GROUPS} reveal="right" align="start" />
        </div>
      )}
    </section>
  )
}
