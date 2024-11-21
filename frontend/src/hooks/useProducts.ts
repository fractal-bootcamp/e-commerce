import { getAllProducts } from "@/api/apiProduct";
import { storeProducts } from "@/store/storeProducts";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useProducts = () => {
  const { products, loadProducts } = storeProducts();
  const { idToken, firebaseUser } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      if (idToken && firebaseUser) {
        const response = await getAllProducts();
        loadProducts(response);
      }
    };

    fetchProducts();
  }, [idToken, firebaseUser]);

  return { products };
};
