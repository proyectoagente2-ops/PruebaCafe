'use client';

import { CartItem } from '@/lib/store';
import CartToast from './CartToast';
import { useCart } from '@/lib/store';

interface CartToastWrapperProps {
  item: CartItem;
  existingItem: CartItem | null;
}

export function CartToastWrapper({ item, existingItem }: CartToastWrapperProps) {
  const cart = useCart();
  
  return (
    <CartToast
      product={item}
      quantity={existingItem ? existingItem.quantity + 1 : 1}
      isUpdate={!!existingItem}
      onViewCart={() => cart.toggleCart()}
    />
  );
}