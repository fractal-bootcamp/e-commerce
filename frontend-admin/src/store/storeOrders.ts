import { Order } from "@/types/types";
import { create } from "zustand";

interface StoreOrdersState {
  orders: Order[];
  loadOrders: (newOrder: Order[]) => void;
}

export const storeOrders = create<StoreOrdersState>((set) => ({
  orders: [],
  loadOrders: (newOrders: Order[]) => set(() => ({ orders: [...newOrders] })),
}));
