import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/articles/NOT/airitout")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/legacy/articles/NOT/airitout.html");
    }
  }, []);

  return <></>;
}
