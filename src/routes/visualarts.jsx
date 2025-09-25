import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visualarts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/visualarts"!</div>
}
