// Тестовая страница без JSX для проверки Next.js
export default function SimpleTest() {
  return {
    status: 'success',
    message: 'Next.js сервер работает!',
    timestamp: new Date().toISOString(),
    features: [
      'Next.js 15 App Router',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui components',
      'Firebase integration ready'
    ]
  };
}
