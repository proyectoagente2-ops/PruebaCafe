'use client';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { services } from '@/lib/services';
import CrossSelling from '@/components/CrossSelling';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5ECE5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4B3C32] mb-4">Servicio no encontrado</h1>
          <Link to="/servicios">
            <Button variant="link" className="text-[#db9b24] hover:text-[#f0b938]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5ECE5]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/servicios" className="inline-flex items-center text-[#4B3C32] hover:text-[#db9b24] transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a servicios
          </Link>
        </div>
      </div>

      <div className="w-full h-[75vh] relative">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-gray-200 mb-6 max-w-2xl">{service.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto -mt-20 relative z-10 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-amber-50/50">
                  <div className="w-2 h-2 rounded-full bg-[#db9b24] mt-2" />
                  <span className="text-[#4B3C32] text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={() => {
                  window.open(
                    `https://wa.me/+573012345678?text=${encodeURIComponent(
                      `¡Hola! Me interesa el servicio de ${service.title}. ¿Podrían darme más información?`
                    )}`,
                    '_blank'
                  );
                }}
                className="bg-[#db9b24] hover:bg-[#f0b938] text-white w-full py-6 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Reservar este servicio
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto mb-16 bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#4B3C32] mb-6">Detalles del servicio</h2>
          <div className="prose max-w-none text-gray-600 whitespace-pre-line">{service.longDescription || service.description}</div>
        </motion.div>

        <div className="mb-16">
          <CrossSelling
            currentProduct={{
              id: service.id,
              name: service.title,
              description: service.description,
              price: 0,
              image: service.image,
              capacity: 'N/A',
              category: 'experience',
              inStock: true
            }}
            currentType="experience"
          />
        </div>
      </div>
    </div>
  );
}
