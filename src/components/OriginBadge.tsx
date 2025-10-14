import { MapPin } from 'lucide-react';

interface OriginBadgeProps {
  origin: string;
  altitude?: string;
}

export function OriginBadge({ origin, altitude }: OriginBadgeProps) {
  return (
    <div className="inline-flex flex-col gap-1">
      <div className="inline-flex items-center gap-1.5 text-xs bg-[#2A1810]/5 text-[#2A1810]/80 px-2 py-1 rounded-lg">
        <MapPin className="w-3 h-3" />
        <span>{origin}</span>
      </div>
      {altitude && (
        <div className="text-[10px] text-[#8B7355] pl-5">
          Altitud: {altitude}
        </div>
      )}
    </div>
  );
}