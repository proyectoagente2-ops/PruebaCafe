'use client';

import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { allProducts } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';
import { Coffee, Leaf, Mountain, Award, Scale } from 'lucide-react';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F4]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6 text-[#2A1810]">Producto no encontrado</h1>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/cafe"
              className="text-[#C49B66] hover:text-[#2A1810] transition-all duration-300"
            >
              Volver a Café
            </Link>
            <Link 
              to="/mochilas"
              className="text-[#C49B66] hover:text-[#2A1810] transition-all duration-300"
            >
              Volver a Mochilas
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Determinar las características específicas según el tipo de producto
  const getProductFeatures = () => {
    if (product.category === 'coffee') {
      return [
        {
          icon: Coffee,
          title: "Perfil de Sabor",
          description: product.notes?.join(", ") ?? ""
        },
        {
          icon: Mountain,
          title: "Altitud",
          description: product.altitude ?? "1.500 - 1.800 msnm"
        },
        {
          icon: Leaf,
          title: "Variedad",
          description: "Caturra, Colombia"
        },
        {
          icon: Award,
          title: "Proceso",
          description: product.processingMethod ?? "Lavado"
        }
      ];
    } else if (product.category === 'backpack') {
      return [
        {
          icon: Scale,
          title: "Capacidad",
          description: product.capacity ?? "No especificada"
        },
        {
          icon: Award,
          title: "Material",
          description: product.material ?? "No especificado"
        },
        {
          icon: Mountain,
          title: "Uso recomendado",
          description: product.recommendedUse ?? "Uso diario"
        }
      ];
    }
    return [];
  };

  const productFeatures = getProductFeatures();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const productType = product.category === 'backpack' ? 'la mochila' : 'el café';
    const message = encodeURIComponent(
      `¡Hola! Me interesa ${productType} ${product.name}. ¿Podría darme más información?`
    );
    window.open(`https://wa.me/+573113678555?text=${message}`, '_blank');
  };

  // Encontrar productos relacionados (excluyendo el actual)

  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      {/* Hero Section */}
      <div className="relative bg-[#F5EDE4] h-[50vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Capa base con tonos cálidos y suaves */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E6D5C3] via-[#DEC8B5]/95 to-[#C49B66] opacity-80" />
          
          {/* Imagen de fondo con mezcla suave */}
          <div className="absolute inset-0 mix-blend-soft-light">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              src={product.category === 'backpack' ? '/images/mochilas-bg.jpg' : '/images/coffee-beans-bg.jpg'}
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Overlay con textura y efecto dorado suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E6D5C3]/30 to-transparent mix-blend-soft-light" />
        </motion.div>
        
        {/* Gradientes superpuestos para profundidad */}
        <div className="absolute inset-0">
          {/* Gradiente superior para dar profundidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#DEC8B5]/50 via-transparent to-transparent" />
          
          {/* Gradiente lateral para dimensión */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E6D5C3]/30 via-transparent to-[#E6D5C3]/30" />
          
          {/* Gradiente de transición al contenido */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C49B66]/40 to-[#FAF7F4]" />
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1A0F0A]/30" />
      </div>

      {/* Nueva sección principal con diseño mejorado */}
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8 -mt-32 relative z-10">
        {/* Breadcrumb con mejor espaciado y diseño */}
        <nav className="flex items-center space-x-2 mb-4 sm:mb-8 px-2 sm:px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 min-w-max"
          >
            <Link 
              to="/" 
              className="text-sm sm:text-base text-[#C49B66] hover:text-[#2A1810] transition-colors duration-300"
            >
              Inicio
            </Link>
            <span className="text-[#2A1810]/30">/</span>
            <Link 
              to={product?.category === 'backpack' ? '/mochilas' : '/cafe'}
              className="text-sm sm:text-base text-[#C49B66] hover:text-[#2A1810] transition-colors duration-300"
            >
              {product?.category === 'backpack' ? 'Mochilas' : 'Café'}
            </Link>
            <span className="text-[#2A1810]/30">/</span>
            <span className="text-sm sm:text-base text-[#2A1810]/70 truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </motion.div>
        </nav>

        {/* Nueva grid con mejor distribución */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-12 bg-gradient-to-br from-[#FDF8F3] via-white to-[#FDF8F3] backdrop-blur-sm rounded-xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl shadow-[#2A1810]/10">
          {/* Columna de imagen mejorada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-[#FFFBF7] to-[#F5EDE4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-[#2A1810]/10 group">
              <div className="relative h-full overflow-hidden p-6 sm:p-8 lg:p-12">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C49B66]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-white/50 via-transparent to-white/50 rotate-180 transform opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Imagen principal con efectos */}
                <motion.div
                  initial={{ scale: 1.1, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative h-full flex items-center justify-center"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 drop-shadow-2xl"
                    style={{ transformOrigin: 'center center' }}
                  />
                </motion.div>

                {/* Insignias o sellos de calidad */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2 sm:p-3 transform hover:rotate-12 transition-transform duration-300">
                    {product.category === 'backpack' ? null : (
                      <img
                        src="/images/CAFÉS/CAFE.jpg"
                        alt="Sello de calidad"
                        className="w-full h-full object-contain opacity-80"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Título y Badges */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2A1810] to-[#734832] bg-clip-text text-transparent mb-3">{product.name}</h1>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs sm:text-sm bg-gradient-to-r from-[#C49B66]/10 to-[#DEB88C]/10 text-[#8B7355] border-[#C49B66]/20">
                      {product.category}
                    </Badge>
                    {product.isSpecialEdition && (
                      <Badge variant="outline" className="text-xs sm:text-sm bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300 shadow-sm">
                        Edición Especial
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2A1810]">{formatPrice(product.price)}</p>
                  <p className="text-xs sm:text-sm text-[#8B7355]">IVA incluido</p>
                </div>
              </motion.div>
            </div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-coffee"
            >
              <p className="text-[#2A1810]/80 leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Características */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {productFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white/50 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C49B66] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#2A1810] text-sm">{feature.title}</h3>
                      <p className="text-[#8B7355] text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Acciones */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4"
            >
              <Button
              onClick={() => addToCart({ ...product, type: 'product' as const })}
              className="flex-1 h-12 sm:h-auto bg-gradient-to-r from-[#C49B66] to-[#DEB88C] text-white hover:from-[#B38A55] hover:to-[#CDA77B] transition-all duration-300 text-sm sm:text-base shadow-md"
              >
                Agregar al carrito
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="flex-1 h-12 sm:h-auto border-[#DEB88C] text-[#B38A55] hover:bg-gradient-to-r hover:from-[#F5EDE4] hover:to-[#E6D5C3] transition-all duration-300 text-sm sm:text-base"
              >
                Consultar por WhatsApp
              </Button>
            </motion.div>

            {/* Garantías y Certificaciones */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-t border-[#C49B66]/20 pt-8 mt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {(product.category === 'backpack' ? [
                  {
                    icon: Award,
                    title: "Calidad Premium",
                    description: "Materiales de alta calidad"
                  },
                  {
                    icon: Scale,
                    title: "Durabilidad",
                    description: "Diseño resistente y duradero"
                  },
                  {
                    icon: Mountain,
                    title: "Versatilidad",
                    description: "Ideal para múltiples usos"
                  },
                  {
                    icon: Leaf,
                    title: "Comodidad",
                    description: "Diseño ergonómico"
                  }
                ] : [
                  {
                    icon: Award,
                    title: "Calidad Premium",
                    description: "Café de especialidad seleccionado"
                  },
                  {
                    icon: Leaf,
                    title: "100% Natural",
                    description: "Sin aditivos artificiales"
                  },
                  {
                    icon: Scale,
                    title: "Peso Exacto",
                    description: "Empaque controlado"
                  },
                  {
                    icon: Coffee,
                    title: "Tostado Artesanal",
                    description: "Proceso controlado"
                  }
                ]).map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-3 inline-flex p-3 rounded-full bg-[#C49B66]/10">
                      <item.icon className="w-6 h-6 text-[#8B7355]" />
                    </div>
                    <h4 className="font-medium text-[#2A1810] text-sm mb-1">{item.title}</h4>
                    <p className="text-[#8B7355] text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Información Adicional */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-[#F5EDE4]/50 rounded-xl p-6 mt-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#2A1810] mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 11.15L15.15 9L13 6.85L14.85 5L17 7.15L19.15 5L21 6.85L18.85 9L21 11.15L19.15 13L17 10.85L14.85 13L13 11.15ZM12 17H4C4 15.9 4.9 15 6 15H12V17ZM12 13H6C3.79 13 2 14.79 2 17V20H14V17C14 14.79 12.21 13 10 13H12Z"
                    fill="currentColor"
                  />
                </svg>
                Información del Producto
              </h3>
              
              <div className="space-y-4 text-sm">
                {product.category === 'backpack' ? (
                  <>
                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      Material resistente y duradero
                    </p>
                    
                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Diseño ergonómico y cómodo
                    </p>

                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      Múltiples compartimentos y bolsillos
                    </p>
                  </>
                ) : (
                  <>
                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      Tostado a pedido para garantizar máxima frescura
                    </p>
                    
                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Empaque con válvula de desgasificación
                    </p>

                    <p className="flex items-center text-[#2A1810]/80">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C49B66]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      Producto 100% natural y artesanal
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Banner de Beneficios */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-[#F5EDE4] to-[#E6D5C3] py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Calidad Garantizada",
                  description: "100% café de especialidad",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Atención Personalizada",
                  description: "Soporte 24/7 vía WhatsApp",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 11.5C21.0034 13.8199 20.195 16.0652 18.7157 17.8779C17.2364 19.6906 15.1759 20.9651 12.8997 21.4995C10.6236 22.0339 8.24571 21.7982 6.13819 20.8278C4.03068 19.8574 2.30798 18.2042 1.23687 16.1261C0.165757 14.0479 -0.17192 11.6576 0.255176 9.34741C0.682271 7.03723 1.85255 4.91533 3.62828 3.31389C5.404 1.71245 7.67813 0.713062 10.0918 0.468452C12.5055 0.223842 14.932 0.746802 17.0105 1.95841" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 4L11 14L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors duration-300 shadow-md"
                >
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-[#C49B66] to-[#DEB88C] mb-4">
                    <div className="text-[#2A1810]">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2A1810]">{benefit.title}</h3>
                  <p className="text-[#8B7355]">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Sección de Productos Relacionados y Recomendaciones */}
        <div className="mt-16 sm:mt-24 lg:mt-32 bg-gradient-to-b from-[#FAF7F4] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-12"
            >
              <span className="text-sm font-medium text-[#C49B66] uppercase tracking-wider mb-2 block">
                Explora Más
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#2A1810] to-[#734832] inline-block text-transparent bg-clip-text mb-4">
                Productos Recomendados para Ti
              </h2>
              <p className="text-[#8B7355] text-sm sm:text-base max-w-2xl mx-auto">
                Basado en tus preferencias y nuestras mejores selecciones
              </p>
            </motion.div>
            
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE4]/50 to-transparent opacity-50"></div>
              <div className="relative p-6 sm:p-8">
                {product && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold text-amber-900">
                        También te puede interesar
                      </h3>
                      <p className="text-amber-700/80">
                        {product.category === 'backpack' 
                          ? 'Descubre más de nuestra colección de mochilas'
                          : 'Descubre más de nuestra colección de cafés especiales'
                        }
                      </p>
                    </div>
                    
                    <CrossSelling 
                      currentProduct={product} 
                      currentType={product.category}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}