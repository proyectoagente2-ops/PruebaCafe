import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, CheckCircle2, Clock, Leaf, MapPin, MessageCircle, Star, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CrossSelling from '@/components/CrossSelling';
import { services } from '@/lib/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id || params.serviceId;
  console.log('Service ID:', id); // Para debugging
  const service = services.find(s => s.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Debugging
  console.log('Available services:', services);
  console.log('Current service:', service);

  // Si el servicio no existe, mostrar mensaje de error
  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5ECE5] pt-24 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#4B3C32] mb-4">
            Servicio no encontrado
          </h1>
          <Link to="/servicios" className="inline-flex items-center">
            <Button variant="link" className="text-[#db9b24] hover:text-[#f0b938] flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentImage = selectedImage === 0 ? service.image : service.secondaryImage;

  const faqs = [
    {
      question: "¿Qué debo llevar?",
      answer: "Te recomendamos traer ropa cómoda, protector solar, repelente de insectos, una chaqueta ligera para la noche y calzado apropiado para caminar. No olvides tu cámara para capturar los momentos especiales."
    },
    {
      question: "¿Cómo llegar a la finca?",
      answer: "Estamos ubicados en la Sierra Nevada de Santa Marta. Proporcionamos instrucciones detalladas y coordenadas GPS una vez confirmes tu reserva. También podemos organizar el transporte desde puntos específicos."
    },
    {
      question: "¿Qué incluye el servicio?",
      answer: "Nuestro servicio incluye la experiencia completa guiada, refrigerios y bebidas, material necesario para las actividades y seguro de actividades. Los detalles específicos varían según el tipo de experiencia seleccionada."
    },
    {
      question: "¿Necesito reservar con anticipación?",
      answer: "Sí, recomendamos reservar con al menos 3 días de anticipación para garantizar disponibilidad y preparar todo para tu experiencia. Para grupos grandes, sugerimos contactarnos con mayor anticipación."
    }
  ];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5ECE5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4B3C32] mb-4">
            Servicio no encontrado
          </h1>
          <Link to="/servicios">
            <Button variant="link" className="text-[#db9b24] hover:text-[#f0b938]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: Clock,
      title: "Duración",
      description: "4-8 horas según el programa"
    },
    {
      icon: Users,
      title: "Grupo",
      description: "2-12 personas"
    },
    {
      icon: Leaf,
      title: "Dificultad",
      description: "Moderada"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      description: "Sierra Nevada"
    }
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Bogotá",
      comment: "Una experiencia única que cambió mi perspectiva sobre el café y la conexión con la naturaleza.",
      rating: 5
    },
    {
      name: "Juan Pérez",
      location: "Medellín",
      comment: "Los guías son increíblemente conocedores y apasionados. Aprendí muchísimo sobre el proceso del café.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      location: "Cali",
      comment: "El alojamiento superó mis expectativas. La vista de las montañas al amanecer es inolvidable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-amber-100/50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/servicios" className="inline-flex items-center text-[#4B3C32] hover:text-[#db9b24] transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a servicios
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16">
        {/* Main Image */}
        <div className="w-full h-[85vh] relative overflow-hidden">
          <motion.img 
            src={currentImage}
            alt={service.title} 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Thumbnail Navigation */}
        {service.image && service.secondaryImage && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-2 p-2 bg-black/30 backdrop-blur-sm rounded-full">
              <button
                onClick={() => setSelectedImage(0)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === 0 ? 'bg-white' : 'bg-white/50'
                }`}
              />
              <button
                onClick={() => setSelectedImage(1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === 1 ? 'bg-white' : 'bg-white/50'
                }`}
              />
            </div>
          </div>
        )}
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-4xl"
            >
              <Badge className="bg-amber-400/20 text-amber-200 border-none mb-4">
                Experiencia Premium
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-amber-400 text-[#4B3C32] hover:bg-amber-500 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25"
                  onClick={() => {
                    window.open(`https://api.whatsapp.com/send?phone=573113678555&text=${encodeURIComponent(`¡Hola! Me interesa saber más sobre el servicio de ${service.title} en La Felicidá.`)}`, '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Reservar ahora
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm rounded-full transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver disponibilidad
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="p-6 bg-amber-50 rounded-xl">
                    <feature.icon className="h-6 w-6 text-amber-700 mb-3" />
                    <h3 className="font-semibold text-[#4B3C32] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#4B3C32] mb-6">Sobre la experiencia</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    Sumérgete en una experiencia única en la Sierra Nevada, donde la magia de la naturaleza 
                    se encuentra con la rica tradición del café colombiano. Nuestro programa está diseñado 
                    para ofrecerte una conexión auténtica con la tierra y sus tradiciones.
                  </p>
                  <p>
                    Durante tu visita, aprenderás sobre el proceso completo del café, desde la semilla 
                    hasta la taza, mientras disfrutas de las impresionantes vistas de las montañas y 
                    la paz que solo la naturaleza puede ofrecer.
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-[#4B3C32] mb-6">¿Qué incluye?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Guía especializado",
                    "Refrigerios y bebidas",
                    "Material necesario",
                    "Seguro de actividades",
                    "Fotos de la experiencia",
                    "Kit de bienvenida"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-2xl font-bold text-[#4B3C32] mb-6">Lo que dicen nuestros visitantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, idx) => (
                    <Card key={idx} className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-[#4B3C32]">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking & FAQs */}
            <div className="lg:col-span-1">
              {/* Sticky Booking Card */}
              <div className="sticky top-24">
                <Card className="p-6 shadow-xl border-amber-100">
                  <h3 className="text-xl font-bold text-[#4B3C32] mb-4">Reserva tu experiencia</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Desde</span>
                      <span className="text-xl font-bold text-[#4B3C32]">$150.000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Por persona</span>
                      <span>Grupos de 2-12 personas</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-amber-400 text-[#4B3C32] hover:bg-amber-500 mb-4"
                    onClick={() => {
                      window.open(`https://wa.me/+573113678555?text=${encodeURIComponent(`¡Hola! Me interesa reservar el servicio de ${service.title} en La Felicidá.`)}`, '_blank');
                    }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Reservar por WhatsApp
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Sin compromiso - Respuesta en menos de 24h
                  </p>
                </Card>

                {/* FAQs */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#4B3C32] mb-4">Preguntas frecuentes</h3>
                  <Accordion type="single" collapsible>
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-[#4B3C32]">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
