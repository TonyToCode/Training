'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Типы данных
interface Measurement {
  date: string
  waist?: number
  chest_back?: number
  arm_r?: number
  arm_l?: number
  thigh_r?: number
  thigh_l?: number
  forearm_r?: number
  forearm_l?: number
}

export default function MeasurementsPage() {
  const [measurements, setMeasurements] = useState<Measurement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMeasurements()
  }, [])

  const loadMeasurements = async () => {
    try {
      // Загружаем данные из Firebase через API маршрут
      const response = await fetch('/api/measurements')
      const data = await response.json()
      setMeasurements(data.measurements || [])
    } catch (error) {
      console.error('Ошибка загрузки замеров:', error)
      // Fallback к локальным данным
      setMeasurements([])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">История замеров</h1>
          <p className="text-muted-foreground">
            Отслеживание прогресса тела
          </p>
        </div>
        <div className="text-center">Загрузка замеров...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">История замеров</h1>
        <p className="text-muted-foreground">
          Отслеживание прогресса тела
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Таблица замеров</CardTitle>
            <CardDescription>
              Введите данные для отслеживания прогресса
            </CardDescription>
          </CardHeader>
          <CardContent>
            {measurements.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Нет сохраненных замеров
                </p>
                <p className="text-sm text-muted-foreground">
                  Введите данные в таблицу ниже и нажмите "Сохранить"
                </p>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                Загружено {measurements.length} замеров из базы данных
              </div>
            )}

            {/* Здесь будет таблица замеров */}
            <div className="mt-6 p-4 border rounded-lg bg-muted/50">
              <p className="text-center text-muted-foreground">
                Таблица замеров будет здесь (нужно мигрировать логику из старого кода)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Быстрые действия</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button>Добавить замер</Button>
            <Button variant="outline">Экспорт данных</Button>
            <Button variant="outline">Графики прогресса</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
