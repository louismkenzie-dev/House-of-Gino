# House of Gino

Boutique dog grooming in Suffolk — marketing site built with TanStack Start, React 19, and Tailwind CSS 4.

## Development

```sh
bun install
bun run dev
```

## Build & Deploy

`bun run build` emits a Vercel Build Output API bundle in `.vercel/output` (configured via the nitro `vercel` preset in `vite.config.ts`). The project deploys to Vercel; pushes to `main` go to production.

### Environment variables

None required. The venue map uses a free OpenStreetMap embed. (`MAPBOX_PUBLIC_TOKEN` exists as an optional server function in `src/lib/mapbox.functions.ts` but is not used by the current pages.)
