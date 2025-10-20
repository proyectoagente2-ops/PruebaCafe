'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  isHovered?: boolean;
}

export default function ProductCard({ product, isHovered = false }: ProductCardProps) {
  if (!product) {
    console.error('ProductCard received null or undefined product');
    return null;
  }

  if (typeof product !== 'object') {
    console.error('ProductCard received non-object product:', product);
    return null;
  }

  const { id, category, name, image, price } = product;

  // Validar que cada propiedad sea del tipo correcto
  if (
    typeof id !== 'string' ||
    typeof category !== 'string' ||
    typeof name !== 'string' ||
    typeof image !== 'string' ||
    typeof price !== 'number'
  ) {
    console.error('ProductCard properties have invalid types:', { id, category, name, image, price });
    return null;
  }

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(p);
  };

  const productPath = `/${category === 'coffee' ? 'cafe' : 'mochilas'}/${id}`;
  const cardClasses = `overflow-hidden h-full flex flex-col bg-white border-0 shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow-sm'}`;
  const imageOverlayClasses = `absolute inset-0 transition-colors duration-300 ${isHovered ? 'bg-black/0' : 'bg-black/5'}`;
  const imageClasses = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";

  return (
    <Link 
      to={productPath}
      className="block group"
      onClick={(e) => {
        e.preventDefault();
        console.log('Navigating to product:', { id, category, name });
        window.location.href = productPath;
      }}>
      <Card className={cardClasses}>
        <div className="relative aspect-square overflow-hidden bg-[#f8f8f8]">
          <div className={imageOverlayClasses} />
          <img
            src={image}
            alt={name}
            onError={(e) => {
              console.error('Image failed to load:', image);
              e.currentTarget.src = '/images/placeholder.jpg';
            }}
            className={imageClasses}
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight group-hover:text-amber-800 transition-colors duration-300">
            {name || 'Producto'}
          </h3>
          <p className="text-lg font-semibold mb-4 tracking-tight text-amber-700">
            {formatPrice(price)}
          </p>
          <Button 
            className="w-full bg-transparent border-amber-800/20 text-amber-900 hover:bg-[#7b2e2e] hover:text-white hover:border-[#7b2e2e] transition-all duration-300"
            variant="outline"
            type="button"
          >
            Ver detalles
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}