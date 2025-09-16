import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNotificationStore } from './notificationStore';
import { showCartNotification } from '../utils/cartNotification';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'product' | 'service';
  weight?: string;
  date?: string;
  time?: string;
  participants?: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  lastAddedItem: CartItem | null;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getItemCount: () => number;
  readonly subtotal: number;
  readonly shippingCost: number;
  readonly tax: number;
  readonly total: number;
  readonly serviceCount: number;
  readonly productCount: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      lastAddedItem: null,
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          let newItems;
          
          if (existingItem) {
            newItems = state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            );
          } else {
            newItems = [...state.items, { ...item, quantity: 1 }];
          }
          
          const newItem = existingItem 
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : { ...item, quantity: 1 };
          
          // Mostrar notificaciones
          showCartNotification(newItem, !!existingItem);
          useNotificationStore.getState().addNotification({
            title: existingItem ? 'Cantidad actualizada' : '¡Agregado al carrito!',
            message: `${newItem.name} ${existingItem ? 'ahora tienes ' + (existingItem.quantity + 1) : 'x1'}`,
            image: newItem.image
          });
          
          return { 
            items: newItems,
            lastAddedItem: newItem,
            isOpen: true // Abrir el carrito automáticamente
          };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      get subtotal() {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      get shippingCost() {
        const subtotal = get().subtotal;
        return subtotal > 100000 ? 0 : 12000; // Envío gratis por compras mayores a 100.000
      },
      get tax() {
        return get().subtotal * 0.19; // IVA 19%
      },
      get total() {
        return get().subtotal + get().shippingCost + get().tax;
      },
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      get serviceCount() {
        return get().items
          .filter(item => item.type === 'service')
          .reduce((total, item) => total + item.quantity, 0);
      },
      get productCount() {
        return get().items
          .filter(item => item.type === 'product')
          .reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);