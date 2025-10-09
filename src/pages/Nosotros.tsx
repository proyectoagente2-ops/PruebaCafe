'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Heart, Award, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';

export default function NosotrosPage() {
  useEffect(() => {
    document.title = 'Nosotros - La Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/images/about-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#5D3A1A]/75 to-[#7A4B2A]/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-20 text-center max-w-[800px] mx-auto px-8">
          <span className="inline-block px-6 py-2 rounded-full border border-amber-400/30 text-amber-300 text-sm tracking-wider uppercase bg-black/20 backdrop-blur-sm mb-6 transform hover:scale-105 transition-all duration-500">
            Tradición Cafetera
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-[1.02]">
            Nuestra Historia
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Tres generaciones dedicadas al cultivo del mejor café, transmitiendo pasión y conocimiento
            de padres a hijos en las montañas de Pueblo Bello.
          </p>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <ArrowRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </section>

      {/* Historia Section with Visual Appeal */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-amber-50 rounded-full text-amber-600 text-sm font-medium tracking-wide mb-4">
                Nuestra Trayectoria
              </span>
              <h2 className="text-4xl font-bold text-amber-900 mb-6 hover:text-amber-800 transition-colors duration-300">
                Un Legado de Excelencia
              </h2>
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
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-amber-50/50 hover:bg-amber-50 transition-all duration-300">
                  <div className="text-3xl font-bold text-amber-600 mb-2">1800m</div>
                  <div className="text-amber-700">Altura sobre el mar</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-amber-50/50 hover:bg-amber-50 transition-all duration-300">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-amber-700">Años de experiencia</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-700/10 rounded-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-1"></div>
              <OptimizedImage
                src="/images/about-farm.jpg"
                alt="Finca La Felicidá"
                className="rounded-lg shadow-xl relative z-10 transform transition-all duration-500 group-hover:-rotate-2 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section with Enhanced Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 hover:text-amber-800 transition-colors duration-300">
              Nuestros Valores
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Principios que guían cada taza de café que producimos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4 transform transition-transform duration-500 hover:scale-110" />
                <CardTitle className="text-amber-900">Excelencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Compromiso inquebrantable con la calidad en cada paso del proceso.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4 transform transition-transform duration-500 hover:scale-110" />
                <CardTitle className="text-amber-900">Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Prácticas responsables que protegen nuestro entorno y comunidad.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 transform transition-transform duration-500 hover:scale-110" />
                <CardTitle className="text-amber-900">Tradición</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Preservando el legado familiar y la artesanía del café.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* El Origen Section with CTA */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/images/CAFÉS/CAFE_FONDO.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 to-[#7A4B2A]/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            El Origen de la Felicidá
          </h2>
          <p className="text-xl text-white/90 mb-12 italic max-w-3xl mx-auto">
            "En cada grano de café hay una historia que contar, un aroma que descubrir 
            y una felicidad que compartir."
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Descubre Nuestro Café
          </Button>
        </div>
      </section>
    </main>
  );
}
