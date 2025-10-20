import { NextResponse } from 'next/server'

// Временная заглушка для тестирования без Firebase
export async function GET() {
  try {
    // Возвращаем пустой массив для тестирования
    return NextResponse.json({ nutrition: [] })
  } catch (error) {
    console.error('Ошибка API маршрута:', error)
    return NextResponse.json({ nutrition: [], error: 'API route error' })
  }
}
