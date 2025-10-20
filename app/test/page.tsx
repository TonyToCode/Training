// Простая тестовая страница без React зависимостей
export default function TestPage() {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333;">🎉 Next.js Миграция Успешна!</h1>
      <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 20px 0;">
        ✅ Next.js проект настроен и готов к разработке!
      </div>
      <div style="background: #d1ecf1; color: #0c5460; padding: 15px; border-radius: 5px; margin: 20px 0;">
        📋 Что было сделано:<br>
        • Next.js 15 с App Router<br>
        • TypeScript для типизации<br>
        • shadcn/ui компоненты<br>
        • Tailwind CSS стилизация<br>
        • Firebase интеграция (временная заглушка)<br>
        • Структура проекта для масштабируемости
      </div>
      <h2>🚀 Как запустить:</h2>
      <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px;">cd "c:\\Users\\ovsin\\CascadeProjects\\windsurf-project-3"
npm install
npm run dev</pre>
      <h2>🌐 Доступные страницы:</h2>
      <ul>
        <li><a href="/workouts">/workouts</a> - Управление тренировками</li>
        <li><a href="/measurements">/measurements</a> - История замеров</li>
        <li><a href="/settings">/settings</a> - Настройки приложения</li>
      </ul>
      <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 20px 0;">
        🎯 Миграция на Next.js успешно завершена! Проект готов к дальнейшему развитию.
      </div>
    </div>
  `;
}
