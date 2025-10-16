'use client';
import CoffeeParallaxBackground from '@/components/ui/CoffeeParallaxBackground';


import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Heart, Award, ArrowRight } from 'lucide-react';
import { AutoImageGallery } from '@/components/AutoImageGallery';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';

export default function NosotrosPage() {
  useEffect(() => {
    document.title = 'Nosotros - La Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
  
        {/* Fondo animado con partículas de café */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[#2C1810]"
          >
            {/* Partículas flotantes */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#FFD65A]/20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('/images/CAFÉS/CAFEFONDO1.png')] bg-cover bg-center"
            style={{
              filter: 'blur(3px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 via-[#5C3B28]/80 to-[#8B4513]/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-20 text-center max-w-[800px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span 
              className="inline-block relative px-8 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 text-sm tracking-[0.2em] uppercase text-[#FFD65A] font-medium">
                Tradición Cafetera
              </span>
              <motion.div
                className="absolute inset-0 bg-[#2C1810]/40 rounded-full border border-[#FFD65A]/30 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(255, 214, 90, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-[#FFD65A] via-amber-300 to-[#FFD65A] text-transparent bg-clip-text filter drop-shadow-lg">
              Nuestra Historia
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <motion.p 
              className="text-xl text-amber-100/90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium tracking-wide"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(255,214,90,0.3)",
                  "0 0 10px rgba(255,214,90,0.5)",
                  "0 0 0px rgba(255,214,90,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Tres generaciones dedicadas al cultivo del mejor café, transmitiendo pasión y conocimiento
              de padres a hijos en las montañas de Pueblo Bello.
            </motion.p>

            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#FFD65A]/40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#FFD65A]/40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#FFD65A]/40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="absolute -inset-2 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(255,214,90,0.4)",
                    "0 0 0 10px rgba(255,214,90,0)",
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <ArrowRight className="h-8 w-8 rotate-90 text-[#FFD65A]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Historia Section with Visual Appeal */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8E7] to-[#FFF3D0]">
        {/* Fondo Parallax */}
  <CoffeeParallaxBackground
    src="/images/CAFÉS/E.jpg"
    opacity={0.9}
    sensitivity={90}
  />

        {/* Efecto de partículas de café */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FFD65A]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
              }}
              animate={{
                y: window.innerHeight + 20,
                opacity: [1, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block"
              >
                <motion.span 
                  className="inline-block px-6 py-2 bg-amber-900 rounded-full text-[#FFF8E7] text-sm font-bold tracking-wide mb-6 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Nuestra Trayectoria
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-[#FFD65A]/20 rounded-full blur-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-bold text-[#FFD65A] mb-8 relative"
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,214,90,0)",
                      "0 0 40px rgba(255,214,90,0.3)",
                      "0 0 20px rgba(255,214,90,0)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Un Legado de Excelencia
                </motion.span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="prose prose-lg relative"
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#FFD65A]/5 to-transparent rounded-lg"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <p className="text-lg text-[#5C3B28]/90 mb-6 leading-relaxed font-medium relative z-10">
                  En las montañas de Pueblo Bello, Cesar, nuestra familia ha cultivado café durante tres generaciones. 
                  Lo que comenzó como un pequeño cultivo familiar se ha convertido en una finca que produce algunos 
                  de los mejores cafés de especialidad de Colombia.
                </p>
                <p className="text-lg text-[#5C3B28]/90 mb-8 leading-relaxed font-medium relative z-10">
                  Cada grano es cuidadosamente seleccionado, procesado y tostado siguiendo métodos tradicionales 
                  que respetan tanto el medio ambiente como las comunidades locales. Nuestro compromiso es ofrecer 
                  no solo un café excepcional, sino también una experiencia que conecte a nuestros clientes con 
                  la rica cultura cafetera colombiana.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="grid grid-cols-2 gap-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#FFD65A]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <motion.div 
                    className="relative text-center p-8 rounded-2xl bg-[#2C1810]/80 backdrop-blur-sm border border-[#FFD65A]/20 overflow-hidden"
                    whileHover={{ borderColor: "rgba(255,214,90,0.4)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FFD65A]/0 via-[#FFD65A]/5 to-[#FFD65A]/0"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="text-4xl font-bold text-[#FFD65A] mb-2">1800m</div>
                    <div className="text-[#FFD65A]/80 font-medium">Altura sobre el mar</div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#FFD65A]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <motion.div 
                    className="relative text-center p-8 rounded-2xl bg-[#2C1810]/80 backdrop-blur-sm border border-[#FFD65A]/20 overflow-hidden"
                    whileHover={{ borderColor: "rgba(255,214,90,0.4)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FFD65A]/0 via-[#FFD65A]/5 to-[#FFD65A]/0"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="text-4xl font-bold text-[#FFD65A] mb-2">50+</div>
                    <div className="text-[#FFD65A]/80 font-medium">Años de experiencia</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-700/10 rounded-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-1"></div>
              <OptimizedImage
                src="/images/about-farm.jpg"
                alt="Finca La Felicidá"
                className="rounded-lg shadow-xl relative z-10 transform transition-all duration-500 group-hover:-rotate-2 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes Automática */}
      <AutoImageGallery />
      

      {/* Valores Section with Enhanced Cards */}
      <section className="py-32 ">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h2 className="text-5xl font-bold text-[#5C3B28] mb-6">
                Nuestros Valores
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#5C3B28]/80 max-w-2xl mx-auto font-medium"
            >
              Principios que guían cada taza de café que producimos
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="text-center border-none hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-[#fffcef]">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFD65A]/20 flex items-center justify-center shadow-lg"
                  >
                    <Award className="h-10 w-10 text-[#5C3B28]" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-[#5C3B28]">Excelencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5C3B28]/80 font-medium">Compromiso inquebrantable con la calidad en cada paso del proceso.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="text-center border-none hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-[#fffcef]">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFD65A]/20 flex items-center justify-center shadow-lg"
                  >
                    <Leaf className="h-10 w-10 text-[#5C3B28]" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-[#5C3B28]">Sostenibilidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5C3B28]/80 font-medium">Prácticas responsables que protegen nuestro entorno y comunidad.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="text-center border-none hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-[#fffcef]">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFD65A]/20 flex items-center justify-center shadow-lg"
                  >
                    <Heart className="h-10 w-10 text-[#5C3B28]" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-[#5C3B28]">Tradición</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5C3B28]/80 font-medium">Preservando el legado familiar y la artesanía del café.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Origen Section with CTA */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/images/CAFÉS/CAFE_FONDO.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 to-[#7A4B2A]/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            El Origen de la Felicidá
          </h2>
          <p className="text-xl text-white/90 mb-12 italic max-w-3xl mx-auto">
            "En cada grano de café hay una historia que contar, un aroma que descubrir 
            y una felicidad que compartir."
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Descubre Nuestro Café
          </Button>
        </div>
      </section>
    </main>
  );
}
