import { createFileRoute } from '@tanstack/react-router'
import Article from '../../../pages/homepage/articles/serial/lifeinparadise/lifeinparadise'

export const Route = createFileRoute('/articles/serial/lifeinparadise')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Article />;
}
