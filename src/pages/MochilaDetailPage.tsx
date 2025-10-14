'use client';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  ShoppingCart, 
  MinusCircle, 
  PlusCircle,
  ArrowLeft,
  Star,
  Truck,
  Shield,
  Clock
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { useCart } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

// Datos de muestra para las mochilas (podría venir de una API o base de datos)
const mochilaProducts = [
  {
    id: 'mochila-tradicional-1',
    name: 'Mochila Tradicional',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILAAZUL.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano'],
    price: 150000,
    category: 'backpack',
    material: 'Lana natural',
    capacity: 'Mediana',
    recommendedUse: 'Uso diario',
    detailedDescription: `
      Esta mochila tradicional es una obra maestra artesanal que combina la sabiduría ancestral 
      con la funcionalidad moderna. Cada pieza es única, tejida a mano por artesanos expertos 
      que han heredado técnicas transmitidas de generación en generación.
    `,
    specifications: {
      dimensions: '30cm x 40cm x 15cm',
      weight: '0.8 kg',
      colors: ['Azul índigo', 'Natural', 'Detalles en blanco'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-especial-1',
    name: 'Mochila Especial',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAVERDE.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande'],
    price: 180000,
    category: 'backpack',
    material: 'Lana premium',
    capacity: 'Grande',
    recommendedUse: 'Ocasiones especiales',
    detailedDescription: `
      Una mochila excepcional que representa la cumbre de nuestra artesanía. 
      Elaborada con los materiales más finos y técnicas especiales, cada pieza 
      es una obra de arte única que combina la tradición con un toque de lujo.
    `,
    specifications: {
      dimensions: '35cm x 45cm x 18cm',
      weight: '1 kg',
      colors: ['Verde esmeralda', 'Detalles dorados'],
      timeToMake: '3-4 semanas'
    }
  },
  {
    id: 'mochila-moderna-1',
    name: 'Mochila Moderna',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJA.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado'],
    price: 165000,
    category: 'backpack',
    material: 'Lana mixta',
    capacity: 'Personalizada',
    recommendedUse: 'Uso versátil',
    detailedDescription: `
      Una interpretación contemporánea de nuestras mochilas tradicionales. 
      Diseñada para el usuario moderno, esta pieza combina la autenticidad 
      de las técnicas ancestrales con patrones y colores contemporáneos.
    `,
    specifications: {
      dimensions: '32cm x 42cm x 16cm',
      weight: '0.9 kg',
      colors: ['Rojo vibrante', 'Patrones modernos'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-tradicional-2',
    name: 'Mochila Tradicional Blanca',
    description: 'Mochila artesanal tejida a mano con patrones tradicionales.',
    image: '/images/Mochilas/MOCHILABLANCA.png',
    features: ['Tejido tradicional', 'Diseños ancestrales', 'Tamaño mediano'],
    price: 155000,
    category: 'backpack',
    material: 'Lana natural',
    capacity: 'Mediana',
    recommendedUse: 'Uso diario',
    detailedDescription: `
      Una elegante mochila en tonos blancos que refleja la pureza de nuestras 
      tradiciones. Cada puntada es un testimonio de la dedicación de nuestros 
      artesanos y la belleza de los diseños ancestrales.
    `,
    specifications: {
      dimensions: '30cm x 40cm x 15cm',
      weight: '0.8 kg',
      colors: ['Blanco natural', 'Detalles en crema'],
      timeToMake: '2-3 semanas'
    }
  },
  {
    id: 'mochila-especial-2',
    name: 'Mochila Especial Gris',
    description: 'Mochila con diseños exclusivos y acabados premium.',
    image: '/images/Mochilas/MOCHILAGRIS1.png',
    features: ['Diseño exclusivo', 'Materiales premium', 'Tamaño grande'],
    price: 175000,
    category: 'backpack',
    material: 'Lana premium',
    capacity: 'Grande',
    recommendedUse: 'Ocasiones especiales',
    detailedDescription: `
      Una sofisticada mochila en tonos grises que combina elegancia y 
      funcionalidad. Perfecta para quienes buscan un accesorio único 
      que refleje tanto estilo como respeto por la tradición.
    `,
    specifications: {
      dimensions: '35cm x 45cm x 18cm',
      weight: '1 kg',
      colors: ['Gris piedra', 'Detalles plateados'],
      timeToMake: '3-4 semanas'
    }
  },
  {
    id: 'mochila-moderna-2',
    name: 'Mochila Moderna Bicolor',
    description: 'Fusión de diseños contemporáneos con técnicas tradicionales.',
    image: '/images/Mochilas/MOCHILAROJACONVERDE.png',
    features: ['Estilo moderno', 'Colores vibrantes', 'Tamaño personalizado'],
    price: 170000,
    category: 'backpack',
    material: 'Lana mixta',
    capacity: 'Personalizada',
    recommendedUse: 'Uso versátil',
    detailedDescription: `
      Una vibrante combinación de colores que representa la fusión entre 
      lo tradicional y lo moderno. Esta mochila es perfecta para quienes 
      buscan un accesorio único que destaque por su diseño atrevido.
    `,
    specifications: {
      dimensions: '32cm x 42cm x 16cm',
      weight: '0.9 kg',
      colors: ['Rojo y verde', 'Patrones geométricos'],
      timeToMake: '2-3 semanas'
    }
  }
];

export default function MochilaDetailPage() {
  const { id } = useParams();
  const mochila = mochilaProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 5) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!mochila) return;

    const cartItem = {
      id: mochila.id,
      name: mochila.name,
      price: mochila.price,
      image: mochila.image,
      type: 'product' as const,
      quantity: quantity
    };

    addToCart(cartItem);

    toast({
      title: "¡Producto agregado!",
      description: `${mochila.name} se ha añadido a tu carrito`,
      duration: 3000,
    });
  };

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me interesa la mochila ${mochila?.name}. ¿Podrían darme más información?`;
    window.open(
      `https://api.whatsapp.com/send?phone=573113678555&text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!mochila) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Mochila no encontrada
          </h2>
          <p className="text-amber-800 mb-8">
            Lo sentimos, no pudimos encontrar la mochila que buscas.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Volver
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Botón de volver y breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-amber-600 hover:text-amber-700">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/mochilas" className="text-amber-600 hover:text-amber-700">
              Mochilas
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{mochila.name}</span>
          </nav>
          <Link 
            to="/mochilas" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mt-4 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Volver a mochilas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen de la mochila */}
          <div className="relative">
            <div className="sticky top-24 space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <OptimizedImage
                  src={mochila.image}
                  alt={mochila.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Información de la mochila */}
          <div className="space-y-8">
            <div>
              {/* Etiqueta de producto artesanal */}
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Producto Artesanal
              </div>
              
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                {mochila.name}
              </h1>

              {/* Calificación */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-gray-600">(12 reseñas)</span>
              </div>

              {/* Precio */}
              <div className="flex items-baseline gap-4 mb-6">
                <p className="text-3xl text-amber-600 font-bold">
                  ${mochila.price.toLocaleString('es-CO')} COP
                </p>
                <span className="text-sm text-gray-500">
                  Envío calculado al finalizar la compra
                </span>
              </div>

              {/* Beneficios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-amber-50 rounded-lg mb-6">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-amber-600" />
                  <span className="text-sm">Envío gratis en compras +$100k</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span className="text-sm">Garantía artesanal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-sm">Elaboración: {mochila.specifications.timeToMake}</span>
                </div>
              </div>

              {/* Descripción */}
              <div className="prose prose-amber max-w-none">
                <p className="text-gray-600 text-lg">{mochila.detailedDescription}</p>
              </div>

            {/* Selector de cantidad y botón de agregar al carrito */}
            <div className="border rounded-lg p-6 space-y-6 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Cantidad:</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="text-amber-600 hover:text-amber-700"
                    disabled={quantity <= 1}
                  >
                    <MinusCircle className="w-6 h-6" />
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="text-amber-600 hover:text-amber-700"
                    disabled={quantity >= 5}
                  >
                    <PlusCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al carrito
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>

            {/* Características y especificaciones en pestañas */}
            <div className="space-y-8 border-t pt-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Características</h3>
                <ul className="space-y-3">
                  {mochila.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Especificaciones</h3>
                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
                  <div>
                    <p className="text-gray-500">Dimensiones</p>
                    <p className="font-medium">{mochila.specifications.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Peso</p>
                    <p className="font-medium">{mochila.specifications.weight}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Material</p>
                    <p className="font-medium">{mochila.material}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tiempo de elaboración</p>
                    <p className="font-medium">{mochila.specifications.timeToMake}</p>
                  </div>
                </div>
              </div>
            </div>

                {/* Nota importante */}
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <h4 className="text-amber-900 font-semibold mb-2">Nota importante</h4>
                  <p className="text-amber-700 text-sm">
                    Cada mochila es única y hecha a mano. Los colores y patrones pueden 
                    variar ligeramente. El tiempo de elaboración es aproximado y puede 
                    variar según la disponibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

