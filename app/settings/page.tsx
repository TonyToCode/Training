'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Настройки</h1>
        <p className="text-muted-foreground">
          Управление аккаунтом и настройками приложения
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Профиль пользователя</CardTitle>
            <CardDescription>
              Управление личной информацией
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Имя пользователя</p>
                <p className="text-sm text-muted-foreground">Антон</p>
              </div>
              <Button variant="outline" size="sm">Изменить</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Тема</p>
                <p className="text-sm text-muted-foreground">Тёмная</p>
              </div>
              <Button variant="outline" size="sm">Изменить</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Данные приложения</CardTitle>
            <CardDescription>
              Экспорт и резервное копирование данных
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button>Экспорт в JSON</Button>
            <Button variant="outline">Синхронизация с облаком</Button>
            <Button variant="outline">Очистить все данные</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>О приложении</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Версия</span>
              <Badge variant="outline">1.0.0</Badge>
            </div>
            <div className="flex justify-between">
              <span>Сборка</span>
              <Badge variant="outline">Next.js 15</Badge>
            </div>
            <div className="flex justify-between">
              <span>База данных</span>
              <Badge variant="outline">Firebase</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
