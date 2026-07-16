import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import type { QueryClient } from '@tanstack/react-query'

// Define the router context type
export interface RouterContext {
  queryClient: QueryClient
}

// Create router with context (provided via RouterProvider)
export const router = createRouter({
  routeTree,
  context: {} as RouterContext,
})

// Register the router type
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}