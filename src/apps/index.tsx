
import { createFileRoute } from '@tanstack/react-router'
import background from '@/assets/background1.png'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-2xl font-bold">Welcome</h1>
    </div>
  )
}
