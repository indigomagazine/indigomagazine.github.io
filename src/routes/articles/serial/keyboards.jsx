import { createFileRoute } from '@tanstack/react-router'
import KeyboardsExperience from './keyboards/KeyboardsExperience'

export const Route = createFileRoute('/articles/serial/keyboards')({
  component: KeyboardsArticle,
})

function KeyboardsArticle() {
  return <KeyboardsExperience />
}

