import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export interface ProductInfo {
  icon: JSX.Element;
  text: string;
}

export interface GuaranteeItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export interface CoffeeProduct {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee';
  notes?: string[];
  altitude?: string;
  processingMethod?: string;
  isSpecialEdition?: boolean;
}