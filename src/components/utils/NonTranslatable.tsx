'use client';

import React from 'react';

interface NonTranslatableProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Componente que previene la traducción automática de su contenido.
 * Utiliza atributos HTML estándar y clases CSS para asegurar que el texto
 * permanezca en su idioma original.
 *
 * @param children - El contenido que no debe ser traducido
 * @param className - Clases CSS adicionales (opcional)
 */
export const NonTranslatable = ({ children, className = '' }: NonTranslatableProps) => {
  return (
    <span 
      className={`notranslate ${className}`.trim()}
      translate="no"
      aria-hidden="false"
      lang="es"
      data-no-translate="true"
    >
      {children}
    </span>
  );
};

export default NonTranslatable;