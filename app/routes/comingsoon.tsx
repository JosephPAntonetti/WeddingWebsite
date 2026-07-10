import type { Route } from "./+types/comingsoon";
import { ComingSoon } from "../comingsoon/comingsoon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coming Soon" },
    { name: "description", content: "Coming soon" },
  ];
}

export default function ComingSoonRoute() {
  return <ComingSoon />;
}
