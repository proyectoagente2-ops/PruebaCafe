'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee, Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Número 404 estilizado */}
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-[#2A1810] to-[#734832] bg-clip-text text-transparent">
            404
          </h1>

          {/* Mensaje de error */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2A1810]">
              Página no encontrada
            </h2>
            <p className="text-[#8B7355] max-w-md mx-auto">
              Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
            </p>
          </div>

          {/* Decoración */}
          <div className="flex justify-center gap-4 text-[#C49B66]">
            <Coffee className="w-12 h-12 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Package className="w-12 h-12 animate-bounce" />
          </div>

          {/* Botones de navegación */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/">
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#C49B66] to-[#DEB88C] text-white hover:from-[#B38A55] hover:to-[#CDA77B] transition-all duration-300"
              >
                Volver al Inicio
              </Button>
            </Link>
            <div className="flex gap-4 justify-center">
              <Link to="/cafe">
                <Button
                  variant="outline"
                  className="border-[#DEB88C] text-[#B38A55] hover:bg-gradient-to-r hover:from-[#F5EDE4] hover:to-[#E6D5C3]"
                >
                  Ver Café
                </Button>
              </Link>
              <Link to="/mochilas">
                <Button
                  variant="outline"
                  className="border-[#DEB88C] text-[#B38A55] hover:bg-gradient-to-r hover:from-[#F5EDE4] hover:to-[#E6D5C3]"
                >
                  Ver Mochilas
                </Button>
              </Link>
            </div>
          </div>

          {/* Sugerencia adicional */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm text-[#8B7355] pt-8"
          >
            ¿Necesitas ayuda? Contáctanos a través de{' '}
            <a
              href="https://wa.me/+573113678555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C49B66] hover:text-[#B38A55] transition-colors duration-300"
            >
              WhatsApp
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
