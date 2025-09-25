import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/reminiscence/helovesme')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/reminiscence/helovesme"!</div>
}
