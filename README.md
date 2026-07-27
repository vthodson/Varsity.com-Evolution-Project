# Varsity.com Evolution Project

This repository contains the working Varsity.com evolution materials: the clickable information architecture prototype, supporting strategy documentation, preview pages, and brand assets used for stakeholder review.

The production Varsity.com site is not built in this folder. The current implementation is a browser-based prototype made with HTML, CSS, and JavaScript.

## Start Here

- [Homepage Experience Preview](index.html)
- [Information Architecture Wireframe](ia-wireframe.html)
- [IA Diagram](varsity-com-ia-diagram.html)
- [IA V2 View](varsity-com-ia-v2-view.html)
- [High-Level Project Plan](varsity-com-high-level-project-plan.md)
- [Experience Notes](experience-notes.md)
- [Information Architecture Map](information-architecture-map.md)
- [Information Architecture V2](varsity-com-information-architecture-v2.md)

## Run Locally

Requirements: Node.js 18 or newer.

```powershell
node server.mjs
```

Then open:

- `http://127.0.0.1:4863/` for the homepage experience preview.
- `http://127.0.0.1:4863/ia-wireframe.html` for the interactive IA wireframe.
- `http://127.0.0.1:4863/varsity-com-ia-diagram.html` for the IA diagram.

Stop the server with `Ctrl+C` in the terminal where it is running.

## Deployment

This project is configured for Netlify as a static site. Netlify should publish the repository root with no build command.

Recommended Netlify settings:

- Build command: leave blank
- Publish directory: `.`
- Production branch: `main`

When the GitHub repository is connected to Netlify, every push to `main` should trigger a new Netlify deploy.

## Repo Hygiene

The repository should include source files, strategy documents, and reusable brand assets. It should exclude local logs, one-off deployment archives, generated preview packages, screenshots, local Netlify state, and environment files.
