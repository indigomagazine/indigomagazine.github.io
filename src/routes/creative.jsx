import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/creative')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/creative"!</div>
}
