import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/NOT')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/NOT"!</div>
}
