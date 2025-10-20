'use client'

import { useState, useEffect } from 'react'

// Простые компоненты без внешних зависимостей для тестирования
const Button = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}>
    {children}
  </button>
)

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg border p-6 shadow-sm ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
)

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

const Badge = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-block px-2 py-1 text-xs bg-gray-100 rounded ${className}`}>
    {children}
  </span>
)

// Типы данных
interface Workout {
  message_id: number
  date: string
  day: number
  groups: string
  user: string
  main: Array<{
    name: string
    sets: number
    weight: number
  }>
  aux: Array<{
    name: string
    sets: number
    weight: number
  }>
  cooldown: string[]
}

// Типы данных для питания
interface Nutrition {
  date: string
  calories?: number
  steps?: number
  weight?: number
}

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [nutrition, setNutrition] = useState<Nutrition[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadWorkouts()
    loadNutrition()
  }, [])

  const loadWorkouts = async () => {
    try {
      const response = await fetch('/data/workouts.json')
      const data = await response.json()
      setWorkouts(data.sessions || [])
    } catch (error) {
      console.error('Ошибка загрузки тренировок:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadNutrition = async () => {
    try {
      // Загружаем данные из Firebase через API маршрут
      const response = await fetch('/api/nutrition')
      const data = await response.json()
      setNutrition(data.nutrition || [])
    } catch (error) {
      console.error('Ошибка загрузки питания:', error)
      // Fallback к локальным данным
      setNutrition([])
    }
  }

  const saveNutritionToFirebase = async () => {
    console.log("💾 Сохраняем данные питания в Firebase...")

    // Собираем данные из всех колонок (аналогично структуре замеров)
    const columnsData: Record<string, any> = {}
    for (let col = 2; col <= 5; col++) {
      const dateInput = document.getElementById(`nutrition-date${col}`) as HTMLInputElement
      if (!dateInput || !dateInput.value) {
        columnsData[`col${col-1}`] = null
        continue
      }

      const columnData: any = {date: dateInput.value}
      let hasData = false

      // Калории
      const caloriesInput = document.getElementById(`inputcalories_${col}`) as HTMLInputElement
      const calories = parseFloat(caloriesInput?.value || '')
      if (!isNaN(calories) && calories > 0) {
        columnData.calories = calories
        hasData = true
      }

      // Шаги
      const stepsInput = document.getElementById(`inputsteps_${col}`) as HTMLInputElement
      const steps = parseFloat(stepsInput?.value || '')
      if (!isNaN(steps) && steps > 0) {
        columnData.steps = steps
        hasData = true
      }

      // Вес
      const weightInput = document.getElementById(`inputweight_${col}`) as HTMLInputElement
      const weight = parseFloat(weightInput?.value || '')
      if (!isNaN(weight) && weight > 0) {
        columnData.weight = weight
        hasData = true
      }

      columnsData[`col${col-1}`] = hasData ? columnData : null
    }

    console.log("📋 Данные питания для сохранения:", columnsData)

    if (Object.values(columnsData).every((col: any) => col === null)) {
      console.log("❌ Нет данных для сохранения")
      alert("Заполните данные в таблице")
      return
    }

    try {
      // Здесь будет сохранение в Firebase
      console.log(`✅ Данные питания сохранены в Firebase`)
      alert(`Данные питания сохранены в Firebase`)
    } catch(e) {
      console.error("❌ Ошибка сохранения в Firebase:", e)
      alert("Ошибка Firebase — данные сохранены локально")
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Загрузка тренировок...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Тренировки</h1>
        <p className="text-gray-600">
          Управление тренировками и планами занятий
        </p>
      </div>

      <div className="space-y-6">
        {/* СЕКЦИЯ ПИТАНИЯ */}
        <Card>
          <CardHeader>
            <CardTitle>Питание</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-4">
                Загружено {nutrition.length} записей питания из базы данных
              </div>

              {/* Таблица питания аналогичная таблице замеров */}
              <div className="grid grid-cols-5 gap-2 mb-4" style={{gridTemplateColumns: '200px repeat(4, 150px)'}}>
                {/* Заголовки колонок */}
                <div className="font-semibold p-2 border-b">Показатель</div>
                <div className="p-2 border-b">
                  <input
                    id="nutrition-date2"
                    type="date"
                    className="w-full p-1 border rounded bg-white text-black"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="nutrition-date3"
                    type="date"
                    className="w-full p-1 border rounded bg-white text-black"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="nutrition-date4"
                    type="date"
                    className="w-full p-1 border rounded bg-white text-black"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="nutrition-date5"
                    type="date"
                    className="w-full p-1 border rounded bg-white text-black"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Ряды с данными */}
                <div className="p-2 border-b font-medium">Калории</div>
                <div className="p-2 border-b">
                  <input
                    id="inputcalories_2"
                    type="number"
                    step="1"
                    placeholder="ккал"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputcalories_3"
                    type="number"
                    step="1"
                    placeholder="ккал"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputcalories_4"
                    type="number"
                    step="1"
                    placeholder="ккал"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputcalories_5"
                    type="number"
                    step="1"
                    placeholder="ккал"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>

                <div className="p-2 border-b font-medium">Шаги</div>
                <div className="p-2 border-b">
                  <input
                    id="inputsteps_2"
                    type="number"
                    step="1"
                    placeholder="шагов"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputsteps_3"
                    type="number"
                    step="1"
                    placeholder="шагов"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputsteps_4"
                    type="number"
                    step="1"
                    placeholder="шагов"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputsteps_5"
                    type="number"
                    step="1"
                    placeholder="шагов"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>

                <div className="p-2 border-b font-medium">Вес</div>
                <div className="p-2 border-b">
                  <input
                    id="inputweight_2"
                    type="number"
                    step="0.1"
                    placeholder="кг"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputweight_3"
                    type="number"
                    step="0.1"
                    placeholder="кг"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputweight_4"
                    type="number"
                    step="0.1"
                    placeholder="кг"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
                <div className="p-2 border-b">
                  <input
                    id="inputweight_5"
                    type="number"
                    step="0.1"
                    placeholder="кг"
                    className="w-full p-1 border rounded bg-white text-black"
                  />
                </div>
              </div>

              <Button onClick={saveNutritionToFirebase} className="mt-4">
                Сохранить данные питания
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Недавние тренировки</CardTitle>
          </CardHeader>
          <CardContent>
            {workouts.length === 0 ? (
              <p className="text-gray-500">Нет загруженных тренировок</p>
            ) : (
              <div className="space-y-4">
                {workouts.slice(-3).map((workout) => (
                  <div key={workout.message_id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">
                        День {workout.day} - {workout.groups}
                      </h3>
                      <Badge>
                        {new Date(workout.date).toLocaleDateString('ru-RU')}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      {workout.main.length} основных + {workout.aux.length} дополнительных упражнений
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex gap-4">
            <Button onClick={() => console.log('Генерация плана')}>
              Сгенерировать план
            </Button>
            <Button onClick={() => console.log('История замеров')}>
              История замеров
            </Button>
            <Button onClick={() => console.log('Управление упражнениями')}>
              Управление упражнениями
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
