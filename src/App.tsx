import { useEffect, useRef, useState } from 'react'
import './archive.css'
import './mobile.css'
import './editorial-mobile.css'
import './project-covers.css'
import './air-draw.css'
import './navigation.css'
import './scene-framing.css'
import './case-study.css'
import './collection.css'
import './about.css'
import './performance.css'
import './first-impression.css'
import entryDesktop from './assets/room/studio-desktop-v2.webp'
import entryMobile from './assets/room/studio-mobile-v2.webp'
import automationDesktop from './assets/cinematic/automation-desk-desktop-v2.webp'
import automationMobile from './assets/cinematic/automation-desk-mobile-v2.webp'
import aboutDesktop from './assets/cinematic/about-window-desktop-v2.webp'
import aboutMobile from './assets/cinematic/about-chair-mobile-v2.webp'
import archiveDesktop from './assets/cinematic/project-archive-desktop-v1.webp'
import archiveMobile from './assets/cinematic/project-archive-mobile-v1.webp'
import duralonIcon from './assets/projects/duralon-app/duralon-app-icon-v2.webp'
import duralonCatalogStory from './assets/projects/duralon-app/duralon-catalog-story-v1.webp'
import duralonProductStory from './assets/projects/duralon-app/duralon-product-story-v1.webp'
import duralonOrderStory from './assets/projects/duralon-app/duralon-order-story-v1.webp'
import duralonSectionsStory from './assets/projects/duralon-app/duralon-sections-story-v1.webp'
import duralonAccountStory from './assets/projects/duralon-app/duralon-account-story-v1.webp'
import legalInforme from './assets/projects/legal-system/legal-system-informe-v3.webp'
import legalArchivo from './assets/projects/legal-system/legal-system-archivo-v3.webp'
import legalAudiencia from './assets/projects/legal-system/legal-system-audiencia-v3.webp'
import legalCobros from './assets/projects/legal-system/legal-system-cobros-v3.webp'
import airDrawDemo from './assets/projects/air-draw/air-draw-demo.webp'
import airDrawLeaderboard from './assets/projects/air-draw/air-draw-leaderboard-v1.png'
import jojoDemo from './assets/projects/jojo-fan-hub/jojo-demo.webp'
import toolboxDemo from './assets/projects/toolbox/toolbox-demo.webp'
import inventoryAccess from './assets/projects/inventory/inventory-access.webp'
import wmsLogin from './assets/projects/wms-materia-prima/wms-login-v1.png'
import wmsDashboard from './assets/projects/wms-materia-prima/wms-dashboard-v1.png'
import calidadWelcome from './assets/projects/calidad-app/calidad-welcome-v1.webp'
import calidadDashboard from './assets/projects/calidad-app/calidad-dashboard-v2.png'
import calidadReports from './assets/projects/calidad-app/calidad-reports-v2.png'
import calidadProcess from './assets/projects/calidad-app/calidad-process-v1.png'
import calidadOrder from './assets/projects/calidad-app/calidad-order-v2.png'
import jfEfficiency from './assets/projects/jf-produccion/jf-efficiency-v2.webp'
import jfLossAnalysis from './assets/projects/jf-produccion/jf-loss-analysis-v1.webp'
import jfQuality from './assets/projects/jf-produccion/jf-quality-v1.webp'
import jfLogin from './assets/projects/jf-produccion/jf-login-v1.webp'
import ojoSafeDemo from './assets/projects/ojosafe/ojosafe-demo.webp'
import bluewavePipeline from './assets/projects/bluewave/bluewave-pipeline-v1.webp'
import bluewaveWorkflows from './assets/projects/bluewave/bluewave-workflows-v1.webp'
import bluewaveExecutionLog from './assets/projects/bluewave/bluewave-execution-log-v1.webp'
import bluewaveVideoPoster from './assets/projects/bluewave/bluewave-video-poster.jpg'
import { copy, englishProjects, type Language, type ProjectLocale } from './portfolio-copy'

type View = 'home' | 'projects' | 'archive' | 'about'
type Project = { id: string; number: string; title: string; eyebrow: string; description: string; challenge: string; outcome: string; proof: string; status: string; repository?: string; appStore?: string; googlePlay?: string; privateCode?: boolean; role?: string; icon?: string; visual?: 'quality' | 'materials' | 'production'; cardCover?: { src: string; alt: string; orientation: 'landscape' | 'portrait' }; screenshots?: { src: string; alt: string }[]; video?: { src: string; poster: string }; galleryEyebrow?: string; galleryLabel?: string; galleryLayout?: 'mobile' | 'desktop' | 'demo'; stack: string[]; tone: 'amber' | 'blue' | 'green'; flow: string[]; impactContext?: string; impactStatus?: string; impact?: { title: string; detail: string }[] }

