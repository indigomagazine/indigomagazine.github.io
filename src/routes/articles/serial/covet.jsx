import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "../../../pages/homepage/articles/serial/covet/covetPage";

export const Route = createFileRoute("/articles/serial/covet")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ArticlePage />;
}
