import { create } from 'zustand';
import { StateCreator } from 'zustand';
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

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  lastAddedItem: CartItem | null;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  serviceCount: number;
  productCount: number;
}

interface CartActions {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getItemCount: () => number;
}

type PersistState = {
  items: CartItem[];
  lastAddedItem: CartItem | null;
};

type CartStore = CartState & CartActions;

const calculateCartTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = subtotal > 100000 ? 0 : 12000;
  const tax = subtotal * 0.19;
  const total = subtotal + shippingCost + tax;
  
  const serviceCount = items
    .filter(item => item.type === 'service')
    .reduce((total, item) => total + item.quantity, 0);
  
  const productCount = items
    .filter(item => item.type === 'product')
    .reduce((total, item) => total + item.quantity, 0);

  return {
    subtotal,
    shippingCost,
    tax,
    total,
    serviceCount,
    productCount
  };
};


interface CartStorePersistConfig {
  name: string;
  version: number;
  partialize: (state: CartStore) => PersistState;
  onRehydrateStorage: () => (state: PersistState | undefined) => void;
}

type ZustandSet = Parameters<StateCreator<CartStore>>[0];
type ZustandGet = Parameters<StateCreator<CartStore>>[1];

const useCartStore = create<CartStore>()(
  persist(
    (set: ZustandSet, get: ZustandGet) => ({
      // Estado inicial
      items: [],
      isOpen: false,
      lastAddedItem: null,
      subtotal: 0,
      shippingCost: 0,
      tax: 0,
      total: 0,
      serviceCount: 0,
      productCount: 0,

      // Acciones
      addToCart: (item: Omit<CartItem, 'quantity'>) => {
        const items = get().items;
        const existingItem = items.find(i => i.id === item.id);
        
        let newItems: CartItem[];
        if (existingItem) {
          newItems = items.map(i =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        } else {
          newItems = [...items, { ...item, quantity: 1 }];
        }

        const newItem: CartItem = existingItem
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : { ...item, quantity: 1 };

        const totals = calculateCartTotals(newItems);

        set({
          ...totals,
          items: newItems,
          lastAddedItem: newItem
        });

        // Notificaciones
        showCartNotification(newItem, !!existingItem);
        useNotificationStore.getState().addNotification({
          title: existingItem ? 'Cantidad actualizada' : '¡Agregado al carrito!',
          message: `${newItem.name} ${existingItem ? 'ahora tienes ' + (existingItem.quantity + 1) : 'x1'}`,
          image: newItem.image
        });
      },

      removeFromCart: (id: string) => {
        const newItems = get().items.filter(item => item.id !== id);
        const totals = calculateCartTotals(newItems);
        set({ ...totals, items: newItems });
      },

      updateQuantity: (id: string, quantity: number) => {
        const newItems = get().items.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        const totals = calculateCartTotals(newItems);
        set({ ...totals, items: newItems });
      },

      clearCart: () => {
        set({
          items: [],
          lastAddedItem: null,
          subtotal: 0,
          shippingCost: 0,
          tax: 0,
          total: 0,
          serviceCount: 0,
          productCount: 0
        });
      },

      toggleCart: () => set((state: CartStore) => ({ ...state, isOpen: !state.isOpen })),

      getItemCount: (): number => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'shopping-cart',
      version: 1,
      partialize: (state: CartStore): PersistState => ({ 
        items: state.items,
        lastAddedItem: state.lastAddedItem
      }),
      onRehydrateStorage: () => (state: PersistState | undefined) => {
        if (state) {
          const totals = calculateCartTotals(state.items);
          useCartStore.setState({ ...state, ...totals });
        }
      }
    } as CartStorePersistConfig
  )
);

export const useCart = () => useCartStore();


