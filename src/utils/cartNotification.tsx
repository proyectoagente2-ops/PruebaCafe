'use client';

import React from 'react';
import { toast } from '@/components/ui/use-toast';
import { CartItem } from '@/lib/store';
import { motion } from 'framer-motion';

export const showCartNotification = (item: CartItem, isUpdate: boolean = false) => {
  toast({
    duration: 5000,
    className: "p-0 bg-transparent border-0 overflow-visible",
    description: (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3, rotateX: -50 }}
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
        className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl shadow-xl border border-amber-100 relative overflow-hidden"
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

        <div className="flex gap-4">
          <motion.div 
            className="w-16 h-16 bg-amber-50 rounded-lg overflow-hidden"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3
            }}
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
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
                  <span className="text-green-500 relative z-10 text-xl">✓</span>
                </div>
              </motion.div>
              <motion.span 
                className="font-medium text-amber-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isUpdate ? '¡Cantidad actualizada!' : '¡Agregado al carrito!'}
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-amber-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {item.name}
            </motion.p>
          </div>
        </div>
      </motion.div>
    ),
  });
};