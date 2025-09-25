import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kismet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kismet"!</div>
}
