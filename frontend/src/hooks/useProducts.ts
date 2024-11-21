import { getAllProducts } from "@/api/apiProduct";
import { storeProducts } from "@/app/store/storeProducts";
import { Product } from "@/types/types";
import { useEffect } from "react";

export const useProducts = () => {
  const { products, loadProducts } = storeProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      const response: Product[] = await getAllProducts();
      loadProducts(response);
    };
    fetchProducts();
  }, []);

  return { products };
};
