'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import WhatsAppButton from './WhatsAppButton';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

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
              <ShoppingBag className="h-5 w-5 mr-2" />
              Tu Carrito
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-amber-300 mb-4" />
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Tu carrito está vacío</h3>
            <p className="text-amber-600 mb-6">Agrega algunos de nuestros deliciosos cafés</p>
            <Button onClick={onClose} className="bg-amber-600 hover:bg-amber-700">
              Explorar Productos
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-gradient-to-b from-amber-50 to-white flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-amber-900 flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Tu Carrito ({getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
                <div className="flex items-start space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-amber-900 text-sm">
                      {item.product.name}
                    </h4>
                    <p className="text-amber-600 text-xs mt-1">
                      {formatPrice(item.product.price)} c/u
                    </p>
                    
                    {item.product.category === 'coffee' && item.product.roastLevel && (
                      <Badge className="mt-2 text-xs bg-amber-100 text-amber-800">
                        {item.product.roastLevel === 'light' ? 'Suave' : 
                         item.product.roastLevel === 'medium' ? 'Medio' : 'Intenso'}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-8 w-8 p-0 border-amber-200"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <span className="font-semibold text-amber-900 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8 p-0 border-amber-200"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <span className="font-bold text-amber-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-amber-200 pt-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-amber-900">Total:</span>
            <span className="text-2xl font-bold text-amber-900">
              {formatPrice(getTotalPrice())}
            </span>
          </div>

          <WhatsAppButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}