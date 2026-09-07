# Lauren & Joe

The wedding site: a black and white, old-photograph take on the invitation,
built with React Router (SSR) and Mantine.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # react-router typegen + tsc
npm run build      # production build into ./build
npm run start      # serve the production build
```

Docker works too:

```bash
docker build -t wedding-website .
docker run -p 3000:3000 wedding-website
```

## Editing the wedding

Almost everything a guest reads lives in **`app/data/wedding.ts`** — the names,
the date, the venue, the schedule, the questions, the photographs. Change it
there and every page follows; the components take no hard-coded copy.

Photographs go in `assets/` and are imported into `app/data/wedding.ts`. They
are developed to black and white in CSS, so colour originals can be dropped in
as they are. The gallery currently reads the one available frame at six
different crops — add more imports to `gallery` and the mosaic picks them up.

## How it is put together

```
app/
  theme.ts              Mantine theme: the ink/paper palette and the three fonts
  styles/global.css     grain, the black-and-white filter, reveal + form styles
  data/wedding.ts       all copy, dates, photographs and navigation
  lib/rsvp.ts           reply-card validation, independent of the router
  components/
    ui/                 the reusable vocabulary (see below)
    sections/           one file per band of the home page
    Shell.tsx           header, navigation drawer and footer chrome
    Logo.tsx            the "Lauren & Joe" wordmark
    Monogram.tsx        the initials, boxed or bare
    FaqList.tsx         the ruled question list
    Footer.tsx
  routes/
    home.tsx            composes the sections, receives the reply card
    faq.tsx             the questions
    error.tsx           the shared error boundary
```

### The design vocabulary

Every page is assembled from `app/components/ui`:

| Component | What it is |
| --- | --- |
| `Section` | a full-width band; sets the panel colour and publishes its tone |
| `Panel` | a card that carries its own tone, for dark plates on the ivory page |
| `SectionHeading` | eyebrow, title, script flourish and rule |
| `Eyebrow` | small tracked capitals |
| `ScriptText` | the calligraphic accent |
| `BodyText` | running serif copy with a capped measure |
| `Rule` | a hairline, optionally broken by a diamond |
| `ActionButton` | the only button: square, tracked, inverts on hover |
| `Field` | a form control ruled like a reply card |
| `PhotoFrame` | a photograph at a fixed ratio |
| `PhotoBackdrop` | a full-bleed photograph with a scrim over it |
| `Reveal` | fades its children in as they scroll into view |

Sections do not choose colours. A `Section` (or `Panel`) declares itself
`paper` or `ink`, and every primitive inside reads the matching palette from
`components/ui/tone.ts`. That is what lets the same button, rule and heading
sit on ivory and on near-black without a second set of props.

## Still to wire up

`action` in `app/routes/home.tsx` validates a reply and hands back the result,
but nothing is stored yet — that is where a mailer, a spreadsheet write or a
database call belongs.

`assets/maincontent.jpg` is a 13 MB original straight off the camera. It is
worth resizing (and exporting a `webp`) before the site goes live.
