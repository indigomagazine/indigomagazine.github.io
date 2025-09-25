import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/kismet/judas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/kismet/judas"!</div>
}
