import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reminiscence")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/reminiscence"!</div>;
}
