# TinkerHub Website

A Next.js 14 (App Router) + TypeScript + Tailwind site for a college TinkerHub chapter.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit content (no code changes needed)

| What | File |
|---|---|
| College name, tagline, links, social, join URL | `data/config.ts` |
| Team members / volunteers (network graph) | `data/team.ts` |
| Activities (workshops, hackathons, etc.) | `data/activities.ts` |
| Calendar events | `data/events.ts` |
| Gallery photos | `data/gallery.ts` |
| About cards, timeline, project showcase, home photo collage | `data/community.ts` |

To add a new activity, team member, event, or photo — just add a new object to the
matching array. Everything else (cards, filters, the calendar, the team graph) updates
automatically.

## Replacing the logo

`public/images/logo.svg` is a placeholder mark in the site's accent colors — not
TinkerHub's real logo (that's trademarked, so it isn't included here). Download the
official logo from tinkerhub.org and replace `public/images/logo.svg` with it (update
the file extension in `Navbar.tsx` and `Footer.tsx` if you use `.png` instead of `.svg`).

## Replacing images

Placeholder images live in `public/images/{collage,activities,team,gallery,showcase}/`.
Replace them with real photos of the same filename, or update the `image`/`photo`/`src`
paths in the `data/` files.

## Pages

- `/` — home (hero, photo collage, about, timeline, project showcase, join)
- `/activities` — all activities with filters + detail modal
- `/calendar` — month calendar + upcoming/past lists
- `/gallery` — filterable photo gallery with lightbox
- `/team` — interactive team network graph
- `/about` — college + community deep dive

## Notes

- If your existing project has an `app/activies/` folder (typo), delete it — this
  project uses the correctly spelled `app/activities/`.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`, so they're
  self-hosted automatically at build time — no extra setup needed, but it does require
  network access during `next build`/`next dev` the first time to fetch the font files.
