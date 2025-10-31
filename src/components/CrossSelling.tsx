'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Coffee, Map, Plus, Scale } from 'lucide-react';
import { Product, CartItem } from '@/lib/types';
import LazyImage from './LazyImage';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/store';
import { allProducts } from '@/lib/products';

interface CrossSellingProps {
  currentProduct: Product;
  currentType: 'coffee' | 'experience' | 'backpack';
  compact?: boolean;
}

const CrossSelling = ({ currentProduct, currentType, compact = false }: CrossSellingProps) => {
  const cart = useCart();
  const [recommendations, setRecommendations] = React.useState<Product[]>([]);
  const [hoveredProduct, setHoveredProduct] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!currentProduct || !allProducts) return;

    // Filtrar productos relacionados
    const filteredProducts = allProducts.filter(product => 
      product.id !== currentProduct.id && // Excluir producto actual
      product.category === currentProduct.category // Misma categoría
    );

    // Ordenar aleatoriamente para variar las recomendaciones
    const shuffled = [...filteredProducts].sort(() => Math.random() - 0.5);
    
    // Tomar solo 2 o 3 productos
    const selected = shuffled.slice(0, compact ? 2 : 3);
    
    setRecommendations(selected);
  }, [currentProduct, compact]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (product: Product) => {
    cart.addToCart({
      ...product,
      type: product.category === 'experience' ? 'service' as const : 'product' as const
    });
  };

  if (recommendations.length === 0) {
    return (
      <div className="text-center p-6 bg-amber-50/50 rounded-lg">
        <p className="text-amber-800">No hay productos relacionados disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gradient-to-b from-white to-amber-50/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100/50"
          >
            <Link
              to={
                product.category === 'coffee'
                  ? `/cafe/${product.id}`
                  : product.category === 'backpack'
                  ? `/mochilas/${product.id}`
                  : product.category === 'experience'
                  ? `/servicios/${product.id}`
                  : `/productos/${product.id}`
              }
              className="block"
            >
              <div className="relative">
                {/* Badge de recomendación */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Recomendado
                  </span>
                </div>
                
                {/* Imagen del producto */}
                <div className="aspect-square relative rounded-t-xl overflow-hidden bg-gradient-to-br from-amber-50 to-white p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent_70%)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-100/20 to-transparent z-[1]"></div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <LazyImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Información del producto */}
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2A1810] group-hover:text-amber-800 transition-colors duration-300 text-lg">
                        {product.name}
                      </h4>
                      <p className="mt-1 text-sm text-amber-700/80">
                        {product.notes?.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
                      {formatPrice(product.price)}
                    </p>
                    <span className="text-xs text-amber-600">COP</span>
                  </div>
                </div>

                {/* Características rápidas */}
                <div className="mt-3 flex items-center gap-3">
                  {product.roastLevel && (
                    <span className="inline-flex items-center text-xs text-gray-600">
                      <Coffee className="w-3 h-3 mr-1" />
                      {product.roastLevel}
                    </span>
                  )}
                  {product.weight && (
                    <span className="inline-flex items-center text-xs text-gray-600">
                      <Scale className="w-3 h-3 mr-1" />
                      {product.weight}
                    </span>
                  )}
                </div>
              </div>
            </Link>

            {/* Botón de agregar al carrito */}
            <div className="p-6 pt-0">
              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                onClick={() => handleAddToCart(product)}
              >
                Agregar al Carrito
                <Plus className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            {/* Detalles flotantes */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 to-amber-50/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl flex items-center justify-center">
              <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h5 className="font-semibold text-amber-900 mb-2">Características</h5>
                <ul className="space-y-2 text-sm text-amber-800">
                  {product.processingMethod && (
                    <li className="flex items-center justify-center gap-1">
                      <Coffee className="w-4 h-4" />
                      Proceso: {product.processingMethod}
                    </li>
                  )}
                  {product.origin && (
                    <li className="flex items-center justify-center gap-1">
                      <Map className="w-4 h-4" />
                      Origen: {product.origin}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CrossSelling;