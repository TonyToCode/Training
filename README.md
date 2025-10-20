# Fitness Tracker - Next.js Миграция

Современное приложение для отслеживания тренировок и прогресса, мигрированное с vanilla HTML/CSS/JavaScript на Next.js 15 + TypeScript.

## 🚀 Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Типизация для лучшей разработки
- **shadcn/ui** - Компоненты на базе Radix UI
- **Tailwind CSS** - Утилитарная стилизация
- **Firebase** - База данных и аутентификация

## 📁 Структура проекта

```
fitness-tracker/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Корневой layout
│   ├── page.tsx            # Главная страница
│   ├── workouts/           # Страница тренировок
│   ├── measurements/       # Страница замеров
│   └── settings/           # Страница настроек
├── components/             # React компоненты
│   ├── ui/                 # shadcn/ui компоненты
│   └── navigation.tsx      # Навигация
├── lib/                   # Утилиты и конфигурации
│   ├── utils.ts           # Вспомогательные функции
│   └── firebase.ts        # Firebase конфигурация
├── public/                # Статические файлы
│   └── data/              # JSON данные
└── app/globals.css        # Глобальные стили
```

## 🔧 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшн версии
npm start
```

## 🔑 Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## ✨ Особенности

### 🔄 Миграция данных
- Данные тренировок мигрированы из JSON файлов
- Firebase интеграция сохранена
- Фиксированная структура хранения (col1-col4)

### 🎨 Современный UI
- Адаптивный дизайн
- Тёмная/светлая тема
- Компонентная архитектура

### 🚀 Производительность
- Server-Side Rendering
- Оптимизированная сборка
- Быстрая навигация

## 🔄 Миграция с vanilla JS

### Что изменилось:
1. **Структура**: HTML → React компоненты
2. **Стили**: Встроенные стили → Tailwind CSS
3. **Типизация**: JavaScript → TypeScript
4. **Сборка**: Нет → Next.js

### Сохранённая функциональность:
- ✅ Все данные тренировок
- ✅ Firebase интеграция
- ✅ Логика плана тренировок
- ✅ Отслеживание замеров

## 📱 Доступные страницы

- **/** - Главная страница с перенаправлением
- **/workouts** - Управление тренировками
- **/measurements** - История замеров тела
- **/settings** - Настройки приложения

## 🛠 Разработка

Проект готов для дальнейшего развития:
- Добавление новых компонентов
- Интеграция с внешними API
- Улучшение UX/UI

---

*Мигрировано с vanilla HTML/CSS/JavaScript на современный Next.js стек для лучшей производительности и поддержки.*