const catalogProjects: Project[] = [
  { id: 'legal-docs', number: '01', eyebrow: 'AUTOMATIZACIÓN JURÍDICA · IMPACTO REAL', title: 'Solicitudes legales', description: 'Recupera aproximadamente cinco horas de trabajo cada semana para una oficina de abogados al automatizar la preparación de solicitudes y documentos.', challenge: 'El equipo legal invertía tiempo profesional en redactar documentos repetitivos, completar campos variables y comprobar una y otra vez el formato institucional.', outcome: 'Los abogados recuperan cerca de cinco horas semanales, preparan solicitudes con mayor rapidez y pueden dedicar más tiempo al análisis jurídico y a sus clientes.', proof: 'Automatización actualmente en funcionamiento dentro de una oficina de abogados. Estandariza cinco tipos de solicitudes y entrega documentos listos para revisión profesional.', status: 'Sistema en funcionamiento', repository: 'https://github.com/yeisondev001/sistema-de-solicitudes-legales', cardCover: { src: legalInforme, alt: 'Formulario automatizado de una solicitud jurídica', orientation: 'landscape' }, screenshots: [{ src: legalInforme, alt: 'Formulario del sistema para una nueva solicitud de informe técnico al Catastro' }, { src: legalArchivo, alt: 'Formulario del sistema para solicitar una copia certificada de expediente' }, { src: legalAudiencia, alt: 'Formulario automatizado para preparar un reporte de audiencia' }, { src: legalCobros, alt: 'Formulario del sistema para verificar cuentas o pagos' }], galleryEyebrow: 'SISTEMA EN OPERACIÓN', galleryLabel: '4 FLUJOS REALES · DATOS DEMO', galleryLayout: 'desktop', stack: ['Python', 'Flet', 'python-docx'], tone: 'amber', flow: ['Datos del caso', 'Validación automática', 'Documento preparado', 'Revisión profesional'], impactContext: 'IMPACTO EN LA OFICINA', impact: [{ title: '≈5 horas recuperadas', detail: 'por semana para el equipo legal' }, { title: 'Menos trabajo manual', detail: 'en redacción y digitación repetitiva' }, { title: 'Mayor consistencia', detail: 'en formatos y solicitudes' }, { title: 'Más enfoque jurídico', detail: 'en casos, estrategia y clientes' }] },
  { id: 'duralon-orders', number: '02', eyebrow: 'MOBILE + ERP · EN PRODUCCIÓN', title: 'Plásticos Duralón', description: 'Canal B2B 24/7 que convierte pedidos por teléfono y WhatsApp en órdenes trazables, conectadas automáticamente con el ERP.', challenge: 'Los clientes mayoristas dependían de llamadas y WhatsApp. Sus precios vivían en el ERP, no había visibilidad inmediata de existencias y el equipo debía digitar cada pedido de nuevo.', outcome: 'La app y el portal muestran catálogo, precios por cliente y estado de cada pedido. Las órdenes llegan al ERP sin duplicados, incluso cuando una conexión se interrumpe.', proof: 'Producto activo en Android, iOS y web. Sincroniza 1,205 códigos de precio cada 30 minutos y procesa eventos de operación sin exponer información corporativa.', status: 'Disponible en iOS y Android', appStore: 'https://apps.apple.com/app/id6805665865', googlePlay: 'https://play.google.com/store/apps/details?id=com.plasticosduralon.app', privateCode: true, role: 'Desarrollo full-stack: experiencia móvil y web, backend, integración con ERP, publicación en tiendas y mantenimiento.', icon: duralonIcon, cardCover: { src: duralonCatalogStory, alt: 'Campaña visual de catálogo disponible 24 horas de Duralón', orientation: 'portrait' }, screenshots: [{ src: duralonCatalogStory, alt: 'Campaña visual de Duralón con catálogo disponible 24 horas' }, { src: duralonProductStory, alt: 'Detalle de producto en la aplicación móvil de Duralón' }, { src: duralonOrderStory, alt: 'Pedido con cotización y confirmación en Duralón' }, { src: duralonSectionsStory, alt: 'Secciones organizadas del catálogo de Duralón' }, { src: duralonAccountStory, alt: 'Cuenta, pedidos y cotizaciones disponibles en Duralón' }], galleryEyebrow: 'PRODUCTO EN PRODUCCIÓN', galleryLabel: 'RECORRIDO REAL DE LA APLICACIÓN', galleryLayout: 'mobile', stack: ['iOS', 'Android', 'ERP privado'], tone: 'blue', flow: ['Precios por cliente', 'Cliente prepara pedido', 'Validación y reintento', 'ERP recibe la orden'], impactContext: 'IMPACTO EN LA EMPRESA', impact: [{ title: '≈RD$120 M', detail: 'procesados en 40 pedidos B2B y traslados internos' }, { title: '1,205 códigos', detail: 'de precio sincronizados cada 30 minutos' }, { title: '0 pedidos atascados', detail: 'con reintentos automáticos e idempotencia' }, { title: '3 plataformas', detail: 'Android, iOS y web conectadas al ERP' }] },
  { id: 'inventory', number: '06', eyebrow: 'OPERACIONES SAAS', title: 'Inventario multi-tienda', description: 'Centraliza productos, almacenes y movimientos para varias tiendas sin mezclar sus datos.', challenge: 'Operar múltiples clientes desde una sola plataforma manteniendo seguridad, roles y aislamiento por tienda.', outcome: 'Una API multi-tenant con autenticación JWT, permisos por rol y trazabilidad de movimientos de inventario.', proof: 'Incluye API documentada, pruebas, migraciones, despliegue con Docker y paneles separados para cada rol.', status: 'Repositorio disponible', repository: 'https://github.com/yeisondev001/Inventario', cardCover: { src: inventoryAccess, alt: 'Acceso al sistema de inventario Shelf', orientation: 'landscape' }, screenshots: [{ src: inventoryAccess, alt: 'Pantalla de acceso de Shelf, sistema de gestión de inventario' }], galleryEyebrow: 'INTERFAZ DEL PRODUCTO', galleryLabel: 'ACCESO SEGURO · SISTEMA MULTI-TIENDA', galleryLayout: 'desktop', stack: ['.NET 8', 'SQL Server', 'JWT'], tone: 'green', flow: ['Usuario se autentica', 'Tenant se identifica', 'Movimiento se registra', 'Stock se actualiza'] },
  { id: 'calidad-app', number: '03', eyebrow: 'CALIDAD INDUSTRIAL · EN PRODUCCIÓN', title: 'Calidad App', description: 'Digitaliza el control de calidad de inyección: reemplaza hojas de papel por muestreos trazables desde equipos Zebra y un tablero en tiempo real.', challenge: 'Las pruebas se anotaban en papel: no había trazabilidad de orden, máquina, auditor ni hora. Además, el equipo de calidad no sabía qué máquina debía revisar a continuación.', outcome: 'Cada muestreo queda ligado a la orden, producto, máquina y auditor. El plan diario prioriza lo que toca revisar, oculta máquinas detenidas y permite responder a desviaciones con evidencia.', proof: 'En operación desde septiembre de 2026: 2,724 muestreos digitales, control de 38 máquinas y un tablero web para seguimiento de calidad en tiempo real.', status: 'Sistema privado en producción', privateCode: true, role: 'Diseño y desarrollo integral de la solución móvil y web: flujo de muestreo, trazabilidad, reconocimiento facial, alertas e indicadores.', cardCover: { src: calidadDashboard, alt: 'Panel operativo de Calidad App con órdenes y seguimiento diario', orientation: 'portrait' }, screenshots: [{ src: calidadWelcome, alt: 'Acceso de Calidad App con reconocimiento facial y usuario de paradas' }, { src: calidadDashboard, alt: 'Panel de calidad con órdenes asignadas y seguimiento de planta' }, { src: calidadReports, alt: 'Informes de calidad con estados y trazabilidad de órdenes' }, { src: calidadProcess, alt: 'Control del proceso de inyección e impresión en Calidad App' }, { src: calidadOrder, alt: 'Detalle de una orden con rondas de piso y laboratorio' }], galleryEyebrow: 'SISTEMA EMPRESARIAL EN PRODUCCIÓN', galleryLabel: 'CALIDAD APP · RECORRIDO REAL', galleryLayout: 'mobile', stack: ['Zebra TC52', 'Calidad', 'Sistema privado'], tone: 'amber', flow: ['Orden identifica contexto', 'Auditor registra muestra', 'Evidencia y firma', 'Tablero prioriza acción'], impactContext: 'IMPACTO MEDIDO · SEP–OCT 2026', impactStatus: 'EN PRODUCCIÓN', impact: [{ title: '2,724 muestreos', detail: 'digitales en poco más de un mes' }, { title: '×25 uso semanal', detail: 'de 72 a 1,837 muestreos' }, { title: '38 máquinas', detail: 'y 168 órdenes con trazabilidad' }, { title: '12 retenciones', detail: 'abiertas y resueltas con evidencia' }] },
  { id: 'wms-materia-prima', number: '04', eyebrow: 'WMS · OPERACIÓN INDUSTRIAL', title: 'WMS materia prima', description: 'Da trazabilidad a la materia prima desde la recepción hasta la máquina mediante QR, silos, mezclas y requisiciones.', challenge: 'No había una forma confiable de saber dónde estaba cada saco o paleta, qué contenía cada silo ni con qué materiales se preparaba una mezcla.', outcome: 'Cada paleta se identifica con QR, las mezclas se registran por tandas y las requisiciones obligan a documentar el motivo del consumo o faltante.', proof: 'Sistema web y Android con escáner, impresión de QR en Zebra y registros que permiten rastrear recepción, movimiento, mezcla y consumo operativo.', status: 'Sistema privado en producción', privateCode: true, role: 'Diseño y desarrollo de la solución web y Android, trazabilidad con QR, flujos de mezcla, requisiciones e integración con la operación de planta.', cardCover: { src: wmsDashboard, alt: 'Panel operativo del WMS de materia prima de Duralón', orientation: 'portrait' }, screenshots: [{ src: wmsLogin, alt: 'Acceso al WMS de materia prima de Duralón' }, { src: wmsDashboard, alt: 'Panel del WMS con recepción, movimientos y órdenes operativas' }], galleryEyebrow: 'SISTEMA EMPRESARIAL EN PRODUCCIÓN', galleryLabel: 'WMS MATERIA PRIMA · RECORRIDO REAL', galleryLayout: 'mobile', stack: ['Flutter', 'QR', 'Sistema privado'], tone: 'blue', flow: ['Recepción identifica paleta', 'Movimiento actualiza ubicación', 'Mezcla registra tandas', 'Máquina consume trazable'], impactContext: 'IMPACTO OPERATIVO', impactStatus: 'EN PRODUCCIÓN', impact: [{ title: 'QR por paleta', detail: 'rastreable desde recepción hasta máquina' }, { title: 'Silos visibles', detail: 'con composición estimada por referencia' }, { title: 'Mezclas por tanda', detail: 'con ticket y paletas de origen' }, { title: 'Merma visible', detail: 'en requisiciones, devoluciones y reproceso' }] },
  { id: 'jf-produccion', number: '05', eyebrow: 'PRODUCCIÓN · SISTEMA INTERNO', title: 'JFProducción', description: 'Unifica ERP, planta y gerencia en una sola fuente para corregir datos, medir eficiencia y explicar pérdidas.', challenge: 'Las órdenes se duplicaban, los materiales de producción quedaban mal asignados y los indicadores de planta no coincidían con el informe de gerencia.', outcome: 'El sistema valida cambios contra el ERP, corrige reglas de materiales y muestra eficiencia, paradas, ciclo alto y desperdicio por máquina, motivo y orden.', proof: 'Sistema web activo para producción, calidad y gerencia. Incluye historial de correcciones, permisos en vivo, vista móvil, pantalla para piso y exportación a Excel.', status: 'Sistema privado en producción', privateCode: true, role: 'Desarrollo integral de sincronización ERP, reglas de producción, tableros de eficiencia y pérdidas, trazabilidad, pruebas automatizadas e integración de IA de solo lectura.', cardCover: { src: jfEfficiency, alt: 'Tablero de eficiencia del sistema de producción', orientation: 'landscape' }, screenshots: [{ src: jfEfficiency, alt: 'Tablero de eficiencia con indicadores por planta, impresión y ensamble' }, { src: jfLossAnalysis, alt: 'Análisis de pérdidas con ciclos altos, paradas y desperdicio' }, { src: jfQuality, alt: 'Resumen de calidad con rondas, conformidad y muestreo' }, { src: jfLogin, alt: 'Acceso al Sistema de Producción de Duralón' }], galleryEyebrow: 'SISTEMA EMPRESARIAL EN PRODUCCIÓN', galleryLabel: 'PRODUCCIÓN · RECORRIDO REAL', galleryLayout: 'desktop', stack: ['Vue 3', 'Firebase', 'ERP'], tone: 'green', flow: ['ERP sincroniza cambios', 'Reglas validan producción', 'Tableros explican pérdidas', 'Gerencia decide con datos'], impactContext: 'IMPACTO MEDIDO', impactStatus: 'EN PRODUCCIÓN', impact: [{ title: '1,510 órdenes', detail: 'duplicadas, unificadas' }, { title: '5,919 materiales', detail: 'corregidos en hojas de producción' }, { title: '4,630 → 1,077', detail: 'diferencias de catálogo reducidas' }, { title: '32,750 kg', detail: 'de existencias recuperadas en pantalla' }] },
]
const primaryProjectIds = ['duralon-orders', 'legal-docs', 'calidad-app', 'wms-materia-prima', 'jf-produccion']
const projects = primaryProjectIds.map(id => catalogProjects.find(project => project.id === id)).filter((project): project is Project => Boolean(project))
// BlueWave va en séptimo lugar de la Colección, justo después de JF Producción.
const archiveProjects: Project[] = [
  ...catalogProjects,
  { id: 'bluewave-ghl', number: '11', eyebrow: 'AUTOMATIZACIÓN CRM · GOHIGHLEVEL', title: 'BlueWave Plumbing', description: 'Sistema de captación y seguimiento en GoHighLevel para una empresa de plomería: responde al instante, agenda estimados y pide reseñas sin trabajo manual.', challenge: 'Los negocios de servicios pierden clientes porque nadie responde ni da seguimiento a tiempo, y cada mensaje, recordatorio y reseña depende de que alguien se acuerde.', outcome: 'Cada solicitud crea el contacto, lo etiqueta, lo califica y lo mete al pipeline; sale un correo con el enlace para agendar, la oportunidad avanza sola y otro flujo recupera las citas perdidas.', proof: 'Demo build para una plomería ficticia en Tampa con 4 técnicos. Cada flujo se probó con un contacto ficticio y se revisaron sus registros de ejecución paso a paso; así se encontraron y corrigieron 4 errores antes de entregar.', status: 'Demo build · GoHighLevel', role: 'Diseño y construcción completos en GoHighLevel: pipeline, formularios, calendario, campos, etiquetas, plantillas, 8 workflows y pruebas con registros de ejecución.', cardCover: { src: bluewaveWorkflows, alt: 'Lista de los 8 workflows de BlueWave publicados en GoHighLevel', orientation: 'landscape' }, screenshots: [{ src: bluewaveWorkflows, alt: 'Los 8 workflows de BlueWave publicados en GoHighLevel' }, { src: bluewavePipeline, alt: 'Pipeline principal de BlueWave con sus etapas y probabilidades' }, { src: bluewaveExecutionLog, alt: 'Registro de ejecución de un workflow probado con un contacto ficticio' }], video: { src: '/videos/bluewave-demo.mp4', poster: bluewaveVideoPoster }, galleryEyebrow: 'DEMO BUILD EN GOHIGHLEVEL', galleryLabel: 'WORKFLOWS · PIPELINE · REGISTROS', galleryLayout: 'desktop', stack: ['GoHighLevel', 'Workflows', 'CRM'], tone: 'blue', flow: ['Formulario de solicitud', 'Contacto etiquetado y calificado', 'Estimado agendado', 'Reseña y reactivación'], impactContext: 'ALCANCE DEL SISTEMA', impactStatus: 'DEMO BUILD', impact: [{ title: '8 workflows', detail: 'publicados y probados' }, { title: '7 etapas', detail: 'de lead nuevo a reactivación' }, { title: '14 plantillas', detail: '10 SMS y 4 correos' }, { title: '4 errores', detail: 'encontrados y corregidos con los logs' }] },
  { id: 'air-draw', number: '07', eyebrow: 'HOBBY · VISIÓN POR COMPUTADORA', title: 'Air Draw', description: 'Juego experimental que detecta la mano con cámara y permite dibujar figuras en el aire para puntuarlas con geometría.', challenge: 'Crear una experiencia de interacción gestual fluida sin entrenar un modelo propio para reconocer los trazos.', outcome: 'Una demo web y de escritorio que sigue el índice, suaviza el trazo y puntúa círculo, triángulo, cuadrado, espiral y flor.', proof: 'Proyecto hobby publicado con dos implementaciones: Python + OpenCV para escritorio y JavaScript + Canvas para navegador. La cámara se procesa localmente y el tablero registra puntuaciones de quienes lo prueban.', status: 'Repositorio disponible', repository: 'https://github.com/yeisondev001/air-draw', screenshots: [{ src: airDrawDemo, alt: 'Demostración animada de Air Draw detectando una mano y trazando figuras' }, { src: airDrawLeaderboard, alt: 'Tablero de puntajes de Air Draw con partidas registradas' }], galleryEyebrow: 'DEMO DEL PROYECTO', galleryLabel: 'CÁMARA LOCAL · TABLERO DE PUNTAJES', galleryLayout: 'demo', stack: ['MediaPipe', 'OpenCV', 'Canvas', 'Geometría'], tone: 'blue', flow: ['Cámara local', '21 landmarks', 'Trazo suavizado', 'Puntuación 0–100'], impactContext: 'EXPERIMENTO TÉCNICO', impact: [{ title: '40+ personas', detail: 'han probado la experiencia' }, { title: 'Dos versiones', detail: 'web y escritorio' }, { title: '21 landmarks', detail: 'detectados por MediaPipe' }, { title: 'Cámara local', detail: 'sin enviar frames a un servidor' }] },
  { id: 'jojo-fan-hub', number: '08', eyebrow: 'HOBBY · APP MÓVIL FLUTTER', title: 'JoJoFanHub', description: 'Aplicación móvil interactiva sobre Phantom Blood que reúne contenido, multimedia y un minijuego de batalla por turnos.', challenge: 'Unificar navegación, contenido multimedia y una experiencia de juego con animaciones coherentes dentro de una aplicación móvil.', outcome: 'Una app en Flutter con navegación persistente, transiciones Hero, reproductores de video y una batalla con estados, Hamon y ataques especiales.', proof: 'Proyecto académico publicado para Android y web. La demo muestra la interfaz, las animaciones y el flujo de juego de principio a fin.', status: 'Repositorio disponible', repository: 'https://github.com/yeisondev001/JoJoFanHub', screenshots: [{ src: jojoDemo, alt: 'Demostración animada de JoJoFanHub' }], galleryEyebrow: 'DEMO DE LA APLICACIÓN', galleryLabel: 'FLUTTER · ANIMACIONES · MULTIMEDIA', galleryLayout: 'demo', stack: ['Flutter', 'Dart', 'Media', 'UI Motion'], tone: 'amber', flow: ['Hub de contenido', 'Navegación Hero', 'Multimedia', 'Batalla por turnos'], impactContext: 'EXPLORACIÓN MÓVIL', impact: [{ title: 'Flutter', detail: 'aplicación móvil y web' }, { title: '8 pantallas', detail: 'con estado preservado' }, { title: 'Multimedia', detail: 'video y contenido integrado' }, { title: 'Juego', detail: 'sistema de batalla por turnos' }] },
  { id: 'toolbox', number: '09', eyebrow: 'HOBBY · UTILIDADES CON APIS', title: 'Caja de Herramientas', description: 'Aplicación Flutter que reúne siete utilidades conectadas a APIs públicas dentro de una experiencia con animaciones y feedback háptico.', challenge: 'Transformar un conjunto de utilidades independientes en una experiencia móvil memorable, clara y táctil.', outcome: 'Una caja de herramientas interactiva con CustomPainter, sonidos generados por código y módulos para clima, Pokémon, universidades y más.', proof: 'Proyecto hobby publicado en Flutter. La demo presenta la apertura de la caja, las tarjetas animadas y las herramientas conectadas a servicios externos.', status: 'Repositorio disponible', repository: 'https://github.com/yeisondev001/toolbox', screenshots: [{ src: toolboxDemo, alt: 'Demostración animada de Caja de Herramientas' }], galleryEyebrow: 'DEMO DE LA APLICACIÓN', galleryLabel: 'FLUTTER · APIS · CUSTOMPAINTER', galleryLayout: 'demo', stack: ['Flutter', 'APIs', 'CustomPainter', 'UX Motion'], tone: 'green', flow: ['Caja interactiva', 'Tarjetas animadas', 'API externa', 'Resultado útil'], impactContext: 'EXPLORACIÓN DE UX', impact: [{ title: '7 utilidades', detail: 'en una sola aplicación' }, { title: '6 APIs', detail: 'conectadas en tiempo real' }, { title: 'CustomPainter', detail: 'gráficos vectoriales propios' }, { title: 'Feedback', detail: 'sonido y vibración háptica' }] },
  { id: 'ojosafe', number: '10', eyebrow: 'VISIÓN POR COMPUTADORA · SEGURIDAD INDUSTRIAL', title: 'OjoSafe', description: 'MVP de visión por computadora que identifica casco y chaleco de seguridad en cámara o video para detectar incumplimientos de EPP.', challenge: 'Convertir una señal de cámara en evidencia útil para seguridad industrial, filtrando detecciones irrelevantes y evitando alertas por eventos momentáneos.', outcome: 'Analiza cada escena con YOLO, distingue EPP correcto de infracciones y espera una falta sostenida antes de guardar evidencia o preparar una alerta.', proof: 'MVP técnico publicado: funciona con webcam, archivos de video y cámaras RTSP; incluye HUD de cumplimiento, registro SQLite y soporte de alertas por Telegram.', status: 'MVP técnico · repositorio disponible', repository: 'https://github.com/yeisondev001/OjoSafe', screenshots: [{ src: ojoSafeDemo, alt: 'Demostración animada de OjoSafe: detecta la falta de casco, cambia a cumplimiento al ponerlo y envía la alerta a Telegram' }], galleryEyebrow: 'DEMO DEL PROYECTO', galleryLabel: 'WEBCAM EN VIVO · ALERTA EN TELEGRAM', galleryLayout: 'demo', stack: ['Python', 'YOLOv8', 'OpenCV', 'Telegram'], tone: 'amber', flow: ['Video o cámara', 'YOLO detecta EPP', 'Infracción sostenida', 'Alerta y evidencia'], impactContext: 'CAPACIDADES DEL MVP', impactStatus: 'MVP TÉCNICO', impact: [{ title: 'Casco + chaleco', detail: 'detección de EPP por persona' }, { title: 'Tiempo real', detail: 'webcam, video o RTSP' }, { title: 'Umbral de alerta', detail: 'evita avisos por eventos fugaces' }, { title: 'Trazabilidad', detail: 'captura y registro SQLite' }] },
]

