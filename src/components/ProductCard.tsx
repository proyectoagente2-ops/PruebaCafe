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
  const cardClasses = `overflow-hidden h-full flex flex-col bg-white rounded-xl border border-gray-100 transition-all duration-300 ${isHovered ? 'shadow-xl border-[#D97706]/20' : 'shadow-md hover:shadow-lg'}`;
  const imageOverlayClasses = `absolute inset-0 transition-all duration-300 ${isHovered ? 'bg-gradient-to-t from-black/20 to-transparent' : 'bg-gradient-to-t from-black/10 to-transparent'}`;
  const imageClasses = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";

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
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
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
          {product.isSpecialEdition && (
            <div className="absolute top-3 right-3 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Especial
            </div>
          )}
        </div>
        <CardContent className="p-5 flex flex-col flex-grow">
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#D97706] transition-colors duration-300">
            {name || 'Producto'}
          </h3>
          <p className="text-xl font-bold mb-4 text-[#D97706]">
            {formatPrice(price)}
          </p>
          <Button 
            className="w-full bg-[#D97706] text-white hover:bg-[#C2410C] border-0 transition-all duration-300 font-semibold text-sm py-2.5 shadow-md hover:shadow-lg mt-auto"
            type="button"
          >
            Ver detalles
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}