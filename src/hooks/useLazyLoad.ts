import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadOptions {
  batchSize?: number;
  delayBetweenBatches?: number;
  threshold?: number;
}

export function useLazyLoad<T>(
  items: T[],
  options: UseLazyLoadOptions = {}
) {
  const {
    batchSize = 2,
    delayBetweenBatches = 200,
    threshold = 0.1
  } = options;

  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedBatches = useRef(0);

  useEffect(() => {
    if (items.length === 0) return;

    // Función para cargar el siguiente lote
    const loadNextBatch = () => {
      const startIndex = loadedBatches.current * batchSize;
      const endIndex = Math.min(startIndex + batchSize, items.length);
      
      if (startIndex >= items.length) {
        setIsLoading(false);
        return;
      }

      const nextBatch = items.slice(startIndex, endIndex);
      
      setVisibleItems(prev => [...prev, ...nextBatch]);
      loadedBatches.current += 1;

      // Si hay más items, programar el siguiente lote
      if (endIndex < items.length) {
        setTimeout(loadNextBatch, delayBetweenBatches);
      } else {
        setIsLoading(false);
      }
    };

    // Intersection Observer para detectar cuando el contenedor es visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleItems.length === 0) {
            loadNextBatch();
          }
        });
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [items, batchSize, delayBetweenBatches, threshold]);

  return {
    visibleItems,
    isLoading,
    containerRef,
    hasMore: visibleItems.length < items.length
  };
}
