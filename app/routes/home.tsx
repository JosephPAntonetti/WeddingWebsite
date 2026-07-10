import type { Route } from "./+types/home";
import { Page } from "../components/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home" },
  ];
}

export default function HomeRoute() {
  return <Page />;
}
