import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/NOT/quietdevourment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/NOT/quietdevourment"!</div>
}
