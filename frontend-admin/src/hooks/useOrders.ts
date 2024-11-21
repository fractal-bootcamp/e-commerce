import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { storeOrders } from "@/store/storeOrders";
import { deleteOrder, getAllOrders, updateOrder } from "@/api/apiOrders";
import { OrderStatus } from "@/types/types";

export const useOrders = () => {
  // State
  const { orders, loadOrders } = storeOrders();
  const { idToken, firebaseUser } = useAuth();
  const [filters, setFilters] = useState({
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  // Fucntions
  useEffect(() => {
    fetchOrders();
  }, [idToken, firebaseUser]);

  const fetchOrders = async () => {
    if (idToken && firebaseUser) {
      const response = await getAllOrders();
      loadOrders(response);
    }
  };

  const handleStatusUpdate = async (orderId: string, newStatus: OrderStatus) => {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return;

    await updateOrder(orderId, order.user.id, order.total, newStatus);
    fetchOrders();
  };

  const handleDelete = async (orderId: string) => {
    if (!confirm("Are you sure you want to delete this order?")) return;

    await deleteOrder(orderId);
    fetchOrders();
  };

  return { orders, filters, setFilters, handleStatusUpdate, handleDelete };
};
