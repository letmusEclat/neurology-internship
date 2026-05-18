const highlights = [
  {
    title: 'Experiencia mobile-first',
    description: 'Diseño pensado primero para pantallas pequeñas con navegación clara y tarjetas táctiles.',
  },
  {
    title: 'Frontend moderno',
    description: 'React 19, Vite 8 y Tailwind CSS 4 para iterar rápido y mantener una UI consistente.',
  },
  {
    title: 'API lista para crecer',
    description: 'Django REST Framework con JWT, filtros, CORS y documentación Swagger/Redoc.',
  },
]

const endpoints = [
  'GET /api/health/',
  'POST /api/token/',
  'POST /api/token/refresh/',
  'GET /api/docs/',
]

function App() {
  return (
    <main className="min-h-screen bg-background px-[var(--spacing-gutter)] py-[var(--spacing-xl)] text-on-background">
      <div className="mx-auto flex max-w-md flex-col gap-4 md:max-w-5xl md:gap-6">
        <section className="overflow-hidden rounded-xl bg-primary px-6 py-8 text-on-primary shadow-[0_20px_50px_rgba(116,91,0,0.18)]">
          <span className="mb-3 inline-flex rounded-full bg-primary-fixed px-3 py-1 text-label-md text-on-primary-fixed">
            Lumina System
          </span>
          <h1 className="text-headline-lg">Base mobile-first para una web app de neurología</h1>
          <p className="mt-4 text-body-lg text-primary-fixed">
            Monorepo inicial con frontend en React + Vite + Tailwind y backend en Django REST Framework.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-on-primary px-4 py-3 text-label-md text-primary transition hover:bg-surface"
              href="/api/docs/"
            >
              Ver API docs
            </a>
            <a
              className="rounded-full border border-primary-fixed-dim px-4 py-3 text-label-md text-on-primary transition hover:bg-primary-container hover:text-on-primary-container"
              href="https://vite.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Stack frontend
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-outline-variant bg-surface-container p-5 shadow-[0_10px_30px_rgba(33,27,15,0.08)]"
            >
              <h2 className="text-headline-md text-on-surface">{item.title}</h2>
              <p className="mt-3 text-body-md text-on-surface-variant">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-lg bg-secondary-container p-5 text-on-secondary-container">
            <p className="text-label-md text-secondary">Tema visual</p>
            <h2 className="mt-2 text-headline-md">Tokens Lumina cargados en Tailwind</h2>
            <p className="mt-3 text-body-md">
              Colores, radios, espaciados y tipografías quedaron preparados para evolucionar la experiencia de la app.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-surface-container-high'].map((swatch) => (
                <div key={swatch} className="flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <span className={`h-4 w-4 rounded-full ${swatch}`}></span>
                  <span className="text-label-md text-on-surface">{swatch.replace('bg-', '')}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg bg-tertiary-container p-5 text-on-tertiary-container">
            <p className="text-label-md text-tertiary">Backend listo</p>
            <ul className="mt-3 space-y-3 text-body-md">
              {endpoints.map((endpoint) => (
                <li key={endpoint} className="rounded-md bg-surface px-3 py-3 text-on-surface">
                  {endpoint}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
