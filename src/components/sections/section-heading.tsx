import { cn } from "@/lib/utils"
import { TypedText } from "@/components/typed-text"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center"
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium text-muted-foreground">{eyebrow}</span>
      ) : null}
      <h2
        aria-label={title}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        <span aria-hidden="true">
          <TypedText strings={[title]} showCursor={false} />
        </span>
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm text-muted-foreground sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
