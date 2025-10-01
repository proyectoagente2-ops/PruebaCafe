'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store';
import CartSidebar from './CartSidebar';
import { motion, AnimatePresence, usePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  
  // Memoize total items calculation
  const totalItems = useMemo(() => items.length, [items]);
  
  // Memoize handlers
  const handleCartOpen = useCallback(() => setIsCartOpen(true), []);
  const handleCartClose = useCallback(() => setIsCartOpen(false), []);
  const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);
  
  // Memoize navigation array
  const navigation = useMemo(() => [
    { name: 'Inicio', href: '#home' },
    { name: 'Café', href: '/cafe' },
    { name: 'Turismo', href: '#tourism' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ], []); // Empty dependency array since navigation is static

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        layout="position"
        layoutId="header"
        className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <motion.a
                href="#home"
                className="text-3xl font-playfair font-bold text-amber-900 tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LA FELICIDÁ
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex space-x-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>

            {/* Cart and Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {/* Cart Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCartOpen(true)}
                  className="relative border-amber-200 text-amber-800 hover:bg-amber-50"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    layout
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </motion.div>
                  <AnimatePresence mode="wait">
                    {totalItems > 0 && (
                      <motion.div
                        key="cart-badge"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        className="absolute -top-2 -right-2"
                        layout
                      >
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-600 text-white text-xs">
                          {totalItems}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    layout
                  >
                    <Button variant="outline" size="sm" className="md:hidden border-amber-200 text-amber-800">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-amber-50 to-white">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delayChildren: 0.2,
                      staggerChildren: 0.1
                    }}
                    className="flex flex-col space-y-4 mt-8"
                  >
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={handleMenuClose}
                        className="text-amber-800 hover:text-amber-600 font-medium text-lg transition-colors duration-200"
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        layout
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </motion.div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
