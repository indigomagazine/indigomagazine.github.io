import { createFileRoute } from '@tanstack/react-router'
import Serial from "../../../components/serialPage"

export const Route = createFileRoute('/articles/serial/Serial')({
  component: Serial,
})

function serialPage() {
  return <Serial />;
}
