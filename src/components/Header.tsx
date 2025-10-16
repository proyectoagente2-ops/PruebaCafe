import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, X, Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useCart } from '@/lib/store';
import type { CartItem } from '@/lib/store';
import CartSidebar from './CartSidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/constants';
import '@/styles/header.css';

type NavigationItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const navigation: NavigationItem[] = [
  { name: "Inicio", href: ROUTES.HOME, icon: null },
  { name: "Servicios", href: ROUTES.SERVICIOS, icon: null },
  { name: "Café", href: ROUTES.CAFE, icon: null },
  { name: "Mochilas", href: ROUTES.MOCHILAS, icon: null },
  { name: "Contacto", href: ROUTES.CONTACTO, icon: null },
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

  // Reducir opacidad del fondo cuando se abre el carrito
  React.useEffect(() => {
    const sheetOverlay = document.querySelector('[data-state="open"] ~ div');
    if (sheetOverlay) {
      (sheetOverlay as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.25)';
    }
  }, [isCartOpen]);

  const mainLinks = navigation.slice(0, 3); // Inicio, Servicios, Café
  const extraLinks = navigation.slice(3);   // Mochilas, Contacto

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isServiceDetailPage ? 'service-detail-header' : ''}`}>
      <div className={`absolute inset-0 ${isServiceDetailPage ? 'bg-[#fffcef] shadow-md' : 'bg-[#fffcef] shadow-sm'}`} />

      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-8 lg:px-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={ROUTES.HOME} className="block transition-transform duration-200 hover:scale-105">
              <OptimizedImage 
                src="/images/LaFelicidA_transparente_ALPHA_2x.png"
                alt="LA FELICIDÁ" 
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex flex-1 justify-center max-w-4xl ml-12">
            <nav className="flex items-center justify-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-6 py-2.5 text-[15px] font-medium transition-all duration-300 rounded-full hover:bg-amber-50
                    ${location.pathname === item.href 
                      ? 'text-amber-600' 
                      : 'text-[#5C3B28] hover:text-amber-600'
                    }`}
                >
                  <span className="flex items-center">
                    {item.name}
                  </span>
                  {location.pathname === item.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-3 right-3 -bottom-1 h-0.5 bg-amber-600"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navegación Móvil: solo los 3 principales centrados */}
          <div className="flex md:hidden flex-1 justify-center space-x-5">
            {mainLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[15px] font-medium transition-all duration-300 
                  ${location.pathname === item.href
                    ? 'text-[#FFD65A]'
                    : 'text-[#5C3B28] hover:text-[#FFD65A]'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botones: carrito + hamburguesa */}
          <div className="flex items-center space-x-4">
            {/* Carrito */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-12 h-12 text-[#5C3B28] hover:text-amber-600 transition-all duration-300 hover:scale-110"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <AnimatePresence>
                    {cart.items.length > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1 }}
                        className="absolute -top-2 -right-2"
                      >
                        <Badge 
                          variant="default" 
                          className="px-2 py-1 rounded-full bg-amber-500 hover:bg-amber-600 text-[11px] font-semibold whitespace-nowrap"
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
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[90vw] sm:w-[540px] bg-[#fffcef] text-[#5C3B28] shadow-xl border-l border-amber-200">
                <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* Botón Hamburguesa con enlaces extra */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden w-10 h-10 bg-transparent text-[#5C3B28] hover:text-[#FFD65A] transition-colors border-none"
                  onClick={() => setIsMenuOpen((s) => !s)}
>
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </SheetTrigger>

              <SheetContent side="right" className="w-[80vw] sm:w-[380px] bg-[#fffcef] text-[#5C3B28] shadow-xl border-l border-amber-200">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col mt-10"
                >
                 <div className="flex justify-center mb-6">
  <img
    src="/images/LaFelicidA_transparente_ALPHA_2x.png"
    alt="Logo La FelicidA"
    className="h-24 w-auto"
  />
</div>
{extraLinks.map((item, index) => (
  <motion.div
    key={item.name}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.05 * index }}
  >

                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center py-3 px-6 mx-4 mb-1 rounded-xl 
                          text-[15px] font-medium transition-all duration-300
                          ${location.pathname === item.href
                            ? 'bg-[#FFD65A]/70 text-[#5C3B28]'
                            : 'text-[#5C3B28] hover:bg-[#FFD65A]/30'
                          }`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      to="/nosotros"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center py-3 px-6 mx-4 mb-1 rounded-xl 
                        text-[15px] font-medium transition-all duration-300
                        ${location.pathname === '/nosotros'
                          ? 'bg-[#FFD65A]/70 text-[#5C3B28]'
                          : 'text-[#5C3B28] hover:bg-[#FFD65A]/30'
                        }`}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Sobre Nosotros
                    </Link>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
