# Danish Danial

A personal portfolio and notebook, built with Astro 6 and Tailwind 4. Static HTML, locally served fonts, no client-side JavaScript required.

## Develop

```sh
bun install
bun dev
```

`bun run build` builds into `dist/`. `bun run preview` serves that build. `bun run test` builds and runs the Node regression checks (Node 22.12+).

## Publish a note

Add a Markdown file under `src/pages/posts/`:

```md
---
layout: '../../layouts/PostLayout.astro'
title: 'Your title'
description: 'An optional short introduction.'
author: 'Danish Danial'
---

Your note goes here.
```

It appears automatically on `/notes/` and in the homepage’s three-entry preview. The filename becomes its `/posts/filename` URL. The old `/posts` archive redirects to `/notes/`.

`unlisted: true` excludes an entry from both lists, **but its URL remains public**. Keep private drafts outside `src/pages/`. The original `great-post.md` starter is unlisted as an example.

## Edit the site

- `src/pages/index.astro`: introduction, projects and notes preview.
- `src/pages/notes/index.astro`: notebook archive and empty state.
- `src/layouts/Layout.astro`: navigation, footer and metadata.
- `src/layouts/PostLayout.astro`: Markdown reading layout.
- `src/styles/tokens.css`: colour, type and spacing tokens.
- `src/styles/global.css`: page compositions and responsive styles.
- `DESIGN.md`: the shipped visual system.

Project copy and contact links came from https://danishdanial.my/. The supplied Catspotting repository URL returned 404 during the redesign, so it is not advertised as publicly available. Add a corrected URL and a real screenshot when available.
