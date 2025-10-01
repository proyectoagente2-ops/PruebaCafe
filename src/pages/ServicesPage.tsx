'use client';

import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, Compass, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';
import { services } from '@/lib/services';
import OptimizedImage from '@/components/OptimizedImage';
import { Product } from '@/lib/types';

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
    window.open(
      `https://wa.me/+573012345678?text=${encodeURIComponent("¡Hola! Me gustaría obtener más información sobre las experiencias en La Felicidá.")}`,
      '_blank'
    );
  }, []);

  const handleExploreServicesClick = useCallback(() => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
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
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        {/* Content Container */}
        <div className="relative container mx-auto px-6 py-20 text-center">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra variedad de experiencias diseñadas para conectarte con la
              naturaleza y la cultura cafetera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/servicios/${service.id}`}
                className="group"
              >
                <Card className="relative overflow-hidden h-[400px] transition-transform duration-300 transform hover:scale-[1.02]">
                  <div className="absolute inset-0">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  </div>
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-3">
                      {serviceIcons[service.id as keyof typeof serviceIcons]}
                      <span className="text-white/80 text-sm uppercase tracking-wider">
                        {service.id}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80">
                      {service.description}
                    </p>
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
  );
}

export default React.memo(ServicesPage);