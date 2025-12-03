import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "../../../pages/homepage/articles/serial/western/westernPage";

export const Route = createFileRoute("/articles/serial/western")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ArticlePage />;
}
