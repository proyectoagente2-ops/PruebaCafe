'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  isFloating?: boolean;
}

export default function WhatsAppButton({ isFloating = false }: WhatsAppButtonProps) {
  const { items, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      return encodeURIComponent(
        '¡Hola CAFÉ FELICIDAD! 🌱☕\n\n' +
        'Me gustaría obtener más información sobre:\n\n' +
        '- Sus variedades de café ☕\n' +
        '- Precios y presentaciones disponibles 💰\n' +
        '- Proceso de compra y envío 📦\n' +
        '- Visitas a la finca cafetera 🌄\n\n' +
        '¡Gracias por su atención! 🙏'
      );
    }

    let message = '¡Hola CAFÉ FELICIDAD! 🌱☕\n\n';
    message += 'Me gustaría hacer el siguiente pedido:\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: ${formatPrice(item.product.price)}\n`;
      message += `   Subtotal: ${formatPrice(item.product.price * item.quantity)}\n\n`;
    });

    message += `💰 TOTAL: ${formatPrice(getTotalPrice())}\n\n`;
    message += 'Por favor confirma la disponibilidad y el proceso de entrega. ¡Gracias! 🙏';

    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '573113678555';
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    if (items.length > 0) {
      clearCart();
    }
  };

  if (isFloating) {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={cn(
          "fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 p-0",
          "bg-green-500 hover:bg-green-600 transform transition-all duration-300",
          "animate-pulse-slow hover:animate-none"
        )}
      >
        <div className="relative">
          <MessageCircle className="h-8 w-8 text-white" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </div>
      </Button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={cn(
        "w-full py-4 text-lg font-semibold gap-2 transition-all duration-300",
        "bg-green-500 hover:bg-green-600 hover:shadow-lg text-white",
        "flex items-center justify-center"
      )}
    >
      {items.length > 0 ? (
        <>
          <ShoppingCart className="h-6 w-6" />
          Enviar Pedido por WhatsApp
        </>
      ) : (
        <>
          <MessageCircle className="h-6 w-6" />
          Consultar Información
        </>
      )}
    </Button>
  );
}
