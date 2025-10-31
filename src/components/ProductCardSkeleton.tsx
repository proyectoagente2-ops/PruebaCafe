import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function ProductCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full border-none relative bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Imagen skeleton */}
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Badge skeleton */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gray-300 rounded-full h-6 w-20 animate-pulse" />
          </div>
        </div>

        {/* Contenido skeleton */}
        <div className="p-7 bg-gradient-to-b from-white to-amber-50/30">
          {/* Categoría skeleton */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1 w-8 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-3 w-24 bg-gray-300 rounded animate-pulse" />
          </div>
          
          {/* Título skeleton */}
          <div className="h-7 w-3/4 bg-gray-300 rounded mb-3 animate-pulse" />
          
          {/* Descripción skeleton */}
          <div className="space-y-2 mb-6">
            <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
          </div>
          
          {/* Características skeleton */}
          <div className="space-y-3 mb-6 bg-white/60 rounded-xl p-4 border border-gray-100">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-300 animate-pulse" />
                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
          
          {/* Botón skeleton */}
          <div className="h-12 w-full bg-gray-300 rounded-2xl animate-pulse" />
        </div>
      </Card>
    </motion.div>
  );
}
