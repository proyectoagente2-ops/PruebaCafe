'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { coffeeProducts } from '@/lib/products';
import { Coffee, Leaf, Mountain, ThermometerSun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const processSteps = [
  {
    icon: Mountain,
    title: "Origen Sierra Nevada",
    description: "Cultivado a más de 1.500 metros sobre el nivel del mar"
  },
  {
    icon: Leaf,
    title: "Cultivo Sostenible",
    description: "Prácticas agrícolas respetuosas con el medio ambiente"
  },
  {
    icon: Coffee,
    title: "Tostado Artesanal",
    description: "Proceso controlado para resaltar notas únicas"
  },
  {
    icon: ThermometerSun,
    title: "Control de Calidad",
    description: "Estrictos estándares en cada etapa del proceso"
  }
];

export default function CafePage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/coffee-beans-bg.jpg')] bg-cover bg-center bg-fixed opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-yellow-400/20 text-yellow-300 border-none mb-6 px-4 py-1 text-sm uppercase tracking-wider">
              Edición Especial
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              Nuestros cafés de{' '}
              <span className="text-yellow-400">origen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-14">
              Tres ediciones especiales cultivadas con dedicación en las alturas 
              de Pueblo Bello, Cesar. Un viaje sensorial único.
            </p>

            <Button 
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-10 py-7 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explorar Colección
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#2C1810] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/coffee-beans-bg.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-none mb-6 px-4 py-1 text-sm uppercase tracking-wider">
              Nuestro Proceso
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Del cafetal a tu taza
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Cada paso en nuestro proceso está cuidadosamente diseñado para brindarte 
              la mejor experiencia en cada taza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/30 transition-all duration-300">
                  {React.createElement(step.icon, {
                    size: 36,
                    className: "text-yellow-400"
                  })}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="bg-yellow-400 text-yellow-900 mb-6 px-4 py-1 text-sm uppercase tracking-wider">
              Nuestros Cafés
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ediciones Especiales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra selección de cafés especiales, cada uno con su 
              propia personalidad y carácter único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coffeeProducts.map((product) => (
              <motion.div
                key={product.id}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="h-full"
              >
                <ProductCard 
                  product={product}
                  isHovered={hoveredProduct === product.id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/coffee-beans-bg.jpg')] bg-cover bg-center mix-blend-multiply opacity-20" />
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
              Compromiso con la calidad
            </h2>
            <p className="text-xl text-white/95 mb-14 leading-relaxed max-w-3xl mx-auto">
              Nos enorgullece ofrecer café de la más alta calidad, cultivado de manera 
              sostenible y procesado con dedicación artesanal. Cada taza representa 
              nuestro compromiso con la excelencia.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/95 px-10 py-7 text-lg font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Conoce nuestra historia
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}