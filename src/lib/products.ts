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
    type: 'product',
    inStock: true
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
    type: 'product',
    inStock: true
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
    type: 'product',
    inStock: true
  }
];

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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
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
    altitude: '1,800 msnm',
    isSpecialEdition: true,
    type: 'product'
  }
];

export const backpackProducts: Product[] = [
  {
    id: 'bp1',
    name: 'Mochila Aventurera',
    description: 'Perfecta para tus aventuras al aire libre, con compartimentos especializados y resistente al agua.',
    price: 180000,
    image: '/images/Mochilas/mochila1.jpg',
    category: 'backpack',
    material: 'Lona resistente al agua',
    capacity: '30L',
    recommendedUse: 'Senderismo y camping',
    dimensions: '50cm x 35cm x 20cm',
    waterproof: true,
    color: 'Verde militar',
    inStock: true,
    weight: '1.2kg',
    type: 'product'
  },
  {
    id: 'bp2',
    name: 'Mochila Urbana',
    description: 'Diseño moderno y funcional para tu día a día en la ciudad, con compartimento para laptop.',
    price: 150000,
    image: '/images/Mochilas/mochila2.jpg',
    category: 'backpack',
    material: 'Poliéster de alta densidad',
    capacity: '20L',
    recommendedUse: 'Uso diario y trabajo',
    dimensions: '45cm x 30cm x 15cm',
    waterproof: false,
    color: 'Negro',
    inStock: true,
    weight: '0.8kg',
    type: 'product'
  },
  {
    id: 'bp3',
    name: 'Mochila Viajera',
    description: 'Espaciosa y versátil, ideal para viajes largos con múltiples compartimentos organizadores.',
    price: 220000,
    image: '/images/Mochilas/mochila3.jpg',
    category: 'backpack',
    material: 'Nylon balístico',
    capacity: '40L',
    recommendedUse: 'Viajes y excursiones',
    dimensions: '55cm x 40cm x 25cm',
    waterproof: true,
    color: 'Azul marino',
    inStock: true,
    weight: '1.5kg',
    type: 'product'
  }
];

export const allProducts: Product[] = [...coffeeProducts, ...backpackProducts, ...mochilaProducts];