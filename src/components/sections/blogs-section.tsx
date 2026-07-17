import { Newspaper } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function BlogsSection() {
  return (
    <section
      id="blogs"
      aria-labelledby="blogs-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <div id="blogs-heading">
        <SectionHeading eyebrow="Writing" title="Blogs" align="center" />
      </div>

      <Empty className="mt-10">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Newspaper />
          </EmptyMedia>
          <EmptyTitle>No posts yet</EmptyTitle>
          <EmptyDescription>Blog posts will show up here once published.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
