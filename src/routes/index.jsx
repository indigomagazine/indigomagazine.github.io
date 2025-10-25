import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Group6 from "../pages/homepage/Group6";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  component: Group6,
});

function RouteComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/legacy/index.html");
    }
  }, []);

  return <></>;
}
