import { Product } from './types';

export const coffeeProducts: Product[] = [
  {
    id: '1',
    name: 'Café con Ayu (Edición especial)',
    description: 'Café especial con fermentación única que produce un aroma envolvente.',
    price: 25000,
    image: '/images/CAFÉS/Café con Ayu (Edición especial).jpg',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Aroma envolvente', 'Fermentación especial'],
    inStock: true,
    weight: '250g',
    capacity: '250g',
    processingMethod: 'Varios',  // Cambiado a 'Varios' ya que es una fermentación especial
    altitude: '1,800 msnm'
  },
  {
    id: '2',
    name: 'Café Lavado (Edición especial)',
    description: 'Perfil limpio y equilibrado que ofrece una claridad excepcional en taza.',
    price: 25000,
    image: '/images/CAFÉS/Café Lavado (Edición especial).jpg',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Perfil limpio', 'Equilibrado', 'Claridad en taza'],
    inStock: true,
    weight: '250g',
    capacity: '250g',
    processingMethod: 'Lavado',
    altitude: '1,800 msnm'
  },
  {
    id: '3',
    name: 'Café Tradicional (Edición especial)',
    description: 'Nuestro café clásico y balanceado, perfecto para el día a día.',
    price: 25000,
    image: '/images/CAFÉS/Café Tradicional (Edición especial).jpg',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Clásico', 'Balanceado'],
    inStock: true,
    weight: '250g',
    capacity: '250g',
    processingMethod: 'Natural',  // Este se mantiene como Natural
    altitude: '1,800 msnm'
  }
];

export const allProducts = coffeeProducts;