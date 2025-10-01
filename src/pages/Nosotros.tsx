'use client';

import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Leaf, Heart, Award } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export default function NosotrosPage() {
  useEffect(() => {
    document.title = 'Nosotros - La Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#5D3A1A]/75 to-[#7A4B2A]/80"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/about-bg.jpg"
            alt="Fondo de nuestro café"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Nuestra Historia</h1>
          <p className="text-xl text-white/90 mb-8">
            Tres generaciones dedicadas al cultivo del mejor café, transmitiendo pasión y conocimiento
            de padres a hijos en las montañas de Pueblo Bello.
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Nuestra Trayectoria</h2>
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
              <OptimizedImage
                src="/images/about-farm.jpg"
                alt="Finca La Felicidá"
                className="rounded-lg shadow-xl"
                blur={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Principios que guían cada taza de café que producimos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Excelencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Compromiso inquebrantable con la calidad en cada paso del proceso.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Prácticas responsables que protegen nuestro entorno y comunidad.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Tradición</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Preservando el legado familiar y la artesanía del café.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
