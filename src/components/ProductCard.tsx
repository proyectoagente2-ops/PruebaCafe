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

  const { id, category, name, image, price } = product;

  if (!id || !category || !name || !image) {
    console.error('ProductCard missing required properties:', { id, category, name, image });
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link 
      to={`/${category === 'coffee' ? 'cafe' : 'mochilas'}/${id}`}
      className="block group"
      onClick={(e) => {
        e.preventDefault();
        console.log('Navigating to product:', { id, category, name });
        window.location.href = `/${category === 'coffee' ? 'cafe' : 'mochilas'}/${id}`;
      }}>
      <Card className={`overflow-hidden h-full flex flex-col bg-white border-0 shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="relative aspect-square overflow-hidden bg-[#f8f8f8]">
          <div className={`absolute inset-0 transition-colors duration-300 ${isHovered ? 'bg-black/0' : 'bg-black/5'}`} />
          <img
            src={image}
            alt={name}
            onError={(e) => {
              console.error('Image failed to load:', image);
              e.currentTarget.src = '/images/placeholder.jpg';
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight group-hover:text-amber-800 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-lg font-semibold mb-4 tracking-tight text-amber-700">
            {formatPrice(product.price)}
          </p>
          <Button 
            className="w-full bg-transparent border-amber-800/20 text-amber-900 hover:bg-[#7b2e2e] hover:text-white hover:border-[#7b2e2e] transition-all duration-300"
            variant="outline"
          >
            Ver detalles
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}