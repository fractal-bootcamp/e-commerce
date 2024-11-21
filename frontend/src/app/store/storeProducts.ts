import { Product } from "@/types/types";
import { create } from "zustand";

interface StoreProductState {
  products: Product[];
  loadProducts: (newProducts: Product[]) => void;
}

export const storeProduct = create<StoreProductState>((set) => ({
  products: [],
  loadProducts: (newProducts: Product[]) =>
    set((state) => ({ products: [...state.products, ...newProducts] })),
}));
