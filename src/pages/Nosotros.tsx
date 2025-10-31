'use client';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Heart, Award, ArrowRight, Coffee, Users, Mountain, Sparkles } from 'lucide-react';
import { AutoImageGallery } from '@/components/AutoImageGallery';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';

// Componente de contador animado
const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default function NosotrosPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    document.title = 'Nosotros - La Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#FFF9EA] via-white to-[#FFF9EA]">
      {/* Hero Section with Enhanced Parallax */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
  
        {/* Fondo animado mejorado con partículas de café */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#251912] to-[#32281E]"
          >
            {/* Partículas flotantes mejoradas */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  background: `radial-gradient(circle, rgba(255,214,90,${0.3 + Math.random() * 0.3}) 0%, transparent 70%)`,
                }}
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                }}
                animate={{
                  x: [
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  ],
                  y: [
                    Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                    Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 15 + Math.random() * 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="absolute inset-0"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              filter: 'blur(2px)',
            }}
          >
            <OptimizedImage
              src="/images/CAFÉS/CAFEFONDO1.png"
              alt="Fondo de café"
              className="w-full h-full object-cover"
              priority
              fetchpriority="high"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/95 via-[#5C3B28]/85 to-[#8B4513]/75 backdrop-blur-sm"></div>
        </motion.div>

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
              <span className="relative z-10 text-sm tracking-[0.2em] uppercase text-amber-300 font-medium">
                Tradición Cafetera
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/60 to-[#3A2518]/40 rounded-full border border-amber-400/30 backdrop-blur-sm"
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
              <span className="bg-gradient-to-r from-[#FFB840] via-[#FFD449] to-[#FFCD28] text-transparent bg-clip-text filter drop-shadow-lg">
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

      {/* Historia Section with Professional Design */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Fondo con gradiente sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        
        {/* Elementos decorativos geométricos */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-amber-100/30 to-yellow-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center space-y-10">
            {/* Columna de texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6 max-w-4xl"
            >
              {/* Badge superior */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mb-2"
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-700">
                  Nuestra Trayectoria
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600" />
              </motion.div>
              
              {/* Título principal con mejor tipografía */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-br from-amber-900 via-amber-700 to-orange-800 bg-clip-text text-transparent">
                  Un Legado de
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-1 bg-gradient-to-br from-yellow-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Excelencia
                </span>
                {/* Elemento decorativo */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-5 mx-auto"
                />
              </motion.h2>
              
              {/* Contenido de texto mejorado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-5 pt-2"
              >
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  En las montañas de <span className="font-semibold text-amber-800">Pueblo Bello, Cesar</span>, nuestra familia ha cultivado café durante tres generaciones. 
                  Lo que comenzó como un pequeño cultivo familiar se ha convertido en una finca que produce algunos 
                  de los mejores <span className="font-semibold text-amber-800">cafés de especialidad de Colombia</span>.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Cada grano es cuidadosamente seleccionado, procesado y tostado siguiendo <span className="font-semibold text-amber-800">métodos tradicionales</span> 
                  que respetan tanto el medio ambiente como las comunidades locales. Nuestro compromiso es ofrecer 
                  no solo un café excepcional, sino también una experiencia que conecte a nuestros clientes con 
                  la rica cultura cafetera colombiana.
                </p>
              </motion.div>
              
              {/* Estadísticas rediseñadas */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto pt-4"
              >
                {/* Tarjeta 1 - Altura */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Fondo decorativo */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 shadow-md">
                        <Mountain className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-amber-900 mb-1">
                        <AnimatedCounter end={1800} suffix="m" />
                      </div>
                      <div className="text-sm font-medium text-gray-600">Altura sobre el mar</div>
                    </div>
                  </div>
                </motion.div>

                {/* Tarjeta 2 - Experiencia */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Fondo decorativo */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-4 shadow-md">
                        <Coffee className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-amber-900 mb-1">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <div className="text-sm font-medium text-gray-600">Años de experiencia</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes Automática */}
      <AutoImageGallery />
      
      {/* Timeline Section - Historia de 3 Generaciones */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#2C1810] via-[#1A1208] to-[#2C1810]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grain-pattern.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD65A] via-[#FFB840] to-[#FFD65A] text-transparent bg-clip-text">
                Tres Generaciones de Pasión
              </h2>
            </motion.div>
            <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
              Un legado familiar que ha crecido con cada generación, perfeccionando el arte del café
            </p>
          </motion.div>

          <div className="relative">
            {/* Línea central del timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFD65A]/20 via-[#FFD65A]/50 to-[#FFD65A]/20" />

            {/* Primera Generación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-24 md:mb-32"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-[#FFD65A]/10 to-[#FFB840]/10 backdrop-blur-md p-8 rounded-2xl border-2 border-[#FFD65A]/30 shadow-2xl"
                  >
                    <div className="flex items-center justify-end gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-[#FFD65A]">Primera Generación</h3>
                      <Users className="h-8 w-8 text-[#FFD65A]" />
                    </div>
                    <p className="text-lg text-amber-100/90 leading-relaxed mb-3">
                      Los abuelos fundadores plantaron las primeras semillas en las montañas de Pueblo Bello, 
                      estableciendo las bases de lo que sería nuestra tradición cafetera.
                    </p>
                    <div className="text-[#FFD65A] font-bold text-xl">1970s</div>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD65A] to-[#FFB840] flex items-center justify-center shadow-2xl border-4 border-[#2C1810] z-10">
                  <Sparkles className="h-8 w-8 text-[#2C1810]" />
                </div>
                <div className="md:w-1/2" />
              </div>
            </motion.div>

            {/* Segunda Generación */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-24 md:mb-32"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB840] to-[#FFA500] flex items-center justify-center shadow-2xl border-4 border-[#2C1810] z-10">
                  <Coffee className="h-8 w-8 text-[#2C1810]" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-[#FFB840]/10 to-[#FFA500]/10 backdrop-blur-md p-8 rounded-2xl border-2 border-[#FFB840]/30 shadow-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Coffee className="h-8 w-8 text-[#FFB840]" />
                      <h3 className="text-3xl font-bold text-[#FFB840]">Segunda Generación</h3>
                    </div>
                    <p className="text-lg text-amber-100/90 leading-relaxed mb-3">
                      Los padres expandieron la finca e introdujeron técnicas modernas de cultivo, 
                      manteniendo siempre el respeto por las tradiciones familiares.
                    </p>
                    <div className="text-[#FFB840] font-bold text-xl">1990s - 2000s</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Tercera Generación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-[#FFA500]/10 to-[#FF8C00]/10 backdrop-blur-md p-8 rounded-2xl border-2 border-[#FFA500]/30 shadow-2xl"
                  >
                    <div className="flex items-center justify-end gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-[#FFA500]">Tercera Generación</h3>
                      <Mountain className="h-8 w-8 text-[#FFA500]" />
                    </div>
                    <p className="text-lg text-amber-100/90 leading-relaxed mb-3">
                      La generación actual combina la sabiduría ancestral con innovación sostenible, 
                      llevando el café de La Felicidá a mercados internacionales.
                    </p>
                    <div className="text-[#FFA500] font-bold text-xl">2010s - Presente</div>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFA500] to-[#FF8C00] flex items-center justify-center shadow-2xl border-4 border-[#2C1810] z-10">
                  <Mountain className="h-8 w-8 text-[#2C1810]" />
                </div>
                <div className="md:w-1/2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Section with Enhanced Cards */}
      <section className="py-32 relative">
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-br from-[#4A2F1C] to-[#6B452A] text-transparent bg-clip-text">
                Nuestros Valores
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#5C3B28]/90 max-w-2xl mx-auto font-medium"
            >
              Principios que guían cada taza de café que producimos
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <Card className="relative text-center border-2 border-amber-200/50 hover:border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white/50 to-amber-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 animate-pulse opacity-50" />
                      <Award className="h-12 w-12 text-white relative z-10" />
                    </motion.div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-transparent bg-clip-text mb-3">Excelencia</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[#5C3B28] font-medium text-lg leading-relaxed">Compromiso inquebrantable con la calidad en cada paso del proceso.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <Card className="relative text-center border-2 border-green-200/50 hover:border-green-300 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300 to-green-500 animate-pulse opacity-50" />
                      <Leaf className="h-12 w-12 text-white relative z-10" />
                    </motion.div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-transparent bg-clip-text mb-3">Sostenibilidad</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[#5C3B28] font-medium text-lg leading-relaxed">Prácticas responsables que protegen nuestro entorno y comunidad.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <Card className="relative text-center border-2 border-rose-200/50 hover:border-rose-300 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white/50 to-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-2xl relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 animate-pulse opacity-50" />
                      <Heart className="h-12 w-12 text-white relative z-10" />
                    </motion.div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-br from-rose-800 via-rose-700 to-rose-900 text-transparent bg-clip-text mb-3">Tradición</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[#5C3B28] font-medium text-lg leading-relaxed">Preservando el legado familiar y la artesanía del café.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Origen Section with Enhanced CTA */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/CAFÉS/CAFE_FONDO.png"
            alt="Origen del café"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1810]/95 via-[#2C1810]/90 to-[#3A2518]/85 backdrop-blur-[3px]"></div>
        
        {/* Partículas flotantes decorativas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#FFD65A]/30"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              }}
              animate={{
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                ],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 text-transparent bg-clip-text">
              El Origen de la Felicidá
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD65A]/10 to-transparent blur-xl" />
            <p className="text-2xl md:text-3xl text-white/95 italic max-w-3xl mx-auto leading-relaxed relative z-10 font-light">
              "En cada grano de café hay una historia que contar, un aroma que descubrir 
              y una felicidad que compartir."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/cafe#products-section">
                <Button
                  variant="secondary"
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#FFB840] to-[#FFD449] text-[#2C1810] hover:from-[#FFC040] hover:to-[#FFE449] px-10 py-7 text-xl font-bold rounded-full transition-all duration-300 shadow-2xl group border-2 border-[#FFD65A]"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Coffee className="h-6 w-6" />
                    Descubre Nuestro Café
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Estadísticas adicionales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFD65A] mb-2">
                <AnimatedCounter end={3} />
              </div>
              <div className="text-amber-200/80 text-sm font-medium">Generaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFD65A] mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-amber-200/80 text-sm font-medium">Café Orgánico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFD65A] mb-2">
                <AnimatedCounter end={1800} suffix="m" />
              </div>
              <div className="text-amber-200/80 text-sm font-medium">Altitud</div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
