'use client';

import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  ShoppingCart, 
  MinusCircle, 
  PlusCircle,
  ArrowLeft,
  ArrowRight,
  Star,
  Truck,
  Shield,
  Clock
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { useCart } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

// Datos de muestra para las mochilas (podría venir de una API o base de datos)
const mochilaProducts = [
  {
    id: 'mochila-tradicional-1',
    name: 'Mochila Tradicional',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILAAZUL.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano'],
    price: 150000,
    category: 'backpack',
    material: 'Lana natural',
    capacity: 'Mediana',
    recommendedUse: 'Uso diario',
    detailedDescription: `
      Esta mochila tradicional es una obra maestra artesanal que combina la sabiduría ancestral 
      con la funcionalidad moderna. Cada pieza es única, tejida a mano por artesanos expertos 
      que han heredado técnicas transmitidas de generación en generación.
    `,
    specifications: {
      dimensions: '30cm x 40cm x 15cm',
      weight: '0.8 kg',
      colors: ['Azul índigo', 'Natural', 'Detalles en blanco'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-especial-1',
    name: 'Mochila Especial',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAVERDE.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande'],
    price: 180000,
    category: 'backpack',
    material: 'Lana premium',
    capacity: 'Grande',
    recommendedUse: 'Ocasiones especiales',
    detailedDescription: `
      Una mochila excepcional que representa la cumbre de nuestra artesanía. 
      Elaborada con los materiales más finos y técnicas especiales, cada pieza 
      es una obra de arte única que combina la tradición con un toque de lujo.
    `,
    specifications: {
      dimensions: '35cm x 45cm x 18cm',
      weight: '1 kg',
      colors: ['Verde esmeralda', 'Detalles dorados'],
      timeToMake: '3-4 semanas'
    }
  },
  {
    id: 'mochila-moderna-1',
    name: 'Mochila Moderna',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJA.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado'],
    price: 165000,
    category: 'backpack',
    material: 'Lana mixta',
    capacity: 'Personalizada',
    recommendedUse: 'Uso versátil',
    detailedDescription: `
      Una interpretación contemporánea de nuestras mochilas tradicionales. 
      Diseñada para el usuario moderno, esta pieza combina la autenticidad 
      de las técnicas ancestrales con patrones y colores contemporáneos.
    `,
    specifications: {
      dimensions: '32cm x 42cm x 16cm',
      weight: '0.9 kg',
      colors: ['Rojo vibrante', 'Patrones modernos'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-tradicional-2',
    name: 'Mochila Tradicional Blanca',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILABLANCA.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano'],
    price: 155000,
    category: 'backpack',
    material: 'Lana natural',
    capacity: 'Mediana',
    recommendedUse: 'Uso diario',
    detailedDescription: `
      Una elegante mochila en tonos blancos que refleja la pureza de nuestras 
      tradiciones. Cada puntada es un testimonio de la dedicación de nuestros 
      artesanos y la belleza de los diseños ancestrales.
    `,
    specifications: {
      dimensions: '30cm x 40cm x 15cm',
      weight: '0.8 kg',
      colors: ['Blanco natural', 'Detalles en crema'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-especial-2',
    name: 'Mochila Especial Gris',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAGRIS1.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande'],
    price: 175000,
    category: 'backpack',
    material: 'Lana premium',
    capacity: 'Grande',
    recommendedUse: 'Ocasiones especiales',
    detailedDescription: `
      Una sofisticada mochila en tonos grises que combina elegancia y 
      funcionalidad. Perfecta para quienes buscan un accesorio único 
      que refleje tanto estilo como respeto por la tradición.
    `,
    specifications: {
      dimensions: '35cm x 45cm x 18cm',
      weight: '1 kg',
      colors: ['Gris piedra', 'Detalles plateados'],
      timeToMake: '3-4 semanas'
    }
  },
  {
    id: 'mochila-moderna-2',
    name: 'Mochila Moderna Bicolor',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJACONVERDE.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado'],
    price: 170000,
    category: 'backpack',
    material: 'Lana mixta',
    capacity: 'Personalizada',
    recommendedUse: 'Uso versátil',
    detailedDescription: `
      Una vibrante combinación de colores que representa la fusión entre 
      lo tradicional y lo moderno. Esta mochila es perfecta para quienes 
      buscan un accesorio único que destaque por su diseño atrevido.
    `,
    specifications: {
      dimensions: '32cm x 42cm x 16cm',
      weight: '0.9 kg',
      colors: ['Rojo y verde', 'Patrones geométricos'],
      timeToMake: '2-3 semanas'
    }
  }
];

export default function MochilaDetailPage() {
  const { id } = useParams();
  const mochila = mochilaProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 5) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!mochila) return;

    const cartItem = {
      id: mochila.id,
      name: mochila.name,
      price: mochila.price,
      image: mochila.image,
      type: 'product' as const,
      quantity: quantity
    };

    addToCart(cartItem);

    toast({
      title: "¡Producto agregado!",
      description: `${mochila.name} se ha añadido a tu carrito`,
      duration: 3000,
    });
  };

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me interesa la mochila ${mochila?.name}. ¿Podrían darme más información?`;
    window.open(
      `https://api.whatsapp.com/send?phone=573113678555&text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!mochila) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Mochila no encontrada
          </h2>
          <p className="text-amber-800 mb-8">
            Lo sentimos, no pudimos encontrar la mochila que buscas.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Volver
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs mejorados */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex items-center space-x-2 text-sm mb-6 bg-white/60 backdrop-blur-sm rounded-full px-5 py-3 inline-flex shadow-sm border border-amber-100">
            <Link to="/" className="text-amber-700 hover:text-amber-800 font-medium transition-colors">
              Inicio
            </Link>
            <span className="text-amber-300">/</span>
            <Link to="/mochilas" className="text-amber-700 hover:text-amber-800 font-medium transition-colors">
              Mochilas
            </Link>
            <span className="text-amber-300">/</span>
            <span className="text-amber-900 font-semibold">{mochila.name}</span>
          </nav>
          
          <Link 
            to="/mochilas" 
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium group transition-all"
          >
            <div className="h-8 w-8 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center mr-2 transition-all">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            Volver a mochilas
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Imagen de la mochila mejorada */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-500 group border-4 border-white">
                {/* Badge flotante */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                    100% Artesanal
                  </div>
                </div>                <OptimizedImage
                  src={mochila.image}
                  alt={mochila.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Info rápida debajo de la imagen */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-amber-100">
                  <Truck className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-700">Envío gratis</p>
                  <p className="text-xs text-gray-500">+$100k</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-amber-100">
                  <Shield className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-700">Garantía</p>
                  <p className="text-xs text-gray-500">Artesanal</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-amber-100">
                  <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-700">Elaboración</p>
                  <p className="text-xs text-gray-500">{mochila.specifications.timeToMake}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Información de la mochila mejorada */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              {/* Badge premium */}
              <motion.div 
                className="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-amber-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Producto Artesanal Premium
              </motion.div>
              
              <h1 className="font-playfair text-5xl font-bold text-amber-900 mb-6 leading-tight">
                {mochila.name}
              </h1>

              {/* Calificación mejorada */}
              <div className="flex items-center gap-3 mb-6 bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">5.0</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">12 reseñas verificadas</span>
              </div>

              {/* Precio destacado */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 mb-8 border-2 border-amber-200 shadow-lg">
                <p className="text-sm text-gray-600 mb-2 font-medium">Precio especial</p>
                <div className="flex items-baseline gap-4">
                  <p className="text-5xl text-amber-700 font-bold">
                    ${mochila.price.toLocaleString('es-CO')}
                  </p>
                  <span className="text-lg text-gray-600 font-medium">COP</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Envío calculado al finalizar la compra
                </p>
              </div>

              {/* Descripción mejorada */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <div className="h-1 w-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                  Descripción
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">{mochila.detailedDescription}</p>
              </div>

              {/* Selector de cantidad y botones mejorados */}
            <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-8 space-y-6 shadow-xl border-2 border-amber-100">
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-amber-100">
                <span className="text-gray-800 font-bold text-lg">Cantidad:</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="h-10 w-10 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity <= 1}
                  >
                    <MinusCircle className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold w-12 text-center text-amber-900">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-10 w-10 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity >= 5}
                  >
                    <PlusCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-7 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  Agregar al carrito
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-7 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>            {/* Características y especificaciones mejoradas */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                  <div className="h-1 w-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                  Características
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mochila.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                        <Star className="h-4 w-4 text-white fill-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                  <div className="h-1 w-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                  Especificaciones Técnicas
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100">
                    <p className="text-gray-500 text-sm font-medium mb-2">Dimensiones</p>
                    <p className="font-bold text-amber-900 text-lg">{mochila.specifications.dimensions}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100">
                    <p className="text-gray-500 text-sm font-medium mb-2">Peso</p>
                    <p className="font-bold text-amber-900 text-lg">{mochila.specifications.weight}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100">
                    <p className="text-gray-500 text-sm font-medium mb-2">Material</p>
                    <p className="font-bold text-amber-900 text-lg">{mochila.material}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100">
                    <p className="text-gray-500 text-sm font-medium mb-2">Elaboración</p>
                    <p className="font-bold text-amber-900 text-lg">{mochila.specifications.timeToMake}</p>
                  </div>
                </div>
              </div>
            </div>

                {/* Nota importante mejorada */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border-2 border-amber-200 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">i</span>
                    </div>
                    <div>
                      <h4 className="text-amber-900 font-bold text-lg mb-2">Nota importante</h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        Cada mochila es única y hecha a mano. Los colores y patrones pueden 
                        variar ligeramente. El tiempo de elaboración es aproximado y puede 
                        variar según la disponibilidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        {/* Mochilas Recomendadas */}
        <section className="mt-24 border-t pt-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <motion.h2 
                    className="text-3xl font-bold text-amber-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    También te puede interesar
                  </motion.h2>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Descubre otras mochilas artesanales que podrían cautivarte
                  </motion.p>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {useMemo(() => {
                      return mochilaProducts
                        .filter(m => m.id !== id)
                        .slice(0, 3)
                        .map((mochila, index) => (
                          <motion.div
                            key={mochila.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ 
                              duration: 0.5,
                              delay: index * 0.1,
                              layout: { duration: 0.3 }
                            }}
                          >
                            <Link 
                              to={`/mochilas/${mochila.id}`} 
                              className="block group"
                              onClick={(e) => {
                                // Prevenir navegación inmediata para permitir la animación
                                e.preventDefault();
                                // Aplicar la animación y luego navegar
                                setTimeout(() => {
                                  window.location.href = `/mochilas/${mochila.id}`;
                                }, 300);
                              }}
                            >
                              <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ 
                                  type: "spring", 
                                  stiffness: 300, 
                                  damping: 15 
                                }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                              >
                                <div className="aspect-square relative overflow-hidden">
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                  >
                                    <OptimizedImage
                                      src={mochila.image}
                                      alt={mochila.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </motion.div>
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </div>
                                <motion.div 
                                  className="p-6 text-center"
                                  initial={{ y: 0 }}
                                  whileHover={{ y: -5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <motion.h3 
                                    className="text-lg font-semibold text-amber-900 mb-2"
                                    whileHover={{ color: "#C49B66" }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {mochila.name}
                                  </motion.h3>
                                  <p className="text-amber-600 font-medium text-xl mb-3">
                                    ${mochila.price.toLocaleString('es-CO')} COP
                                  </p>
                                  <motion.div
                                    className="mt-4 inline-flex items-center justify-center px-6 py-2 bg-amber-100 rounded-full text-amber-600 font-medium group hover:bg-amber-200 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ 
                                      type: "spring", 
                                      stiffness: 400, 
                                      damping: 10 
                                    }}
                                  >
                                    <span>Ver detalles</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                  </motion.div>
                                </motion.div>
                              </motion.div>
                            </Link>
                          </motion.div>
                        ));
                    }, [id])}
                  </motion.div>
                </AnimatePresence>
            </section>
        </div>
      </div>
    );
}

