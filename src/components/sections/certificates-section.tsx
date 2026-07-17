import { Award } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <div id="certificates-heading">
        <SectionHeading eyebrow="Credentials" title="Certificates" align="center" />
      </div>

      <Empty className="mt-10">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Award />
          </EmptyMedia>
          <EmptyTitle>No certificates listed</EmptyTitle>
          <EmptyDescription>Certifications will show up here once added.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
