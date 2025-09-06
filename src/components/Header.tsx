'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store';
import CartSidebar from './CartSidebar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Inicio', href: '#home' },
    { name: 'Productos', href: '#products' },
    { name: 'Turismo', href: '#tourism' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
            <header className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="text-3xl font-playfair font-bold text-amber-900 tracking-wide">
                CAFÉ FELICIDAD
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative border-amber-200 text-amber-800 hover:bg-amber-50"
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-600 text-white text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden border-amber-200 text-amber-800">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-amber-50 to-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-amber-800 hover:text-amber-600 font-medium text-lg transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}