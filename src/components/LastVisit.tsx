import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface LastVisitProps {
  productId: string;
}

export default function LastVisit({ productId }: LastVisitProps) {
  const [lastVisit, setLastVisit] = useState<string | null>(null);

  useEffect(() => {
    // Obtener la última visita del localStorage
    const visits = JSON.parse(localStorage.getItem('productVisits') || '{}');
    const lastVisitTime = visits[productId];
    
    if (lastVisitTime) {
      // Calcular tiempo transcurrido
      const now = new Date();
      const last = new Date(lastVisitTime);
      const diff = now.getTime() - last.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      if (days === 0) {
        setLastVisit('Visto hoy');
      } else if (days === 1) {
        setLastVisit('Visto ayer');
      } else {
        setLastVisit(`Visto hace ${days} días`);
      }
    }

    // Actualizar la última visita
    const newVisits = {
      ...visits,
      [productId]: new Date().toISOString()
    };
    localStorage.setItem('productVisits', JSON.stringify(newVisits));
  }, [productId]);

  if (!lastVisit) return null;

  return (
    <div className="inline-flex items-center gap-1.5 text-xs text-[#8B7355]/60">
      <Clock className="w-3 h-3" />
      <span>{lastVisit}</span>
    </div>
  );
}