/**
 * Gallery content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

import izoneUrl from "@/assets/gallery/izone.jpg"

export type GalleryItem = {
  id: string
  title: string
  description: string
  date: string
  imageUrl: string
}

export const GALLERY: GalleryItem[] = [
  {
    id: "izone-lunsad-2025",
    title: "LUNSAD — DOST",
    description:
      "Competed at LUNSAD, an innovation competition organized by DOST, and placed 3rd.",
    date: "April 2025",
    imageUrl: izoneUrl,
  },
]
