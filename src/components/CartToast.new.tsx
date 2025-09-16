'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import type { CartItem } from '@/lib/types';
import { useCart } from '@/lib/store';
import { Button } from './ui/button';

interface CartToastProps {
  item: CartItem;
  isUpdate?: boolean;
  onViewCart?: () => void;
}

export default function CartToast({ item, isUpdate, onViewCart }: CartToastProps) {
  const cart = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm bg-white p-4 rounded-lg shadow-lg border border-gray-100"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FAF7F4] rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="font-medium">
                {isUpdate ? 'Cantidad actualizada' : '¡Agregado al carrito!'}
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-1">{item.name}</p>
            <p className="text-sm font-medium mt-1">
              {formatPrice(item.price)}
              {item.quantity > 1 && <span className="text-gray-500 text-xs ml-1">x{item.quantity}</span>}
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600">En tu carrito:</p>
            <div className="text-sm font-medium">
              <span>{cart.productCount} productos</span>
              {cart.serviceCount > 0 && (
                <span className="ml-1">• {cart.serviceCount} servicios</span>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-medium">{formatPrice(cart.subtotal)}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onViewCart}
          >
            Ver carrito
          </Button>
          <Button 
            className="flex-1 bg-amber-600 hover:bg-amber-700"
            onClick={() => cart.toggleCart()}
          >
            Ir a pagar
          </Button>
        </div>
      </div>
    </motion.div>
  );
}