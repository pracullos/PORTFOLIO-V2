import type { RouterContext } from '@/router'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { HireMe } from '@/components/hireme'
import { Terminal } from '@/components/terminal'
import { Toaster } from '@/components/ui/sonner'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <HireMe />
      <Terminal />
      <Toaster />
    </>
  )
}
