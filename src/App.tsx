import { useRef, useState, type PointerEvent } from 'react'
import desktopRoom from './assets/room/studio-desktop.png'
import mobileRoom from './assets/room/studio-mobile.png'

type View = 'home' | 'projects' | 'certifications' | 'about'

const projects = [
  { title: 'Asistente de ventas IA', description: 'Clasifica conversaciones, recupera contexto y prepara la siguiente acción comercial.', stack: ['n8n', 'OpenAI', 'HubSpot'], tone: 'warm' },
  { title: 'Pipeline autónomo', description: 'Convierte formularios y mensajes en leads enriquecidos, ordenados y listos para el equipo.', stack: ['Make', 'Airtable', 'Apollo'], tone: 'blue' },
  { title: 'Radar de operaciones', description: 'Detecta incidencias, resume la información y avisa a la persona correcta con contexto.', stack: ['Python', 'Slack', 'PostgreSQL'], tone: 'green' },
]

const certifications = [
  { icon: '⌘', title: 'Automatización con IA', description: 'Diseño de flujos, agentes y sistemas evaluables.', date: '2026', color: 'blue' },
  { icon: '◇', title: 'n8n & Make', description: 'Integraciones, webhooks y procesos mantenibles.', date: '2026', color: 'orange' },
  { icon: '▥', title: 'Análisis de datos con Python', description: 'Decisiones basadas en datos, no en intuición.', date: '2025', color: 'green' },
  { icon: '☁', title: 'Cloud fundamentals', description: 'Servicios cloud y arquitecturas prácticas.', date: '2025', color: 'violet' },
]

function Icon({ name }: { name: 'home' | 'folder' | 'user' | 'arrow' | 'mail' }) {
  if (name === 'home') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" /></svg>
  if (name === 'folder') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h6l1.8 2H20a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V8a1.5 1.5 0 0 1 1-1.5Z" /></svg>
  if (name === 'user') return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" /></svg>
  if (name === 'mail') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  return <span aria-hidden="true">→</span>
}

function App() {
  const [view, setView] = useState<View>('home')
  const sceneSurface = useRef<HTMLElement>(null)
  const go = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const moveCamera = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * -15
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * -10
    sceneSurface.current?.style.setProperty('--scene-x', `${x}px`)
    sceneSurface.current?.style.setProperty('--scene-y', `${y}px`)
  }
  const resetCamera = () => {
    sceneSurface.current?.style.setProperty('--scene-x', '0px')
    sceneSurface.current?.style.setProperty('--scene-y', '0px')
  }

  return (
    <main ref={sceneSurface} data-view={view} onPointerMove={moveCamera} onPointerLeave={resetCamera} className={`portfolio ${view !== 'home' ? 'is-panel-open' : ''}`}>
      <div className="room-scene" aria-hidden="true">
        <picture><source media="(max-width: 700px)" srcSet={mobileRoom} /><img src={desktopRoom} alt="" /></picture>
        <div className="scene-shade" />
        <span className="ambient-light amber-light" />
        <span className="ambient-light blue-light" />
      </div>

      <header className="site-header">
        <button className="identity" onClick={() => go('home')}><span className="identity-mark" /> <b>Tu Nombre</b></button>
        <nav>
          <button onClick={() => go('about')}><span className="certificate-glyph">▱</span><span>CV</span></button>
          <a href="mailto:tu@email.com"><Icon name="mail" /><span>Contacto</span></a>
        </nav>
      </header>

      {view === 'home' && <Home go={go} />}
      {view === 'projects' && <Projects go={go} />}
      {view === 'certifications' && <Certifications go={go} />}
      {view === 'about' && <About go={go} />}

      <nav className="dock" aria-label="Navegación del portafolio">
        <button className={view === 'projects' ? 'active' : ''} onClick={() => go('projects')}><Icon name="folder" /><span>Proyectos</span></button>
        <button className={view === 'home' ? 'active' : ''} onClick={() => go('home')}><Icon name="home" /><span>Entrada</span></button>
        <button className={view === 'about' ? 'active' : ''} onClick={() => go('about')}><Icon name="user" /><span>Sobre mí</span></button>
      </nav>
    </main>
  )
}

function Home({ go }: { go: (view: View) => void }) {
  void go
  return <section className="home-view" aria-label="Entrada del portafolio" />
}

function Back({ go }: { go: (view: View) => void }) { return <button className="back" onClick={() => go('home')}>← <span>Volver al estudio</span></button> }

function Projects({ go }: { go: (view: View) => void }) {
  return <section className="content-view"><Back go={go} /><div className="content-heading"><p className="kicker">TRABAJO SELECCIONADO</p><h1>Proyectos</h1><p>Automatizaciones pensadas para problemas reales.</p></div><div className="project-list">
    {projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><span>0{index + 1}</span><i /><i /><i /></div><div className="card-copy"><h2>{project.title}</h2><p>{project.description}</p><div>{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div></div><button className="card-arrow" aria-label={`Ver ${project.title}`}><Icon name="arrow" /></button></article>)}
  </div></section>
}

function Certifications({ go }: { go: (view: View) => void }) {
  return <section className="content-view"><Back go={go} /><div className="content-heading"><p className="kicker">FORMACIÓN CONTINUA</p><h1>Certificaciones</h1><p>Aprender, construir y mejorar en cada proyecto.</p></div><div className="certification-list">
    {certifications.map(cert => <article className="certification" key={cert.title}><span className={`cert-icon ${cert.color}`}>{cert.icon}</span><div><h2>{cert.title}</h2><p>{cert.description}</p><small>{cert.date}</small></div><span className="chevron">›</span></article>)}
  </div><blockquote>“El aprendizaje nunca se detiene.”</blockquote></section>
}

function About({ go }: { go: (view: View) => void }) {
  return <section className="content-view about-view"><Back go={go} /><div className="content-heading"><p className="kicker">SOBRE MÍ</p><h1>Construyo<br /><em>con intención.</em></h1><p>Combino desarrollo web, automatización e IA para transformar procesos complejos en experiencias simples.</p></div><div className="about-grid"><article><span>01</span><h2>Observar</h2><p>Entiendo el proceso antes de tocar una herramienta.</p></article><article><span>02</span><h2>Conectar</h2><p>Diseño sistemas claros que trabajan entre sí.</p></article><article><span>03</span><h2>Mejorar</h2><p>Mido el resultado para que cada flujo evolucione.</p></article></div></section>
}

export default App
