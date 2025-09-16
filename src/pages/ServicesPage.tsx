'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, Compass, Heart, MessageCircle, Coffee, ShoppingBag } from 'lucide-react';
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

const featuredProducts = {
  coffees: [
    {
      name: 'Café con Ayu',
      image: '/images/CAFÉS/Café con Ayu (Edición especial).jpg'
    },
    {
      name: 'Café Lavado',
      image: '/images/CAFÉS/Café Lavado (Edición especial).jpg'
    },
    {
      name: 'Café Tradicional',
      image: '/images/CAFÉS/Café Tradicional (Edición especial).jpg'
    }
  ],
  bags: [
    {
      name: 'Mochila Artesanal 1',
      image: '/images/Mochilas/MOCHILA 1.png'
    },
    {
      name: 'Mochila Artesanal 2',
      image: '/images/Mochilas/MOCHILA 2.png'
    },
    {
      name: 'Mochila Artesanal 3',
      image: '/images/Mochilas/MOCHILA 1.png' // Usamos la primera imagen como placeholder para la tercera
    }
  ]
};

export default function ServicesPage() {
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/services/fondo%20servicios.png)',
          }}
        />
        
        {/* Overlay with multiple gradients for depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white max-w-5xl mx-auto leading-tight"
          >
            Vive experiencias únicas en la{' '}
            <span className="text-amber-400 relative">
              Sierra Nevada
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60.6667 4.66667 196.4 -4 356 10" stroke="#FFB020" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-16 max-w-2xl mx-auto text-gray-200 leading-relaxed font-light"
          >
            Descubre un santuario natural donde la paz de las montañas se encuentra 
            con experiencias transformadoras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => {
                window.open(`https://wa.me/+573012345678?text=${encodeURIComponent("¡Hola! Me gustaría obtener más información sobre las experiencias en Café Felicidá.")}`, '_blank');
              }}
              className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Reservar experiencia
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm rounded-full transition-all duration-300"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar servicios
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50" id="services">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-amber-400"></div>
              <span className="px-4 text-amber-600 font-medium">Nuestros Servicios</span>
              <div className="h-px w-12 bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B3C32] mb-8 leading-tight">
              Experiencias diseñadas para despertar tus sentidos
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada servicio está cuidadosamente diseñado para ofrecerte una experiencia única
              que combina naturaleza, cultura y bienestar en la Sierra Nevada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Glamping Card */}
            <Link to="/servicios/glamping" className="block">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-transparent hover:border-[#db9b24] h-full bg-white">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src="/images/services/Estadía & Glamping.png"
                    alt="Estadía & Glamping"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B3C32] group-hover:text-[#db9b24] transition-colors mb-3">
                    Estadía & Glamping
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Espacios íntimos para descansar entre cafetales y montañas. Una experiencia única de alojamiento donde el lujo se encuentra con la naturaleza.
                  </p>
                  <div className="flex items-center text-[#db9b24] font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Day Visits Card */}
            <Link to="/servicios/day-visits" className="block">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-transparent hover:border-[#db9b24] h-full bg-white">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src="/images/services/Visitas de un día a la finca.png"
                    alt="Visitas de un día"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B3C32] group-hover:text-[#db9b24] transition-colors mb-3">
                    Visitas de un día
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Sumérgete en la experiencia completa del café: desde el cultivo hasta la taza. Aprende sobre nuestro proceso sostenible y la vida en la finca.
                  </p>
                  <div className="flex items-center text-[#db9b24] font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Spiritual Experiences Card */}
            <Link to="/servicios/spiritual" className="block">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-transparent hover:border-[#db9b24] h-full bg-white">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src="/images/services/Experiencias espirituales.png"
                    alt="Experiencias espirituales"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B3C32] group-hover:text-[#db9b24] transition-colors mb-3">
                    Experiencias espirituales
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Encuentra tu paz interior en nuestros retiros espirituales. Conecta con la naturaleza y contigo mismo en un entorno de tranquilidad y reflexión.
                  </p>
                  <div className="flex items-center text-[#db9b24] font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Camps & Groups Card */}
            <Link to="/servicios/groups" className="block">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-transparent hover:border-[#db9b24] h-full bg-white">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src="/images/services/Campamentos  Grupos.png"
                    alt="Campamentos y Grupos"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B3C32] group-hover:text-[#db9b24] transition-colors mb-3">
                    Campamentos & Grupos
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Organiza retiros, eventos corporativos o actividades grupales en nuestro espacio. Ideal para equipos que buscan fortalecer lazos en un entorno natural.
                  </p>
                  <div className="flex items-center text-[#db9b24] font-medium">
                    <span>Explorar</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="py-12 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden" id="products">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-100 rounded-full -translate-x-16 -translate-y-16 opacity-20" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-100 rounded-full translate-x-20 translate-y-20 opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl relative">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-amber-100/50 rounded-full text-amber-800 text-xs font-medium mb-3">
              Productos Destacados
            </span>
            <h2 className="text-2xl font-bold text-[#4B3C32] mb-2">
              ¿Quieres llevar un recuerdo?
            </h2>
            <div className="w-20 h-0.5 bg-amber-400 mx-auto mb-3"></div>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Lleva contigo el sabor de nuestro café especial y la belleza de nuestras artesanías
            </p>
          </div>

          <div className="flex gap-3 justify-center mb-8">
            <Button
              variant="outline"
              size="sm"
              className="bg-gradient-to-r from-[#4B3C32] to-[#5C4B40] text-white hover:from-[#5C4B40] hover:to-[#6D5B50] px-4 py-1.5 text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border-none rounded-full"
              onClick={() => {
                window.location.href = '/cafe';
              }}
            >
              <Coffee className="w-3 h-3 mr-1 inline-block" />
              Explorar cafés
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-[#4B3C32] border border-[#4B3C32] hover:bg-[#4B3C32] hover:text-white px-4 py-1.5 text-xs transition-all duration-300 transform hover:scale-105 rounded-full shadow-sm hover:shadow-md"
              onClick={() => {
                window.location.href = '/mochilas';
              }}
            >
              <ShoppingBag className="w-3 h-3 mr-1 inline-block" />
              Ver mochilas
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 border border-amber-100/50">
            {/* Coffees Section */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-8 bg-amber-200"></div>
                <h3 className="text-base font-semibold text-[#4B3C32]">Nuestros Cafés</h3>
                <div className="h-px w-8 bg-amber-200"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {featuredProducts.coffees.map((coffee, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden shadow-sm bg-gradient-to-b from-amber-50/50 to-white border border-amber-100 mb-2 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-300">
                      <img
                        src={coffee.image}
                        alt={coffee.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-xs text-[#4B3C32] font-medium text-center truncate">{coffee.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>

            {/* Bags Section */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-8 bg-amber-200"></div>
                <h3 className="text-base font-semibold text-[#4B3C32]">Mochilas Artesanales</h3>
                <div className="h-px w-8 bg-amber-200"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {featuredProducts.bags.map((bag, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden shadow-sm bg-white border border-amber-100 mb-2 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-300">
                      <img
                        src={bag.image}
                        alt={bag.name}
                        className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-xs text-[#4B3C32] font-medium text-center truncate">{bag.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}