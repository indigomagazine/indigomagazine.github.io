import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "./covet/covetPage";

export const Route = createFileRoute("/articles/serial/covet")({
  component: ArticlePage
})

function covetArticle() {
  return <ArticlePage />
}

