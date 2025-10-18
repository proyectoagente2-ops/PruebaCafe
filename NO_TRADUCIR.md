# Plan de Implementación - Protección de Términos No Traducibles

## Objetivo
Implementar un sistema que proteja términos específicos en español de ser traducidos por herramientas automáticas como Google Translate.

## Fase 1: Creación del Componente Base

### Investigación Previa (Context7)
- Buscar mejores prácticas para prevenir traducción automática
- Investigar atributos HTML para control de traducción
- Verificar compatibilidad cross-browser

### Implementación
1. Crear el componente NonTranslatable:
```tsx
// filepath: /src/components/NonTranslatable.tsx
'use client';

import React from 'react';

interface NonTranslatableProps {
  children: React.ReactNode;
  className?: string;
}

export const NonTranslatable = ({ children, className = '' }: NonTranslatableProps) => {
  return (
    <span 
      className={`notranslate ${className}`}
      translate="no"
      aria-hidden="false"
      lang="es"
    >
      {children}
    </span>
  );
};
```

2. Agregar estilos globales:
```css
// filepath: /src/styles/globals.css
.notranslate {
  unicode-bidi: isolate;
  white-space: nowrap;
}
```

## Fase 2: Identificación de Términos

### Términos a Proteger
1. Nombres de Marca:
   - La Felicidá
   - Finca Experiencial

2. Ubicaciones:
   - Sierra Nevada
   - Pueblo Bello
   - Cesar
   - Colombia

3. Términos Culturales:
   - Mamos
   - Mochilas (como término artesanal)

4. Productos Específicos:
   - Nombres de variedades de café
   - Nombres de diseños de mochilas

## Fase 3: Implementación en Componentes

### Header
```tsx
// filepath: /src/components/Header.tsx
import { NonTranslatable } from '@/components/NonTranslatable';

export function Header() {
  return (
    <header>
      <h1>
        <NonTranslatable>La Felicidá</NonTranslatable>
      </h1>
    </header>
  );
}
```

### Footer
```tsx
// filepath: /src/components/Footer.tsx
import { NonTranslatable } from '@/components/NonTranslatable';

export function Footer() {
  return (
    <footer>
      <address>
        <NonTranslatable>Sierra Nevada de Santa Marta</NonTranslatable>
        <NonTranslatable>Pueblo Bello</NonTranslatable>,
        <NonTranslatable>Cesar</NonTranslatable>
      </address>
    </footer>
  );
}
```

## Fase 4: Testing y Validación

### Pruebas Manuales
1. Verificar en múltiples navegadores:
   - Chrome
   - Firefox
   - Safari
   - Edge

2. Probar con diferentes herramientas de traducción:
   - Google Translate (página)
   - Google Translate (extensión)
   - Microsoft Translator
   - DeepL

### Pruebas Automatizadas
```typescript
// filepath: /src/__tests__/NonTranslatable.test.tsx
import { render } from '@testing-library/react';
import { NonTranslatable } from '@/components/NonTranslatable';

describe('NonTranslatable', () => {
  it('debe renderizar con los atributos correctos', () => {
    const { container } = render(
      <NonTranslatable>La Felicidá</NonTranslatable>
    );
    
    const span = container.firstChild;
    expect(span).toHaveClass('notranslate');
    expect(span).toHaveAttribute('translate', 'no');
    expect(span).toHaveAttribute('lang', 'es');
  });
});
```

## Criterios de Éxito
1. Los términos protegidos permanecen en español después de la traducción automática
2. No hay impacto visual en el diseño
3. La accesibilidad se mantiene
4. El rendimiento no se ve afectado

## Mantenimiento
1. Crear un documento con la lista de términos protegidos
2. Establecer proceso para agregar nuevos términos
3. Documentar el uso del componente para el equipo

¿Autoriza proceder con la Fase 1?