import { Award, ExternalLink } from "lucide-react"

import { CERTIFICATES } from "@/data/portfolio"
import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

      {CERTIFICATES.length === 0 ? (
        <Empty className="mt-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Award />
            </EmptyMedia>
            <EmptyTitle>No certificates listed</EmptyTitle>
            <EmptyDescription>Certifications will show up here once added.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CERTIFICATES.map((certificate) => (
            <Card
              key={certificate.id}
              className="transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {certificate.date}
                </Badge>
                <CardTitle className="text-base leading-snug">{certificate.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {certificate.description}
                </p>
              </CardContent>

              <CardFooter className="justify-end border-none bg-transparent px-4 pb-4">
                <Button asChild variant="ghost" size="sm">
                  <a href={certificate.fileUrl} target="_blank" rel="noreferrer">
                    View certificate
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
