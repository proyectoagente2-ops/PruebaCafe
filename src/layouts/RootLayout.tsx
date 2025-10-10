import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

import CartSidebar from '@/components/CartSidebar';
import CartIndicator from '@/components/CartIndicator';
import { NotificationContainer } from '../components/Notification';
import { Toaster } from '@/components/ui/sonner';
import { useState } from 'react';
import { Chat } from '@/components/Chat';

export default function RootLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Botones flotantes siempre visibles */}
      <div className="fixed-buttons">

        <CartIndicator onClick={() => setIsCartOpen(true)} />
      </div>

      {/* Componentes adicionales */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <NotificationContainer />
      <Toaster />
      
      {/* Chat de IA con z-index alto para asegurar visibilidad */}
      <div className="z-50">
        <Chat />
      </div>
    </>
  );
}