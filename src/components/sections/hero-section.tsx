import type { ComponentType } from "react"
import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

import bgAnimationUrl from "@/assets/animations/globe_background.lottie?url"
import programmingComputerUrl from "@/assets/animations/programming_computer.lottie?url"
import { PROFILE, type SocialLink } from "@/data/portfolio"
import { TypedText } from "@/components/typed-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ROLE_STRINGS = [
  "Full-Stack Developer",
  "Backend Developer",
  "Bachelor of Science in Information Technology",
  "Cum Laude",
  "Civil Service Professional Eligible",
]


const SOCIAL_ICONS: Record<SocialLink["icon"], ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Github,
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <DotLottieReact
          src={bgAnimationUrl}
          autoplay
          loop
          className="size-full object-cover opacity-5 dark:opacity-25"
        />
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Avatar size="lg" className="size-16">
            {PROFILE.avatarUrl ? <AvatarImage src={PROFILE.avatarUrl} alt={PROFILE.name} /> : null}
            <AvatarFallback className="text-lg">{initials(PROFILE.name)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit">
              {PROFILE.availability}
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              <span className="sr-only">{PROFILE.role}</span>
              <span aria-hidden="true">
                <TypedText strings={ROLE_STRINGS} loop backDelay={1800} />
              </span>
            </p>
          </div>

          <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {PROFILE.summary}
          </p>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            <span>{PROFILE.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg">
              <a href="#works">
                View my work
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </Button>
            {PROFILE.resumeUrl ? (
              <Button asChild variant="outline" size="lg">
                <a href={PROFILE.resumeUrl} download>
                  <Download className="size-4" aria-hidden="true" />
                  Resume
                </a>
              </Button>
            ) : null}
          </div>

          <nav aria-label="Social links" className="flex items-center gap-2 pt-2">
            {PROFILE.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon]
              return (
                <Button key={social.label} asChild variant="ghost" size="icon-lg">
                  <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                    <Icon className="size-4" />
                  </a>
                </Button>
              )
            })}
          </nav>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center" aria-hidden="true">
          <DotLottieReact
            src={programmingComputerUrl}
            autoplay
            loop
            className="aspect-square w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
