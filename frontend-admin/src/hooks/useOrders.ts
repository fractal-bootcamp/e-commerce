import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { storeOrders } from "@/store/storeOrders";
import { getAllOrders } from "@/api/apiOrders";

export const useOrders = () => {
  const { orders, loadOrders } = storeOrders();
  const { idToken, firebaseUser } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      if (idToken && firebaseUser) {
        const response = await getAllOrders();
        loadOrders(response);
      }
    };

    fetchProducts();
  }, [idToken, firebaseUser]);

  return { orders };
};
