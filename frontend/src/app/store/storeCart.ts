import { create } from "zustand";
import { CartProduct, CartStore } from "@/types/cart";

export const storeCart = create<CartStore>((set) => ({
  items: [],
  total: 0,

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }

      const newItems = [...state.items, { ...product, quantity: 1 }];
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }),

  removeItem: (productId) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== productId);
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity < 1) return state;

      const updatedItems = state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );

      return {
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }),

  clearCart: () => set({ items: [], total: 0 }),
}));

const calculateTotal = (items: CartProduct[]): number => {
  return items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
};
