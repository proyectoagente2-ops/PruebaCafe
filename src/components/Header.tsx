import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const AnimatePresenceWrapper = ({ children }: { children: React.ReactNode }) => {
  return AnimatePresence({ children, mode: "wait" });
};
import { useCart } from '@/lib/store';
import type { CartItem } from '@/lib/store';
import CartSidebar from './CartSidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/constants';
import '@/styles/header.css';

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "Inicio", href: ROUTES.HOME },
  { name: "Servicios", href: ROUTES.SERVICIOS },
  { name: "Café", href: ROUTES.CAFE },
  { name: "Mochilas", href: ROUTES.MOCHILAS },
  { name: "Contacto", href: ROUTES.CONTACTO },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCart();
  const location = useLocation();
  const isServiceDetailPage = location.pathname.startsWith('/servicios/') && location.pathname !== '/servicios';

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isServiceDetailPage ? 'service-detail-header' : ''}`}>
      <div className={`absolute inset-0 ${
        isServiceDetailPage 
          ? 'bg-[#fffcef] shadow-md' 
          : 'bg-[#fffcef] shadow-sm'
      }`} />
      
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Link
              to={ROUTES.HOME}
              className="block transition-opacity hover:opacity-90"
            >
              <OptimizedImage 
                src="/images/LaFelicidA_transparente_ALPHA_2x.png"
                alt="LA FELICIDÁ" 
                className="h-24 w-auto object-contain py-1"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center max-w-3xl mx-auto">
            <nav className="flex items-center justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    relative px-5 py-2 mx-2 text-[15px] font-medium
                    transition-all duration-300
                    ${location.pathname === item.href 
                      ? 'text-[#FFD65A]' 
                      : 'text-[#5C3B28] hover:text-[#FFD65A]'
                    }
                  `}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-3 right-3 -bottom-1 h-0.5 bg-[#FFD65A]"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-10 h-10 text-[#5C3B28] hover:text-[#FFD65A] transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <AnimatePresenceWrapper>
                    {cart.items.length > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2"
                      >
                        <Badge 
                          variant="default" 
                          className="px-2 py-1 rounded-full bg-amber-500 text-[10px] whitespace-nowrap"
                        >
                          {cart.items.filter((item: CartItem) => item.type === 'product').length > 0 && 
                            `${cart.items.filter((item: CartItem) => item.type === 'product').length}P`}
                          {cart.items.filter((item: CartItem) => item.type === 'product').length > 0 && 
                           cart.items.filter((item: CartItem) => item.type === 'service').length > 0 && ' • '}
                          {cart.items.filter((item: CartItem) => item.type === 'service').length > 0 && 
                            `${cart.items.filter((item: CartItem) => item.type === 'service').length}S`}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresenceWrapper>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[90vw] sm:w-[540px]">
                <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              </SheetContent>
            </Sheet>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost"
                  size="icon"
                  className="md:hidden w-10 h-10 text-white hover:text-amber-200 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[400px]">
                <nav className="flex flex-col mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        py-3 px-6 text-base font-medium transition-colors
                        ${location.pathname === item.href
                          ? 'text-amber-600 bg-amber-50'
                          : 'text-amber-900 hover:bg-amber-50/80'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
