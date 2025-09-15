'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Coffee, Map, Backpack } from 'lucide-react';
import { Product } from '@/lib/types';
import { coffeeProducts } from '@/lib/products';

interface CrossSellingProps {
  currentProduct: Product;
  currentType: 'coffee' | 'experience' | 'backpack';
}

const CrossSelling = ({ currentProduct, currentType }: CrossSellingProps) => {
  const getRecommendations = () => {
    switch (currentType) {
      case 'coffee':
        return {
          title: '¿Te gustaría conocer donde nace este café?',
          description: 'Reserva una experiencia en nuestra finca y descubre el proceso completo.',
          primary: {
            icon: <Map className="w-5 h-5 mr-2" />,
            text: 'Explorar experiencias',
            link: '/turismo',
          },
          secondary: {
            icon: <Backpack className="w-5 h-5 mr-2" />,
            text: 'Ver mochilas artesanales',
            link: '/mochilas',
          }
        };
      case 'experience':
        return {
          title: '¿Quieres llevar un recuerdo?',
          description: 'Lleva contigo el sabor de nuestro café especial.',
          primary: {
            icon: <Coffee className="w-5 h-5 mr-2" />,
            text: 'Explorar cafés',
            link: '/cafe',
          },
          secondary: {
            icon: <Backpack className="w-5 h-5 mr-2" />,
            text: 'Ver mochilas artesanales',
            link: '/mochilas',
          }
        };
      case 'backpack':
        return {
          title: '¿La perfecta compañía para tu mochila?',
          description: 'Lleva nuestro café contigo a donde vayas.',
          primary: {
            icon: <Coffee className="w-5 h-5 mr-2" />,
            text: 'Explorar cafés',
            link: '/cafe',
          },
          secondary: {
            icon: <Map className="w-5 h-5 mr-2" />,
            text: 'Conoce nuestra finca',
            link: '/turismo',
          }
        };
    }
  };

  const recommendations = getRecommendations();

  // Obtener productos relacionados excluyendo el actual
  const relatedProducts = coffeeProducts
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 2);

  return (
    <div className="mt-32 border-t border-gray-200">
      <div className="pt-16">
        {/* Recomendaciones Contextuales */}
        <div className="bg-[#FBF7F4] rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-3">
            {recommendations?.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {recommendations?.description}
          </p>
          <div className="flex gap-4">
            <Button 
              variant="default"
              className="bg-[#662416] hover:bg-[#4D1B10] text-white h-[52px] rounded text-base flex-1"
              asChild
            >
              <Link to={recommendations?.primary.link}>
                {recommendations?.primary.icon}
                {recommendations?.primary.text}
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-[#B8633B]/20 text-[#662416] hover:bg-[#B8633B]/5 h-[52px] rounded text-base flex-1"
              asChild
            >
              <Link to={recommendations?.secondary.link}>
                {recommendations?.secondary.icon}
                {recommendations?.secondary.text}
              </Link>
            </Button>
          </div>
        </div>

        {/* Productos Relacionados */}
        {currentType === 'coffee' && relatedProducts.length > 0 && (
          <>
            <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-8">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map(product => (
                <Link 
                  key={product.id} 
                  to={`/cafe/${product.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:border-amber-100">
                    <div className="aspect-[4/3] relative overflow-hidden bg-[#f8f8f8]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-102"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-medium text-gray-900 mb-1 group-hover:text-amber-800 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-base font-medium text-[#B8633B]">
                        {new Intl.NumberFormat('es-CO', {
                          style: 'currency',
                          currency: 'COP',
                          minimumFractionDigits: 0,
                        }).format(product.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CrossSelling;