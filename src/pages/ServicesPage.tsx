'use client';

import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Compass, 
  Heart, 
  MessageCircle, 
  Coffee, 
  Star, 
  Facebook, 
  Instagram, 
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';
import { services } from '@/lib/services';
import OptimizedImage from '@/components/OptimizedImage';
import WhatsAppButton from '@/components/WhatsAppButton';

// Define icons for each service
const serviceIcons = {
  glamping: <Calendar className="h-5 w-5" />,
  'day-visits': <Compass className="h-5 w-5" />,
  spiritual: <Heart className="h-5 w-5" />,
  groups: <Users className="h-5 w-5" />,
};

const bookingSteps = [
  {
    title: 'Elige tu experiencia',
    description: 'Explora nuestros servicios y encuentra el que más te interese'
  },
  {
    title: 'Escríbenos a WhatsApp',
    description: 'Contáctanos para consultar disponibilidad y detalles'
  },
  {
    title: 'Realiza tu reserva',
    description: 'Asegura tu lugar haciendo el pago correspondiente'
  }
];

function ServicesPage() {
  // Prevent unnecessary re-renders and handle scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Memoize handlers to prevent re-renders
  const handleWhatsAppClick = useCallback(() => {
    const message = "¡Hola! Me gustaría obtener más información sobre las experiencias en La Felicidá.";
    window.open(
      `https://api.whatsapp.com/send?phone=573113678555&text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }, []);

  const handleExploreServicesClick = useCallback(() => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#4B3C32] opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Main Background */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/services/fondo servicios.png"
            alt="Fondo de servicios"
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>
        
        {/* Content Container */}
        <div className="relative container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-2 rounded-full border border-amber-400/30 text-amber-300 text-sm tracking-wider uppercase bg-black/20 backdrop-blur-sm">
              Experiencias Únicas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Descubre La Felicidá
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Vive experiencias únicas en nuestra finca cafetera, donde la naturaleza,
            la espiritualidad y la aventura se encuentran en perfecta armonía.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar experiencia
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm rounded-full transition-all duration-300"
              onClick={handleExploreServicesClick}
            >
              Explorar servicios
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Descubre más</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ArrowRight className="h-5 w-5 text-white/60 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 rounded-full text-amber-600 text-sm font-medium tracking-wide mb-4">
              Experiencias únicas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra variedad de experiencias diseñadas para conectarte con la
              naturaleza y la cultura cafetera.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/servicios/${service.id}`}
                className="group"
              >
                <Card className="overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1">
                  {/* Contenedor de imagen con altura fija */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Contenido debajo de la imagen */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-amber-50 rounded-full">
                        {serviceIcons[service.id as keyof typeof serviceIcons]}
                      </div>
                      <span className="text-amber-700 text-sm font-medium uppercase tracking-wider">
                        {service.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    {/* Botón fantasma que aparece en hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-center text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                      >
                        Ver más detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo reservar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sigue estos sencillos pasos para vivir una experiencia inolvidable en La
              Felicidá
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar ahora
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Café Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/CAFÉS/CAFE_FONDO.png"
            alt="Café La Felicidá"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Descubre Nuestro Café Especial
            </h2>
            <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
              Saborea la esencia de la Sierra Nevada en cada taza de nuestro café de origen,
              cultivado con amor y tradición en nuestra finca.
            </p>
            <Button 
              size="lg"
              className="bg-white text-amber-900 hover:bg-amber-50 hover:scale-105 transform transition-all duration-300"
              asChild
            >
              <Link to="/cafe">
                Explorar nuestros cafés
                <Coffee className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Productos Relacionados */}
      <div className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-transparent">
        <CrossSelling 
          currentProduct={{
            id: 'services-page',
            name: 'Servicios',
            description: 'Experiencias en La Felicidá',
            price: 0,
            image: '/images/services/fondo servicios.png',
            category: 'experience',
            inStock: true,
            capacity: 'N/A'
          }} 
          currentType="experience" 
        />
      </div>

      {/* Espaciador */}
      <div className="h-16"></div>

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
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/lafelicida.co" 
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
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Sección de horarios */}
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
                    size="sm"
                    variant="outline"
                    className="border-amber-200/20 text-amber-200/80 hover:bg-amber-200/10 hover:text-amber-200 transition-colors duration-200"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/maps/place/La+FelicidÁ/@10.4196944,-73.5925806,18z/" 
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
                <Link to="/privacidad" className="hover:text-amber-200 transition-colors duration-200">
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
      <WhatsAppButton isFloating />
    </div>
  );
}

export default React.memo(ServicesPage);