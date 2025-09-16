'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { CartItem } from '@/lib/store';
import { useCart } from '@/lib/store';
import { Button } from './ui/button';

interface CartToastProps {
  product: CartItem;
  quantity: number;
  isUpdate?: boolean;
  onViewCart?: () => void;
}

export default function CartToast({ product, quantity, isUpdate, onViewCart }: CartToastProps) {
  const cart = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.3, rotateX: -50 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 0.8,
          ease: [0.19, 1.0, 0.22, 1.0],
        }
      }}
      className="w-[95vw] max-w-sm bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl shadow-2xl border border-amber-100 relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1.2, 0.8, 1.1, 0.9, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1,
          times: [0, 0.3, 0.5, 0.8, 1],
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-40 h-40 bg-amber-300/20 rounded-full blur-xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1.5, 0.7, 1.2, 0.8, 1],
          opacity: 0.3,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          times: [0, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut"
        }}
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-xl"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FAF7F4] rounded-lg overflow-hidden">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  rotate: [180, 0, 0],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  times: [0, 0.6, 1],
                  ease: "easeOut"
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-green-400/30 rounded-full blur-md"
                  />
                  <CheckCircle className="w-7 h-7 text-green-500 relative z-10" />
                </div>
              </motion.div>
              <motion.p 
                className="font-semibold text-amber-900"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isUpdate ? '¡Cantidad actualizada!' : '¡Agregado al carrito!'}
              </motion.p>
            </div>
            <motion.p 
              className="text-base text-amber-800 font-medium mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.name}
            </motion.p>
              <motion.p 
                className="text-lg font-bold text-amber-900 mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
              {formatPrice(product.price)}
              {quantity > 1 && (
                <span className="text-amber-600 text-base ml-2">
                  x{quantity}
                </span>
              )}
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="bg-amber-50/50 p-4 rounded-xl border border-amber-100/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-between items-center mb-3">
            <p className="text-amber-800 font-medium">En tu carrito:</p>
            <div className="text-base font-semibold text-amber-900">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                {cart.items.reduce((total, item) => 
                  total + (item.type === 'product' ? item.quantity : 0), 0)} productos
              </motion.span>
              {cart.items.some(i => i.type === 'service') && (
                <motion.span 
                  className="ml-2 text-amber-700"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  • {cart.items.reduce((total, item) => 
                    total + (item.type === 'service' ? item.quantity : 0), 0)} servicios
                </motion.span>
              )}
            </div>
          </div>
          <motion.div 
            className="flex justify-between items-center text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-amber-700 font-medium">Subtotal:</p>
            <p className="font-bold text-lg text-amber-900">{formatPrice(cart.subtotal)}</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              className="w-full border-amber-200 text-amber-900 hover:bg-amber-50"
              onClick={onViewCart}
            >
              Ver carrito
            </Button>
          </motion.div>
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => cart.toggleCart()}
            >
              Ir a pagar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}