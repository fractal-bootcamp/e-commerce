import { Product } from "@/types/types";
import { create } from "zustand";

interface StoreProductsState {
  products: Product[];
  loadProducts: (newProducts: Product[]) => void;
}

export const storeProducts = create<StoreProductsState>((set) => ({
  products: [],
  loadProducts: (newProducts: Product[]) =>
    set((state) => ({ products: [...state.products, ...newProducts] })),
}));
