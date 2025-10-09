
'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';



interface CartIndicatorProps {
  onClick?: () => void;
}

export default function CartIndicator({ onClick }: CartIndicatorProps) {
  const cart = useCart();
  const itemCount = cart.getItemCount?.() || 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Button
      variant="ghost"
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 bg-[#2A1810] text-white shadow-lg hover:bg-[#1A0F0A] transition-all duration-300 rounded-full p-4 sm:p-6 z-50 floating-action-button"
      onClick={onClick}
    >
      <div className="relative">
        <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-[#C49B66] text-[#2A1810] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {itemCount}
          </motion.div>
        )}
      </div>
      {itemCount > 0 && (
        <span className="ml-3 hidden sm:inline-block font-medium">
                    {formatPrice(cart.total)}
        </span>
      )}
    </Button>
  );
}