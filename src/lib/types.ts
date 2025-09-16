import type { JSX } from 'react';

export interface Product {
  capacity: string;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'experience';
  roastLevel?: 'light' | 'light-medium' | 'medium' | 'medium-dark' | 'dark' | 'varied';
  origin?: string;
  notes?: string[];
  inStock: boolean;
  weight?: string;
  processingMethod?: 'Lavado' | 'Honey' | 'Natural' | 'Varios';
  altitude?: string;
  // Campos adicionales para experiencias
  duration?: string;
  included?: string[];
  location?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  secondaryImage?: string;
  images?: string[];
  icon?: JSX.Element;
  cta?: string;
  highlights?: string[];
  features?: {
    duration?: string;
    groupSize?: string;
    difficulty?: string;
    location?: string;
  };
  included?: string[];
  price?: {
    from: number;
    to?: number;
    perPerson?: boolean;
  };
}