# Lumina System

Monorepo base para una web app enfocada en mobile sobre salud neurológica.

## Estructura

```text
apps/
  api/   Django 5.2 + Django REST Framework
  web/   React 19 + Vite 8 + Tailwind CSS 4
```

## Frontend

- React 19
- Vite 8
- Tailwind CSS 4
- Tema visual Lumina System cargado desde tokens CSS/Tailwind

```bash
npm --prefix apps/web install
npm run dev:web
```

## Backend

- Python 3.11+
- Django 5.2
- Django REST Framework
- django-cors-headers
- django-filter
- drf-yasg
- Pillow
- Simple JWT

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r apps/api/requirements.txt
python apps/api/manage.py migrate
python apps/api/manage.py runserver
```

## Endpoints iniciales

- `GET /api/health/`
- `POST /api/token/`
- `POST /api/token/refresh/`
- `GET /api/docs/`
- `GET /api/redoc/`
