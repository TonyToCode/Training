'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  Dumbbell,
  Ruler,
  Settings,
  User
} from 'lucide-react'

const navigation = [
  {
    name: 'Главная',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Тренировки',
    href: '/workouts',
    icon: Dumbbell,
  },
  {
    name: 'Замеры',
    href: '/measurements',
    icon: Ruler,
  },
  {
    name: 'Настройки',
    href: '/settings',
    icon: Settings,
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6" />
              <span className="font-bold">Fitness Tracker</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Антон
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
