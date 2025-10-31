import { createFileRoute } from "@tanstack/react-router";
import Article from "../../../pages/homepage/articles/serial/anumberoutofplace";

export const Route = createFileRoute("/articles/serial/anumberoutofplace")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Article />;
}
