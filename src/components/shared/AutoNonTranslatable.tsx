import { NonTranslatable } from '@/components/shared/NonTranslatable';
import { NON_TRANSLATABLE_TERMS } from '@/config/nonTranslatableTerms';

interface Props {
  text: string;
  fallback?: string;
}

/**
 * Componente de orden superior que envuelve texto en NonTranslatable
 * si el texto está en la lista de términos no traducibles
 */
export function AutoNonTranslatable({ text, fallback }: Props) {
  const shouldPreserve = NON_TRANSLATABLE_TERMS.isNonTranslatable(text);
  
  if (shouldPreserve) {
    return <NonTranslatable>{text}</NonTranslatable>;
  }
  
  return <>{fallback || text}</>;
}