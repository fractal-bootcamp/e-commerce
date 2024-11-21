import { getAllProducts } from "@/api/apiProducts";
import { storeProducts } from "@/store/storeProducts";
import { Product } from "@/types/types";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

const useProducts = () => {
  const { products, loadProducts } = storeProducts();
  const { idToken, firebaseUser } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, [idToken, firebaseUser]);

  const fetchProducts = async () => {
    const products: Product[] = await getAllProducts();
    if (idToken && firebaseUser) {
      loadProducts(products);
    }
  };

  return { products };
};

export default useProducts;
