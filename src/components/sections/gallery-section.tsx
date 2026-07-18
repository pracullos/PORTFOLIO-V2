import { Images } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { GALLERY } from "@/data/gallery"

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

      {GALLERY.length === 0 ? (
        <Empty className="mt-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Images />
            </EmptyMedia>
            <EmptyTitle>No photos yet</EmptyTitle>
            <EmptyDescription>
              Gallery images will show up here once added.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <Card key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
              <CardContent className="flex flex-col gap-2">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                {item.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
