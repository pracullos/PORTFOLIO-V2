import { createFileRoute } from '@tanstack/react-router'

import { CertificatesSection } from '@/components/sections/certificates-section'

export const Route = createFileRoute('/certificates')({
  component: CertificatesPage,
})

function CertificatesPage() {
  return (
    <main>
      <CertificatesSection />
    </main>
  )
}
