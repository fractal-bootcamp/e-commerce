import { Order } from "@/types/types";
import { create } from "zustand";

interface StoreOrdersState {
  orders: Order[];
  currentOrder: Order | null;
  loadOrders: (newOrders: Order[]) => void;
  setCurrentOrder: (newOrder: Order) => void;
}

export const storeOrders = create<StoreOrdersState>((set) => ({
  orders: [],
  currentOrder: null,
  loadOrders: (newOrders: Order[]) => set(() => ({ orders: [...newOrders] })),
  setCurrentOrder: (newOrder: Order) => set(() => ({ currentOrder: newOrder })),
}));
