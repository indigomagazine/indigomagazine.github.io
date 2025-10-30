import { createFileRoute } from "@tanstack/react-router";
import Article from "../../../pages/homepage/articles/serial/iloveshopping";

export const Route = createFileRoute("/articles/serial/iloveshopping")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Article />;
}
