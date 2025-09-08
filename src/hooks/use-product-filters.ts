import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/types';

interface ProductFilters {
  searchQuery: string;
  category: 'all' | 'coffee' | 'experience';
  roastLevel: string;
  priceRange: [number, number];
  origin: string;
  sortBy: 'price-asc' | 'price-desc' | 'name' | 'newest';
  inStock: boolean;
}

interface ProductFiltersStore extends ProductFilters {
  setSearchQuery: (query: string) => void;
  setCategory: (category: ProductFilters['category']) => void;
  setRoastLevel: (level: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setOrigin: (origin: string) => void;
  setSortBy: (sort: ProductFilters['sortBy']) => void;
  setInStock: (inStock: boolean) => void;
  resetFilters: () => void;
}

const initialFilters: ProductFilters = {
  searchQuery: '',
  category: 'all',
  roastLevel: 'all',
  priceRange: [0, 200000],
  origin: 'all',
  sortBy: 'newest',
  inStock: false,
};

export const useProductFilters = create<ProductFiltersStore>()(
  persist(
    (set) => ({
      ...initialFilters,
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      setCategory: (category) => set({ category }),
      setRoastLevel: (roastLevel) => set({ roastLevel }),
      setPriceRange: (priceRange) => set({ priceRange }),
      setOrigin: (origin) => set({ origin }),
      setSortBy: (sortBy) => set({ sortBy }),
      setInStock: (inStock) => set({ inStock }),
      resetFilters: () => set(initialFilters),
    }),
    {
      name: 'product-filters',
    }
  )
);

export const filterProducts = (products: Product[], filters: ProductFilters) => {
  return products.filter((product) => {
    // Filtro de búsqueda
    const matchesSearch = 
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    // Filtro de categoría
    const matchesCategory = 
      filters.category === 'all' || product.category === filters.category;

    // Filtro de nivel de tostado (solo para cafés)
    const matchesRoastLevel =
      filters.roastLevel === 'all' ||
      (product.category === 'coffee' && product.roastLevel === filters.roastLevel);

    // Filtro de precio
    const matchesPrice = 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1];

    // Filtro de origen
    const matchesOrigin =
      filters.origin === 'all' ||
      (product.origin && product.origin.includes(filters.origin));

    // Filtro de stock
    const matchesStock = !filters.inStock || product.inStock;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesRoastLevel &&
      matchesPrice &&
      matchesOrigin &&
      matchesStock
    );
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'newest':
        return -1; // Asumiendo que los más nuevos están al principio del array
      default:
        return 0;
    }
  });
};
