# Documentación del Proyecto - La Felicidá

## Índice
1. [Descripción General](#descripción-general)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Características Principales](#características-principales)
5. [Componentes](#componentes)
6. [Integración con N8N](#integración-con-n8n)
7. [Guías de Desarrollo](#guías-de-desarrollo)
8. [Optimización y Performance](#optimización-y-performance)
9. [Registro de Cambios](#registro-de-cambios)

## Descripción General

La Felicidá es una plataforma web para una empresa cafetera que ofrece productos de café, experiencias turísticas y servicios relacionados. La aplicación está diseñada para proporcionar una experiencia de usuario fluida y atractiva, con características como:

- Catálogo de productos de café
- Reserva de experiencias turísticas
- Carrito de compras
- Chat con IA integrado
- Sistema de notificaciones
- Soporte multilingüe (en desarrollo)

## Stack Tecnológico

### Core
- React 18+
- TypeScript
- Vite
- React Router DOM
- React Query
- Zustand (manejo de estado)

### UI/Diseño
- TailwindCSS
- Shadcn/ui
- Headless UI
- Heroicons
- Radix UI

### Integraciones
- N8N para el chat con IA
- Axios para peticiones HTTP
- Next-themes para manejo de temas

## Estructura del Proyecto

```
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   │   ├── CAFÉS/        # Imágenes de productos
│   │   ├── Inicio/       # Imágenes de página principal
│   │   └── Mochilas/     # Imágenes de productos adicionales
│   ├── robots.txt        # Configuración SEO
│   └── sw.js             # Service Worker
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes UI básicos
│   │   └── ...          # Otros componentes
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layouts de la aplicación
│   ├── lib/            # Utilidades y configuraciones
│   ├── pages/          # Componentes de página
│   ├── routes/         # Configuración de rutas
│   ├── styles/         # Estilos globales
│   ├── types/          # Definiciones de tipos
│   └── utils/          # Funciones utilitarias
```

## Características Principales

### Sistema de Routing
- Implementado con React Router DOM
- Soporte para rutas anidadas
- Manejo de redirecciones desde hashes antiguos
- Páginas 404 personalizadas

### Gestión de Estado
- Zustand para estado global
- Estados específicos para:
  - Carrito de compras
  - Chat
  - Notificaciones
  - Preferencias de usuario

### Componentes de Mejora UX
- **LoadingBar**
  - Barra de progreso global durante navegaciones
  - Animaciones suaves con Framer Motion
  - Feedback visual inmediato para el usuario
  - Implementado en `RootLayout.tsx`

- **ScrollToTop**
  - Botón flotante para volver al inicio de la página
  - Aparece después de 400px de scroll
  - Animaciones suaves de entrada/salida
  - Tooltip informativo en hover
  - Implementado globalmente en `RootLayout.tsx`

- **ReadingTime**
  - Estimación del tiempo de lectura
  - Cálculo basado en palabras por minuto (200 wpm)
  - Implementado en páginas de detalle
  - Ayuda a gestionar expectativas del usuario

- **ShareButton**
  - Compartir contenido en redes sociales
  - Soporte para múltiples plataformas:
    - Facebook
    - Twitter
    - WhatsApp
    - LinkedIn
    - Instagram
    - Correo electrónico
  - Animaciones de menú desplegable
  - Notificaciones de éxito
  - Copiar enlace al portapapeles

### Chat con IA
- Integración con N8N
- Interfaz de usuario intuitiva
- Manejo de sesiones
- Persistencia de conversaciones
- URL del webhook: `https://tpn8n.sierrasoft.co/webhook/[ID]/chat`

### Carrito de Compras
- Persistencia local con Zustand
- Actualización en tiempo real de cantidades y precios
- Cross-selling de productos relacionados
- Notificaciones de cambios
- Integración con WhatsApp para pedidos
  - Mensajes formateados profesionalmente
  - Uso de emojis para mejor legibilidad
  - Desglose detallado de productos
  - Cálculos automáticos de totales
- Interfaz simplificada con dos acciones principales:
  - Continuar comprando
  - Finalizar pedido vía WhatsApp
- Prevención de navegación a rutas inexistentes

## Componentes

### Página de Café (`/src/pages/CafePage.tsx`)

El componente CafePage es una página completa dedicada a mostrar y promocionar los productos de café. Está estructurada en varias secciones:

#### Hero Section
- Banner principal a pantalla completa con imagen de fondo optimizada
- Imagen de fondo con ajustes específicos:
  - Escala (105%) para mejor cobertura
  - Posicionamiento optimizado (50% 30%)
  - Brillo ajustado (85%) para mejor contraste
- Animaciones con Framer Motion
  - Transición suave de opacidad y escala
  - Efecto de gradiente superpuesto
- Badges y llamados a la acción
  - Badge "Colección Premium" con estilo distintivo
  - Botones "Descubrir Colección" y "Proceso de Cultivo"
- Indicador de scroll animado
- Texto principal con efectos de contraste mejorados
- Descripción clara y legible sobre fondo tratado

#### Products Grid
- Muestra la colección de cafés especiales
- Grid responsive de 1-3 columnas
- Tarjetas de producto interactivas
- Animaciones en hover

#### Atributos del Café
Los atributos destacados incluyen:
- Prestigio (Award)
- Balance Perfecto (Scale)
- Cultivo con Amor (Heart)
- Perfil Único (Droplet)

#### Proceso de Producción
Sección que detalla el proceso en 4 pasos:
1. Origen Sierra Nevada
2. Cultivo Sostenible
3. Tostado Artesanal
4. Control de Calidad

#### Quality Banner
- Sección de compromiso con la calidad
- Efectos de paralaje y superposición
- Botones de llamada a la acción
- Animaciones en scroll

#### Características Técnicas
- Uso extensivo de Framer Motion para animaciones
- Componentes optimizados para rendimiento
- Imágenes optimizadas con lazy loading
- Diseño completamente responsive
- Paleta de colores personalizada con énfasis en tonos café y dorados

### Componentes Principales

#### Header (`/src/components/Header.tsx`)
- Navegación principal
- Responsive
- Integración con tema oscuro/claro

#### Chat (`/src/components/Chat.tsx`)
- Ventana flotante
- Integración con IA
- Manejo de estados de carga
- Persistencia de mensajes

#### CartSidebar (`/src/components/CartSidebar.tsx`)
- Panel lateral para carrito
- Actualización en tiempo real
- Animaciones suaves

### Componentes UI
- Botones personalizados
- Tooltips
- Modales
- Notificaciones

## Integración con N8N

### Configuración del Chat
```typescript
const WEBHOOK_URL = 'https://tpn8n.sierrasoft.co/webhook/[ID]/chat';
```

### Estructura de Mensajes
```typescript
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

### Manejo de Sesiones
```typescript
interface ChatSession {
  sessionId: string;
  startTime: Date;
  lastActivity: Date;
}
```

## Guías de Desarrollo

### Instalación
```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build
```

### Convenciones de Código
- TypeScript strict mode
- ESLint + Prettier
- Nombres de componentes en PascalCase
- Nombres de hooks con prefijo 'use'

### Manejo de Imágenes
- Optimización automática
- Lazy loading implementado
- Formatos modernos (WebP)
- Responsive con diferentes tamaños

## Optimización y Performance

### Optimización de Imágenes
- **Imágenes de Fondo**
  - Uso de técnicas de escalado y posicionamiento específico
  - Control de brillo y contraste para mejor legibilidad
  - Gradientes superpuestos para mejorar la visibilidad del texto
  - Carga prioritaria de imágenes críticas

### Optimización de UI/UX
- **Mejoras de Contraste**
  - Textos optimizados para legibilidad
  - Uso de capas de gradiente para mejorar la visibilidad
  - Badges y botones con contraste mejorado
- **Animaciones Optimizadas**
  - Transiciones suaves y eficientes
  - Uso de Framer Motion con configuraciones optimizadas
  - Animaciones condicionadas al viewport

### Estrategias Implementadas
- Code splitting por rutas
- Lazy loading de imágenes
- Caching de recursos estáticos
- Optimización de bundle

### Service Worker
- Caching de assets
- Estrategias de red
- Manejo offline básico

### SEO
- Meta tags dinámicos
- OpenGraph tags
- Sitemap XML
- robots.txt configurado

## Configuraciones

### TailwindCSS
```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
      }
    }
  }
}
```

### Vite
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

## Mantenimiento

### Tareas Regulares
- Actualización de dependencias
- Revisión de rendimiento
- Backup de datos críticos
- Monitoreo de errores

### Monitoreo
- Errores de consola
- Tiempos de carga
- Uso de memoria
- Rendimiento de API

## Despliegue

### Requisitos
- Node.js 18+
- PNPM
- Acceso al webhook de N8N

### Proceso
1. Construir la aplicación
2. Verificar archivos estáticos
3. Configurar variables de entorno
4. Desplegar en servidor

### Variables de Entorno
```env
VITE_API_URL=
VITE_WEBHOOK_URL=
VITE_ENV=production
```

## Roadmap

### Próximas Características
- [ ] Implementación completa de i18n
- [ ] Mejoras en el sistema de caché
- [ ] Panel de administración
- [ ] Integración con sistemas de pago
- [ ] PWA completa

## Soporte

### Contacto
- Equipo de desarrollo: [correo]
- Repositorio: [URL]
- Documentación: [URL]

### Reportar Problemas
- Usar el sistema de issues de GitHub
- Proporcionar pasos de reproducción
- Incluir capturas de pantalla si es posible

## Registro de Cambios

### Octubre 2025
- **Mejoras en CafePage**
  - Optimización de la imagen de fondo principal
  - Ajustes en el posicionamiento y escala de la imagen
  - Mejora del contraste y legibilidad del texto
  - Actualización de animaciones y transiciones

- **Nuevos Componentes UI**
  - InfoTooltip
  - KeyboardShortcuts
  - LastUpdate
  - LastVisit
  - LoadingBar
  - OriginBadge
  - QuantityBadge
  - ReadingTime
  - ScrollToTop
  - ShareButton
  - StockIndicator
  - Componentes animados varios (text-reveal-card, animated-tooltip, etc.)

- **Mejoras en la Estructura**
  - Actualización de rutas y navegación
  - Nuevos hooks personalizados
  - Mejoras en la organización de tipos
  - Actualización de la documentación

### Octubre 2025

#### Semana 2
- Integración mejorada de WhatsApp en el carrito de compras:
  - Mensaje formateado con emojis para mejor legibilidad
  - Desglose detallado de productos con cantidades y precios
  - Distinción visual entre productos (🎒) y cafés (☕)
  - Resumen del pedido con subtotal y costos de envío
  - Mensaje de cierre personalizado y profesional

#### Semana 1
- Eliminación del componente WhatsAppButton independiente
- Preparación para la integración del nuevo chat con IA
- Actualización de referencias en:
  - CartSidebar.tsx
  - CartSidebar.new.tsx
  - Index.tsx.new
  - ServicesPage.tsx.new
- Limpieza de código y optimización
- Documentación actualizada para reflejar los cambios

#### Mejoras en la Experiencia de Usuario
1. Carrito de Compras:
   - Simplificación de la interfaz con dos botones principales
   - "Seguir Comprando" mantiene el contexto de navegación
   - "Ir a pagar" ahora integra la funcionalidad de WhatsApp
   - Prevención de navegación innecesaria a rutas inexistentes
   - Mensajes de WhatsApp estructurados y profesionales

2. Sistema de Mensajería:
   - Formato mejorado para pedidos:
     ```
     ¡Hola! 🌟 Me gustaría realizar el siguiente pedido:
     
     🎒 [Producto] x[cantidad] - [precio]
     ☕ [Café] x[cantidad] - [precio]
     
     📦 Resumen del pedido:
     💰 Subtotal: [monto]
     🚚 Envío: [monto]
     
     ✨ TOTAL: [monto total] ✨
     
     🙏 Me gustaría confirmar este pedido y coordinar el envío.
     💝 ¡Gracias por su atención!
     ```

### Próximos Pasos
1. Mejorar la experiencia post-compra
   - Seguimiento de pedidos
   - Confirmaciones automáticas
   - Historial de compras
2. Implementar el nuevo componente de chat con IA
3. Integrar el chat con el sistema de productos
4. Expandir la integración de WhatsApp
   - Estados de pedido
   - Notificaciones automáticas
   - Recordatorios de carrito abandonado
5. Actualizar la interfaz de usuario
6. Realizar pruebas de integración
7. Desplegar a producción

---

## Notas Adicionales
- El chat con IA reemplazará completamente la funcionalidad de WhatsApp
- Se mantiene la misma estructura de diseño pero con nueva funcionalidad
- La transición será gradual para asegurar la estabilidad

## Guía de Estilos

### Paleta de Colores
#### Página de Café
- Fondo Oscuro: `#2A1810` (Marrón oscuro)
- Dorado Acento: `#C49B66`
- Dorado Hover: `#D4B68C`
- Fondo Claro: `#F5E9E0`
- Texto Claro: `#FAF7F4`
- Texto Oscuro: `#5C4033`
- Rojo Acento: `#7b2e2e`, `#a84040`

### Tipografía
- Títulos: Sistema de escala fluida desde text-4xl hasta text-7xl
- Cuerpo: text-lg para contenido principal
- Badges: text-sm con tracking-wider
- Botones: text-base a text-lg con font-semibold

### Espaciado
- Secciones principales: py-24 a py-40
- Elementos internos: gap-4 a gap-12
- Márgenes de componentes: mb-6 a mb-20

### Animaciones
- Framer Motion para transiciones suaves
- Hover: scale-105 con duration-300
- Scroll: Fade y slide effects
- Indicadores: Animaciones infinitas para atención

## Licencia
[Especificar la licencia del proyecto]