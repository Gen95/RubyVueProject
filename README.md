# Ruby + Vue Task Manager

## О проекте

### Возможности

- просмотр/создание/редактирование/удаление задач с необязательным присвоением категории
- изменение статуса задач
- просмотр/создание категории

## Что было изучено

### Backend

- Ruby on Rails
- REST API
- CRUD
- ActiveRecord
- Миграции
- Валидация моделей
- Связи ActiveRecord ('belongs_to', 'has_many')
- CORS

### Frontend (Vue)

- ref
- computed
- provide / inject
- emit
- v-model
- slots
- использование жизненного цикла (onMounted)
- Teleport

## Установка

### Backend (для запуска на Windows лучше использовать WSL)

1. cd backend
2. bundle install (установить зависимости)
3. sudo pg_ctlcluster 16 main start (запустить PostgreSQL)
4. bin/rails db:create (создать базу данных)
5. bin/rails db:migrate (выполнить миграции)
6. bin/rails server (запустить сервер Rails)

### Frontend

1. cd frontend (из корневой директории)
2. npm install
3. npm run dev

## Запуск backend

1. pg_isready (убедиться, что запущен PostgreSQL)
1. bin/rails server (запустить сервер Rails)

## Запуск frontend

- npm run dev