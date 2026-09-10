# How This Website Is Built — A Full Walkthrough

This explains every part of the code: what it does, why it's structured this way, and
exactly what to touch when you want to change something. No prior React/Next.js
experience assumed.

---

## 1. The big picture

This is a **Next.js** website (a framework built on **React**). The core idea of React:
instead of writing HTML files, you write **components** — reusable chunks of UI written
as JavaScript functions that return HTML-like code (called JSX).

The project is split into three concerns, kept deliberately separate:

| Folder | What it holds | You'll edit this... |
|---|---|---|
| `data/` | The actual **content** — names, dates, text, image paths | ...constantly, for everyday updates |
| `components/` | Reusable **UI building blocks** — cards, nav bar, modals | ...occasionally, for design/behavior changes |
| `app/` | **Pages** — which components appear on which URL | ...rarely, mostly to add new pages |

The reason for this split: you should be able to add a new team member or event without
ever touching a component's code. The components just read whatever is in `data/` and
display it.

---

## 2. How Next.js decides what page shows at what URL

Next.js uses **folder-based routing**. Every folder inside `app/` that contains a
`page.tsx` file becomes a URL:

```
app/page.tsx              → yoursite.com/
app/activities/page.tsx   → yoursite.com/activities
app/calendar/page.tsx     → yoursite.com/calendar
app/gallery/page.tsx      → yoursite.com/gallery
app/team/page.tsx         → yoursite.com/team
app/about/page.tsx        → yoursite.com/about
```

`app/layout.tsx` is special — it wraps *every* page (that's where the Navbar and Footer
live, so they show up everywhere without repeating that code on every page).

**To add a brand new page:** create a new folder in `app/` with a `page.tsx` inside it.
Next.js automatically makes it a route — no manual configuration needed.

---

## 3. The data layer (`data/` folder) — start here for content edits

Each file exports an **array of objects** — think of it like a spreadsheet where each
row is one object with the same fields.

### `data/config.ts`
A single object (not an array) holding site-wide settings: college name, tagline, the
official TinkerHub join URL, social media links, contact email. Everything here is used
in multiple places across the site (e.g. `siteConfig.communityName` appears in the Navbar,
Hero, and Footer), so changing it once here updates it everywhere.

### `data/team.ts`
An array of team member objects. Each has a `tier` (`"lead"`, `"core"`, or `"volunteer"`)
and a `branch` (`"tech"`, `"events"`, `"community"`, etc.). The `TeamNetwork` component
reads `tier` and `branch` to automatically figure out where to draw each person on the
network graph — you never position anyone manually.

```ts
{
  id: "vol-5",                          // must be unique
  name: "New Person",
  position: "Volunteer — Tech",
  tier: "volunteer",                    // controls node size
  branch: "tech",                       // controls which core member they connect to
  bio: "One sentence about them.",
  skills: ["Python", "Design"],
  photo: "/images/team/new-person.jpg", // file must exist in public/images/team/
}
```

### `data/activities.ts`
An array of activity/event objects (workshops, hackathons, etc.), each with a nested
`details` object for the expanded modal view. Copy an existing entry and edit the fields
to add a new one.

### `data/events.ts`
Calendar-specific events. The `date` field **must** be in `"YYYY-MM-DD"` format — the
calendar component parses this string to place the event on the right day.

### `data/gallery.ts`
Photo objects with `category` and `year` — these two fields power the filter buttons on
the Gallery page automatically. Add a new category value here and it'll show up as a new
filter button without any other code changes... (see note in section 6 about `Gallery.tsx`
if you add a category not already in its filter list).

### `data/community.ts`
Several separate arrays: `aboutCards` (the "What TinkerHub Is" cards), `timeline` (the
community history section), `showcaseProjects` (the "What We've Been Building" cards),
`collagePhotos` (home page photo grid), and `tickerPhrases` (the scrolling banner text).

---

## 4. The shell: layout, fonts, and colors

### `app/layout.tsx`
This file wraps every page. It:
1. Loads the three fonts (Space Grotesk for headings, Inter for body text, JetBrains
   Mono for code-style text) using `next/font/google`.
2. Sets the page `<title>` (shown in the browser tab).
3. Renders `<Navbar />`, then whatever page you're on (`{children}`), then `<Footer />`.

### `app/globals.css`
Site-wide CSS that isn't tied to one component:
- The dotted background pattern (`.bg-tech-grid` class)
- The scroll-reveal fade-in animation (`.reveal` / `.is-visible`)
- The card-tilt hover effect (`.tilt-card`)
- Text selection color, scrollbar styling

### `tailwind.config.ts`
This project uses **Tailwind CSS** — instead of writing custom CSS files, you style
elements by adding class names directly, like `className="text-lg font-bold"`. This file
defines the *custom* names used throughout the project:

```ts
colors: {
  cream: "#FBF6EA",     // → used as bg-cream
  paper: "#262218",     // → used as text-paper
  electric: "#7C9142",  // → used as bg-electric, text-electric, border-electric
  violet: "#EA6DA0",
  cyan: "#F0904A",
  yellow: "#F0C23E",
  ...
}
```

**This is the single most important file for changing colors.** Change a hex code here,
and every place that uses `bg-electric` (or `text-electric`, `border-electric`, etc.)
across the *entire site* updates automatically. You never have to hunt through every
component to change a color by hand.

---

## 5. The components — what each one does

Every file in `components/` is one reusable piece of UI. Here's what each does and the
key logic inside it:

**`Navbar.tsx`** — The sticky top bar.
- `useState` tracks whether the mobile hamburger menu is open, and whether the page has
  been scrolled (to add a background blur once you scroll past the hero).
- `useEffect` + `window.addEventListener("scroll", ...)` is how it detects scrolling.
- Maps over `navLinks` from `data/config.ts` to render the nav items — add a link there,
  not here.

