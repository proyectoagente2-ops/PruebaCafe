import { CheckCircle, AlertCircle } from 'lucide-react';

interface StockIndicatorProps {
  inStock: boolean;
}

export function StockIndicator({ inStock }: StockIndicatorProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs ${
      inStock 
        ? 'text-green-600 bg-green-50' 
        : 'text-amber-600 bg-amber-50'
    } px-2 py-0.5 rounded-full`}>
      {inStock ? (
        <>
          <CheckCircle className="w-3 h-3" />
          <span>En stock</span>
        </>
      ) : (
        <>
          <AlertCircle className="w-3 h-3" />
          <span>Agotado temporalmente</span>
        </>
      )}
    </div>
  );
}