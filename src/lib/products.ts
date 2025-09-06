import { Product } from './types';

export const coffeeProducts: Product[] = [
  {
    id: '1',
    name: 'Café Arábica Premium',
    description: 'Nuestro café insignia, cultivado en las montañas de Pueblo Bello. Notas dulces y aroma floral.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Chocolate', 'Caramelo', 'Frutas rojas'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Lavado',
    altitude: '1,800 msnm'
  },
  {
    id: '2',
    name: 'Blend Especial Felicidad',
    description: 'Mezcla única de nuestros mejores granos, tostado artesanalmente para una experiencia perfecta.',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Nuez', 'Miel', 'Cítricos'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Lavado',
    altitude: '1,700 msnm'
  },
  {
    id: '3',
    name: 'Café de Origen Pueblo Bello',
    description: 'Café de origen único, cultivado en nuestra finca familiar. Resalta por su dulzura y complejidad.',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'light-medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Vainilla', 'Almendras', 'Manzana roja'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Honey',
    altitude: '1,850 msnm'
  },
  {
    id: '4',
    name: 'Café Honey Premium',
    description: 'Procesado con el método honey, desarrollando notas dulces y afrutadas únicas.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'light',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Miel', 'Frutas tropicales', 'Flores'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Honey',
    altitude: '1,900 msnm'
  },
  {
    id: '5',
    name: 'Café Natural Reserva Especial',
    description: 'Proceso natural que realza los sabores frutales y el cuerpo del café.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'medium-dark',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Frutos rojos', 'Chocolate negro', 'Dátiles'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Natural',
    altitude: '1,750 msnm'
  },
  {
    id: '6',
    name: 'Café Descafeinado Premium',
    description: 'Nuestro blend especial en versión descafeinada, perfecto para cualquier momento del día.',
    price: 27000,
    image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Caramelo', 'Nueces', 'Chocolate con leche'],
    inStock: true,
    weight: '500g',
    processingMethod: 'Lavado',
    altitude: '1,800 msnm'
  },
  {
    id: '7',
    name: 'Edición Limitada Geisha',
    description: 'Variedad exclusiva con notas florales y cítricas extraordinarias.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'light',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Jazmín', 'Bergamota', 'Melocotón'],
    inStock: true,
    weight: '250g',
    processingMethod: 'Lavado',
    altitude: '1,950 msnm'
  },
  {
    id: '8',
    name: 'Pack Degustación',
    description: 'Selección de nuestros 4 mejores cafés en presentación de 125g cada uno.',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'varied',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Variados', 'Experiencia completa'],
    inStock: true,
    weight: '500g (4x125g)',
    processingMethod: 'Varios',
    altitude: '1,700-1,950 msnm'
  },
  {
    id: '9',
    name: 'Café Orgánico Sostenible',
    description: 'Cultivado a 1800 metros sobre el nivel del mar, 100% orgánico y sostenible.',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'light',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Floral', 'Té verde', 'Limón'],
    inStock: true
  },
  {
    id: '10',
    name: 'Tueste Francés Intenso',
    description: 'Para los amantes del café fuerte. Tueste oscuro con cuerpo robusto y sabor intenso.',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1501747315-124a0eaca060?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'dark',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Chocolate amargo', 'Ahumado', 'Especias'],
    inStock: true
  },
  {
    id: '11',
    name: 'Café Descafeinado Natural',
    description: 'Proceso natural de descafeinado que conserva todo el sabor sin la cafeína.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'medium',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Vainilla', 'Almendra', 'Dulce'],
    inStock: true
  },
  {
    id: '12',
    name: 'Edición Limitada Geisha',
    description: 'Variedad exclusiva Geisha, considerada una de las mejores del mundo. Producción limitada.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop',
    category: 'coffee',
    roastLevel: 'light',
    origin: 'Pueblo Bello, Cesar',
    notes: ['Jazmín', 'Bergamota', 'Mango'],
    inStock: true
  }
];

export const tourismExperiences: Product[] = [
  {
    id: 'tour-1',
    name: 'Tour de la Finca',
    description: 'Recorrido completo por nuestra finca cafetera. Conoce el proceso desde la semilla hasta la taza.',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    category: 'experience',
    inStock: true
  },
  {
    id: 'tour-2',
    name: 'Taller de Barismo',
    description: 'Aprende las técnicas profesionales para preparar el café perfecto con nuestros expertos.',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'experience',
    inStock: true
  },
  {
    id: 'tour-3',
    name: 'Cena en la Finca',
    description: 'Experiencia gastronómica única con ingredientes locales y café de especialidad.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
    category: 'experience',
    inStock: true
  },
  {
    id: 'tour-4',
    name: 'Hospedaje Rural',
    description: 'Vive la experiencia completa con una noche en nuestra acogedora casa rural.',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
    category: 'experience',
    inStock: true
  }
];

export const allProducts = [...coffeeProducts, ...tourismExperiences];