// Un solo orden para todo el sitio (los cinco sistemas principales primero), así cada proyecto tiene el mismo número en Proyectos y en Colección.
const projectOrder = [...primaryProjectIds, ...archiveProjects.map(project => project.id).filter(id => !primaryProjectIds.includes(id))]
const projectNumber = (id: string) => String(projectOrder.indexOf(id) + 1).padStart(2, '0')

function localizeProject(project: Project, language: Language): Project {
  if (language === 'es') return project
  const translation: ProjectLocale | undefined = englishProjects[project.id]
  if (!translation) return project
  const { cardCoverAlt, screenshotAlts, ...fields } = translation
  return {
    ...project,
    ...fields,
    cardCover: project.cardCover ? { ...project.cardCover, alt: cardCoverAlt ?? project.cardCover.alt } : undefined,
    screenshots: project.screenshots?.map((screenshot, index) => ({ ...screenshot, alt: screenshotAlts?.[index] ?? screenshot.alt })),
  }
}

function Icon({ name }: { name: 'home' | 'folder' | 'user' | 'arrow' | 'mail' | 'close' | 'github' | 'link' | 'spark' | 'download' | 'apple' | 'play' }) {
  const props = { viewBox: '0 0 24 24', 'aria-hidden': true }
  if (name === 'home') return <svg {...props}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" /></svg>
  if (name === 'folder') return <svg {...props}><path d="M3.5 6.5h6l1.8 2H20a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V8a1.5 1.5 0 0 1 1-1.5Z" /></svg>
  if (name === 'user') return <svg {...props}><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" /></svg>
  if (name === 'mail') return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  if (name === 'close') return <svg {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>
  if (name === 'github') return <svg {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1.1.1-1.6-.5-2.2 2.1-.2 4.4-1 4.4-5a3.9 3.9 0 0 0-1.1-2.7 3.6 3.6 0 0 0-.1-2.7s-.8-.3-2.8 1.1a9.7 9.7 0 0 0-5 0C8.9 5.2 8.1 5.5 8.1 5.5A3.6 3.6 0 0 0 8 8.2a3.9 3.9 0 0 0-1.1 2.7c0 4 2.3 4.8 4.4 5-.6.6-.6 1.3-.6 2.2V22" /></svg>
  if (name === 'link') return <svg {...props}><path d="M10 14a4.5 4.5 0 0 0 6.4.1l2.1-2.1a4.5 4.5 0 0 0-6.4-6.4L11 6.7" /><path d="M14 10a4.5 4.5 0 0 0-6.4-.1l-2.1 2.1a4.5 4.5 0 0 0 6.4 6.4l1.1-1.1" /></svg>
  if (name === 'spark') return <svg {...props}><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" /></svg>
  if (name === 'download') return <svg {...props}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M4 20h16" /></svg>
  if (name === 'apple') return <svg viewBox="0 0 384 512" aria-hidden="true" style={{ fill: 'currentColor', stroke: 'none' }}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 80.5 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.7-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.6-89-61.6-91.2zM260.2 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
  if (name === 'play') return <svg viewBox="0 0 512 512" aria-hidden="true" style={{ fill: 'currentColor', stroke: 'none' }}><path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.8 25.3 35.3v441.3c0 15.5 8.7 28.5 21.7 35.3l256.4-256L47 0zm425.6 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18.1-14.3 18.1-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
  return <span aria-hidden="true">→</span>
}

function ScenePhoto({ desktop, mobile, active, name }: { desktop: string; mobile: string; active: boolean; name: string }) {
  return <picture className={`scene-photo scene-photo-${name} ${active ? 'is-active' : ''}`} style={{ '--scene-backdrop': `url(${desktop})` } as React.CSSProperties} aria-hidden={!active}><source media="(max-width: 700px)" srcSet={mobile} /><img src={desktop} alt="" /><span className={`scene-vignette vignette-${name}`} /></picture>
}

// Cada vista y cada proyecto tienen su propia URL: el botón atrás funciona y se pueden compartir enlaces directos.
const viewPaths: Record<View, string> = { home: '/', projects: '/proyectos', archive: '/coleccion', about: '/sobre-mi' }
const projectPath = (id: string) => `/proyecto/${id}`
type Route = { view: View; projectId: string | null }
type HistoryState = { view?: View; inApp?: boolean } | null

function readRoute(): Route {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const projectId = path.match(/^\/proyecto\/([\w-]+)$/)?.[1]
  if (projectId && archiveProjects.some(project => project.id === projectId)) {
    // Si el proyecto se abrió dentro del sitio se conserva la vista de fondo; en un enlace directo se elige la más lógica.
    const fallback: View = projects.some(project => project.id === projectId) ? 'projects' : 'archive'
    return { view: (window.history.state as HistoryState)?.view ?? fallback, projectId }
  }
  const view = (Object.keys(viewPaths) as View[]).find(key => viewPaths[key] === path) ?? 'home'
  return { view, projectId: null }
}

function savedLanguage(): Language {
  try { return localStorage.getItem('portfolio-language') === 'es' ? 'es' : 'en' } catch { return 'en' }
}

function App() {
  const [route, setRoute] = useState<Route>(readRoute)
  const { view, projectId } = route
  const [language, setLanguage] = useState<Language>(savedLanguage)
  const text = copy[language]
  const localizedProjects = projects.map(project => localizeProject(project, language))
  const localizedArchiveProjects = archiveProjects.map(project => localizeProject(project, language))
  const selected = projectId ? localizedArchiveProjects.find(project => project.id === projectId) ?? null : null
  const pageTitle = selected?.title ?? { home: '', projects: text.nav.projects, archive: text.nav.collection, about: text.nav.about }[view]

  useEffect(() => {
    // Normaliza la entrada inicial (rutas desconocidas vuelven al inicio) y guarda la vista para el botón atrás.
    const initial = readRoute()
    const canonical = initial.projectId ? projectPath(initial.projectId) : viewPaths[initial.view]
    window.history.replaceState({ view: initial.view }, '', canonical + window.location.hash)
    const onPopState = () => setRoute(readRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.meta.description)
    try { localStorage.setItem('portfolio-language', language) } catch { /* Sin almacenamiento el idioma solo dura la visita. */ }
  }, [language, text.meta.description])

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · Yeison Rojas` : 'Yeison Rojas · Software Engineer'
  }, [pageTitle])

  const go = (next: View) => {
    if (next !== view || projectId) window.history.pushState({ view: next }, '', viewPaths[next])
    setRoute({ view: next, projectId: null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // Contacto vive al final de "Sobre mí": se cambia de vista y luego se desplaza a la tarjeta.
  const goContact = () => {
    window.history.pushState({ view: 'about' }, '', `${viewPaths.about}#contacto`)
    setRoute({ view: 'about', projectId: null })
    // Si el desplazamiento suave no arranca (por ejemplo, sin cuadros pintados todavía), se salta directo a la tarjeta.
    window.setTimeout(() => {
      const card = document.getElementById('contacto')
      if (!card) return
      const start = window.scrollY
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      window.setTimeout(() => { if (window.scrollY === start) card.scrollIntoView({ behavior: 'instant', block: 'center' }) }, 450)
    }, 80)
  }
  const openProject = (project: Project) => {
    window.history.pushState({ view, inApp: true }, '', projectPath(project.id))
    setRoute({ view, projectId: project.id })
  }
  // Si el proyecto se abrió desde el sitio, cerrar equivale a volver atrás; si llegó por enlace directo, se reemplaza la URL.
  const closeProject = () => {
    if ((window.history.state as HistoryState)?.inApp) { window.history.back(); return }
    window.history.replaceState({ view }, '', viewPaths[view])
    setRoute({ view, projectId: null })
  }
  const isProjects = view === 'projects' || view === 'archive'
  const siteLinks = [
    { id: 'projects', label: text.nav.projects, active: view === 'projects', onClick: () => go('projects') },
    { id: 'archive', label: text.nav.collection, active: view === 'archive', onClick: () => go('archive') },
    { id: 'about', label: text.nav.about, active: view === 'about', onClick: () => go('about') },
    { id: 'contact', label: text.nav.contact, active: false, onClick: goContact },
  ]
  const tabs = [
    { id: 'home', icon: 'home' as const, label: text.nav.home, active: view === 'home', onClick: () => go('home') },
    { id: 'projects', icon: 'folder' as const, label: text.nav.projects, active: isProjects, onClick: () => go('projects') },
    { id: 'about', icon: 'user' as const, label: text.nav.about, active: view === 'about', onClick: () => go('about') },
    { id: 'contact', icon: 'mail' as const, label: text.nav.contact, active: false, onClick: goContact },
  ]
  return <main className={`portfolio scene-${view}`}>
    <div className="scene-stage"><ScenePhoto name="entry" desktop={entryDesktop} mobile={entryMobile} active={view === 'home'} /><ScenePhoto name="projects" desktop={automationDesktop} mobile={automationMobile} active={view === 'projects'} /><ScenePhoto name="archive" desktop={archiveDesktop} mobile={archiveMobile} active={view === 'archive'} /><ScenePhoto name="about" desktop={aboutDesktop} mobile={aboutMobile} active={view === 'about'} /><div className="ambient-light amber-light" /><div className="ambient-light blue-light" /><div className="film-grain" /></div>
    <header className="site-header"><button className="identity" onClick={() => go('home')} aria-label={text.header.home}><span className="identity-mark" /><b>YEISON ROJAS</b><small>SOFTWARE ENGINEER</small></button><nav className="site-nav" aria-label={text.nav.aria}>{siteLinks.map(link => <button key={link.id} type="button" className={link.active ? 'is-active' : ''} aria-current={link.active ? 'page' : undefined} onClick={link.onClick}>{link.label}</button>)}</nav><div className="header-actions" aria-label={text.header.links}><a className="header-github" href="https://github.com/yeisondev001" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><button className="language-toggle" type="button" onClick={() => setLanguage(current => current === 'en' ? 'es' : 'en')} aria-label={text.header.language} aria-pressed={language === 'es'}><span className={language === 'en' ? 'is-active' : ''}>EN</span><i aria-hidden="true" /><span className={language === 'es' ? 'is-active' : ''}>ES</span></button><a className="cv-download" href="/cv/YeisonRojasCV.pdf" download="YeisonRojasCV.pdf"><Icon name="download" /><span>CV</span></a></div></header>
    {view === 'home' && <Home go={go} openProject={openProject} featured={localizedProjects[0]} text={text} />}{view === 'projects' && <Projects go={go} openProject={openProject} projects={localizedProjects} text={text} />}{view === 'archive' && <Archive openProject={openProject} projects={localizedArchiveProjects} text={text} />}{view === 'about' && <About text={text} projects={localizedArchiveProjects} openProject={openProject} />}
    {!selected && <nav className="tab-bar" aria-label={text.nav.aria}>{tabs.map(tab => <button key={tab.id} type="button" className={tab.active ? 'is-active' : ''} aria-current={tab.active ? 'page' : undefined} onClick={tab.onClick}><Icon name={tab.icon} /><span>{tab.label}</span></button>)}</nav>}
    {selected && <ProjectDialog project={selected} close={closeProject} text={text} />}
  </main>
}

// La entrada resume el valor sin hacer clic: rol, cifras y el proyecto destacado.
function Home({ go, openProject, featured, text }: { go: (view: View) => void; openProject: (project: Project) => void; featured?: Project; text: typeof copy.en }) {
  const home = text.home
  const featuredCover = featured?.cardCover ?? featured?.screenshots?.[0]
  // La tarjeta destacada muestra un resultado que no esté ya en las cifras de arriba, para no repetirlo.
  const compact = (value: string) => value.replace(/\s/g, '')
  const repeatsStat = (title: string) => text.about.stats.some(stat => compact(title).startsWith(compact(stat.value)) && !/^[\d.,]/.test(compact(title).slice(compact(stat.value).length)))
  const featuredImpact = featured?.impact?.find(item => !repeatsStat(item.title)) ?? featured?.impact?.[0]
  return <section className="home-view" aria-label={home.aria}><figure className="mobile-home-hero"><picture><source media="(max-width: 700px)" srcSet={entryMobile} /><img src={entryDesktop} alt={home.imageAlt} /></picture><figcaption>{home.caption}</figcaption></figure><div className="intro-card"><p className="kicker">{home.kicker}</p><h1>{home.lead}<br /><em>{home.accent}</em></h1><p>{home.body}</p><dl className="home-stats">{text.about.stats.map(stat => <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}</dl><button className="text-action" onClick={() => go('projects')}>{home.action} <Icon name="arrow" /></button>{featured && <button type="button" className="home-featured" onClick={() => openProject(featured)}>{featuredCover && <img src={featuredCover.src} alt="" />}<span><small>{home.featured}</small><b>{featured.title}</b>{featuredImpact && <em>{featuredImpact.title} {featuredImpact.detail}</em>}</span><Icon name="arrow" /></button>}</div><button className="scene-hotspot home-project-link" onClick={() => go('projects')}><span><Icon name="spark" /></span><b>{home.station}</b><small>{home.stationHint}</small></button><p className="scene-hint">{home.hint} <span>•</span> {home.hintEnd}</p></section> }
function SceneMoment({ desktop, mobile, caption }: { desktop: string; mobile: string; caption: string }) { return <figure className="scene-moment"><picture><source media="(max-width: 700px)" srcSet={mobile} /><img src={desktop} alt="" /></picture><figcaption>{caption}</figcaption></figure> }
function Projects({ go, openProject, projects, text }: { go: (view: View) => void; openProject: (project: Project) => void; projects: Project[]; text: typeof copy.en }) { const content = text.projects; return <section className="content-view projects-view"><SceneMoment desktop={automationDesktop} mobile={automationMobile} caption={content.caption} /><div className="content-heading"><p className="kicker">{content.kicker}</p><h1>{content.lead}<br /><em>{content.accent}</em></h1><p>{content.body}</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard project={project} key={project.id} index={index} open={() => openProject(project)} text={text} />)}</div><button className="all-projects-action" onClick={() => go('archive')}><span><Icon name="spark" /></span><div><small>{content.allKicker}</small><b>{content.all}</b></div><Icon name="arrow" /></button></section> }
// Categoría de cada proyecto para los filtros de Colección.
type Category = 'production' | 'labs' | 'hobby'
const projectCategory: Record<string, Category> = { 'duralon-orders': 'production', 'legal-docs': 'production', 'calidad-app': 'production', 'wms-materia-prima': 'production', 'jf-produccion': 'production', inventory: 'labs', ojosafe: 'labs', 'bluewave-ghl': 'labs', 'air-draw': 'hobby', 'jojo-fan-hub': 'hobby', toolbox: 'hobby' }

