import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  // Imágenes de Inicio
  { src: '/images/Inicio/FINCA1.jpg', alt: 'Finca 1' },
  { src: '/images/Inicio/FLORFINCA1.jpg', alt: 'Flor Finca 1' },
  { src: '/images/Inicio/FLORFINCA2.jpg', alt: 'Flor Finca 2' },
  { src: '/images/Inicio/FLORFINCA3.jpg', alt: 'Flor Finca 3' },
  { src: '/images/Inicio/PAPAYA.jpg', alt: 'Papaya' },
  // Imágenes de Cafés
  { src: '/images/CAFÉS/CAFE.jpg', alt: 'Café' },
  { src: '/images/CAFÉS/CAFEFINCA.jpg', alt: 'Café Finca' },
  { src: '/images/CAFÉS/CAFEFINCA2.jpg', alt: 'Café Finca 2' },
  { src: '/images/CAFÉS/MANOSCAFE.png', alt: 'Manos Café' },
  { src: '/images/CAFÉS/Café Lavado (Edición especial).jpg', alt: 'Café Lavado' },
  { src: '/images/CAFÉS/Café Tradicional (Edición especial).jpg', alt: 'Café Tradicional' },
  { src: '/images/CAFÉS/Café con Ayu (Edición especial).jpg', alt: 'Café con Ayu' },
];

export function AutoImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;
    let animationFrameId: number;

    const startAutoScroll = () => {
      if (isPaused) return;

      scrollInterval = setInterval(() => {
        animationFrameId = requestAnimationFrame(() => {
          if (!container) return;
          
          // Si llegamos al final, volvemos al principio
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: 1, behavior: 'smooth' });
          }
        });
      }, 30); // Ajusta este valor para controlar la velocidad
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="relative py-12 bg-gradient-to-br from-[#2C1810]/10 via-[#4A2F1C]/15 to-[#6B452A]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#4A2F1C] via-[#6B452A] to-[#4A2F1C] text-transparent bg-clip-text">
          Nuestra Finca y Café
        </h2>
        
        <div className="relative group"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          {/* Botón izquierdo */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#FFF9EA] to-[#FFF6DD] hover:from-[#FFF6DD] hover:to-[#FFEDC0] shadow-lg hover:shadow-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6 text-[#4A2F1C]" />
          </Button>

          {/* Contenedor de imágenes */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...images, ...images].map((image, index) => (
              <motion.div
                key={index}
                className="flex-none relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-72 h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-[#FFF9EA]/20"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Botón derecho */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#FFF9EA] to-[#FFF6DD] hover:from-[#FFF6DD] hover:to-[#FFEDC0] shadow-lg hover:shadow-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6 text-[#4A2F1C]" />
          </Button>
        </div>
      </div>
    </section>
  );
}