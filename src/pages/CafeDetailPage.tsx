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
import ReadingTime from '@/components/ReadingTime';
import { ProductFeature, ProductInfo, CoffeeProduct, GuaranteeItem } from '@/types/product';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function CafeErrorBoundary() {
  const error = useRouteError();
  console.error('Error en CafeDetailPage:', error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F4]">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-6 text-[#2A1810]">
          {isRouteErrorResponse(error) ? 'Café no encontrado' : 'Ha ocurrido un error'}
        </h1>
        <Link 
          to="/cafe"
          className="text-[#C49B66] hover:text-[#2A1810] transition-all duration-300"
        >
          Volver a Café
        </Link>
      </div>
    </div>
  );
}

export default function CafeDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  console.log('Buscando producto con ID:', id);
  
  if (!id) {
    throw new Error('No se proporcionó un ID de producto');
  }

  const product = allProducts.find(p => {
    const productIdString = String(p.id).toLowerCase();
    const searchIdString = String(id).toLowerCase();
    
    console.log('Comparando producto:', {
      productId: productIdString,
      searchId: searchIdString,
      match: productIdString === searchIdString,
      category: p.category
    });
    
    return productIdString === searchIdString && p.category === 'coffee';
  });
  
  console.log('Producto encontrado:', product ? {
    id: product.id,
    name: product.name,
    category: product.category
  } : null);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6 text-[#3E2723]">Café no encontrado</h1>
          <Link 
            to="/cafe"
            className="text-[#D97706] hover:text-[#C2410C] transition-all duration-300 font-medium"
          >
            Volver a Café
          </Link>
        </div>
      </div>
    );
  }

  // Obtener las características del café
  const getProductFeatures = (): ProductFeature[] => {
    return [
      {
        icon: (props) => <Coffee {...props} />,
        title: "Perfil de Sabor",
        description: product.notes?.join(", ") ?? ""
      },
      {
        icon: (props) => <Mountain {...props} />,
        title: "Altitud",
        description: product.altitude ?? "1.500 - 1.800 msnm"
      },
      {
        icon: (props) => <Leaf {...props} />,
        title: "Variedad",
        description: "Caturra, Colombia"
      },
      {
        icon: (props) => <Award {...props} />,
        title: "Proceso",
        description: product.processingMethod ?? "Lavado"
      }
    ];
  };

  const productInfo: ProductInfo[] = [
    {
      icon: <Coffee className="w-4 h-4 mr-2 text-[#C49B66]" />,
      text: "Tostado a pedido para garantizar máxima frescura"
    },
    {
      icon: <Scale className="w-4 h-4 mr-2 text-[#C49B66]" />,
      text: "Empaque con válvula de desgasificación"
    },
    {
      icon: <Leaf className="w-4 h-4 mr-2 text-[#C49B66]" />,
      text: "Producto 100% natural y artesanal"
    }
  ];

  const productFeatures = getProductFeatures();

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb - Clean and Professional */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-[#D97706] transition-colors duration-200"
            >
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              to="/cafe"
              className="text-gray-600 hover:text-[#D97706] transition-colors duration-200"
            >
              Café
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Columna de imagen mejorada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="aspect-square bg-gradient-to-br from-[#FAF6F0] to-[#F5EFE7] rounded-xl overflow-hidden shadow-sm border border-gray-200 group transition-all duration-300 hover:shadow-md">
              <div className="relative h-full overflow-hidden p-8">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
            {/* Título y Precio */}
            <div>
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h1>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20 text-xs font-medium px-3 py-1">
                      {product.category === 'coffee' ? 'coffee' : product.category}
                    </Badge>
                    {product.isSpecialEdition && (
                      <Badge className="bg-[#D97706] text-white text-xs font-semibold px-3 py-1">
                        Edición Especial
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</p>
                  <p className="text-xs text-gray-500 mt-1">IVA incluido</p>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <ReadingTime text={product.description} />
              <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4">
              {productFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-[#D97706]/30 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#D97706]/10">
                      <feature.icon className="w-4 h-4 text-[#D97706]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => addToCart({ ...product, type: 'product' as const })}
                className="flex-1 h-11 bg-[#D97706] text-white hover:bg-[#C2410C] transition-colors duration-200 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                Agregar al carrito
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="flex-1 h-11 border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706]/5 transition-colors duration-200 text-sm font-semibold"
              >
                Consultar por WhatsApp
              </Button>
            </div>

            {/* Garantías y Certificaciones */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-t border-[#E8DDD0] pt-8 mt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {/* Benefits grid items */}
                {([
                  {
                    icon: (props: any) => <Award {...props} />,
                    title: "Calidad Premium",
                    description: "Café de especialidad seleccionado"
                  },
                  {
                    icon: (props: any) => <Leaf {...props} />,
                    title: "100% Natural",
                    description: "Sin aditivos artificiales"
                  },
                  {
                    icon: (props: any) => <Scale {...props} />,
                    title: "Peso Exacto", 
                    description: "Empaque controlado"
                  },
                  {
                    icon: (props: any) => <Coffee {...props} />,
                    title: "Tostado Artesanal",
                    description: "Proceso controlado"
                  }
                ] as GuaranteeItem[]).map((item: GuaranteeItem, index: number) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-3 inline-flex p-3 rounded-full bg-gradient-to-br from-[#D97706]/20 to-[#D97706]/10 border border-[#D97706]/20">
                      <item.icon className="w-6 h-6 text-[#D97706]" />
                    </div>
                    <h4 className="font-semibold text-[#3E2723] text-sm mb-1">{item.title}</h4>
                    <p className="text-[#6D4C41] text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Información Adicional */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-[#FAF6F0] to-[#FFF8F0] rounded-xl p-6 mt-8 border border-[#E8DDD0]"
            >
              <h3 className="text-lg font-bold text-[#3E2723] mb-5 flex items-center">
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
                  <>
                    <p className="flex items-center text-[#6D4C41]">
                      <svg
                        className="w-4 h-4 mr-2 text-[#D97706]"
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
                    
                    <p className="flex items-center text-[#6D4C41]">
                      <svg
                        className="w-4 h-4 mr-2 text-[#D97706]"
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

                    <p className="flex items-center text-[#6D4C41]">
                      <svg
                        className="w-4 h-4 mr-2 text-[#D97706]"
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
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Banner de Beneficios */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-[#FAF6F0] to-[#F5EFE7] py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16 lg:mt-20 rounded-2xl"
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
                  className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#FFC499]/50 hover:border-[#FF9900]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#FF9900] to-[#FF6600] mb-4 shadow-md">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#3E2723]">{benefit.title}</h3>
                  <p className="text-[#6D4C41]">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Related Products Section */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-12"
            >
              <span className="text-sm font-bold text-[#D97706] uppercase tracking-wider mb-2 block">
                Explora Más
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3E2723] mb-4">
                Productos Recomendados para Ti
              </h2>
              <p className="text-[#6D4C41] text-base sm:text-lg max-w-2xl mx-auto">
                Basado en tus preferencias y nuestras mejores selecciones
              </p>
            </motion.div>
            
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-[#E8DDD0]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6F0]/50 to-transparent opacity-50"></div>
              <div className="relative p-6 sm:p-8 lg:p-10">
                {product && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2 mb-6">
                      <h3 className="text-2xl font-bold text-[#3E2723]">
                        También te puede interesar
                      </h3>
                      <p className="text-[#6D4C41]">
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