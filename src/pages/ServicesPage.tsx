'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, Compass, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';
import { services } from '@/lib/services';

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
    title: 'Confirmamos fechas y detalles',
    description: 'Coordinaremos todo para que tu experiencia sea perfecta'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fffcef]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: 'url(/images/coffee-beans-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/images/CAFÉS/Café con Ayu (Edición especial).jpg')] bg-center bg-no-repeat bg-cover filter blur-xl"
        />

        <div className="relative container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 rounded-full bg-amber-500/20 backdrop-blur-sm px-6 py-2 text-amber-200"
          >
            Bienvenido a nuestra finca
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white"
          >
            Vive experiencias únicas en la{' '}
            <span className="text-amber-400">Sierra Nevada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          >
            Conecta con la tierra, la cultura y el espíritu en un espacio pensado 
            para descansar, aprender y compartir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => {
                window.open(`https://wa.me/+573012345678?text=${encodeURIComponent("¡Hola! Me gustaría obtener más información sobre las experiencias en Café Felicidá.")}`, '_blank');
              }}
              className="bg-[#FFD65A] text-[#5C3B28] hover:bg-amber-400 px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar experiencia
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar servicios
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 container mx-auto px-6 max-w-7xl" id="services">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B3C32] text-center mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/servicios/${service.id}`}
              className="block max-w-2xl mx-auto w-full"
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-transparent hover:border-[#db9b24] h-full">
                <div className="aspect-w-16 aspect-h-10 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#4B3C32] group-hover:text-[#db9b24] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#db9b24] font-medium text-sm">Ver más detalles</span>
                    <ArrowRight className="h-4 w-4 text-[#db9b24] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-selling Section */}
      <CrossSelling
        currentProduct={{
          id: 'services',
          name: 'Servicios turísticos',
          description: 'Experiencias únicas en la Sierra Nevada',
          price: 0,
          image: '/images/services/hero-bg.jpg',
          capacity: 'N/A',
          category: 'experience',
          inStock: true,
          duration: 'Variable',
          location: 'Sierra Nevada de Santa Marta'
        }}
        currentType="experience"
      />

      {/* How to Book Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C3B28] text-center mb-12">
            Cómo reservar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#5C3B28] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              onClick={() => {
                window.open(`https://wa.me/+573012345678?text=${encodeURIComponent("¡Hola! Me gustaría obtener información sobre las experiencias disponibles.")}`, '_blank');
              }}
              className="bg-[#FFD65A] text-[#5C3B28] hover:bg-amber-400"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Reservar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}