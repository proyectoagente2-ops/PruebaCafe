import { Product } from './types';

export const mochilaProducts: Product[] = [
  {
    id: 'mochila-tradicional-1',
    name: 'Mochila Tradicional',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILAAZUL.png',
    price: 150000,
    category: 'backpack',
    material: 'Lana natural',
    capacity: 'Mediana',
    recommendedUse: 'Uso diario',
    dimensions: '45cm x 30cm x 15cm',
    waterproof: false,
    color: 'Azul',
    type: 'product',
    inStock: true,
    weight: '0.8kg'
  },
  {
    id: 'mochila-especial-1',
    name: 'Mochila Especial',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAVERDE.png',
    price: 180000,
    category: 'backpack',
    material: 'Lana premium',
    capacity: 'Grande',
    recommendedUse: 'Ocasiones especiales',
    dimensions: '50cm x 35cm x 20cm',
    waterproof: true,
    color: 'Verde',
    type: 'product',
    inStock: true,
    weight: '1kg'
  },
  {
    id: 'mochila-moderna-1',
    name: 'Mochila Moderna',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJA.png',
    price: 165000,
    category: 'backpack',
    material: 'Lana mixta',
    capacity: 'Personalizada',
    recommendedUse: 'Uso versátil',
    dimensions: '48cm x 33cm x 18cm',
    waterproof: true,
    color: 'Rojo',
    type: 'product',
    inStock: true,
    weight: '0.9kg'
  }
];

export const coffeeProducts: Product[] = [
  {
    id: 'cafe-ayu-especial',
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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
  },
  {
    id: 'cafe-lavado-especial',
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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
  },
  {
    id: 'cafe-tradicional-especial',
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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
  }
];

export const allProducts: Product[] = [...coffeeProducts, ...mochilaProducts];