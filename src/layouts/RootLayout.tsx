import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import CartSidebar from '@/components/CartSidebar';
import CartIndicator from '@/components/CartIndicator';
import { NotificationContainer } from '../components/Notification';
import { Toaster } from '@/components/ui/sonner';
import { useState } from 'react';

export default function RootLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <CartIndicator onClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <NotificationContainer />
      <Toaster />
    </>
  );
}