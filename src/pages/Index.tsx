'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, MapPin, Users, Award, Leaf, Heart, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { coffeeProducts, tourismExperiences } from '@/lib/products';
import { ExperienceReservationDialog } from '@/components/ExperienceReservationDialog';

export default function HomePage() {
  const featuredProducts = coffeeProducts.slice(0, 3);
  const featuredExperiences = tourismExperiences.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#5D3A1A]/75 to-[#7A4B2A]/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[length:350px_350px]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-radial-gradient from-[#C9881A]/10 to-transparent"></div>
        
        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8 animate-fadeIn flex flex-col items-center justify-center min-h-[calc(88vh-8rem)] -mt-20">
          <h1 className="font-playfair text-[clamp(4rem,10vw,7rem)] font-bold text-[#FEFBF6] mb-6 leading-tight animate-slideUp shadow-text" style={{ animationDelay: '0.3s' }}>
            CAFÉ
            <span className="block text-[#E4A429] relative highlight">
              FELICIDAD
              <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E4A429] to-transparent opacity-60 rounded"></span>
            </span>
          </h1>
          
          <p className="text-[1.4rem] text-[#EDE5DA] mb-8 leading-[1.7] max-w-[580px] mx-auto animate-slideUp shadow-text-sm" style={{ animationDelay: '0.5s' }}>
            Descubre el sabor auténtico del café colombiano artesanal. 
            Cada grano cuenta una historia de tradición, pasión y excelencia.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-slideUp -mt-4" style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#C9881A] to-[#E4A429] hover:from-[#E4A429] hover:to-[#C9881A] text-[#FEFBF6] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl shadow-lg shadow-[#C9881A]/30 border border-white/20 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9881A]/40 group overflow-hidden relative"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Explorar Cafés
            </Button>
            
            <Button 
              size="lg" 
              className="bg-[#EDE5DA] text-[#2C1810] px-9 py-4 min-w-[200px] text-[1.05rem] font-semibold rounded-xl border-2 border-[#EDE5DA] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EDE5DA]/30"
              onClick={() => document.getElementById('tourism')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visitar Finca
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">¿Por qué elegir Café Felicidad?</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Más que café, una experiencia que conecta tradición, calidad y sostenibilidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Calidad Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Granos seleccionados a mano y tostados artesanalmente para garantizar la máxima calidad en cada taza.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">100% Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Cultivo orgánico que respeta el medio ambiente y apoya a las comunidades locales de Pueblo Bello.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Tradición Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Tres generaciones dedicadas al cultivo del café, transmitiendo conocimiento y pasión de padres a hijos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Nuestros Cafés Especiales</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Cada variedad cuenta con características únicas que reflejan el terroir de nuestras montañas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {coffeeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section id="tourism" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Experiencias en la Finca</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Vive la magia del café desde su origen. Conoce nuestro proceso y disfruta del turismo rural auténtico
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredExperiences.map((experience) => (
              <ProductCard key={experience.id} product={experience} />
            ))}
          </div>
          
          <div className="text-center">
            <ExperienceReservationDialog>
              <Button 
                size="lg"
                variant="outline"
                className="bg-amber-600 text-white hover:bg-amber-700 border-none"
              >
                📅 Reservar Experiencia
              </Button>
            </ExperienceReservationDialog>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                En las montañas de Pueblo Bello, Cesar, nuestra familia ha cultivado café durante tres generaciones. 
                Lo que comenzó como un pequeño cultivo familiar se ha convertido en una finca que produce algunos 
                de los mejores cafés de especialidad de Colombia.
              </p>
              <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                Cada grano es cuidadosamente seleccionado, procesado y tostado siguiendo métodos tradicionales 
                que respetan tanto el medio ambiente como las comunidades locales. Nuestro compromiso es ofrecer 
                no solo un café excepcional, sino también una experiencia que conecte a nuestros clientes con 
                la rica cultura cafetera colombiana.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">1800m</div>
                  <div className="text-amber-700">Altura sobre el mar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-amber-700">Años de experiencia</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop"
                alt="Finca Café Felicidad"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-amber-100">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-amber-900">Café Premium</span>
                </div>
                <p className="text-sm text-amber-700">Certificado orgánico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestros cafés o experiencias? Estamos aquí para ayudarte
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100">
              <CardHeader>
                <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Finca Café Felicidad<br />
                  Pueblo Bello, Cesar<br />
                  Colombia
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  +57 300 123 4567<br />
                  Atención personalizada<br />
                  Lun - Dom: 7am - 7pm
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  @CafeFelicidad<br />
                  Síguenos para novedades<br />
                  y contenido exclusivo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-amber-300" />
                <span className="text-2xl font-bold">CAFÉ FELICIDAD</span>
              </div>
              <p className="text-amber-200">
                Café artesanal colombiano desde las montañas de Pueblo Bello, Cesar.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Café Arábica Premium</li>
                <li>Blend Especial</li>
                <li>Café Orgánico</li>
                <li>Edición Limitada</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Experiencias</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Tour de la Finca</li>
                <li>Taller de Barismo</li>
                <li>Cena en la Finca</li>
                <li>Hospedaje Rural</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Pueblo Bello, Cesar</li>
                <li>+57 300 123 4567</li>
                <li>@CafeFelicidad</li>
                <li>Lun - Dom: 7am - 7pm</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Café Felicidad. Todos los derechos reservados. Hecho con ❤️ en Colombia.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton isFloating={true} />
    </div>
  );
}