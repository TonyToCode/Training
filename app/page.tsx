import { redirect } from 'next/navigation'

export default function HomePage() {
  // Перенаправляем на страницу тренировок как основную
  redirect('/workouts')
}
