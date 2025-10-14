import { Scale } from 'lucide-react';

interface QuantityBadgeProps {
  weight: string;
}

export function QuantityBadge({ weight }: QuantityBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs bg-[#F5EDE4] text-[#8B7355] px-2 py-1 rounded-full">
      <Scale className="w-3 h-3" />
      <span>{weight}</span>
    </div>
  );
}