/**
 * Configuración de términos que no deben ser traducidos
 */
export const NON_TRANSLATABLE_TERMS = {
  brandNames: [
    'La Felicidá',
    'Finca Experiencial',
  ],
  locations: [
    'Sierra Nevada',
    'Sierra Nevada de Santa Marta',
    'Pueblo Bello',
    'Cesar',
    'Colombia',
  ],
  culturalTerms: [
    'Mamos',
  ],
  products: {
    coffee: [
      'Café Tradicional',
      'Café Premium',
      'Café Especial',
    ],
    backpacks: [
      'Mochila Tradicional',
      'Mochila Especial',
    ],
  },
  // Función helper para verificar si un término está en la lista de no traducibles
  isNonTranslatable: (text: string): boolean => {
    const allTerms = [
      ...NON_TRANSLATABLE_TERMS.brandNames,
      ...NON_TRANSLATABLE_TERMS.locations,
      ...NON_TRANSLATABLE_TERMS.culturalTerms,
      ...NON_TRANSLATABLE_TERMS.products.coffee,
      ...NON_TRANSLATABLE_TERMS.products.backpacks,
    ];

    return allTerms.some(term => text.includes(term));
  }
} as const;