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
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A0F0A]">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/images/CAFÉS/CAFEFONDO1.png"
            alt="Granos de café premium"
            className="w-full h-full object-cover object-center scale-105 brightness-[0.85]"
            style={{
              objectPosition: "50% 30%"
            }}
            loading="eager"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/60 via-[#1A0F0A]/30 to-transparent backdrop-blur-[1px]"
        />
        
        <div className="relative container mx-auto px-4 text-center text-[#FAF7F4]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Badge className="bg-white/90 text-[#1A0F0A] border-none mb-8 px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-white transition-colors duration-300">
              Colección Premium
            </Badge>
            
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight">
               <span className="text-white/95">El Arte del </span>
               <span className="text-[#E6B980] font-serif italic">Café</span>{' '}
               <br className="hidden md:block" />
               <span className="text-white/95">de Origen</span>
          </h1>

            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed mb-14 tracking-wide">
              Descubre la exquisitez de nuestros cafés cultivados en las alturas 
              sagradas de la Sierra Nevada. Una experiencia sensorial única.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="bg-white/95 text-[#1A0F0A] hover:bg-white px-10 py-7 text-base font-medium rounded-full transition-all duration-500 hover:shadow-lg tracking-wide"
                onClick={() => {
                  const productsSection = document.querySelector('#products-section');
                  productsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Descubrir Colección
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-7 text-base font-normal rounded-full transition-all duration-500"
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
      <section id="products-section" className="py-40 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <Badge className="bg-[#1A0F0A] text-white mb-8 px-6 py-2 text-sm uppercase tracking-wider font-normal hover:bg-black/90 transition-colors duration-300">
              Nuestros Cafés
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A0F0A] mb-10">
            Ediciones <span className="font-serif italic text-[#8B4513]">Especiales</span>
            </h2>
            <p className="text-xl text-[#1A0F0A]/70 max-w-2xl mx-auto leading-relaxed font-light">
              Descubre nuestra selección de cafés especiales, cada uno con su 
              propia personalidad y carácter único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {coffeeAttributes.map((attribute, index) => (
              <motion.div
                key={attribute.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#F8F8F8] flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:shadow-lg">
                  {React.createElement(attribute.icon, {
                    size: 32,
                    className: "text-[#8B4513] transform transition-transform duration-500 group-hover:scale-110"
                  })}
                </div>
                <h3 className="text-xl font-semibold text-[#1A0F0A] mb-4">{attribute.title}</h3>
                <p className="text-[#1A0F0A]/60 font-light leading-relaxed">{attribute.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 bg-[#1A0F0A] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src="/images/coffee-beans-bg.jpg"
            alt="Proceso del café"
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </motion.div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-28">
            <Badge className="bg-white/95 text-[#1A0F0A] border-none mb-8 px-6 py-2 text-sm uppercase tracking-wider font-normal">
              Nuestro Proceso
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">
              Del cafetal a{' '}
              <span className="font-serif italic text-[#E6B980]">tu taza</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
              Cada etapa de nuestro proceso artesanal está meticulosamente diseñada 
              para preservar y realzar los sabores únicos de nuestro café de origen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white/[0.02] backdrop-blur-sm p-12 rounded-2xl text-center group hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-xl bg-[#E6B980]/90 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6">
                    {React.createElement(step.icon, {
                      size: 36,
                      className: "text-[#1A0F0A] transition-transform duration-500 group-hover:scale-110"
                    })}
                  </div>
                  <div className="absolute -inset-1 bg-[#E6B980]/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed tracking-wide font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <Button
              size="lg"
              className="bg-white/95 text-[#1A0F0A] hover:bg-white px-12 py-7 text-base font-normal rounded-full transition-all duration-500 hover:shadow-lg"
            >
              Conoce Más del Proceso
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="bg-gradient-to-b from-[#F8F8F8] to-white py-48 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 mix-blend-overlay"
        >
          <OptimizedImage
            src="/images/coffee-beans-bg.jpg"
            alt="Granos de café premium"
            className="w-full h-full object-cover object-center scale-110 filter contrast-125 grayscale"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#1A0F0A] text-white border-none mb-8 px-6 py-2 text-sm uppercase tracking-wider font-normal hover:bg-black/90 transition-colors duration-300">
                Nuestro Compromiso
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-[#1A0F0A] mb-12 leading-tight tracking-tight">
                La Excelencia en{' '}
                <span className="font-serif italic text-[#8B4513]">Cada Detalle</span>
              </h2>
              <p className="text-xl text-[#1A0F0A]/70 mb-16 leading-relaxed max-w-3xl mx-auto tracking-wide font-light">
                Desde la selección de los mejores granos hasta el proceso final de tostado, 
                cada paso está impregnado de nuestra pasión por la excelencia. Un compromiso 
                que se refleja en cada taza de nuestro café.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button 
                  size="lg"
                  className="bg-[#1A0F0A] text-white hover:bg-black px-12 py-7 text-base font-normal rounded-full transition-all duration-500 hover:shadow-lg"
                >
                  Descubre Nuestra Historia
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border border-[#1A0F0A]/30 text-[#1A0F0A] hover:bg-[#1A0F0A]/5 px-12 py-7 text-base font-normal rounded-full transition-all duration-500"
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