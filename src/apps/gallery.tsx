import { createFileRoute } from '@tanstack/react-router'

import { GallerySection } from '@/components/sections/gallery-section'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

function GalleryPage() {
  return (
    <main>
      <GallerySection />
    </main>
  )
}
