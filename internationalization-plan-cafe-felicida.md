# Plan de Implementación: Internacionalización (i18n) - La Felicidá

## Objetivo Principal
Implementar un sistema de internacionalización que permita la traducción completa del sitio web de La Felicidá al inglés (EN-US), manteniendo el español (ES) como idioma predeterminado. El sistema debe ser escalable, mantenible y no debe afectar el rendimiento actual de la aplicación.

## Contexto Técnico
- Framework Principal: React + Vite
- Gestión de Estado: Zustand
- Estilos: TailwindCSS + Shadcn/ui
- Router: React Router DOM

## Archivos a Modificar/Crear
> Nota para la IA: Es crucial mantener la estructura actual y solo agregar/modificar lo necesario para i18n

### Componentes
```bash
/src/components/
├── Header.tsx              # Agregar selector de idioma
├── LanguageSelector.tsx    # Nuevo componente
├── CartSidebar.tsx        # Adaptar textos
├── Chat.tsx               # Adaptar textos y respuestas
└── ui/*                   # Adaptar componentes base
```

### Páginas
```bash
/src/pages/
├── Index.tsx
├── CafePage.tsx
├── MochilasPage.tsx
├── ServiceDetailPage.tsx
├── Nosotros.tsx
└── Contacto.tsx
```

### Configuración
```bash
/src/
├── i18n/
│   ├── locales/
│   │   ├── es/
│   │   │   ├── common.json
│   │   │   ├── navigation.json
│   │   │   ├── products.json
│   │   │   ├── services.json
│   │   │   ├── cart.json
│   │   │   └── chat.json
│   │   └── en/
│   │       └── [misma estructura]
│   ├── config.ts
│   ├── provider.tsx
│   └── hooks.ts
```

## Fases de Implementación

### Fase 1: Infraestructura Base

#### Términos No Traducibles - Configuración Base
```typescript
// Definir en config.ts
export const NON_TRANSLATABLE_TERMS = {
  brandNames: [
    'La Felicidá',
    'Sierra Nevada',
  ],
  locations: [
    'Pueblo Bello',
    'Cesar',
    'Colombia',
    'Sierra Nevada de Santa Marta',
  ],
  culturalTerms: [
    'Mamos',
    'Glamping',
  ],
  coordinates: [
    '10.4167, -73.5833',
  ],
} as const;

// Implementar helper function
export function isNonTranslatable(text: string): boolean {
  return Object.values(NON_TRANSLATABLE_TERMS)
    .flat()
    .some(term => text.includes(term));
}
```

#### Investigación Obligatoria en Context7
```bash
# IMPORTANTE: Ejecutar estas consultas en orden
1. Consulta: "next-intl integration patterns with React and Vite"
   Objetivo: Entender la configuración base y patrones de integración
   Aspectos clave: 
   - Métodos de inicialización
   - Manejo de rutas
   - Configuración con Vite

2. Consulta: "i18n best practices for React applications"
   Objetivo: Identificar patrones y estructuras recomendadas
   Aspectos clave:
   - Organización de archivos
   - Manejo de traducciones
   - Estrategias de carga

3. Consulta: "client-side locale management in React"
   Objetivo: Implementar gestión de idiomas en el cliente
   Aspectos clave:
   - Persistencia de preferencias
   - Detección automática de idioma
   - Cambios dinámicos

4. Consulta: "i18n provider patterns for React applications"
   Objetivo: Diseñar el provider principal
   Aspectos clave:
   - Context API
   - Performance
   - Tipado
```

#### Tareas Detalladas
1. Configuración inicial
   ```typescript
   // Proceso detallado:
   a. Instalar dependencias:
      pnpm add next-intl @formatjs/intl-localematcher
      pnpm add -D @types/formatjs__intl-localematcher

   b. Crear estructura de archivos:
      /src/i18n/
      ├── config.ts       // Configuración principal
      ├── provider.tsx    // Provider de i18n
      └── hooks.ts       // Hooks personalizados

   c. Implementar provider base:
      // provider.tsx
      export function I18nProvider({ children }) {
        const [locale, setLocale] = useState('es');
        // Implementar lógica de provider
      }
   ```

