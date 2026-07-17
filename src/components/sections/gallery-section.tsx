import { Images } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <div id="gallery-heading">
        <SectionHeading eyebrow="Gallery" title="Snapshots" align="center" />
      </div>

      <Empty className="mt-10">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Images />
          </EmptyMedia>
          <EmptyTitle>No photos yet</EmptyTitle>
          <EmptyDescription>Gallery images will show up here once added.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
