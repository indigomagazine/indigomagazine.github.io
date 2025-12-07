import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "../../../pages/homepage/articles/serial/stomachache/stomachachePage";

export const Route = createFileRoute("/articles/serial/stomachache")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ArticlePage />;
}
