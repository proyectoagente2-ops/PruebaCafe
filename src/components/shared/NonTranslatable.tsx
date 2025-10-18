'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface NonTranslatableProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  preserveWhitespace?: boolean;
}

/**
 * Componente que previene la traducción automática de su contenido.
 * 
 * @param children - El contenido que no debe ser traducido
 * @param className - Clases CSS adicionales (opcional)
 * @param as - Elemento HTML a utilizar (opcional, default: span)
 * @param preserveWhitespace - Si debe preservar espacios en blanco (opcional)
 */
export const NonTranslatable: React.FC<NonTranslatableProps> = ({ 
  children, 
  className = '',
  as: Component = 'span',
  preserveWhitespace = true,
}) => {

  // Usamos useEffect para aplicar los atributos directamente
  const elementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      element.setAttribute('translate', 'no');
      element.setAttribute('data-no-translate', 'true');
      element.setAttribute('lang', 'es');
    }
  }, []);

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: cn(
        'notranslate',
        !preserveWhitespace && 'whitespace-normal',
        className
      ),
      'aria-hidden': 'false'
    },
    children
  );
};

export default NonTranslatable;