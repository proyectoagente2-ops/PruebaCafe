'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, MapPin, Users, Leaf, Heart, Star, ArrowRight, MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { coffeeProducts } from '@/lib/products';
import '@/lib/animations.css';

export default function HomePage() {
  const featuredCoffees = coffeeProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Inicio/nano-banana-2025-09-16T02-58-06.png)',
            backgroundSize: 'cover'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
        
        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8 animate-fadeIn flex flex-col items-center justify-center">
          <h1 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-bold text-[#FEFBF6] mb-6 leading-tight animate-slideUp delay-300 shadow-text">
            CAFÉ
            <span className="block text-[#E4A429] relative highlight">
              FELICIDÁ
              <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E4A429] to-transparent opacity-60 rounded"></span>
            </span>
          </h1>

          <p className="text-[1.4rem] text-[#EDE5DA] mb-8 leading-[1.7] max-w-[580px] mx-auto animate-slideUp delay-500 shadow-text-sm">
            Descubre el sabor auténtico del café colombiano artesanal.
            Cada grano cuenta una historia de tradición, pasión y excelencia.
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-slideUp delay-700 -mt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#C9881A] to-[#E4A429] hover:from-[#E4A429] hover:to-[#C9881A] text-[#FEFBF6] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl shadow-lg shadow-[#C9881A]/30 border border-white/20 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9881A]/40"
              asChild
            >
              <Link to="/cafe">
                <Coffee className="mr-2 h-5 w-5" />
                Explorar Cafés
              </Link>
            </Button>

            <Button 
              size="lg"
              className="bg-[#EDE5DA] text-[#2C1810] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl border-2 border-[#EDE5DA] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EDE5DA]/30"
              asChild
            >
              <Link to="/como-llegar">
                <MapPin className="mr-2 h-5 w-5" />
                Visitar Finca
              </Link>
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
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-amber-900 leading-tight">
                Un espacio de conexión con la naturaleza y el espíritu
              </h2>
              <div className="prose prose-lg text-coffee-dark">
                <p>
                  En Café Felicidá, fusionamos la tradición ancestral del café con la espiritualidad de la Sierra Nevada. 
                  Cada visita es una oportunidad para reconectarte con la naturaleza, mientras descubres los secretos de 
                  nuestro café artesanal y la sabiduría de nuestra tierra.
                </p>
                <p>
                  Nuestro espacio es más que una finca cafetera; es un santuario donde la paz de las montañas se 
                  encuentra con el aroma del café recién tostado, creando una experiencia única de bienestar y conexión.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/Inicio/finca_banana.png"
                alt="Montañas de la Sierra Nevada"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-16">
            Experiencias que transforman
          </h2>
          
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
              <Card key={idx} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-amber-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-coffee-dark mb-6">{service.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-amber-700 hover:text-amber-900 p-0 h-auto font-medium"
                    onClick={() => {
                      // Aquí iría la lógica para abrir WhatsApp con el mensaje predefinido
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Cafés */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Nuestros Cafés
            </h2>
            <p className="text-coffee-dark text-lg max-w-2xl mx-auto">
              Descubre nuestra selección de cafés artesanales, cultivados con amor y tostados a la perfección.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCoffees.map((coffee) => (
              <Card key={coffee.id} className="group hover:shadow-lg transition-all duration-300">
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
                Ver todos los cafés
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
              <img
                src="/images/Mochilas/MOCHILA3.png"
                alt="Mochilas artesanales"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-amber-900 leading-tight">
                Mochilas con pensamiento
              </h2>
              <div className="prose prose-lg text-coffee-dark">
                <p>
                  Cada mochila es una obra de arte que lleva consigo la sabiduría ancestral de nuestros artesanos.
                  Tejidas con dedicación y amor, estas piezas únicas representan la conexión entre la tradición
                  y la modernidad.
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-amber-900 text-white hover:bg-amber-800"
              >
                Encargar mochila
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Global */}
      <section className="py-32 bg-gradient-to-br from-amber-900 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('path-to-pattern.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Vive la experiencia completa en Café Felicidá
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Descubre un espacio donde la tradición del café se une con la espiritualidad
            y la conexión con la naturaleza.
          </p>
          <Button 
            size="lg"
            className="bg-white text-amber-900 hover:bg-amber-50"
            asChild
          >
            <Link to="/servicios">
              Explorar servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Café Felicidá</h3>
              <p className="text-amber-200/80">
                Tradición, espiritualidad y café de alta calidad en la Sierra Nevada.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {/* Añadir iconos de redes sociales aquí */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/politica-cultural" className="text-amber-200/80 hover:text-amber-200">
                    Política cultural
                  </Link>
                </li>
                <li>
                  <Link to="/aviso-legal" className="text-amber-200/80 hover:text-amber-200">
                    Aviso legal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-amber-200/80">
                Sierra Nevada de Santa Marta<br />
                Pueblo Bello, Cesar<br />
                Colombia
              </p>
            </div>
          </div>
          <div className="border-t border-amber-200/10 mt-12 pt-8 text-center text-amber-200/60">
            <p>&copy; {new Date().getFullYear()} Café Felicidá. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

        {/* WhatsApp Button */}
        <WhatsAppButton isFloating />
      </div>
  );
}