declare module "scrollreveal" {
  interface ScrollRevealOptions {
    origin?: "top" | "bottom" | "left" | "right"
    distance?: string
    duration?: number
    delay?: number
    interval?: number
    easing?: string
    opacity?: number
    scale?: number
    reset?: boolean
    mobile?: boolean
    container?: string | Element
  }

  interface ScrollRevealObject {
    reveal(
      target: string | Element | NodeListOf<Element> | Element[],
      options?: ScrollRevealOptions
    ): ScrollRevealObject
    clean(target?: string | Element | NodeListOf<Element> | Element[]): ScrollRevealObject
    destroy(): void
  }

  function ScrollReveal(options?: ScrollRevealOptions): ScrollRevealObject

  export default ScrollReveal
}
