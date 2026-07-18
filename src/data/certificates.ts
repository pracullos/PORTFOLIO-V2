/**
 * Certificate content. Swap values here — components consume this
 * file only, so real content never touches JSX.
 */

import awsAnsUrl from "@/assets/certificates/AWS Certified Advance Networking Specialty.pdf?url"
import awsCloudPractitionerUrl from "@/assets/certificates/AWS Cloud Practitioner Essentials (1).pdf?url"
import aiAdvantageUrl from "@/assets/certificates/Diana Certificate.pdf?url"
import sindbadCertUrl from "@/assets/certificates/Sindbad Certificate.pdf?url"
import worldWideCtfUrl from "@/assets/certificates/world_wide_ctf.jpg?url"
import aiMlWebinarUrl from "@/assets/certificates/artificial intelligence machine learning.jpg?url"

export type CertificateItem = {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  fileUrl: string
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-aws-ans",
    title: "AWS Certified Advanced Networking – Specialty (ANS-C01)",
    issuer: "AWS Training & Certification",
    date: "July 15, 2026",
    description:
      "Completed the official practice question set covering advanced AWS networking architecture, hybrid connectivity, and network security.",
    fileUrl: awsAnsUrl,
  },
  {
    id: "cert-aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "July 15, 2026",
    description:
      "Completed AWS's foundational course on core cloud concepts, services, security, and pricing.",
    fileUrl: awsCloudPractitionerUrl,
  },
  {
    id: "cert-ai-advantage",
    title: "The AI Advantage: Understanding AI and Why It Matters",
    issuer: "DOST-ASTI · ACABAI-PH",
    date: "June 1, 2026",
    description:
      "Completed a module on practical AI adoption for individuals and organizations under the Advancing Computing, Analytics, Big Data and AI in the Philippines program.",
    fileUrl: aiAdvantageUrl,
  },
  {
    id: "cert-sindbad-internship",
    title: "Certificate of Internship — Developer Intern",
    issuer: "Sindbad.Tech",
    date: "May 7, 2026",
    description:
      "Completed a 486-hour developer internship at Sindbad.Tech, a fintech company based in the Kingdom of Saudi Arabia.",
    fileUrl: sindbadCertUrl,
  },
  {
    id: "cert-world-wide-ctf",
    title: "World Wide CTF 2025",
    issuer: "World Wide Flags",
    date: "July 28, 2025",
    description:
      "Participated in a jeopardy-style hacking competition testing security and problem-solving skills.",
    fileUrl: worldWideCtfUrl,
  },
  {
    id: "cert-aiml-webinar",
    title: "Artificial Intelligence / Machine Learning Webinar",
    issuer: "USAID · Asia Open RAN Academy",
    date: "December 14, 2024",
    description:
      "Attended the USAID webinar on Advancing Open RAN in Asia under the Indo-Pacific Opportunity Program (IPOP).",
    fileUrl: aiMlWebinarUrl,
  },
]
