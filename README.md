# Sport Video PWA

Современное PWA приложение для спортивных видео, построенное на Nuxt 3 с поддержкой SSR.

## Возможности

- 🚀 **Nuxt 3** - современный Vue.js фреймворк
- 📱 **PWA** - Progressive Web Application
- 🔄 **SSR** - Server-Side Rendering
- 📊 **API интеграция** - работа с DummyJSON API
- 🐳 **Docker** - контейнеризация приложения
- 🎨 **Современный UI** - красивый и отзывчивый интерфейс

## Установка

Установите зависимости:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Сервер разработки

Запустите сервер разработки на `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Продакшн

Соберите приложение для продакшна:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Локальный предпросмотр продакшн сборки:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Docker

Соберите и запустите приложение в Docker:

```bash
# Сборка образа
docker build -t video.sport .

# Запуск контейнера
docker run -p 8000:3000 video.sport
```

## Структура проекта

```
sport.video-fe/
├── src/
│   ├── pages/           # Страницы приложения
│   │   ├── index.vue    # Главная страница
│   │   └── products/    # Страницы товаров с SSR
│   ├── components/      # Переиспользуемые компоненты
│   ├── composables/     # Vue composables
│   ├── utils/          # Утилиты и хелперы
│   ├── types/          # TypeScript типы
│   ├── styles/         # CSS стили (Tailwind CSS v4)
│   └── app.vue         # Главный layout приложения
├── public/             # Статические файлы
├── nuxt.config.ts      # Конфигурация Nuxt
└── Dockerfile          # Конфигурация Docker
```

## Технологии

- **Nuxt 3** - Vue.js фреймворк
- **Vue 3** - прогрессивный JavaScript фреймворк
- **Tailwind CSS v4** - утилитарный CSS фреймворк
- **TypeScript** - типизированный JavaScript
- **DummyJSON API** - тестовые данные
- **Docker** - контейнеризация

Для получения дополнительной информации обратитесь к [документации Nuxt](https://nuxt.com/docs/getting-started/introduction).