**`Hero.tsx`** — The homepage top section with the animated terminal.
- `bootLines` is a hardcoded array of strings that appear line by line.
- `useState` (`visibleLines`) + `useEffect` with `setTimeout` is the "typing" animation:
  every 480ms it reveals one more line, and once all lines are shown, it waits then
  resets to 0 and starts over (an infinite loop).
- The floating chips (`<build />`, the wiggling "!") are just positioned `absolute`
  elements with Tailwind's `animate-float` / `animate-wiggle` classes (defined in
  `tailwind.config.ts`).

**`Marquee.tsx`** — The scrolling ticker banner.
- Takes a list of phrases as a prop, duplicates the list once (`[...items, ...items]`),
  and animates it sliding left forever. Duplicating the list is what makes the loop look
  seamless — as the first copy scrolls off, the second copy is right behind it.

**`ScrollReveal.tsx`** — A wrapper component used everywhere for the fade-in-on-scroll
effect.
- Uses the browser's `IntersectionObserver` API to detect when an element scrolls into
  view, then adds a CSS class (`is-visible`) that triggers the fade-in transition defined
  in `globals.css`.
- Any content you wrap in `<ScrollReveal>...</ScrollReveal>` gets this effect for free.

**`ActivityCard.tsx`** — One activity/event card. Receives an `activity` object (from
`data/activities.ts`) as a prop and displays its fields. The `onOpen` prop is a function
passed down from the parent page — clicking "View Details" calls it to open the modal.

**`ActivityModal.tsx`** — The popup with full activity details. Only renders if an
`activity` is passed in (`if (!activity) return null`). Closes on pressing Escape or
clicking outside, handled by a `useEffect` that listens for the keydown event.

**`CalendarView.tsx`** — The month calendar grid.
- Calculates the days in the current month and which weekday the 1st falls on using
  plain JavaScript `Date` math (no external calendar library).
- Groups events from `data/events.ts` by date into a lookup object, then renders a dot
  for each event on its correct day.
- Clicking a dot opens a small popup with that event's details.

**`Gallery.tsx`** — Filterable photo grid + lightbox.
- `useState` tracks which filter is active and which image (if any) is open in the
  full-screen lightbox.
- Filtering just uses `.filter()` on the `galleryImages` array from `data/gallery.ts`
  based on the selected category or year.

**`TeamNetwork.tsx`** — The node-and-line team graph. This is the most custom logic:
- `buildLayout()` takes the flat list in `data/team.ts` and calculates an `x`/`y`
  percentage position for each person based on their `tier` and `branch`, plus draws
  connecting lines (`edges`) from each volunteer to their matching core team member, and
  from each core member to the lead.
- The positions are percentages so the layout automatically adapts to any screen size.
- Clicking a node opens their profile in a popup.

**`AboutSection.tsx`, `CommunityTimeline.tsx`, `ActivityShowcase.tsx`, `JoinSection.tsx`,
`Footer.tsx`, `PhotoCollage.tsx`** — Each simply maps over its matching array from
`data/community.ts` or `data/config.ts` and renders a card/row/section per item. If you
want to add a 7th "About" card or a 5th timeline entry, you add it to the data file and
these components render it automatically — no changes needed here.

---

## 6. The pages — how it all gets assembled

Each `page.tsx` file is short — it just imports components and lays them out in order:

```tsx
// app/page.tsx (the homepage)
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={tickerPhrases} />
      <PhotoCollage />
      <AboutSection />
      <CommunityTimeline />
      <ActivityShowcase />
      <JoinSection />
    </>
  );
}
```

Want to reorder homepage sections? Just reorder these lines. Want to remove a section
from the homepage entirely? Delete its line here (the component file itself stays
untouched, so you can bring it back later).

`app/activities/page.tsx` and `app/gallery/page.tsx` are slightly more complex because
they manage filter state (`useState` for which category is selected) and pass the
filtered list down to the card/gallery components.

---

## 7. Recurring patterns you'll see everywhere

Once these three patterns click, most of the code becomes readable:

**Mapping data to UI:**
```tsx
{activities.map((activity) => (
  <ActivityCard key={activity.id} activity={activity} />
))}
```
This means: "for every activity in the array, render one ActivityCard." `key` is a
required React bookkeeping prop — always use something unique, usually the `id` field.

**Conditional classes (styling based on state):**
```tsx
className={filter === c ? "bg-electric text-cream" : "text-muted"}
```
This means: "if this button matches the current filter, style it as active; otherwise,
style it as inactive."

**State + effect (interactivity):**
```tsx
const [open, setOpen] = useState(false);
```
`useState` gives a variable (`open`) and a function to change it (`setOpen`). Whenever
`setOpen` is called, React re-renders the component with the new value. This is behind
every toggle, filter, and modal on the site.

---

## 8. Quick reference — "I want to..."

| I want to... | Edit this file |
|---|---|
| Change the college name, tagline, or join link | `data/config.ts` |
| Add/remove a team member | `data/team.ts` |
| Add a new workshop/event to Activities | `data/activities.ts` |
| Add something to the Calendar | `data/events.ts` |
| Add a gallery photo | `data/gallery.ts` |
| Edit the About cards or timeline | `data/community.ts` |
| Change any color site-wide | `tailwind.config.ts` |
| Change fonts | `app/layout.tsx` (font imports) |
| Reorder or remove homepage sections | `app/page.tsx` |
| Change the dotted background pattern | `app/globals.css` (`.bg-tech-grid`) |
| Add a brand new page | Create a new folder + `page.tsx` in `app/` |

If you want to make a change that isn't covered by editing `data/` files, just describe
it to me and I'll tell you exactly which file and which lines to change.
