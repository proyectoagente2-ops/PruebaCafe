'use client';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NonTranslatable } from '@/components/shared/NonTranslatable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { Coffee, MapPin, Users, Leaf, Heart, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { coffeeProducts } from '@/lib/products';
import '@/lib/animations.css';
import OptimizedImage from '@/components/OptimizedImage';

export default function HomePage() {
  const featuredCoffees = coffeeProducts.slice(0, 3);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    let autoplayInterval: NodeJS.Timeout;

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        api.scrollNext();
      }, 1800); // Movimiento más constante cada 1.8 segundos
    };

    // Iniciar el autoplay
    startAutoplay();

    // Detener el autoplay cuando el usuario interactúa
    api.on("pointerDown", () => {
      clearInterval(autoplayInterval);
    });

    // Reanudar el autoplay cuando el usuario deja de interactuar
    api.on("pointerUp", () => {
      startAutoplay();
    });

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <OptimizedImage
            src="/images/Inicio/nano-banana-2025-09-16T02-58-06.png"
            alt="Fondo de la Sierra Nevada"
            className="w-full h-full object-cover object-center"
            priority
          />
        </motion.div>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        ></motion.div>
        
        <div className="relative z-20 text-center max-w-[850px] mx-auto px-8 animate-fadeIn flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <Badge className="bg-white/90 backdrop-blur-sm border border-amber-300 text-amber-900 px-6 py-2 text-sm font-semibold shadow-lg">
              Sierra Nevada de Santa Marta
            </Badge>
          </motion.div>
          <h1 className="font-playfair text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#FEFBF6] mb-6 leading-[0.95] flex items-center justify-center gap-4 whitespace-nowrap animate-slideUp delay-300">
            <NonTranslatable>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] tracking-tight"
              >LA</motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
                className="text-[#E4A429] relative highlight tracking-tight drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)]"
              >
                FELICIDÁ
                <motion.span 
                  className="absolute bottom-[-8px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#E4A429] to-transparent opacity-70 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 1.5 }}
                ></motion.span>
              </motion.span>
            </NonTranslatable>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12 max-w-[750px] mx-auto space-y-3"
          >
            <p className="text-[1.35rem] md:text-[1.5rem] text-white font-light leading-[1.6] tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              Descubre la <span className="font-medium text-amber-100">magia</span> de nuestra finca en la Sierra Nevada.
            </p>
            <p className="text-[1.1rem] md:text-[1.2rem] text-amber-50/85 font-light leading-[1.7] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Un espacio donde la tradición, la pasión y la excelencia se encuentran.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#C9881A] to-[#E4A429] hover:from-[#E4A429] hover:to-[#C9881A] text-[#FEFBF6] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl shadow-lg shadow-[#C9881A]/30 border border-white/20 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9881A]/40"
                asChild
              >
                <Link to="/cafe">
                  <Coffee className="mr-2 h-5 w-5" />
                  Nuestros Productos
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg"
                className="bg-[#EDE5DA] text-[#2C1810] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl border-2 border-[#EDE5DA] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EDE5DA]/30"
                asChild
              >
                <a href="https://www.google.com/maps/place/La+FelicidÁ/@10.4196944,-73.5925806,18z/data=!4m6!3m5!1s0x8ef54faec8800807:0x7617c8fc237ed190!8m2!3d10.419428!4d-73.5923419!16s%2Fg%2F11p0f4qhnv?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Visitar Finca
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-[50.7%] transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>

      </section>

      {/* Por qué visitarnos Section */}
      <section className="relative py-32 bg-gradient-to-b from-amber-50 via-cream to-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1.5 text-xs font-semibold mb-4 shadow-md">
                    NUESTRA ESENCIA
                  </Badge>
                  <h2 className="text-5xl font-bold text-amber-900 leading-tight">
                    Un espacio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">conexión</span> con la naturaleza y el espíritu
                  </h2>
                </motion.div>
                <motion.div 
                  className="prose prose-lg text-coffee-dark mt-8"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                >
                  <p className="!text-[#3B2F2F] !opacity-100 leading-relaxed">
                    En <NonTranslatable>La Felicidá</NonTranslatable>, fusionamos las tradiciones ancestrales con la espiritualidad de la Sierra Nevada. 
                    Cada visita es una oportunidad para reconectarte con la naturaleza, mientras descubres los secretos de 
                    nuestra sabiduría ancestral y el encanto de nuestra tierra.
                  </p>
                  <p className="!text-[#3B2F2F] !opacity-100 leading-relaxed">
                    Nuestro espacio es más que una finca; es un santuario donde la paz de las montañas se 
                    encuentra con la energía de la naturaleza, creando una experiencia única de bienestar y conexión.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: "1000px" }}
            >
              <OptimizedImage
                src="/images/Inicio/FINCAPRESENTACION.png"
                alt="Montañas de la Sierra Nevada"
                className="w-full h-full object-cover"
                blur={false}
              />
              {/* Overlay con gradiente sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="relative py-32 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
        {/* Patrón de fondo decorativo */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(180, 83, 9) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1.5 text-xs font-semibold mb-4 shadow-md">
                  NUESTROS SERVICIOS
                </Badge>
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center text-amber-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experiencias que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                  transforman
                </span>
              </motion.h2>
              <motion.p
                className="text-lg text-amber-800/70 mt-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Cada servicio está diseñado para conectarte profundamente con la naturaleza y tu ser interior
              </motion.p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bienestar & Espiritualidad",
                description: "Reconecta con tu ser interior a través de rituales ancestrales y prácticas de sanación.",
                icon: Heart,
              },
              {
                title: "Turismo Consciente",
                description: "Explora la Sierra Nevada y nuestra finca de manera sostenible y respetuosa.",
                icon: Leaf,
              },
              {
                title: "Glamping & Estadía",
                description: "Vive una experiencia única de alojamiento en medio de la naturaleza.",
                icon: Star,
              },
              {
                title: "Uso del espacio",
                description: "Espacio ideal para retiros, talleres y eventos grupales en conexión con la naturaleza.",
                icon: Users,
              },
            ].map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card 
                  key={idx} 
                  className="relative group h-full bg-gradient-to-br from-white via-amber-50/30 to-white backdrop-blur-sm border-2 border-amber-200/30 hover:border-amber-300/50 shadow-lg hover:shadow-2xl hover:shadow-amber-200/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Efecto de brillo animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/0 group-hover:via-amber-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Borde superior decorativo */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/50 transition-all duration-500"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="mb-8 leading-relaxed text-[#3B2F2F]/90 text-base">
                      {service.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-amber-700 hover:text-amber-900 hover:bg-amber-100/50 p-0 h-auto font-semibold group/btn transition-all duration-300"
                        asChild
                      >
                        <Link to={
                          service.title === "Bienestar & Espiritualidad" ? "/servicios/spiritual" :
                          service.title === "Turismo Consciente" ? "/servicios/day-visits" :
                          service.title === "Glamping & Estadía" ? "/servicios/glamping" :
                          "/servicios/groups"
                        }>
                          <MessageCircle className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Consultar
                          <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                  
                  {/* Decoración de esquina */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-200/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Productos */}
      <section className="relative py-32 bg-gradient-to-b from-amber-50 via-amber-100/50 to-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1.5 text-xs font-semibold mb-4 shadow-md">
              CAFÉ DE ALTURA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-5 leading-tight">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Productos</span>
            </h2>
            <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
              Café cultivado con amor en las montañas de la Sierra Nevada, donde cada grano cuenta una historia
            </p>
          </motion.div>

          <motion.div 
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Carousel
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
                containScroll: "keepSnaps",
                skipSnaps: false,
                slidesToScroll: 1
              }}
              className="w-full cursor-grab active:cursor-grabbing"
              setApi={setApi}
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    src: "/images/CAFÉS/CAFES JUNTOS.jpg",
                    alt: "Colección de cafés especiales"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <motion.div 
                      className="p-2"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="group relative overflow-hidden border-2 border-amber-200/40 hover:border-amber-400/60 shadow-xl hover:shadow-2xl hover:shadow-amber-300/40 transition-all duration-500 bg-gradient-to-br from-white to-amber-50/30">
                        <CardContent className="p-0 relative">
                          <div className="aspect-square relative overflow-hidden">
                            <OptimizedImage
                              src={item.src}
                              alt={item.alt}
                              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Badge flotante */}
                            <div className="absolute top-4 left-4 z-10">
                              <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-3 py-1 text-xs font-bold shadow-lg backdrop-blur-sm">
                                Especial
                              </Badge>
                            </div>
                            
                            {/* Efecto de brillo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 border-amber-300 bg-white/90 hover:bg-amber-50 shadow-lg" />
              <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 border-amber-300 bg-white/90 hover:bg-amber-50 shadow-lg" />
            </Carousel>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg"
                className="group relative bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(120,53,15,0.4)] hover:shadow-[0_12px_40px_rgba(120,53,15,0.6)] border-2 border-amber-700/50 transition-all duration-300 overflow-hidden"
                asChild
              >
                <Link to="/cafe">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Ver todos los productos</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mochilas Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-amber-50/20 to-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <OptimizedImage
                src="/images/Mochilas/MOCHILASJUNTAS.png"
                alt="Mochilas artesanales"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                blur={false}
              />
              {/* Overlay con gradiente sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent"></div>
              
              {/* Badge flotante */}
              <motion.div 
                className="absolute top-6 left-6 z-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-2 text-sm font-bold shadow-xl backdrop-blur-sm">
                  Artesanía Ancestral
                </Badge>
              </motion.div>
            </motion.div>
            <motion.div 
              className="space-y-10 order-1 lg:order-2 relative z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1.5 text-xs font-semibold mb-6 shadow-md">
                  ARTESANÍA TRADICIONAL
                </Badge>
                <h2 className="text-5xl font-bold text-amber-900 leading-tight mb-6">
                  Mochilas con <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">pensamiento</span>
                </h2>
              </motion.div>
              
              <motion.div 
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-[#3B2F2F]/90 leading-relaxed">
                  Cada mochila es una <span className="font-semibold text-amber-800">obra de arte</span> que lleva consigo la sabiduría ancestral de nuestros artesanos.
                  Tejidas con dedicación y amor, estas piezas únicas representan la conexión entre la tradición
                  y la modernidad.
                </p>
                
                {/* Características destacadas */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Heart, text: "Hecho a mano" },
                    { icon: Leaf, text: "Materiales naturales" },
                    { icon: Star, text: "Diseños únicos" },
                    { icon: Users, text: "Apoyo comunitario" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-200/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-amber-900">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/mochilas" className="inline-block">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      className="group relative bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(120,53,15,0.4)] hover:shadow-[0_12px_40px_rgba(120,53,15,0.6)] border-2 border-amber-700/50 transition-all duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                      <span className="relative z-10">Encargar mochila</span>
                      <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Global */}
      <section className="relative py-40 overflow-hidden">
        {/* Imagen de fondo con efecto parallax */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <OptimizedImage
            src="/images/Inicio/finca_banana.png"
            alt="Finca La Felicidá"
            className="w-full h-full object-cover"
          />
          {/* Múltiples capas de overlay para profundidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-amber-950/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
          {/* Efecto de viñeta intenso */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.7)]"></div>
        </motion.div>
        
        {/* Partículas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-600/25 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-gradient-to-r from-amber-800/25 to-amber-900/25 backdrop-blur-md border-amber-700/40 text-amber-100 px-6 py-2 text-sm font-semibold shadow-2xl">
                Únete a la experiencia
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Vive la experiencia{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] via-[#C9881A] to-[#D4A574] drop-shadow-[0_0_20px_rgba(180,140,90,0.4)]">
                completa
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">en <NonTranslatable>La Felicidá</NonTranslatable></span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-amber-50/90 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Descubre un espacio donde la tradición se une con la espiritualidad
              y la conexión con la naturaleza.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg"
                  className="group relative bg-white text-amber-900 hover:bg-amber-50 px-12 py-7 text-xl font-bold rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden"
                  asChild
                >
                  <Link to="/servicios">
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/50 to-amber-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative z-10">Explorar servicios</span>
                    <ArrowRight className="ml-2 h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="group relative bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-12 py-7 text-xl font-bold rounded-2xl backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                  asChild
                >
                  <Link to="/contacto">
                    <span className="relative z-10">Contáctanos</span>
                    <MessageCircle className="ml-2 h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        {/* Fondo base con gradientes mejorados */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810] via-[#1A0F0A] to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-amber-950/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/10 via-transparent to-transparent"></div>
          {/* Efecto de textura sutil mejorado */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23E4A429" fill-opacity="0.4"%3E%3Cpolygon points="0 0 20 0 10 10"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '12px 12px'
          }}></div>
        </div>
        {/* Línea decorativa superior con gradiente */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Logo y descripción principal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            <Link to="/" className="inline-block group">
              <motion.img
                src="/images/LaFelicidA_transparente_ALPHA_2x.png"
                alt="La Felicidá"
                className="h-28 mb-8 mx-auto filter drop-shadow-[0_0_20px_rgba(228,164,41,0.3)]"
                data-no-translate="true"
                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 30px rgba(228,164,41,0.5))" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
            <motion.p 
              className="text-amber-200/90 max-w-2xl mx-auto text-lg font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Un espacio sagrado donde la tradición, la espiritualidad y la naturaleza 
              convergen para crear experiencias únicas en la Sierra Nevada.
            </motion.p>
          </motion.div>

          {/* Grid de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Sección de navegación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Explora</h3>
              <ul className="space-y-4">
                {[
                  { to: "/cafe", icon: Coffee, text: "Nuestros Cafés" },
                  { to: "/servicios", icon: Star, text: "Servicios" },
                  { to: "/nosotros", icon: Heart, text: "Sobre Nosotros" },
                  { to: "/contacto", icon: MessageCircle, text: "Contacto" }
                ].map((link, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link to={link.to} className="group text-amber-200/70 hover:text-amber-200 transition-all duration-300 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-amber-900/30 group-hover:bg-amber-800/50 flex items-center justify-center transition-all duration-300">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.text}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sección de redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Síguenos</h3>
              <div className="flex flex-col space-y-4">
                <motion.a 
                  href="https://www.instagram.com/lafelicida.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-amber-200/70 hover:text-amber-200 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 group-hover:from-pink-400 group-hover:to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Instagram</span>
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/lafelicida.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-amber-200/70 hover:text-amber-200 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Facebook</span>
                </motion.a>
                <motion.a 
                  href="https://wa.me/+573113678555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-amber-200/70 hover:text-amber-200 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.40.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Sección de horarios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Horarios</h3>
              <div className="space-y-3 text-amber-200/70">
                <p className="flex justify-between">
                  <span>Lun - Vie:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingos:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <div className="pt-3">
                  <p className="text-[#E4A429] font-medium">Visitas con cita previa</p>
                </div>
              </div>
            </motion.div>

            {/* Sección de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Ubicación</h3>
              <div className="space-y-4">
                <p className="text-amber-200/70 leading-relaxed">
                  Sierra Nevada de Santa Marta<br />
                  Pueblo Bello, Cesar<br />
                  Colombia
                </p>
                <motion.div 
                  className="pt-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group border-2 border-amber-500/30 text-amber-200/80 hover:bg-amber-500/20 hover:text-amber-200 hover:border-amber-500/50 transition-all duration-300"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/maps/place/La+FelicidÁ/@10.4196944,-73.5925806,18z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Ver en Google Maps
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enlaces legales y copyright */}
          <div className="border-t border-amber-200/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-amber-200/60">
                <Link to="/politica-cultural" className="hover:text-amber-200 transition-colors duration-200">
                  Política cultural
                </Link>
                <span className="text-amber-200/20">|</span>
                <Link to="/aviso-legal" className="hover:text-amber-200 transition-colors duration-200">
                  Aviso legal
                </Link>
                <span className="text-amber-200/20">|</span>
                <Link to="/privacidad" className="hover:text-amber-200 transition-colors duración-200">
                  Política de privacidad
                </Link>
              </div>
              <p className="text-sm text-amber-200/60">
                &copy; {new Date().getFullYear()} <NonTranslatable>La Felicidá</NonTranslatable>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
    </div>
  );
}
