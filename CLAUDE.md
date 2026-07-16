# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Vite dev server on port 3000
pnpm typecheck    # tsc --build --noEmit
pnpm build        # tsc -b && vite build
pnpm lint         # eslint .
pnpm preview      # preview production build
```

No test runner is configured (no test script, no vitest/jest in devDependencies).

This is a standalone Vite app (`package.json` name: `web`) — there is no `pnpm-workspace.yaml` and no monorepo root above it.

## Path Alias

`@/` resolves to `src/` (set in both `vite.config.ts` `resolve.alias` and `tsconfig.app.json`/`tsconfig.json` `paths`). Keep both in sync if it ever changes.

## File-Based Routing

TanStack Router scans `src/apps/` (not the default `src/routes/`), configured via `tanstackRouter({ routesDirectory: './src/apps', ... })` in `vite.config.ts`. The generated `src/routeTree.gen.ts` is auto-generated — never edit it manually; it regenerates on the next `pnpm dev`/build when files under `src/apps/` change.

## Bootstrap Chain

`main.tsx` → `AppProviders` (`src/provider/AppProviders.tsx`, creates the `queryClient` and wraps `QueryClientProvider`) → `RouteWithContext` (`src/provider/RouterWithContext.tsx`, wraps `RouterProvider`, passing `{ queryClient }` as router context) → `router` (`src/router.ts`, combines the generated route tree with `RouterContext`) → `src/apps/__root.tsx` (root route, currently just renders `<Outlet />`) → leaf routes such as `src/apps/index.tsx`.

`RouterContext` (`src/router.ts`) currently only has a `queryClient` field — there is no auth/RBAC context wired in.

## shadcn Components

`components.json` config: style `radix-nova`, base color `neutral`, icon library `lucide`, CSS at `src/index.css`. Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`. The full shadcn primitive set (accordion through tooltip) is already generated under `src/components/ui/`. Add more with:

```bash
pnpm dlx shadcn@latest add <component>
```

## Current State: Minimal Starter, No Auth/RBAC

This is a fresh starter (see `git log`) — no auth, RBAC, layouts, or page directories exist yet. There is no `src/layouts/`, `src/pages/`, or `src/context/`, and no `@saas/*` package anywhere in the tree. `src/apps/index.tsx` is a placeholder "Welcome" page and `src/apps/__root.tsx` just renders `<Outlet />`. If you see references elsewhere (docs, memory, old branches) to `@saas/types`, `PolicyEngine`, or role-guard gating in `beforeLoad`, treat them as describing a future/other codebase, not this one — verify against the actual files before building on top of them.

## Known Duplicates

`src/hooks/use-mobile.ts` and `src/hooks/use-mobile.tsx` both exist with slightly different implementations (one uses `matchMedia`, the other a `resize` listener). Confirm which one is actually imported before editing either.
