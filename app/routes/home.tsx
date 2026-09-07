import type { Route } from "./+types/home";
import { Shell } from "../components/Shell";
import { Countdown } from "../components/sections/Countdown";
import { Details } from "../components/sections/Details";
import { Gallery } from "../components/sections/Gallery";
import { Hero } from "../components/sections/Hero";
import { Invitation } from "../components/sections/Invitation";
import { Rsvp } from "../components/sections/Rsvp";
import { Schedule } from "../components/sections/Schedule";
import { Story } from "../components/sections/Story";
import { couple, dateLabel, venue } from "../data/wedding";
import { parseRsvp } from "../lib/rsvp";

export function meta(_: Route.MetaArgs) {
  const title = `${couple.first} & ${couple.second} — ${dateLabel.short}`;
  return [
    { title },
    {
      name: "description",
      content: `${couple.first} and ${couple.second} are getting married on ${dateLabel.short} at ${venue.name}.`,
    },
  ];
}

/**
 * Receives the reply card. Validation lives in `lib/rsvp`; persisting the
 * reply (mail, sheet, database) is the one piece still to be wired up.
 */
export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  return parseRsvp(form);
}

export default function HomeRoute() {
  return (
    <Shell headerOverlay>
      <Hero />
      <Invitation />
      <Countdown />
      <Schedule />
      <Details />
      <Story />
      <Gallery />
      <Rsvp />
    </Shell>
  );
}
