import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/reminiscence/therestaurant')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/reminiscence/therestaurant"!</div>
}