function Archive({ openProject, projects, text }: { openProject: (project: Project) => void; projects: Project[]; text: typeof copy.en }) {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const ordered = [...projects].sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id))
  const filters = (['all', 'production', 'labs', 'hobby'] as const).map(id => ({ id, label: text.archive.filters[id], count: id === 'all' ? ordered.length : ordered.filter(project => projectCategory[project.id] === id).length }))
  const visible = filter === 'all' ? ordered : ordered.filter(project => projectCategory[project.id] === filter)
  return <section className="content-view archive-view">
    <SceneMoment desktop={archiveDesktop} mobile={archiveMobile} caption={text.archive.caption} />
    <div className="content-heading">
      <p className="kicker">{text.archive.kicker}</p>
      <h1>{text.archive.lead}<br /><em>{text.archive.accent}</em></h1>
      <p>{text.archive.body}</p>
    </div>
    <div className="collection-filters" role="group" aria-label={text.archive.filterLabel}>{filters.map(item => <button key={item.id} type="button" className={filter === item.id ? 'is-active' : ''} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label} <span>{item.count}</span></button>)}</div>
    <div className="collection-grid">{visible.map((project, index) => { const preview = project.cardCover ?? project.screenshots?.[0]; return <article className={`collection-tile ${project.tone}`} key={project.id} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}><button onClick={() => openProject(project)} aria-label={`${text.common.open} ${project.title}`}><div className="collection-preview">{preview && <img src={preview.src} alt="" loading="lazy" />}<span>{projectNumber(project.id)}</span></div><p>{project.eyebrow}</p><h2>{project.title}</h2>{project.impact ? <strong>{project.impact[0].title}</strong> : <small>{project.stack.join(' · ')}</small>}<Icon name="arrow" /></button></article> })}</div>
  </section>
}
function ProjectCard({ project, index, open, text }: { project: Project; index: number; open: () => void; text: typeof copy.en }) { const cover = project.cardCover; const featured = index === 0 && project.impact; return <article className={`project-card project-${project.id} ${project.tone} ${featured ? 'is-featured' : ''}`} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}><button className="project-click-target" onClick={open} aria-label={`${text.common.open} ${project.title}`} /><div className={`project-art ${cover ? `has-cover is-${cover.orientation}` : project.icon ? 'with-icon' : project.visual ? `is-system visual-${project.visual}` : ''}`}><span>{projectNumber(project.id)}</span>{cover ? <CoverRotation project={project} cover={cover} index={index} /> : project.icon ? <img src={project.icon} alt="" /> : project.visual ? <div className="system-signal" aria-hidden="true"><i /><i /><i /><b>{project.status}</b></div> : <><i /><i /><i /></>}</div><div className="card-copy"><p className="card-eyebrow">{project.eyebrow}</p><h2>{project.title}</h2>{!featured && project.impact && <strong className="card-metric">{project.impact[0].title}</strong>}<p>{project.description}</p>{featured && <dl className="card-impact">{project.impact!.slice(0, 2).map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.detail}</dd></div>)}</dl>}<div>{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div></div><span className="card-arrow"><Icon name="arrow" /></span></article> }
// La portada de la tarjeta rota entre las capturas del proyecto; cada tarjeta arranca desfasada para no cambiar todas a la vez.
function CoverRotation({ project, cover, index }: { project: Project; cover: NonNullable<Project['cardCover']>; index: number }) {
  const slides = [cover, ...(project.screenshots ?? []).filter(screenshot => screenshot.src !== cover.src)]
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer = 0
    const start = window.setTimeout(() => { setActive(current => (current + 1) % slides.length); timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 4200) }, 2600 + index * 900)
    return () => { window.clearTimeout(start); window.clearInterval(timer) }
  }, [slides.length, index])
  return <>{slides.map((slide, slideIndex) => <img key={slide.src} src={slide.src} alt={slideIndex === active ? slide.alt : ''} aria-hidden={slideIndex !== active} className={slideIndex === active ? 'is-active' : ''} loading={slideIndex ? 'lazy' : undefined} />)}</>
}
// Proyectos del puesto actual: se abren desde el bloque «Ahora» de Sobre mí.
const currentJobProjects = ['duralon-orders', 'calidad-app', 'wms-materia-prima', 'jf-produccion']
const contactEmail = 'yeisonrojas03@gmail.com'