2. Sistema de traducciones base
   ```typescript
   // Implementaciones necesarias:
   a. Hook useTranslations:
      export function useTranslations(namespace: string) {
        const { t } = useContext(I18nContext);
        return (key: string) => t(`${namespace}.${key}`);
      }

   b. Tipos TypeScript:
      interface Translations {
        [key: string]: {
          [key: string]: string | Translations;
        }
      }

   c. Sistema de carga:
      async function loadTranslations(locale: string) {
        const messages = await import(`../locales/${locale}/index.ts`);
        return messages.default;
      }
   ```

#### Archivos de Traducción Iniciales
```typescript
// common.json
{
  "navigation": {
    "home": "Inicio" | "Home",
    "coffee": "Café" | "Coffee",
    "backpacks": "Mochilas" | "Backpacks",
    "contact": "Contacto" | "Contact"
  }
}
```

### Fase 2: Componentes Core

#### Términos No Traducibles - Implementación en Componentes
```typescript
// Implementar en components/NonTranslatableText.tsx
interface NonTranslatableTextProps {
  text: string;
  className?: string;
}

export function NonTranslatableText({ text, className }: NonTranslatableTextProps) {
  // Este componente se asegura de que el texto no sea traducido
  return (
    <span 
      className={className}
      translate="no" // HTML attribute para indicar que no se debe traducir
      data-i18n-skip="true" // Atributo personalizado para nuestro sistema
    >
      {text}
    </span>
  );
}

// Uso en componentes:
<NonTranslatableText text="La Felicidá" />
<NonTranslatableText text="Sierra Nevada de Santa Marta" />
```

#### Investigación Obligatoria en Context7
```bash
# IMPORTANTE: Ejecutar estas consultas en orden específico
1. Consulta: "reusable i18n components patterns React"
   Objetivo: Diseñar componentes reutilizables
   Aspectos clave:
   - Composición de componentes
   - Manejo de props
   - Tipado estricto

2. Consulta: "date and number formatting i18n React"
   Objetivo: Implementar formato correcto por región
   Aspectos clave:
   - Intl.DateTimeFormat
   - Intl.NumberFormat
   - Zonas horarias

3. Consulta: "currency formatting best practices i18n"
   Objetivo: Formatear moneda según localización
   Aspectos clave:
   - Símbolos monetarios
   - Separadores decimales
   - Posición del símbolo

4. Consulta: "React i18n performance optimization"
   Objetivo: Optimizar rendimiento
   Aspectos clave:
   - Memorización
   - Lazy loading
   - Bundle splitting
```

#### Tareas Detalladas
1. LanguageSelector
   ```typescript
   // Implementación requerida:
   export function LanguageSelector() {
     const { locale, setLocale } = useLocale();
     
     return (
       <div className="flex items-center gap-2">
         {/* Implementar selector con banderas y nombres de idiomas */}
       </div>
     );
   }
   
   // Características obligatorias:
   - Animaciones con Framer Motion
   - Persistencia en localStorage
   - Feedback visual de selección
   ```

2. Header adaptado
   ```typescript
   // Modificaciones necesarias en Header.tsx:
   export function Header() {
     const { t } = useTranslations('navigation');
     
     return (
       <nav>
         {/* Implementar navegación traducida */}
       </nav>
     );
   }
   
   // Aspectos críticos:
   - Mantener diseño actual
   - Integrar selector de idioma
   - Traducir todos los elementos
   ```

3. Componentes UI base
   ```typescript
   // Ejemplo de Button traducible:
   interface I18nButtonProps {
     i18nKey: string;
     namespace?: string;
   }
   
   export function I18nButton({ i18nKey, namespace = 'common' }: I18nButtonProps) {
     const t = useTranslations(namespace);
     return (
       <Button>
         {t(i18nKey)}
       </Button>
     );
   }
   
   // Implementar para:
   - Todos los componentes UI
   - Sistema de tooltips
   - Modales y alertas
   ```

### Fase 3: Contenido y Funcionalidades

#### Términos No Traducibles - Gestión de Contenido
```typescript
// Implementar en i18n/content-rules.ts
export const CONTENT_RULES = {
  productNames: {
    coffee: [
      // Nombres específicos de cafés
    ],
    backpacks: [
      'Mochila Tradicional',
      // Otros nombres de mochilas
    ]
  },
  services: [
    'Bienestar & Espiritualidad',
    'Turismo Consciente',
    'La Felicidá - Finca Experiencial'
  ],
  measurements: {
    altitude: '1.800 metros sobre el nivel del mar',
    currency: 'COP'
  },
  urls: [
    // URLs específicas que no deben traducirse
  ]
};

// Helper para contenido dinámico
export function processContentWithRules(content: string): string {
  return content.replace(/\{\{([^}]+)\}\}/g, (match, term) => {
    return isNonTranslatable(term) ? term : `<trans>${term}</trans>`;
  });
}
```

