# Automated Business Solutions — Copyable Website

This archive contains the React + Vite frontend for the Automated Business Solutions AI Automation Audit booking site.

## Run locally

Install Node.js 20 or newer, then run:

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To create a production build, run `pnpm build`.

## Included integrations

The booking panel uses Calendly’s official inline widget for:

`https://calendly.com/jerryolamoyegun1/30min`

The page also includes a direct “Open in Calendly” fallback link. The contact address is `jerryolamoyegun1@gmail.com`.

## Notes

The page loads Space Grotesk, Inter, and IBM Plex Mono from Google Fonts. The local favicon is in `client/public/favicon.svg`. The visual system map and workflow graphic are CSS-generated, so no image assets are required to run the copied site.

For deployment, use a standard Vite-compatible host and configure the host to serve `client/index.html` for the root route.
