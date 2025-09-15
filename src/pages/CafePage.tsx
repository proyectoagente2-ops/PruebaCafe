'use client';

import React from 'react';
import { coffeeProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function CafePage() {

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/coffee-beans-bg.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 tracking-tight text-gray-900">
            Nuestros cafés de origen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Tres ediciones especiales cultivadas con dedicación en las alturas de Pueblo Bello, Cesar
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}