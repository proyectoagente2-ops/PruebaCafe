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

### Chat con IA
- Integración con N8N
- Interfaz de usuario intuitiva
- Manejo de sesiones
- Persistencia de conversaciones
- URL del webhook: `https://tpn8n.sierrasoft.co/webhook/[ID]/chat`

### Carrito de Compras
- Persistencia local
- Actualización en tiempo real
- Cross-selling de productos
- Notificaciones de cambios

## Componentes

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

## Licencia
[Especificar la licencia del proyecto]