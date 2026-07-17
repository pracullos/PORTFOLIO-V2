import { useEffect, useRef, useState } from "react"
import { Link } from "@tanstack/react-router"
import { Home, Award, Newspaper, FolderGit2, Images } from "lucide-react"

import terminalIcon from "@/assets/terminal.png"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type NavItem = {
  label: string
  to: "/" | "/projects" | "/certificates" | "/blogs" | "/gallery"
  icon: typeof FolderGit2
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/", icon: Home },
  { label: "Projects", to: "/projects", icon: FolderGit2 },
  { label: "Certificates", to: "/certificates", icon: Award },
  { label: "Blogs", to: "/blogs", icon: Newspaper },
  { label: "Gallery", to: "/gallery", icon: Images },
]

export function Terminal() {
  const [open, setOpen] = useState(false)
  const [spins, setSpins] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  function toggleOpen() {
    setSpins((count) => count + 1)
    setOpen((value) => !value)
  }

  return (
    <div ref={rootRef} className="fixed bottom-6 left-6 z-40 sm:bottom-8 sm:left-8">
      <div
        role="menu"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={cn(
          "absolute bottom-0 left-full ml-4 origin-bottom-left transition-all duration-300 ease-out",
          open
            ? "translate-x-0 scale-100 opacity-100"
            : "pointer-events-none -translate-x-2 scale-95 opacity-0"
        )}
      >
        <Card className="w-56 p-2">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
            >
              <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </Card>
      </div>

      <button
        ref={triggerRef}
        type="button"
        aria-label="Toggle navigation"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggleOpen}
        className="flex size-16 items-center justify-center rounded-full bg-card ring-1 ring-foreground/10 shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <img
          src={terminalIcon}
          alt=""
          aria-hidden="true"
          className="size-9 transition-transform duration-500 ease-out dark:invert"
          style={{ transform: `rotate(${spins * 360}deg)` }}
        />
      </button>
    </div>
  )
}
