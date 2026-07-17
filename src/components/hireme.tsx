import { useState, type FormEvent } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { toast } from "sonner"

import hireMeUrl from "@/assets/animations/hire_me.lottie?url"
import { PROFILE } from "@/data/portfolio"
import { useHireMeStore } from "@/stores/hireme-store"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const CONTACT_EMAIL =
  PROFILE.socials.find((social) => social.icon === "mail")?.href.replace("mailto:", "") ?? ""

export function HireMe() {
  const open = useHireMeStore((state) => state.open)
  const setOpen = useHireMeStore((state) => state.setOpen)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Hiring inquiry from ${name}`
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    toast.success("Opening your email client…")
    setOpen(false)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Hire me"
          className="fixed top-6 right-6 z-40 flex size-16 items-center justify-center rounded-full bg-card ring-1 ring-foreground/10 shadow-lg transition-transform duration-300 hover:scale-105 sm:top-8 sm:right-8"
        >
          <DotLottieReact
            src={hireMeUrl}
            autoplay
            loop
            backgroundColor="transparent"
            className="size-12"
          />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="data-[side=right]:w-full data-[side=right]:sm:max-w-[34vw]"
      >
        <SheetHeader>
          <SheetTitle>Let's work together</SheetTitle>
          <SheetDescription>
            Have a role or project in mind? Send a message and I'll get back to you.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6 overflow-y-auto px-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="hireme-name">Name</FieldLabel>
              <Input
                id="hireme-name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="hireme-email">Email</FieldLabel>
              <Input
                id="hireme-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="hireme-message">Message</FieldLabel>
              <Textarea
                id="hireme-message"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about the role or project…"
                className="min-h-32"
              />
            </Field>
          </FieldGroup>

          <SheetFooter className="mt-auto">
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
