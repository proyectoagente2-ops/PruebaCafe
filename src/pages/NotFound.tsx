'use client';

import { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Heart, 
  MessageCircle,
  Star,
  HandIcon,
  Feather,
  Gem,
  Coffee,
  Facebook,
  Instagram,
  MapPin
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import WhatsAppButton from '@/components/WhatsAppButton';

// Datos de muestra para las mochilas
const mochilaProducts = [
  {
    id: 'mochila-tradicional-1',
    name: 'Mochila Tradicional',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILAAZUL.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano']
  },
  {
    id: 'mochila-especial-1',
    name: 'Mochila Especial',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAVERDE.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande']
  },
  {
    id: 'mochila-moderna-1',
    name: 'Mochila Moderna',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJA.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado']
  },
  {
    id: 'mochila-tradicional-2',
    name: 'Mochila Tradicional',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILABLANCA.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano']
  },
  {
    id: 'mochila-especial-2',
    name: 'Mochila Especial',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAGRIS1.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande']
  },
  {
    id: 'mochila-moderna-2',
    name: 'Mochila Moderna',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJACONVERDE.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado']
  }
];

// Características del proceso artesanal
const artesanalFeatures = [
  {
    icon: HandIcon,
    title: 'Tejido a Mano',
    description: 'Cada mochila es tejida a mano por artesanos expertos.'
  },
  {
    icon: Feather,
    title: 'Materiales Naturales',
    description: 'Utilizamos materiales naturales y sostenibles.'
  },
  {
    icon: Gem,
    title: 'Diseños Únicos',
    description: 'Cada pieza es única y tiene su propia historia.'
  }
];

export default function MochilasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    const message = "¡Hola! Me gustaría obtener más información sobre las mochilas artesanales.";
    window.open(
      `https://api.whatsapp.com/send?phone=573113678555&text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }, []);

  return ( 


    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">

      {/* Hero Section */}


      <section className="relative h-screen flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/Mochilas/MOCHILASJUNTAS7.png"
            alt="Mochilas artesanales"
            className="w-full h-full object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8 animate-fadeIn">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-8"

          >

            <span className="px-6 py-2 rounded-full border border-amber-400/30 text-amber-300 text-sm tracking-wider uppercase bg-black/20 backdrop-blur-sm">
              Artesanía Ancestral
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Mochilas con Pensamiento
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Descubre la belleza de nuestras mochilas artesanales, 
            donde cada puntada cuenta una historia y cada diseño 
            lleva consigo la sabiduría ancestral.
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
              Consultar disponibilidad
            </Button>
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
<div className="flex h-3 w-full shadow-inner shadow-black/20">
  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "23%", 
      background: "linear-gradient(to right, #D9C3A5, #E5D1B8)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "26%", 
      background: "linear-gradient(to right, #4C7A47, #5B9356)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "25%", 
      background: "linear-gradient(to right, #B2433E, #C54E48)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "26%", 
      background: "linear-gradient(to right, #2C5F8A, #3670A5)",
      transformOrigin: "center"
    }}
  ></div>
</div>




      {/* Nuestras Mochilas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 rounded-full text-amber-600 text-sm font-medium tracking-wide mb-4">
              Artesanía Ancestral
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Mochilas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada mochila es una obra de arte única, tejida a mano con técnicas ancestrales
              y materiales cuidadosamente seleccionados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mochilaProducts.map((mochila) => (
              <Card key={mochila.id} className="group hover:shadow-xl transition-all duration-300 border-none">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <OptimizedImage
                    src={mochila.image}
                    alt={mochila.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mochila.name}</h3>
                  <p className="text-gray-600 mb-4">{mochila.description}</p>
                  <ul className="space-y-2 mb-6">
                    {mochila.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 text-amber-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-amber-100 text-amber-900 hover:bg-yellow-300"
                  >
                    Consultar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Artesanal */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Proceso Artesanal
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Cada mochila es creada siguiendo técnicas ancestrales transmitidas
              de generación en generación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {artesanalFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-8 border-none hover:bg-yellow-300 hover:scale-105 shadow-lg hover:shadow-amber-400/25  hover:shadow-xl transition-all duration-300 bg-yellow-100">
                <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/Mochilas/MOCHILASJUNTAS6.png"
            alt="Mochila artesanal"
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
              Lleva contigo un pedazo de nuestra cultura
            </h2>
            <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
              Cada mochila es única y especial, tejida con amor y dedicación
              para transmitir nuestra herencia cultural.
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 text-amber-900 hover:bg-yellow-500 hover:scale-105 shadow-lg hover:shadow-amber-400/25 transform transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              Encargar mi mochila
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
<div className="flex h-3 w-full shadow-inner shadow-black/20">
  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "23%", 
      background: "linear-gradient(to right, #D9C3A5, #E5D1B8)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "26%", 
      background: "linear-gradient(to right, #4C7A47, #5B9356)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "25%", 
      background: "linear-gradient(to right, #B2433E, #C54E48)",
      transformOrigin: "center"
    }}
  ></div>

  <div 
    className="transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:-translate-y-0.5 hover:z-10 cursor-pointer"
    style={{ 
      width: "26%", 
      background: "linear-gradient(to right, #2C5F8A, #3670A5)",
      transformOrigin: "center"
    }}
  ></div>
</div>




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