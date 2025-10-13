'use client';

import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProducts } from '@/lib/products';
import { Badge } from '@/components/ui/badge';

const LazyImage = lazy(() => import('@/components/LazyImage'));

export default function MochilasPage() {
  // Filtrar solo las mochilas
  const mochilas = allProducts.filter(p => p.category === 'backpack');

  return (
    <div className="min-h-screen bg-[#FAF7F4] py-12">
      <div className="container mx-auto px-4">
        {/* Cabecera */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#2A1810] to-[#734832] bg-clip-text text-transparent mb-4">
            Mochilas con Pensamiento
          </h1>
          <p className="text-[#8B7355] max-w-2xl mx-auto">
            Descubre nuestra colección de mochilas artesanales, cada una única y hecha con dedicación
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mochilas.map((mochila, index) => (
            <motion.div
              key={mochila.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Imagen */}
                <div className="relative aspect-square overflow-hidden bg-[#F5EDE4]">
                  <LazyImage
                    src={mochila.image}
                    alt={mochila.name}
                    className="h-56 w-full object-cover transition-all hover:scale-105"
                    priority={index < 3} // Solo las primeras 3 imágenes se cargarán inmediatamente
                  />
                  {mochila.isSpecialEdition && (
                    <Badge
                      variant="outline"
                      className="absolute top-4 right-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300"
                    >
                      Edición Especial
                    </Badge>
                  )}
                </div>

                {/* Información */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2A1810] mb-2">
                    {mochila.name}
                  </h3>
                  <p className="text-[#8B7355] text-sm mb-4 line-clamp-2">
                    {mochila.description}
                  </p>
                  <div className="space-y-4">
                    <p className="text-lg font-bold text-[#2A1810]">
                      {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                      }).format(mochila.price)}
                    </p>
                    <Link
                      to={`/mochilas/${mochila.id}`}
                      className="block w-full"
                    >
                      <button
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#C49B66] to-[#DEB88C] text-white rounded-lg hover:from-[#B38A55] hover:to-[#CDA77B] transition-all duration-300 flex items-center justify-center gap-2 group font-medium"
                      >
                        Consultar
                        <svg 
                          className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}