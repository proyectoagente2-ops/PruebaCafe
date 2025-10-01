'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Coffee, Map, Backpack, Plus, ArrowRight } from 'lucide-react';
import { Product, CartItem } from '@/lib/types';
import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/store';
import { coffeeProducts } from '@/lib/products';

interface CrossSellingProps {
  currentProduct: Product;
  currentType: 'coffee' | 'experience' | 'backpack';
  compact?: boolean;
}

const CrossSelling = ({ currentProduct, currentType, compact = false }: CrossSellingProps) => {
  const cart = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const prepareItemForCart = (product: Product): Omit<CartItem, 'quantity'> => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    type: product.category === 'experience' ? 'service' : 'product',
    weight: product.weight,
  });

  const getRelatedProducts = () => {
    // Productos del mismo tipo que no estén en el carrito
    const sameTypeProducts = coffeeProducts
      .filter(p => 
        p.category === currentProduct.category && 
        p.id !== currentProduct.id &&
        !cart.items.some(item => item.id === p.id)
      )
      .slice(0, compact ? 2 : 3);

    // Si no hay suficientes productos del mismo tipo, agregar otros tipos
    if (sameTypeProducts.length < (compact ? 2 : 3)) {
      const otherProducts = coffeeProducts
        .filter(p => 
          p.category !== currentProduct.category &&
          !cart.items.some(item => item.id === p.id)
        )
        .slice(0, (compact ? 2 : 3) - sameTypeProducts.length);
      
      return [...sameTypeProducts, ...otherProducts];
    }

    return sameTypeProducts;
  };

  const recommendations = getRelatedProducts();

  if (recommendations.length === 0) return null;

  return compact ? (
    <div className="mt-4 p-4 bg-amber-50/50 rounded-lg">
      <h4 className="text-sm font-medium text-amber-900 mb-3">
        También te puede interesar
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {recommendations.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-2 bg-white rounded-lg"
          >
            <div className="w-12 h-12 relative rounded-md overflow-hidden">
              <OptimizedImage 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                blur={false}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-amber-900 truncate">
                {product.name}
              </p>
              <p className="text-xs text-amber-600">
                {formatPrice(product.price)}
              </p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 flex-shrink-0"
              onClick={() => cart.addToCart(prepareItemForCart(product))}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  ) : (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-amber-900 mb-4">
        Productos relacionados
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative"
          >
            <Link to={`/productos/${product.id}`} className="block">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  blur={false}
                />
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium text-amber-900">{product.name}</h4>
                <p className="text-amber-600">{formatPrice(product.price)}</p>
              </div>
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => cart.addToCart(prepareItemForCart(product))}
            >
              Agregar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CrossSelling;