function About({ text, projects, openProject }: { text: typeof copy.en; projects: Project[]; openProject: (project: Project) => void }) {
  const about = text.about
  const built = currentJobProjects.map(id => projects.find(project => project.id === id)).filter((project): project is Project => Boolean(project))
  // "Escríbeme" abre el programa de correo, que muchos equipos no tienen configurado; copiar el correo siempre funciona.
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contactEmail); setCopyState('copied') } catch { setCopyState('failed') }
    window.setTimeout(() => setCopyState('idle'), 2400)
  }
  return <section className="content-view about-view"><SceneMoment desktop={aboutDesktop} mobile={aboutMobile} caption={about.caption} />
    <div className="content-heading"><p className="kicker">{about.kicker}</p><h1>{about.lead}<br /><em>{about.accent}</em></h1><p>{about.body}</p></div>
    {/* El puesto actual vive en la trayectoria (sin repetirlo en un bloque aparte) y enlaza a los sistemas construidos allí. */}
    <section className="timeline about-timeline"><p className="detail-label">{about.timeline}</p>{about.experience.map((job, index) => <article key={job.period} className={index === 0 ? 'is-current' : ''}>{index === 0 ? <p className="about-now-label"><i /> {about.now} · {job.period}</p> : <small>{job.period}</small>}<h2>{job.title}{'place' in job && <span> · {job.place}</span>}</h2>{index === 0 ? <div className="about-now-systems"><p className="detail-label">{about.nowSystems}</p><div>{built.map(project => <button key={project.id} type="button" onClick={() => openProject(project)}>{project.title} <Icon name="arrow" /></button>)}</div></div> : <p>{job.body}</p>}</article>)}</section>
    <section className="stack-block about-stack"><p className="detail-label">{about.stack}</p><div>{about.stackGroups.map(group => <article key={group.label}><b>{group.label}</b><p>{group.items}</p></article>)}</div></section>
    <div className="contact-card about-actions" id="contacto"><div><p className="kicker">{about.contact}</p><h2>{about.contactTitle}</h2></div><div className="about-actions-buttons"><a className="is-primary" href="mailto:yeisonrojas03@gmail.com"><Icon name="mail" /> {about.contactAction}</a><button type="button" onClick={copyEmail} aria-live="polite"><Icon name="link" /> {copyState === 'copied' ? about.copied : copyState === 'failed' ? contactEmail : about.copyEmail}</button><a href="/cv/YeisonRojasCV.pdf" download="YeisonRojasCV.pdf"><Icon name="download" /> {about.cv}</a><a href="https://www.linkedin.com/in/yeison-rojas-henriquez/" target="_blank" rel="noreferrer"><Icon name="link" /> LinkedIn</a></div></div>
  </section>
}
function ProjectDialog({ project, close, text }: { project: Project; close: () => void; text: typeof copy.en }) {
  const dialog = useRef<HTMLElement>(null)
  const closeRef = useRef(close)
  useEffect(() => { closeRef.current = close })
  // Al abrir, el foco entra al modal; Escape lo cierra, Tab no se escapa a la página de atrás y al cerrar vuelve a la tarjeta.
  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    dialog.current?.querySelector<HTMLElement>('.dialog-close')?.focus({ preventScroll: true })
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); return }
      if (event.key !== 'Tab' || !dialog.current) return
      const focusable = [...dialog.current.querySelectorAll<HTMLElement>('a[href], button, video[controls]')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.removeEventListener('keydown', onKeyDown); previous?.focus({ preventScroll: true }) }
  }, [])
  return <div className="dialog-backdrop" role="presentation" onMouseDown={close}><article ref={dialog} className={`project-dialog ${project.impact ? 'has-impact' : ''}`} role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={event => event.stopPropagation()}><header><div><p className="kicker">{project.eyebrow}</p><h2 id="project-title">{project.title}</h2></div><button className="dialog-close" onClick={close} aria-label={text.common.close}><Icon name="close" /></button></header><p className="dialog-description">{project.description}</p>{project.video && <section className="project-video"><p className="detail-label">{text.dialog.video}</p><video controls preload="none" playsInline poster={project.video.poster} src={project.video.src} /></section>}{project.screenshots && <AppGallery project={project} text={text} />}<ol className="case-study"><li className="case-challenge"><span>01</span><p className="detail-label">{text.dialog.caseChallenge}</p><p>{project.challenge}</p></li><li className="case-built"><span>02</span><p className="detail-label">{text.dialog.caseBuilt}</p><p>{project.role ?? project.proof}</p></li><li className="case-result"><span>03</span><p className="detail-label">{text.dialog.caseResult}</p><p>{project.outcome}</p></li></ol>{project.impact && <section className="impact-showcase"><div className="impact-heading"><p className="detail-label">{project.impactContext ?? text.dialog.impact}</p><span><i /> {project.impactStatus ?? text.dialog.active}</span></div><div className="impact-grid">{project.impact.map(item => <article key={item.title}><strong>{item.title}</strong><small>{item.detail}</small></article>)}</div></section>}<Flow flow={project.flow} tone={project.tone} text={text} />{project.role && <section className="demo-frame"><div className="demo-topbar"><i /><i /><i /><span>{text.common.evidence}</span></div><p>{project.proof}</p></section>}<footer className="project-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer"><span><Icon name="github" /> {text.dialog.repository}</span></a>}{project.appStore && <a href={project.appStore} target="_blank" rel="noreferrer"><span><Icon name="apple" /> App Store</span></a>}{project.googlePlay && <a href={project.googlePlay} target="_blank" rel="noreferrer"><span><Icon name="play" /> Google Play</span></a>}{project.privateCode ? <span><Icon name="spark" /> {text.dialog.private}</span> : <span><Icon name="spark" /> {project.status}</span>}</footer></article></div>
}
function AppGallery({ project, text }: { project: Project; text: typeof copy.en }) { const screenshots = project.screenshots ?? []; return <section className={`app-gallery ${project.galleryLayout === 'desktop' ? 'is-landscape' : ''} ${project.galleryLayout === 'mobile' ? 'is-mobile' : ''} ${project.galleryLayout === 'demo' ? 'is-demo' : ''}`} aria-label={project.galleryLabel ?? text.dialog.appGallery}><div className="app-gallery-heading"><p className="detail-label">{project.galleryEyebrow ?? text.dialog.published}</p><span>{project.galleryLabel ?? text.dialog.appGallery}</span></div><div className="app-gallery-track">{screenshots.map(screenshot => <figure key={screenshot.src}><a href={screenshot.src} target="_blank" rel="noreferrer" aria-label={`${text.dialog.expand}: ${screenshot.alt}`}><img src={screenshot.src} alt={screenshot.alt} loading="lazy" /></a></figure>)}</div>{project.galleryLayout === 'desktop' && <p className="gallery-hint">{text.common.galleryHint}</p>}</section> }
function Flow({ flow, tone, text }: { flow: string[]; tone: Project['tone']; text: typeof copy.en }) { return <section className={`flow flow-${tone}`}><p className="detail-label">{text.dialog.flow}</p><div className="flow-steps">{flow.map((step, index) => <div className="flow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b></div>)}</div></section> }
export default App
