import { useEffect, useRef, RefObject } from 'react';

type ElementType = HTMLElement | SVGElement;

/**
 * Hook personalizado para prevenir la traducción automática de elementos
 * @param enabled - Booleano para habilitar/deshabilitar la protección
 * @returns ref - Referencia al elemento que no debe ser traducido
 */
export function useNonTranslatable<T extends ElementType>(enabled: boolean = true): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    
    // Configurar atributos de no traducción
    element.setAttribute('translate', 'no');
    element.setAttribute('data-no-translate', 'true');
    element.setAttribute('lang', 'es');
    
    // Agregar clase notranslate si no existe
    if (!element.classList.contains('notranslate')) {
      element.classList.add('notranslate');
    }

    return () => {
      // Limpiar al desmontar
      if (element) {
        element.removeAttribute('translate');
        element.removeAttribute('data-no-translate');
        element.removeAttribute('lang');
        element.classList.remove('notranslate');
      }
    };
  }, [enabled]);

  return ref;
}