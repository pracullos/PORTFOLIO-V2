import { DotLottieReact } from "@lottiefiles/dotlottie-react"

import cloudComputingUrl from "@/assets/animations/network.lottie?url"
import fullstackUrl from "@/assets/animations/fullstack.lottie?url"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

type WorkHighlight = {
  id: string
  title: string
  description: string
  tags: string[]
  lottieUrl: string
  reverse?: boolean
}

const WORK_HIGHLIGHTS: WorkHighlight[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end product builds — from React front ends to the APIs and databases behind them.",
    tags: ["React", "Node.js", "PostgreSQL"],
    lottieUrl: fullstackUrl,
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description:
      "Deploying and scaling apps on cloud platforms, with CI/CD pipelines and infrastructure as code.",
    tags: ["AWS", "Docker", "CI/CD"],
    lottieUrl: cloudComputingUrl,
    reverse: true,
  },
]

function WorkHighlightCard({ title, description, tags, lottieUrl, reverse }: WorkHighlight) {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div
        className={cn(
          "flex flex-col gap-4 p-4 sm:p-6 md:flex-row md:items-center md:gap-6",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 md:justify-start">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center" aria-hidden="true">
          <DotLottieReact
            src={lottieUrl}
            autoplay
            loop
            backgroundColor="transparent"
            className="aspect-square w-full max-w-sm sm:max-w-md"
          />
        </div>
      </div>
    </Card>
  )
}

export function WorksSection() {
  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div id="works-heading">
        <SectionHeading
          eyebrow="Recent work"
          title="Things I've built"
          description="A selection of what I do — from full stack products to the cloud infrastructure that runs them."
          align="center"
        />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {WORK_HIGHLIGHTS.map((work) => (
          <WorkHighlightCard key={work.id} {...work} />
        ))}
      </div>
    </section>
  )
}
