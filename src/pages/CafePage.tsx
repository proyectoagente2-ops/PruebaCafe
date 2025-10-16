'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { coffeeProducts, allProducts } from '@/lib/products';
import { Coffee, Leaf, Mountain, ThermometerSun, Award, Scale, Heart, Droplet, Instagram, Facebook, MessageCircle as WhatsApp, Clock } from 'lucide-react';
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
            
           <motion.h1 
               className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 tracking-tight leading-tight"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
           >
               <motion.span 
                   className="text-white/95 inline-block"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.5 }}
               >
                   El Arte del{' '}
               </motion.span>
               <motion.span 
                   className="text-[#E6B980] font-serif italic inline-block"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8, delay: 0.7 }}
                   whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(230,185,128,0.6)" }}
               >
                   Café
               </motion.span>
               <br className="hidden md:block" />
               <motion.span 
                   className="text-white/95 inline-block"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.9 }}
               >
                   de Origen
               </motion.span>
           </motion.h1>

            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-16 tracking-wide">
              Descubre la exquisitez de nuestros cafés cultivados en las alturas 
              sagradas de la Sierra Nevada. Una experiencia sensorial única.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg"
                  className="bg-white/95 text-[#1A0F0A] hover:bg-white px-12 py-8 text-lg font-medium rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-white/20 tracking-wide relative overflow-hidden group"
                  onClick={() => {
                    const productsSection = document.querySelector('#products-section');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  Descubrir Colección
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-12 py-8 text-lg font-normal rounded-full transition-all duration-500 relative overflow-hidden group"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  Proceso de Cultivo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-48 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-32">
            <Badge className="bg-[#1A0F0A] text-white mb-10 px-8 py-2.5 text-sm uppercase tracking-wider font-medium hover:bg-black/90 transition-colors duration-300">
              Nuestros Cafés
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A0F0A] mb-12 tracking-tight">
              Ediciones <span className="font-serif italic text-[#8B4513]">Especiales</span>
            </h2>
            <p className="text-2xl text-[#1A0F0A]/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Descubre nuestra selección de cafés especiales, cada uno con su 
              propia personalidad y carácter único.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 xl:gap-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {coffeeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  translateZ: 20,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                <ProductCard 
                  product={product}
                  isHovered={hoveredProduct === product.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Attributes Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
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

      {/* Footer Section */}
      <footer className="bg-[#1A0F0A] text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <Link to="/" className="inline-block group">
              <img
                src="/images/LaFelicidA_transparente_ALPHA_2x.png"
                alt="La Felicidá"
                className="h-24 mb-6 mx-auto transform transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[#E4A429] max-w-2xl mx-auto text-lg font-medium">
              Un espacio sagrado donde la tradición, la espiritualidad y la naturaleza 
              convergen para crear experiencias únicas en la Sierra Nevada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
            {/* Enlaces Principales */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Explora</h3>
              <ul className="space-y-3 text-amber-200/80">
                <li>
                  <Link to="/cafe" className="hover:text-amber-200 transition-colors duration-200">
                    Nuestros Cafés
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="hover:text-amber-200 transition-colors duration-200">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="hover:text-amber-200 transition-colors duration-200">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-amber-200 transition-colors duration-200">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Síguenos</h3>
              <div className="space-y-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://wa.me/+573113678555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <WhatsApp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Horarios</h3>
              <div className="space-y-3 text-amber-200/80">
                <p className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <div className="pt-3">
                  <small>*Horarios sujetos a cambios en temporada alta</small>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Ubicación</h3>
              <div className="space-y-4">
                <p className="text-amber-200/80">
                  Sierra Nevada de Santa Marta<br />
                  Pueblo Bello, Cesar<br />
                  Colombia
                </p>
                <div className="pt-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 inline-block"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center text-amber-200/60 text-sm">
            <div className="space-x-3">
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">Política cultural</a>
              <span>|</span>
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">Aviso legal</a>
              <span>|</span>
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">Política de privacidad</a>
            </div>
            <div className="mt-4">
              © {new Date().getFullYear()} La Felicidá. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}