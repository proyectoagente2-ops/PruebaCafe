'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { coffeeProducts, allProducts } from '@/lib/products';
import { Coffee, Leaf, Mountain, ThermometerSun, Award, Scale, Heart, Droplet } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import OptimizedImage from '@/components/OptimizedImage';

const coffeeAttributes = [
  {
    icon: Award,
    title: "Prestigio",
    description: "Reconocido entre los mejores cafés especiales de Colombia"
  },
  {
    icon: Scale,
    title: "Balance Perfecto",
    description: "Armonía entre acidez, cuerpo y dulzura natural"
  },
  {
    icon: Heart,
    title: "Cultivo con Amor",
    description: "Cosechado a mano por familias cafeteras locales"
  },
  {
    icon: Droplet,
    title: "Perfil Único",
    description: "Notas de chocolate, caramelo y frutas tropicales"
  }
];

const processSteps = [
  {
    icon: Mountain,
    title: "Origen Sierra Nevada",
    description: "Cultivado a más de 1.500 metros sobre el nivel del mar en suelos volcánicos"
  },
  {
    icon: Leaf,
    title: "Cultivo Sostenible",
    description: "Prácticas agrícolas ancestrales en armonía con la naturaleza"
  },
  {
    icon: Coffee,
    title: "Tostado Artesanal",
    description: "Proceso meticuloso que resalta las notas únicas de cada grano"
  },
  {
    icon: ThermometerSun,
    title: "Control de Calidad",
    description: "Rigurosos estándares que garantizan una experiencia excepcional"
  }
];

export default function CafePage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2A1810]">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src="/images/CAFÉS/CAFE_FONDO.png"
            alt="Granos de café premium"
            className="w-full h-full object-cover object-center"
            priority
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/30 via-transparent to-[#2A1810]/20"
        />
        
        <div className="relative container mx-auto px-4 text-center text-[#FAF7F4]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Badge className="bg-[#C49B66] text-[#2A1810] border-none mb-6 px-4 py-1.5 text-sm uppercase tracking-wider font-medium shadow-lg">
              Colección Premium
            </Badge>
            
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
               <span className="text-white">El Arte del </span>
               <span className="text-[#C49B66] italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">Café</span>{' '}
               <br className="hidden md:block" />
               <span className="text-white">de Origen</span>
          </h1>

            
            <p className="text-lg md:text-xl text-[#FAF7F4] max-w-2xl mx-auto font-medium leading-relaxed mb-12 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Descubre la exquisitez de nuestros cafés cultivados en las alturas 
              sagradas de la Sierra Nevada. Una experiencia sensorial única.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#C49B66] text-[#2A1810] hover:bg-[#D4B68C] px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl tracking-wide"
              >
                Descubrir Colección
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-black/20 backdrop-blur-sm border-2 border-[#FAF7F4] text-[#FAF7F4] hover:bg-black/30 px-8 py-6 text-base font-medium rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Proceso de Cultivo
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
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

      {/* Products Grid */}
      <section className="py-32 bg-[#F5E9E0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="bg-[#a84040] text-[#FAF7F4] mb-6 px-4 py-1 text-sm uppercase tracking-wider">
              Nuestros Cafés
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-8">
            Ediciones <span className="!text-[#7b2e2e] italic">Especiales</span>
            </h2>
            <p className="text-xl text-[#5C4033]/80 max-w-2xl mx-auto leading-relaxed">
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

      {/* Attributes Section */}
      <section className="py-24 bg-[#FAF7F4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coffeeAttributes.map((attribute, index) => (
              <motion.div
                key={attribute.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#2A1810] flex items-center justify-center">
                  {React.createElement(attribute.icon, {
                    size: 28,
                    className: "text-[#C49B66]"
                  })}
                </div>
                <h3 className="text-xl font-semibold text-[#2A1810] mb-3">{attribute.title}</h3>
                <p className="text-[#2A1810]/70">{attribute.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#2A1810] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src="/images/coffee-beans-bg.jpg"
            alt="Proceso del café"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="bg-[#C49B66] text-[#2A1810] border-none mb-6 px-6 py-2 text-sm uppercase tracking-wider font-semibold">
              Nuestro Proceso
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-[#FAF7F4] mb-8 tracking-tight">
              Del cafetal a{' '}
              <span className="text-[#C49B66] italic">tu taza</span>
            </h2>
            <p className="text-xl text-[#FAF7F4]/80 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Cada etapa de nuestro proceso artesanal está meticulosamente diseñada 
              para preservar y realzar los sabores únicos de nuestro café de origen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF7F4]/5 backdrop-blur-sm p-10 rounded-3xl text-center group hover:bg-[#FAF7F4]/10 transition-all duration-500 border border-[#FAF7F4]/10"
              >
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#C49B66] flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                    {React.createElement(step.icon, {
                      size: 40,
                      className: "text-[#2A1810]"
                    })}
                  </div>
                  <div className="absolute -inset-1 bg-[#C49B66]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-semibold text-[#FAF7F4] mb-4">{step.title}</h3>
                <p className="text-[#FAF7F4]/80 leading-relaxed tracking-wide">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              className="bg-[#C49B66] text-[#2A1810] hover:bg-[#D4B68C] px-12 py-8 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl tracking-wide"
            >
              Conoce Más del Proceso
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="bg-[#2A1810] py-40 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 mix-blend-multiply"
        >
          <OptimizedImage
            src="/images/coffee-beans-bg.jpg"
            alt="Granos de café premium"
            className="w-full h-full object-cover object-center scale-110"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-[#2A1810]/95 via-[#2A1810]/85 to-[#2A1810]/95"
        />
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#C49B66] text-[#2A1810] border-none mb-8 px-6 py-2 text-sm uppercase tracking-wider font-semibold">
                Nuestro Compromiso
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-[#FAF7F4] mb-10 leading-tight tracking-tight">
                La Excelencia en{' '}
                <span className="text-[#C49B66] italic">Cada Detalle</span>
              </h2>
              <p className="text-xl text-[#FAF7F4]/80 mb-16 leading-relaxed max-w-3xl mx-auto tracking-wide">
                Desde la selección de los mejores granos hasta el proceso final de tostado, 
                cada paso está impregnado de nuestra pasión por la excelencia. Un compromiso 
                que se refleja en cada taza de nuestro café.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  size="lg"
                  className="bg-[#C49B66] text-[#2A1810] hover:bg-[#D4B68C] px-12 py-8 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl tracking-wide"
                >
                  Descubre Nuestra Historia
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#FAF7F4]/30 text-[#FAF7F4] hover:bg-[#FAF7F4]/10 px-12 py-8 text-lg font-medium rounded-full transition-all duration-300"
                >
                  Ver Certificaciones
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}