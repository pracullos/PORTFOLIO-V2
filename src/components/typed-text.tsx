import { useEffect, useRef } from "react"
import Typed from "typed.js"

type TypedTextProps = {
  strings: string[]
  loop?: boolean
  typeSpeed?: number
  backSpeed?: number
  backDelay?: number
  showCursor?: boolean
  className?: string
}

export function TypedText({
  strings,
  loop = false,
  typeSpeed = 45,
  backSpeed = 25,
  backDelay = 1500,
  showCursor = true,
  className,
}: TypedTextProps) {
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = strings[0] ?? ""
      return
    }

    const typed = new Typed(el, {
      strings,
      loop,
      typeSpeed,
      backSpeed,
      backDelay,
      showCursor,
      cursorChar: "|",
    })

    return () => typed.destroy()
  }, [strings, loop, typeSpeed, backSpeed, backDelay, showCursor])

  return <span ref={elRef} className={className} />
}
