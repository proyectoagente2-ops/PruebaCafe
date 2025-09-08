'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { coffeeProducts, tourismExperiences } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import { Search, Coffee, MapPin, Grid, List } from 'lucide-react';

export default function ProductsPage() {
  // Estados para los filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'experience'>('all');
  const [selectedRoastLevel, setSelectedRoastLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Combinar todos los productos
  const allProducts = [...coffeeProducts, ...tourismExperiences];

  // Filtrar productos basado en los criterios
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Filtro de búsqueda
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro de categoría
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // Filtro de nivel de tostado (solo para cafés)
      const matchesRoastLevel = selectedRoastLevel === 'all' ||
        (product.category === 'coffee' && product.roastLevel === selectedRoastLevel);

      // Filtro de precio
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      // Filtro de stock
      const matchesStock = !showInStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesRoastLevel && matchesPrice && matchesStock;
    });
  }, [searchQuery, selectedCategory, selectedRoastLevel, priceRange, showInStockOnly]);

  // Función para formatear precio
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-amber-800 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nuestros Productos</h1>
          <p className="text-xl text-amber-100">
            Descubre nuestra selección de cafés especiales y experiencias únicas
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Buscador */}
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Filtro de Categoría */}
            <Select
              value={selectedCategory}
              onValueChange={(value: 'all' | 'coffee' | 'experience') => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="coffee">Café</SelectItem>
                <SelectItem value="experience">Experiencias</SelectItem>
              </SelectContent>
            </Select>

            {/* Filtro de Nivel de Tostado */}
            {selectedCategory !== 'experience' && (
              <Select
                value={selectedRoastLevel}
                onValueChange={setSelectedRoastLevel}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Nivel de tostado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los niveles</SelectItem>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Botones de Vista */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Filtros adicionales */}
          <div className="mt-4 flex flex-col md:flex-row gap-6 items-center">
            {/* Rango de Precio */}
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2">Rango de precio:</p>
              <div className="flex items-center gap-4">
                <span className="text-sm">{formatPrice(priceRange[0])}</span>
                <Slider
                  value={[priceRange[0], priceRange[1]]}
                  min={0}
                  max={200000}
                  step={1000}
                  className="flex-1"
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                />
                <span className="text-sm">{formatPrice(priceRange[1])}</span>
              </div>
            </div>

            {/* Filtro de Stock */}
            <Button
              variant={showInStockOnly ? 'default' : 'outline'}
              onClick={() => setShowInStockOnly(!showInStockOnly)}
              className="whitespace-nowrap"
            >
              {showInStockOnly ? 'Mostrar todo' : 'Solo en stock'}
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No se encontraron productos que coincidan con los filtros seleccionados.</p>
            </div>
          ) : (
            <div className={`grid ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                : 'grid-cols-1 gap-4'
            }`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={viewMode === 'list' ? 'flex gap-4 bg-white rounded-lg shadow-sm p-4' : ''}>
                  {viewMode === 'list' ? (
                    <>
                      <div className="w-48 h-48 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
                        <p className="text-amber-600 mt-2">{product.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-2xl font-bold text-amber-900">
                            {formatPrice(product.price)}
                          </span>
                          <Button 
                            variant="default" 
                            className="bg-amber-600 hover:bg-amber-700"
                          >
                            Agregar al carrito
                          </Button>
                        </div>
                        <div className="mt-4 flex gap-2">
                          {product.category === 'coffee' && (
                            <>
                              <Badge variant="secondary">
                                {product.roastLevel}
                              </Badge>
                              <Badge variant="outline">
                                {product.origin}
                              </Badge>
                            </>
                          )}
                          <Badge variant={product.inStock ? 'default' : 'destructive'}>
                            {product.inStock ? 'En stock' : 'Agotado'}
                          </Badge>
                        </div>
                      </div>
                    </>
                  ) : (
                    <ProductCard product={product} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
