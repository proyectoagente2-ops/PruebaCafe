import { Product } from './types';

export const tourismExperiences: Product[] = [
  {
    id: 'exp-1',
    name: 'Tour de la Finca + Degustación',
    description: 'Conoce nuestro proceso de cultivo y producción, seguido de una degustación de nuestros mejores cafés.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
    category: 'experience',
    duration: '3 horas',
    included: ['Recorrido guiado', 'Degustación de café', 'Snacks locales'],
    location: 'Finca La Felicidá',
    capacity: '10 personas',
    inStock: true
  },
  {
    id: 'exp-2',
    name: 'Experiencia de Conexión y Bienestar',
    description: 'Una jornada de conexión espiritual y bienestar en nuestro entorno natural.',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
    category: 'experience',
    duration: '6 horas',
    included: ['Charla espiritual', 'Almuerzo orgánico', 'Ritual de sanación'],
    location: 'Finca La Felicidá',
    capacity: '8 personas',
    inStock: true
  }
];