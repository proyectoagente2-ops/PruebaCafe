'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import OptimizedImage from '@/components/OptimizedImage';

const testimonios = [
  {
    id: 1,
    nombre: "María González",
    cargo: "Amante del Café",
    mensaje: "Un espacio acogedor con el mejor café de la región. ¡Increíble experiencia!",
    imagen: "/images/testimonios/maria.jpg"
  },
  {
    id: 2,
    nombre: "Carlos Ramírez",
    cargo: "Cliente Frecuente",
    mensaje: "La calidad y el servicio son excepcionales. Me siento como en casa.",
    imagen: "/images/testimonios/carlos.jpg"
  },
  {
    id: 3,
    nombre: "Ana Valencia",
    cargo: "Barista Profesional",
    mensaje: "Un lugar que respeta y entiende la verdadera cultura del café.",
    imagen: "/images/testimonios/ana.jpg"
  }
];

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
        <main className="min-h-screen bg-[#1A0F0A] text-white pt-20 overflow-hidden">
      {/* Hero Section con Efecto Parallax Mejorado */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A]/95 via-transparent to-[#1A0F0A]/90 backdrop-blur-sm z-10"
        />
        <motion.div 
          initial={{ scale: 1.1, y: 0 }}
          animate={{ scale: [1.1, 1], y: ["0%", "-2%"] }}
          transition={{ 
            scale: { duration: 2, ease: "easeOut" },
            y: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Inicio/cafe-granos-tostados.jpg)',
            backgroundSize: 'cover',
            filter: 'brightness(0.4) contrast(1.2) saturate(1.1)'
          }}
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
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-amber-50"
          >
            Contáctanos
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Estamos aquí para responder tus preguntas y ayudarte a descubrir
            La Felicidá, tu experiencia artesanal en Colombia.
          </p>
        </motion.div>
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
            <Card className="backdrop-blur-md bg-white/95 border-2 border-amber-100/50 hover:border-amber-200 shadow-xl hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 rounded-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-3xl text-center text-amber-900 font-bold">Envíanos un Mensaje</CardTitle>
                <p className="text-amber-600 text-center">Nos pondremos en contacto contigo pronto</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-amber-700 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({...formState, nombre: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                        placeholder="Tu nombre"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-amber-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                        placeholder="tu@email.com"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-amber-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formState.telefono}
                      onChange={(e) => setFormState({...formState, telefono: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300"
                      placeholder="Tu teléfono (opcional)"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-amber-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      required
                      value={formState.mensaje}
                      onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/80 placeholder-amber-300 resize-none"
                      placeholder="¿En qué podemos ayudarte?"
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
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Descubre por qué nuestros visitantes aman La Felicidá
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={testimonio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative"
              >
                <Card className="h-full bg-white/90 backdrop-blur-md border-2 border-amber-100/50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 rounded-xl overflow-hidden">
                  <CardContent className="pt-12 px-6">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-amber-500 ring-offset-4 ring-offset-white shadow-xl"
                      >
                        <OptimizedImage
                          src={testimonio.imagen}
                          alt={testimonio.nombre}
                          className="w-full h-full object-cover"
                          blur={false}
                        />
                      </motion.div>
                    </div>
                    <div className="text-center space-y-4">
                      <p className="text-lg text-amber-700 italic mb-4 leading-relaxed">"{testimonio.mensaje}"</p>
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg text-amber-900">{testimonio.nombre}</h4>
                        <p className="text-sm font-medium text-amber-600">{testimonio.cargo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
