import { createFileRoute } from '@tanstack/react-router'

import { BlogsSection } from '@/components/sections/blogs-section'

export const Route = createFileRoute('/blogs')({
  component: BlogsPage,
})

function BlogsPage() {
  return (
    <main>
      <BlogsSection />
    </main>
  )
}
