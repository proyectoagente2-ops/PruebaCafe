import { Clock } from 'lucide-react';

interface LastUpdateProps {
  date: Date;
}

export function LastUpdate({ date }: LastUpdateProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="inline-flex items-center gap-1.5 text-xs text-[#8B7355]/70">
      <Clock className="w-3 h-3" />
      <span>Precio actualizado: {formatDate(date)}</span>
    </div>
  );
}