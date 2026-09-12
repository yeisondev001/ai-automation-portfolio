import { useState } from 'react'

type CaseStudy = {
  title: string
  description: string
  tags: string[]
  metric: string
  tone: 'amber' | 'violet' | 'blue'
}

const cases: CaseStudy[] = [
  {
    title: 'Atención inteligente',
    description: 'Un agente que clasifica mensajes, recupera contexto y deriva cada conversación.',
    tags: ['n8n', 'OpenAI', 'WhatsApp'],
    metric: '−62% tiempo de respuesta',
    tone: 'amber',
  },
  {
    title: 'Pipeline autónomo',
    description: 'Leads enriquecidos y priorizados antes de llegar al CRM de ventas.',
    tags: ['Make', 'HubSpot', 'Apollo'],
    metric: '+31% leads cualificados',
    tone: 'violet',
  },
  {
    title: 'Radar de operaciones',
    description: 'Alertas accionables cuando un proceso necesita una persona, no otra hoja de cálculo.',
    tags: ['Python', 'Slack', 'PostgreSQL'],
    metric: '24/7 con contexto',
    tone: 'blue',
  },
]

const learning = [
  ['AI Automation', 'Diseño de flujos, agentes y evaluaciones', 'En progreso'],
  ['n8n & Make', 'Integraciones robustas y mantenimiento', 'Certificación'],
  ['Prompt systems', 'Prompts versionados para tareas reales', 'Laboratorio'],
]

function App() {
  const [active, setActive] = useState<'cases' | 'studio' | 'learning'>('studio')
  const [selectedCase, setSelectedCase] = useState(0)

  const scrollTo = (section: 'cases' | 'studio' | 'learning') => {
    setActive(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('studio')} aria-label="Ir al inicio">
          <span className="brand-dot" />
          <span>Tu Nombre</span>
        </button>
        <nav aria-label="Navegación principal">
          <button onClick={() => scrollTo('cases')}>Casos</button>
          <button onClick={() => scrollTo('learning')}>Formación</button>
          <a href="mailto:tu@email.com">Contactar <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="studio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Automation studio · 2026</p>
          <h1>Diseño sistemas que <em>trabajan</em> mientras tú avanzas.</h1>
          <p className="intro">Automatizaciones de IA claras, útiles y medibles para equipos que quieren recuperar tiempo.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo('cases')}>Ver casos <span>↓</span></button>
            <button className="text-button" onClick={() => scrollTo('learning')}>Cómo trabajo <span>→</span></button>
          </div>
        </div>

        <div className="automation-stage" aria-label="Visualización de un flujo de automatización">
          <div className="stage-grid" />
          <div className="floating-card source-card">
            <span className="card-label">ENTRADA</span>
            <strong>Mensaje nuevo</strong>
            <small>Cliente · 10:42</small>
          </div>
          <div className="connection connection-one" />
          <div className="connection connection-two" />
          <div className="orchestrator">
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <div className="core-glow" />
            <div className="core-mark">AI</div>
            <p>ORQUESTADOR</p>
          </div>
          <div className="floating-card outcome-card">
            <span className="success-dot" />
            <strong>Acción resuelta</strong>
            <small>CRM actualizado</small>
          </div>
          <div className="stage-status"><i /> Sistema en ejecución</div>
        </div>
      </section>

      <section className="section cases-section" id="cases">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selección de trabajo</p>
            <h2>Casos que convierten tareas repetidas en tiempo útil.</h2>
          </div>
          <p className="section-note">Cada sistema empieza por entender el cuello de botella, no por elegir una herramienta.</p>
        </div>

        <div className="cases-layout">
          <div className="case-list" role="tablist" aria-label="Casos de automatización">
            {cases.map((item, index) => (
              <button
                className={`case-item ${selectedCase === index ? 'is-selected' : ''}`}
                key={item.title}
                onClick={() => setSelectedCase(index)}
                role="tab"
                aria-selected={selectedCase === index}
              >
                <span className={`case-index ${item.tone}`}>0{index + 1}</span>
                <span><strong>{item.title}</strong><small>{item.tags.join(' · ')}</small></span>
                <b aria-hidden="true">↗</b>
              </button>
            ))}
          </div>
          <article className={`case-preview ${cases[selectedCase].tone}`}>
            <div className="preview-top"><span>CASO 0{selectedCase + 1}</span><span>2026</span></div>
            <div className="preview-graphic">
              <i className="node node-one" /><i className="node node-two" /><i className="node node-three" />
              <span className="flow-line flow-a" /><span className="flow-line flow-b" />
            </div>
            <p className="preview-metric">{cases[selectedCase].metric}</p>
            <h3>{cases[selectedCase].title}</h3>
            <p>{cases[selectedCase].description}</p>
            <div className="tag-row">{cases[selectedCase].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        </div>
      </section>

      <section className="section method-section">
        <p className="eyebrow"><span /> Método</p>
        <div className="method-grid">
          <article><b>01</b><h3>Entender</h3><p>Mapeamos la operación y localizamos el trabajo que hoy se repite.</p></article>
          <article><b>02</b><h3>Orquestar</h3><p>Conectamos las herramientas y la IA con reglas que el equipo pueda revisar.</p></article>
          <article><b>03</b><h3>Medir</h3><p>Observamos calidad, coste y resultado para que el flujo mejore cada semana.</p></article>
        </div>
      </section>

      <section className="section learning-section" id="learning">
        <div className="section-heading"><div><p className="eyebrow"><span /> Formación continua</p><h2>Aprender es parte del sistema.</h2></div></div>
        <div className="learning-list">
          {learning.map(([title, description, status], index) => (
            <article key={title}>
              <span className="learning-icon">{['✦', '◇', '⌁'][index]}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="status-pill">{status}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>¿Tienes un proceso que no debería seguir siendo manual?</p>
        <a href="mailto:tu@email.com">Hablemos <span>↗</span></a>
        <small>© 2026 · Automation studio</small>
      </footer>

      <nav className="mobile-nav" aria-label="Navegación móvil">
        <button className={active === 'cases' ? 'active' : ''} onClick={() => scrollTo('cases')}><span>▣</span>Casos</button>
        <button className={active === 'studio' ? 'active' : ''} onClick={() => scrollTo('studio')}><span>◉</span>Estudio</button>
        <button className={active === 'learning' ? 'active' : ''} onClick={() => scrollTo('learning')}><span>✦</span>Formación</button>
      </nav>
    </main>
  )
}

export default App
