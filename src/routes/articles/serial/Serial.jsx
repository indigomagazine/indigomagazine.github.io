import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/serial/Serial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/serial/Serial"!</div>
}
