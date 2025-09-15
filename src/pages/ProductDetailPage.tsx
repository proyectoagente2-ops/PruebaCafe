'use client';

import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { coffeeProducts } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Link } from 'react-router-dom';
import CrossSelling from '@/components/CrossSelling';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = coffeeProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Producto no encontrado</h1>
          <Link to="/cafe" className="text-amber-600 hover:text-amber-700">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa el café ${product.name}. ¿Podría darme más información?`
    );
    window.open(`https://wa.me/+573113678555?text=${message}`, '_blank');
  };

  // Encontrar productos relacionados (excluyendo el actual)
  const relatedProducts = coffeeProducts
    .filter(p => p.id !== product.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/cafe" 
            className="inline-flex items-center text-sm text-[#B8633B] hover:text-[#662416] transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a la tienda
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image */}
          <div>
            <div className="aspect-[1/1.2] bg-gradient-to-br from-[#f8f4f1] to-[#fff8f3] rounded-lg overflow-hidden shadow-lg shadow-amber-100/20 group transition-all duration-500 hover:shadow-xl hover:shadow-amber-100/30">
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B8633B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain px-16 py-8 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div>
              <h1 className="text-[32px] font-medium text-gray-900 mb-4 relative">
                <span className="relative inline-block">
                  {product.name}
                  <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-[#B8633B]/20 rounded-full"></span>
                </span>
              </h1>
              <p className="text-2xl font-medium text-[#B8633B] mb-6 transition-colors duration-300 hover:text-[#662416]">{formatPrice(product.price)}</p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">{product.description}</p>
              
              {/* Detalles */}
              <div className="space-y-8 mb-12">
                <div className="grid grid-cols-2 gap-16">
                  <div className="group">
                    <p className="text-[#B8633B] font-medium mb-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#B8633B] group-hover:scale-150 transition-transform duration-300"></span>
                      Presentación
                    </p>
                    <p className="text-gray-700 group-hover:text-[#B8633B] transition-colors duration-300">{product.weight}</p>
                  </div>
                  <div className="group">
                    <p className="text-[#B8633B] font-medium mb-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#B8633B] group-hover:scale-150 transition-transform duration-300"></span>
                      Origen
                    </p>
                    <p className="text-gray-700 group-hover:text-[#B8633B] transition-colors duration-300">{product.origin}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[#B8633B] font-medium mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#B8633B]"></span>
                    Notas de cata
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note) => (
                      <span 
                        key={note} 
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-[#B8633B] bg-gradient-to-r from-amber-50 to-white border border-[#B8633B]/20 hover:from-amber-100/50 hover:to-amber-50 transition-all duration-300 hover:scale-105 hover:border-[#B8633B]/30 cursor-default"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <p className="text-[#B8633B] font-medium mb-1 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#B8633B] group-hover:scale-150 transition-transform duration-300"></span>
                    Proceso
                  </p>
                  <p className="text-gray-700 group-hover:text-[#B8633B] transition-colors duration-300">{product.processingMethod}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-[#662416] to-[#8B3114] hover:from-[#4D1B10] hover:to-[#662416] text-white h-[52px] rounded text-base relative overflow-hidden transition-all duration-300 shadow-lg shadow-[#662416]/10 hover:shadow-xl hover:shadow-[#662416]/20 hover:scale-[1.02]" 
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  <span className="relative z-10">Agregar al carrito</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-[#B8633B]/20 text-[#662416] hover:border-[#B8633B]/40 h-[52px] rounded text-base relative overflow-hidden group hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-transparent transition-all duration-300 hover:scale-[1.02]"
                  onClick={handleWhatsAppClick}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                    Comprar por WhatsApp
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Selling Section */}
        <CrossSelling currentProduct={product} currentType="coffee" />
      </div>
    </div>
  );
}