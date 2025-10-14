'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando se haya scrolleado 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 left-8 z-40 p-2.5 rounded-lg bg-[#2A1810]/80 backdrop-blur-sm text-[#F5EDE4] shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#C49B66]/50 focus:ring-offset-2 border border-[#C49B66]/20 group"
          aria-label="Volver arriba"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative">
            <ArrowUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs text-[#2A1810] bg-white px-2 py-1 rounded-md shadow-sm">
              Volver arriba
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}