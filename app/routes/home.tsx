import type { Route } from "./+types/home";
import { Shell } from "../components/Shell";
import { Countdown } from "../components/sections/Countdown";
import { Hero } from "../components/sections/Hero";
import { Invitation } from "../components/sections/Invitation";
import { couple, dateLabel, venue } from "../data/wedding";

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

export default function HomeRoute() {
  return (
    <Shell headerOverlay>
      <Hero />
      <Invitation />
      <Countdown />
    </Shell>
  );
}
