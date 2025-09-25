import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/NOT/inthewind')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/NOT/inthewind"!</div>
}
