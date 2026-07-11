import type { Route } from "./+types/home";
import { Shell } from "../components/Shell";
import { HeroContent } from "../components/HeroContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home" },
  ];
}

export default function HomeRoute() {
  return (
    <Shell>
      <HeroContent
        title="Lauren & Joe"
        description={["June 19th, 2027", "The University Club of New York"]}
      />
    </Shell>
  );
}
