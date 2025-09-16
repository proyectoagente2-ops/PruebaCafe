import { Calendar, Users, Compass, Heart } from 'lucide-react';
import type { Service } from './types';

export const services = [
  {
    id: 'glamping',
    title: 'Estadía & Glamping',
    description: 'Espacios íntimos para descansar entre cafetales y montañas. Una experiencia única de alojamiento donde el lujo se encuentra con la naturaleza.',
    longDescription: `
      Descubre el equilibrio perfecto entre confort y conexión con la naturaleza en nuestro exclusivo servicio de Glamping. 
      Ubicado estratégicamente en medio de nuestros cafetales y con vistas privilegiadas a la Sierra Nevada, 
      cada unidad de glamping ha sido diseñada para brindarte una experiencia inolvidable.

      Nuestras instalaciones incluyen:
      • Camas king-size con ropa de cama premium
      • Baño privado con amenidades orgánicas
      • Terraza privada con hamaca y área de estar
      • Desayuno gourmet con productos locales
      • Acceso a senderos exclusivos
      • WiFi disponible en áreas comunes

      La experiencia incluye:
      • Welcome drink con nuestro café especial
      • Tour guiado por los cafetales
      • Cena especial bajo las estrellas (opcional)
      • Acceso a todas las actividades de la finca
    `,
    image: '/images/services/Estadía & Glamping.png',
    secondaryImage: '/images/services/Estadía & Glamping.png',
    cta: 'Consultar fechas',
    highlights: [
      'Glamping con vista a la Sierra Nevada',
      'Desayuno con café de la finca',
      'Acceso a senderos privados',
      'Amanecer entre montañas'
    ]
  },
  {
    id: 'day-visits',
    title: 'Visitas de un día',
    description: 'Sumérgete en la experiencia completa del café: desde el cultivo hasta la taza. Aprende sobre nuestro proceso sostenible y la vida en la finca.',
    longDescription: `
      Vive un día completo inmerso en la cultura del café y la vida en nuestra finca. 
      Esta experiencia te permitirá conocer de primera mano todo el proceso del café, 
      desde la siembra hasta la taza, mientras disfrutas de la belleza natural de la Sierra Nevada.

      El tour incluye:
      • Recorrido por los cafetales
      • Explicación del proceso del café
      • Taller de catación
      • Almuerzo típico
      • Observación de aves (opcional)
      • Degustación de nuestros cafés especiales

      Actividades adicionales:
      • Fotografía en la finca
      • Interacción con la comunidad local
      • Compra de productos frescos
    `,
    image: '/images/services/Visitas de un día a la finca.png',
    secondaryImage: '/images/services/Visitas de un día a la finca.png',
    cta: 'Armar mi visita',
    highlights: [
      'Tour del café por los cultivos',
      'Taller de catación',
      'Observación de aves locales',
      'Almuerzo tradicional'
    ]
  },
  {
    id: 'spiritual',
    title: 'Experiencias espirituales',
    description: 'Conecta con la sabiduría ancestral de la Sierra Nevada a través de ceremonias tradicionales y espacios de reflexión guiados por mamos.',
    longDescription: `
      Experimenta un viaje espiritual único guiado por los mamos de la Sierra Nevada, 
      guardianes de la sabiduría ancestral. Estas experiencias están diseñadas para 
      ayudarte a reconectar con tu esencia y con la naturaleza.

      Nuestras experiencias incluyen:
      • Ceremonias tradicionales
      • Meditaciones guiadas
      • Charlas de sabiduría ancestral
      • Rituales de sanación
      • Conexión con la naturaleza
      • Espacios de reflexión

      Cada experiencia es única y se adapta a:
      • Grupos pequeños
      • Retiros espirituales
      • Sesiones individuales
      • Programas personalizados
    `,
    image: '/images/services/Experiencias espirituales.png',
    secondaryImage: '/images/services/Experiencias espirituales.png',
    cta: 'Coordinar experiencia',
    highlights: [
      'Ceremonias tradicionales',
      'Charlas de bienestar',
      'Meditación guiada',
      'Conexión con la naturaleza'
    ]
  },
  {
    id: 'groups',
    title: 'Campamentos / Grupos',
    description: 'Espacios versátiles para grupos, perfectos para retiros, reuniones familiares o actividades educativas en un entorno natural único.',
    longDescription: `
      Nuestros espacios están diseñados para acoger grupos y crear experiencias memorables 
      en medio de la naturaleza. Ya sea para un retiro corporativo, un encuentro familiar 
      o una actividad educativa, ofrecemos la infraestructura y el ambiente perfecto.

      Instalaciones disponibles:
      • Áreas de reunión al aire libre
      • Espacios cubiertos multiusos
      • Zona de fogata
      • Cocina completa
      • Áreas de descanso
      • Senderos señalizados

      Servicios adicionales:
      • Catering personalizado
      • Actividades teambuilding
      • Guías especializados
      • Equipamiento para actividades
    `,
    image: '/images/services/Campamentos  Grupos.png',
    secondaryImage: '/images/services/Campamentos  Grupos.png',
    cta: 'Reservar espacio',
    highlights: [
      'Capacidad para grupos grandes',
      'Actividades personalizadas',
      'Catering con productos locales',
      'Áreas de reunión al aire libre'
    ]
  }
];