'use client';

import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { coffeeProducts } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';
import { Coffee, Leaf, Mountain, Award, Scale } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = coffeeProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F4]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6 text-[#2A1810]">Producto no encontrado</h1>
          <Link to="/cafe" className="text-[#C49B66] hover:text-[#2A1810] transition-all duration-300">
            Volver a la colección
          </Link>
        </div>
      </div>
    );
  }

  const productFeatures = [
    {
      icon: Coffee,
      title: "Perfil de Sabor",
      description: product.notes?.join(", ") ?? ""
    },
    {
      icon: Mountain,
      title: "Altitud",
      description: "1.500 - 1.800 msnm"
    },
    {
      icon: Leaf,
      title: "Proceso",
      description: product.processingMethod
    },
    {
      icon: Scale,
      title: "Presentación",
      description: product.weight
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa el café ${product.name}. ¿Podría darme más información?`
    );
    window.open(`https://wa.me/+573113678555?text=${message}`, '_blank');
  };

  // Encontrar productos relacionados (excluyendo el actual)

  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      {/* Hero Section */}
      <div className="relative bg-[#1A0F0A] h-[50vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Capa base oscura */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] via-[#2A1810]/95 to-[#2A1810] opacity-95" />
          
          {/* Imagen de fondo con mezcla */}
          <div className="absolute inset-0 mix-blend-overlay">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              src="/images/coffee-beans-bg.jpg"
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Overlay con textura y efecto dorado */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C49B66]/10 to-transparent mix-blend-overlay" />
        </motion.div>
        
        {/* Gradientes superpuestos para profundidad */}
        <div className="absolute inset-0">
          {/* Gradiente superior para dar profundidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A]/90 via-transparent to-transparent" />
          
          {/* Gradiente lateral para dimensión */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F0A]/50 via-transparent to-[#1A0F0A]/50" />
          
          {/* Gradiente de transición al contenido */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A1810]/80 to-[#FAF7F4]" />
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1A0F0A]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-8 -mt-40 relative z-10">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link 
            to="/cafe" 
            className="inline-flex items-center text-sm text-[#C49B66] hover:text-[#2A1810] transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a la colección
          </Link>
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-[#2A1810]/5 group">
              <div className="relative h-full overflow-hidden p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C49B66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-[#C49B66] to-[#DFB787] text-white mb-6 px-4 py-1.5 text-sm uppercase tracking-wider font-medium shadow-lg shadow-[#C49B66]/20">
                Edición Especial
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold text-[#2A1810] mb-6 tracking-tight leading-tight"
            >
              {product.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-semibold text-[#C49B66] mb-8 flex items-baseline gap-2"
            >
              {formatPrice(product.price)}
              <span className="text-base text-[#2A1810]/40">Envío calculado al finalizar la compra</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#2A1810]/80 mb-12 leading-relaxed"
            >
              {product.description}
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300 border border-[#2A1810]/5 hover:border-[#2A1810]/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#C49B66]/10 to-transparent">
                      {React.createElement(feature.icon, {
                        size: 20,
                        className: "text-[#C49B66]"
                      })}
                    </div>
                    <p className="text-[#2A1810] font-medium">{feature.title}</p>
                  </div>
                  <p className="text-[#2A1810]/70 group-hover:text-[#2A1810] transition-colors duration-300 pl-11">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-[#2A1810] to-[#1A0F0A] text-white h-[60px] rounded-xl text-lg font-medium relative overflow-hidden transition-all duration-300 shadow-lg shadow-[#2A1810]/10 hover:shadow-xl hover:shadow-[#2A1810]/20 group" 
                  onClick={() => addToCart({ ...product, type: 'product' })}
                  disabled={!product.inStock}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Agregar al carrito
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#C49B66] via-[#DFB787] to-[#C49B66] opacity-0"
                    initial={false}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-[#2A1810] text-[#2A1810] hover:bg-[#2A1810] hover:text-white h-[60px] rounded-xl text-lg font-medium transition-all duration-300 group"
                  onClick={handleWhatsAppClick}
                >
                  <span className="flex items-center gap-2">
                    <motion.svg 
                      className="w-5 h-5"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </motion.svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Consultar disponibilidad
                    </span>
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-12 border-t border-[#2A1810]/10">
              <h3 className="text-lg font-medium text-[#2A1810] mb-4">
                Características adicionales
              </h3>
              <ul className="space-y-3 text-[#2A1810]/70">
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-[#C49B66]" />
                  Certificado de origen
                </li>
                <li className="flex items-center gap-2">
                  <Leaf size={16} className="text-[#C49B66]" />
                  Cultivo sostenible
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cross-Selling Section with improved styling */}
        <div className="mt-32">
          <CrossSelling 
            currentProduct={product} 
            currentType="coffee" 
          />
        </div>
      </div>
    </div>
  );
}