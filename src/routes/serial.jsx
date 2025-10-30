import { createFileRoute } from "@tanstack/react-router";
import Serial from "../pages/homepage/articles/serial/serialPage";

export const Route = createFileRoute("/serial")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Serial />;
}
