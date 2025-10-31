import { createFileRoute } from "@tanstack/react-router";
import KeyboardsExperience from "../../../pages/homepage/articles/serial/keyboards/KeyboardsExperience";

export const Route = createFileRoute("/articles/serial/keyboards")({
  component: RouteComponent,
});

function RouteComponent() {
  return <KeyboardsExperience />;
}
