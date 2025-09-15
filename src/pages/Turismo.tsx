'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Coffee } from 'lucide-react';
import { tourismExperiences } from '@/lib/experiences';
import { ExperienceReservationDialog } from '@/components/ExperienceReservationDialog';
import ProductCard from '@/components/ProductCard';

export default function TurismoPage() {
  useEffect(() => {
    document.title = 'Turismo - Café Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#5D3A1A]/75 to-[#7A4B2A]/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover'
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Experiencias en la Finca</h1>
          <p className="text-xl text-amber-100 mb-8">
            Descubre la magia del café desde su origen. Vive una experiencia única en nuestra finca,
            donde la tradición y la naturaleza se unen para crear momentos inolvidables.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourismExperiences.map((experience) => (
              <ProductCard key={experience.id} product={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Proceso del Café</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Aprende todo sobre el cultivo, procesamiento y tostado de nuestro café especial.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Ubicación Privilegiada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Situada en las montañas de Pueblo Bello, a 1,800 metros sobre el nivel del mar.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Grupos Reducidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Experiencias personalizadas en grupos pequeños para una mejor atención.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            ¿Listo para vivir una experiencia única?
          </h2>
          <p className="text-xl text-amber-700 mb-8">
            Reserva tu experiencia ahora y descubre la magia del café en primera persona
          </p>
          <ExperienceReservationDialog>
            <Button 
              size="lg"
              className="bg-amber-600 text-white hover:bg-amber-700"
            >
              📅 Reservar Experiencia
            </Button>
          </ExperienceReservationDialog>
        </div>
      </section>
    </main>
  );
}