'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, MapPin, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/store';
import { ExperienceReservationDialog } from './ExperienceReservationDialog';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getRoastLevelColor = (level?: string) => {
    switch (level) {
      case 'light': return 'bg-amber-200 text-amber-800';
      case 'light-medium': return 'bg-amber-300 text-amber-800';
      case 'medium': return 'bg-amber-400 text-amber-900';
      case 'medium-dark': return 'bg-amber-600 text-white';
      case 'dark': return 'bg-amber-800 text-white';
      case 'varied': return 'bg-gradient-to-r from-amber-200 to-amber-600 text-white';
      default: return 'bg-green-200 text-green-800';
    }
  };

  const getRoastLevelText = (level?: string) => {
    switch (level) {
      case 'light': return 'Suave';
      case 'light-medium': return 'Medio Suave';
      case 'medium': return 'Medio';
      case 'medium-dark': return 'Medio Intenso';
      case 'dark': return 'Intenso';
      case 'varied': return 'Variado';
      default: return level;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b from-white to-amber-50/50 border-amber-100">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.roastLevel && (
              <Badge className={`${getRoastLevelColor(product.roastLevel)} font-medium`}>
                {getRoastLevelText(product.roastLevel)}
              </Badge>
            )}
            {product.processingMethod && (
              <Badge className="bg-amber-100 text-amber-800 font-medium">
                {product.processingMethod}
              </Badge>
            )}
            {product.category === 'experience' && (
              <Badge className="bg-green-200 text-green-800 font-medium">
                Experiencia
              </Badge>
            )}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Agotado</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
        <p className="text-amber-700 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="space-y-2">
          {product.origin && (
            <div className="flex items-center text-amber-600 text-sm">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              {product.origin}
            </div>
          )}
          {product.altitude && (
            <div className="flex items-center text-amber-600 text-sm">
              <Star className="h-4 w-4 mr-1 flex-shrink-0" />
              Altura: {product.altitude}
            </div>
          )}
          {product.weight && (
            <div className="flex items-center text-amber-600 text-sm">
              <ShoppingCart className="h-4 w-4 mr-1 flex-shrink-0" />
              Presentación: {product.weight}
            </div>
          )}
        </div>

        {product.notes && product.notes.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.notes.map((note) => (
              <Badge key={note} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                {note}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-2xl font-bold text-amber-900">
              {formatPrice(product.price)}
            </div>
            <div className="text-xs text-amber-600">Incluye envío</div>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {product.category === 'coffee' ? (
          <Button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium transition-all duration-200"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al Carrito
          </Button>
        ) : (
          <ExperienceReservationDialog>
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium transition-all duration-200"
            >
              📅 Reservar Experiencia
            </Button>
          </ExperienceReservationDialog>
        )}
      </CardFooter>
    </Card>
  );
}