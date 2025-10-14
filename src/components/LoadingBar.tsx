'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Iniciar la carga cuando cambia la ruta
    const startLoading = () => {
      setIsLoading(true);
      setProgress(0);
      
      // Simular progreso
      const incrementProgress = () => {
        setProgress(prev => {
          if (prev >= 90) return prev; // Mantener en 90% hasta que termine
          return Math.min(90, prev + Math.random() * 10);
        });
        
        timeout = setTimeout(incrementProgress, Math.random() * 500);
      };
      
      timeout = setTimeout(incrementProgress, 100);
    };

    // Finalizar la carga
    const completeLoading = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    };

    startLoading();
    
    // Simular finalización después de cargar los recursos
    const loadComplete = () => {
      if (document.readyState === 'complete') {
        completeLoading();
      }
    };
    
    window.addEventListener('load', loadComplete);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', loadComplete);
    };
  }, [location.pathname]); // Reiniciar cuando cambie la ruta

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#2A1810]/10"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: `${progress}%`,
              transition: { type: "spring", damping: 20, stiffness: 100 }
            }}
            className="h-full bg-gradient-to-r from-[#C49B66] to-[#DEB88C]"
            style={{
              boxShadow: '0 0 10px rgba(196, 155, 102, 0.5)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}