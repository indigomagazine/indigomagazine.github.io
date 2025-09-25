import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/kismet/giveMeASign')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/kismet/giveMeASign"!</div>
}
