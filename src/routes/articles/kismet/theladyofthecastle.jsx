import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/kismet/theladyofthecastle')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/kismet/theladyofthecastle"!</div>
}
