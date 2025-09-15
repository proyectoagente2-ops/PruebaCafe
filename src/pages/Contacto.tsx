'use client';

import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactoPage() {
  useEffect(() => {
    document.title = 'Contacto - Café Felicidá';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#5D3A1A]/75 to-[#7A4B2A]/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover'
          }}
        ></div>
        
        <div className="relative z-20 text-center max-w-[750px] mx-auto px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Contáctanos</h1>
          <p className="text-xl text-white/90 mb-8">
            Estamos aquí para responder tus preguntas y ayudarte a descubrir
            el mejor café artesanal de Colombia.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Finca Café Felicidá<br />
                  Pueblo Bello, Cesar<br />
                  Colombia
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  +57 300 123 4567<br />
                  Lunes a Sábado<br />
                  8:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-amber-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  info@cafeFelicidad.com<br />
                  ventas@cafeFelicidad.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social & WhatsApp Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">Síguenos en Redes Sociales</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-amber-700 hover:text-amber-600 transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-amber-700 hover:text-amber-600 transition-colors">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <MessageCircle className="h-12 w-12 text-green-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-4">¿Prefieres WhatsApp?</h3>
            <p className="text-lg text-amber-700 mb-6 max-w-2xl">
              Contáctanos directamente por WhatsApp para una respuesta rápida
              a tus consultas sobre nuestros productos o servicios.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </main>
  );
}
