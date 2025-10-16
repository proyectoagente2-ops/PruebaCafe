'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import OptimizedImage from '@/components/OptimizedImage';

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    document.title = 'Contacto - La Felicidá';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEnviando(false);
    setEnviado(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setEnviado(false);
      setFormState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
    }, 3000);
  };

  return (
        <main className="min-h-screen bg-[#FBF7F0] text-[#3A2D1A] pt-20 overflow-hidden">
      {/* Hero Section con Efecto Parallax Mejorado */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-transparent to-amber-950/40 backdrop-blur-sm z-10"
        />
        <motion.div 
          initial={{ scale: 1.1, y: 0 }}
          animate={{ scale: [1.1, 1], y: ["0%", "-2%"] }}
          transition={{ 
            scale: { duration: 2, ease: "easeOut" },
            y: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src="/images/contactos/Contactos fondo.jpg"
            alt="Finca La Felicidá - Contacto"
            className="w-full h-full object-cover brightness-[0.7] contrast-110 saturate-120"
            width={1920}
            height={1080}
            priority
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-[url('/images/Inicio/texture-overlay.png')] opacity-20 z-[5] mix-blend-soft-light"
        />
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20 text-center max-w-[1000px] mx-auto px-8"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg text-amber-50"
          >
            Nuestra Historia
          </motion.h1>
          <p className="text-xl md:text-2xl text-amber-50/95 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Descubre la magia de La Felicidá, donde cada taza de café cuenta una historia
            y cada visita se convierte en una experiencia inolvidable.
          </p>
        </motion.div>
      </section>

      {/* Sección Sobre la Finca */}
      <section className="py-24 bg-gradient-to-b from-amber-50/50 to-amber-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-amber-900 mb-6"
              >
                Sobre La Felicidá
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-amber"
              >
                <p className="text-lg text-amber-800 leading-relaxed">
                  Enclavada en las majestuosas montañas de Pueblo Bello, Cesar, La Felicidá es más que una 
                  finca cafetera: es un santuario donde la tradición y la innovación se encuentran para crear 
                  experiencias únicas.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed">
                  Desde hace generaciones, nuestra familia ha cultivado no solo café de alta calidad, sino 
                  también un profundo respeto por la cultura local y el medio ambiente. Cada grano de café 
                  que producimos cuenta la historia de nuestra tierra y nuestra gente.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed">
                  En La Felicidá, nos dedicamos a preservar y compartir la rica herencia cultural de 
                  nuestra región, ofreciendo a nuestros visitantes una experiencia auténtica y enriquecedora 
                  que combina la tradición cafetera con la hospitalidad colombiana.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/finca-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Experiencias en La Felicidá</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Momentos inolvidables capturados en nuestra finca, donde cada visita se convierte en un 
              recuerdo para toda la vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              '/images/experiences/exp1.jpg',
              '/images/experiences/exp2.jpg',
              '/images/experiences/exp3.jpg',
              '/images/experiences/exp4.jpg',
              '/images/experiences/exp5.jpg',
              '/images/experiences/exp6.jpg',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <OptimizedImage
                  src={image}
                  alt={`Experiencia ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards con Animaciones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 border-amber-100/50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 bg-white/90 backdrop-blur-md rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    className="bg-amber-50/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner"
                  >
                    <MapPin className="h-8 w-8 text-amber-600" />
                  </motion.div>
                  <CardTitle className="text-amber-900 text-xl font-bold">Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 leading-relaxed">
                    <span className="font-medium">Finca La Felicidá</span><br />
                    Pueblo Bello, Cesar<br />
                    <span className="text-amber-600">Colombia</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 border-amber-100/50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 bg-white/90 backdrop-blur-md rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    className="bg-amber-50/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner"
                  >
                    <Phone className="h-8 w-8 text-amber-600" />
                  </motion.div>
                  <CardTitle className="text-amber-900 text-xl font-bold">Teléfono</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 leading-relaxed">
                    <span className="font-medium">+57 300 123 4567</span><br />
                    <span className="text-amber-600">Lunes a Sábado</span><br />
                    8:00 AM - 6:00 PM
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 border-amber-100/50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 bg-white/90 backdrop-blur-md rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    className="bg-amber-50/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner"
                  >
                    <Mail className="h-8 w-8 text-amber-600" />
                  </motion.div>
                  <CardTitle className="text-amber-900 text-xl font-bold">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 leading-relaxed">
                    <span className="font-medium hover:text-amber-800 transition-colors cursor-pointer">info@lafelicida.com</span><br />
                    <span className="text-amber-600 hover:text-amber-700 transition-colors cursor-pointer">ventas@lafelicida.com</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Formulario de Contacto Animado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="backdrop-blur-md bg-white/95 p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({...formState, nombre: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                        placeholder=""
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                        placeholder=""
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <input
                      type="tel"
                      value={formState.telefono}
                      onChange={(e) => setFormState({...formState, telefono: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                      placeholder=""
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <textarea
                      required
                      value={formState.mensaje}
                      onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300 resize-none"
                      placeholder=""
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-full py-4 px-8 rounded-lg font-semibold text-white transition-all duration-300",
                      "bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400",
                      "hover:from-amber-500 hover:via-amber-400 hover:to-amber-300",
                      "shadow-lg hover:shadow-xl hover:shadow-amber-300/20",
                      "flex items-center justify-center gap-3",
                      "border border-amber-400/20",
                      enviando && "opacity-75 cursor-not-allowed",
                      enviado && "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
                    )}
                    disabled={enviando || enviado}
                  >
                    {enviando ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="text-white/90"
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>
                    ) : enviado ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Check className="h-5 w-5" />
                        </motion.div>
                        <span>¡Mensaje Enviado!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar</span>
                      </>
                    )}
                  </motion.button>
                </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social & WhatsApp Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-8">Síguenos en Redes Sociales</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-amber-700 hover:text-amber-600 transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-amber-700 hover:text-amber-600 transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MessageCircle className="h-12 w-12 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">¿Prefieres WhatsApp?</h3>
            <p className="text-lg text-amber-700 mb-6 max-w-2xl">
              Contáctanos directamente por WhatsApp para una respuesta rápida
              a tus consultas sobre nuestros productos o servicios.
            </p>
            <p className="text-lg text-amber-700 italic">
              Usa nuestro asistente virtual haciendo clic en el ícono de chat en la esquina inferior derecha
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
