import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/legacy/index.html");
    }
  }, []);

  return <></>;
}