#### Investigación Obligatoria en Context7 #mcpcontext
```bash
# Consultas requeridas:
- Manejo de contenido dinámico
- SEO multilingüe
- Optimización de carga
- Testing de traducciones
```

#### Tareas
1. Páginas principales
   - Textos estáticos
   - Contenido dinámico
   - Metadatos

2. Funcionalidades específicas
   - Carrito de compras
   - Chat con IA
   - Formularios
   - Notificaciones

### Fase 4: Optimización y Testing

#### Términos No Traducibles - Validación y Testing
```typescript
// Implementar en tests/i18n/validation.test.ts
describe('Non-translatable terms validation', () => {
  test('should preserve brand names', () => {
    const terms = [
      'La Felicidá',
      'Sierra Nevada'
    ];
    terms.forEach(term => {
      expect(translate(term)).toBe(term);
    });
  });

  test('should preserve locations', () => {
    const locations = [
      'Pueblo Bello',
      'Cesar',
      'Colombia'
    ];
    locations.forEach(location => {
      expect(translate(location)).toBe(location);
    });
  });

  test('should preserve specific measurements', () => {
    expect(translate('1.800 metros sobre el nivel del mar'))
      .toContain('1.800');
  });
});

// Implementar script de validación automática
export function validateTranslations(locale: string): ValidationResult {
  const translations = loadTranslations(locale);
  return checkNonTranslatableTerms(translations);
}
```

#### Investigación Obligatoria en Context7
```bash
# Consultas requeridas:
- Testing de aplicaciones i18n
- Performance en sitios multilingües
- Herramientas de validación
- Monitoreo de errores
```

#### Tareas
1. Testing completo
   - Tests unitarios
   - Tests de integración
   - Validación de contenido

2. Optimización
   - Lazy loading de traducciones
   - Caché de idiomas
   - Bundle splitting

3. SEO
   - Meta tags por idioma
   - Sitemap actualizado
   - Headers de idioma

## Criterios de Éxito y Validación

### Técnicos
```typescript
// 1. Cambio de idioma sin recargas
const validateLanguageSwitch = async () => {
  const initialContent = screen.getByText(/Inicio/i);
  await userEvent.click(screen.getByText(/EN/i));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.queryByText(/Inicio/i)).not.toBeInTheDocument();
};

// 2. Tipo seguro
interface TranslationKey {
  namespace: string;
  key: string;
  params?: Record<string, string>;
}

// 3. Bundle size targets
const bundleSizeTargets = {
  main: '100kb',
  i18n: '20kb per language'
};
```

### UX/UI
```typescript
// 1. Transiciones
const transitionConfig = {
  duration: 0.3,
  ease: 'easeInOut'
};

// 2. Feedback visual
interface LanguageSwitchFeedback {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// 3. Performance metrics
const performanceTargets = {
  FCP: '< 1.5s',
  LCP: '< 2.5s',
  TTI: '< 3.0s'
};
```

### Testing y Validación
```typescript
// 1. Cobertura requerida
const coverageThresholds = {
  statements: 90,
  branches: 85,
  functions: 90,
  lines: 90
};

// 2. Pruebas E2E
describe('Internacionalización', () => {
  test('Cambio de idioma persiste tras recarga', async () => {
    // Implementar prueba
  });
  
  test('Contenido dinámico se traduce correctamente', async () => {
    // Implementar prueba
  });
});

// 3. Métricas SEO
const seoChecklist = [
  'hreflang tags',
  'translated meta tags',
  'sitemap con variantes de idioma',
  'URL structure validation'
];
```

### Documentación Requerida
```markdown
1. Guía de Implementación
   - Proceso de agregar nuevos idiomas
   - Convenciones de nombrado
   - Estructura de archivos

2. Guía de Mantenimiento
   - Proceso de actualización
   - Validación de traducciones
   - Resolución de conflictos

3. Documentación Técnica
   - Arquitectura del sistema
   - Flujo de datos
   - Puntos de extensión
```

---

> **¿Podemos proceder con la Fase 1?** 
> Se requiere su autorización para comenzar con la implementación de la infraestructura base.