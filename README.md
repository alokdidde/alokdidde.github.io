# alokdidde.github.io

Alok Didde's personal site and blog. The public site is built with Astro and deployed to GitHub Pages; writing is managed in a standalone Sanity Studio.

## Project structure

```text
alokdidde.github.io/
├── studio/   # Sanity Studio and blog schema
└── web/      # Astro site
```

The Studio and web app intentionally remain separate. Each has its own dependencies and commands.

## Run the Astro site

Requires Node.js 22.12 or newer.

```bash
cd web
npm install
npm run dev
```

The site opens at `http://localhost:4321`. Published posts are read from Sanity project `f7bffmxv`, dataset `production`. If the dataset has no published posts, the article in `web/src/content/blog` is used as a starter fallback.

Useful checks:

```bash
cd web
npm run check
npm run build
npm run preview
```

## Run the Sanity Studio

```bash
cd studio
npm install
npm run dev
```

The Studio opens at `http://localhost:3333`. Log in with an account that can access project `f7bffmxv`.

After changing the schema, update the deployed schema and generated Astro types:

```bash
cd studio
npx sanity login
npm run setup:cors
npm run deploy:schema
npm run typegen
```

The generated query types are written to `web/sanity.types.ts` and are committed with the app.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds `web/` and deploys it on:

- pushes to `master`;
- manual workflow runs;
- a `sanity-publish` repository dispatch; and
- a three-hour schedule, so published CMS changes are eventually rebuilt even without a webhook.

The Sanity project and dataset have safe public defaults in the workflow. These optional repository variables can override them under **Settings → Secrets and variables → Actions → Variables**:

| Variable | Default |
| --- | --- |
| `PUBLIC_SANITY_PROJECT_ID` | `f7bffmxv` |
| `PUBLIC_SANITY_DATASET` | `production` |
| `SITE_URL` | `https://alokdidde.github.io` |

Choose **GitHub Actions** as the Pages source under **Settings → Pages**.

For immediate rebuilds after publishing, configure a Sanity webhook that calls GitHub's `repository_dispatch` endpoint with event type `sanity-publish`. Keep the GitHub token only in the webhook authorization header. The scheduled build is the simpler no-token fallback.

## Custom domain

The build currently targets `https://alokdidde.github.io`. When `alokdidde.com` is ready to move from Vercel, add `web/public/CNAME`, update `SITE_URL` and DNS, then enable HTTPS in GitHub Pages.
