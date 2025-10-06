'use client';

import { Button } from '@/components/ui/button';

import { motion, AnimatePresence } from 'framer-motion';

const AnimatePresenceWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="popLayout">{children}</AnimatePresence>;
};
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import WhatsAppButton from './WhatsAppButton';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, subtotal, getItemCount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-[400px] sm:w-[540px] bg-gradient-to-b from-amber-50 to-white">
          <SheetHeader>
            <SheetTitle className="text-amber-900 flex items-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
              </motion.div>
              Tu Carrito
            </SheetTitle>
          </SheetHeader>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center h-[60vh] text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ShoppingBag className="h-16 w-16 text-amber-300 mb-4" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-semibold text-amber-900 mb-2"
            >
              Tu carrito está vacio
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-amber-600 mb-6"
            >
              Agrega algunos de nuestros deliciosos cafés
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                            <Button 
                onClick={() => {
                  onClose();
                  navigate('/cafe');
                }} 
                className="bg-amber-600 hover:bg-amber-700"
              >
                Explorar Productos
              </Button>
            </motion.div>
          </motion.div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-gradient-to-b from-amber-50 to-white">
        <SheetHeader>
          <SheetTitle className="text-amber-900 flex items-center justify-between">
            <div className="flex items-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
              </motion.div>
              Tu Carrito
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Badge className="bg-amber-600 text-white">
                {getItemCount()} items
              </Badge>
            </motion.div>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6 h-[calc(100vh-280px)] overflow-y-auto pb-6">
          <AnimatePresenceWrapper>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square h-24 overflow-hidden rounded-lg"
                >
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </motion.div>
                
                <div className="flex flex-col flex-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="font-medium text-amber-900">{item.name}</h3>
                    <p className="text-sm text-amber-600 line-clamp-1">{item.type}</p>
                    <div className="text-amber-900 font-semibold mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <motion.div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 border-amber-200"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-4 w-4 text-amber-600" />
                        </Button>
                      </motion.div>
                      <span className="w-8 text-center text-amber-900">{item.quantity}</span>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 border-amber-200"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4 text-amber-600" />
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-red-200"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresenceWrapper>
        </div>

        <div className="space-y-4">
          <Separator className="my-4" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <span className="text-amber-900 font-medium">Subtotal</span>
            <motion.span
              key={subtotal}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-lg font-bold text-amber-900"
            >
              {formatPrice(subtotal)}
            </motion.span>
          </motion.div>

          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                onClick={onClose}
                variant="outline"
                className="w-full border-amber-200 text-amber-800"
              >
                Seguir Comprando
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <WhatsAppButton />
            </motion.div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
