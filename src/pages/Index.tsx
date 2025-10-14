'use client';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, MapPin, Users, Leaf, Heart, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { coffeeProducts } from '@/lib/products';
import '@/lib/animations.css';
import OptimizedImage from '@/components/OptimizedImage';

export default function HomePage() {
  const featuredCoffees = coffeeProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
        
        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8 animate-fadeIn flex flex-col items-center justify-center">
          <h1 className="font-playfair text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#FEFBF6] mb-6 leading-none flex items-center justify-center gap-2 whitespace-nowrap animate-slideUp delay-300 shadow-text">
            <span>LA</span>
            <span className="text-[#E4A429] relative highlight">
              FELICIDÁ
              <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E4A429] to-transparent opacity-60 rounded"></span>
            </span>
          </h1>

          <p className="text-[1.4rem] text-[#EDE5DA] mb-8 leading-[1.7] max-w-[580px] mx-auto animate-slideUp delay-500 shadow-text-sm">
            Descubre la magia de nuestra finca en la Sierra Nevada.
            Un espacio donde la tradición, la pasión y la excelencia se encuentran.
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-slideUp delay-700 -mt-4">
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
          </div>
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
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                <motion.h2 
                  className="text-4xl font-bold text-amber-900 leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  Un espacio de conexión con la naturaleza y el espíritu
                </motion.h2>
                <motion.div 
                  className="prose prose-lg text-coffee-dark mt-8"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                >
                  <p className="!text-[#3B2F2F] !opacity-100 leading-relaxed">
                    En La Felicidá, fusionamos las tradiciones ancestrales con la espiritualidad de la Sierra Nevada. 
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
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <OptimizedImage
                  src="/images/Inicio/FINCAPRESENTACION.png"
                  alt="Montañas de la Sierra Nevada"
                  className="absolute inset-0 w-full h-full object-cover"
                  blur={false}
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-16"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experiencias que{' '}
              </motion.span>
              <motion.span
                className="text-[#E4A429]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                transforman
              </motion.span>
            </motion.h2>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Card 
                  key={idx} 
                  className="relative group shadow-md hover:scale-105 hover:shadow-lg outline-4 transition-all duration-300 border-0 hover:shadow-amber-200/20"
                >
                  <CardHeader>
                    <motion.div 
                      className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="h-6 w-6 text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-amber-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* >>> PÁRRAFO FORZADO A SER VISIBLE <<< */}
                    <p className="mb-6 leading-relaxed !text-[#3B2F2F] !opacity-100">
                      {service.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-amber-700 hover:text-amber-900 p-0 h-auto font-medium"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consultar
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Productos */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Nuestros Productos
            </h2>
           <p className="text-lg max-w-2xl mx-auto !text-[#3B2F2F] !opacity-100 leading-relaxed">
  Descubre nuestra selección de productos artesanales, elaborados con amor y dedicación.
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCoffees.map((coffee) => (
              <Card key={coffee.id} className="relative group shadow-md hover:scale-105 hover:shadow-lg outline-4 transition-all duration-300 border-0">

                <CardContent className="p-6">
                  <div className="aspect-square rounded-lg overflow-hidden mb-6">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{coffee.name}</h3>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700 mb-4">
                    ${coffee.price.toLocaleString()}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-amber-900 text-white hover:bg-amber-800"
              asChild
            >
              <Link to="/cafe">
                Ver todos los productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mochilas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <OptimizedImage
                src="/images/Mochilas/MOCHILA3.png"
                alt="Mochilas artesanales"
                className="absolute inset-0 w-full h-full object-cover"
                blur={false}
              /><OptimizedImage
  src="/images/Mochilas/FONDOINICIOPAG.png"
  alt="Fondo de inicio página"
  className="absolute inset-0 w-full h-full object-cover"
  blur={false}
/>

            </div>
            <motion.div 
              className="space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-amber-900 leading-tight"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Mochilas con pensamiento
              </motion.h2>
              <motion.div 
                className="prose prose-lg text-coffee-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="!text-[#3B2F2F] !opacity-100 leading-relaxed">
                  Cada mochila es una obra de arte que lleva consigo la sabiduría ancestral de nuestros artesanos.
                  Tejidas con dedicación y amor, estas piezas únicas representan la conexión entre la tradición
                  y la modernidad.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/mochilas" className="mt-3 inline-block">
                  <motion.div
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      size="lg"
                      className="bg-amber-900 text-white hover:bg-amber-800 flex items-center group"
                    >
                      <span>Encargar mochila</span>
                      <motion.div
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Global */}
      <section className="py-32 relative overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/Inicio/finca_banana.png"
            alt="Finca La Felicidá"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A1810]/50 via-[#C49B66]/40 to-[#1A0F0A]/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Vive la experiencia
              </motion.span>{' '}
              <motion.span
                className="text-[#E4A429]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                completa
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                en La Felicidá
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Descubre un espacio donde la tradición se une con la espiritualidad
              y la conexión con la naturaleza.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50 transform transition-all duration-300 group"
                asChild
              >
                <Link to="/servicios">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Explorar servicios
                  </motion.span>
                  <motion.div
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        {/* Fondo base con gradientes */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#362419] via-[#2C1810] to-[#1A0F0A]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#C49B66]/20 via-transparent to-[#8B4513]/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#DEB887]/5 via-transparent to-transparent"></div>
          {/* Efecto de textura sutil */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpolygon points="0 0 20 0 10 10"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '8px 8px'
          }}></div>
        </div>
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C49B66]/5 to-transparent opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Logo y descripción principal */}
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

          {/* Grid de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Sección de navegación */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Explora</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/cafe" className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Nuestros Cafés
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sección de redes sociales */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Síguenos</h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://www.instagram.com/lafelicida.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/lafelicida.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://wa.me/+573113678555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200/80 hover:text-amber-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.40.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Sección de horarios */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Horarios</h3>
              <div className="space-y-3 text-amber-200/80">
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
            </div>

            {/* Sección de contacto */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E4A429]">Ubicación</h3>
              <div className="space-y-4">
                <p className="text-amber-200/80">
                  Sierra Nevada de Santa Marta<br />
                  Pueblo Bello, Cesar<br />
                  Colombia
                </p>
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-amber-200/20 text-amber-200/80 hover:bg-amber-200/10 hover:text-amber-200"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/maps/place/La+FelicidÁ/@10.4196944,-73.5925806,18z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver en Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
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
                &copy; {new Date().getFullYear()} La Felicidá. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
    </div>
  );
}
