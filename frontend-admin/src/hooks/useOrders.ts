import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { storeOrders } from "@/store/storeOrders";
import { deleteOrder, getAllOrders, getOrder, updateOrder } from "@/api/apiOrders";
import { Order, OrderStatus } from "@/types/types";

export const useOrders = (orderId: string) => {
  // State
  const { orders, loadOrders, currentOrder, setCurrentOrder } = storeOrders();
  const { idToken, firebaseUser } = useAuth();
  const [filters, setFilters] = useState({
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  // Multiple orders
  useEffect(() => {
    fetchOrders();
  }, [idToken, firebaseUser]);

  const fetchOrders = async () => {
    if (idToken && firebaseUser) {
      const response = await getAllOrders();
      loadOrders(response);
    }
  };

  // Single order
  useEffect(() => {
    fetchOrder();
  }, [idToken, firebaseUser]);

  const fetchOrder = async () => {
    if (idToken && firebaseUser) {
      const response = await getOrder(orderId);
      setCurrentOrder(response);
    }
  };

  // Functions
  const handleStatusUpdate = async (order: Order, newStatus: OrderStatus) => {
    await updateOrder(order.id, order.user.id, order.total, newStatus);
    fetchOrders();
  };

  const handleDelete = async (orderId: string) => {
    if (!confirm("Are you sure you want to delete this order?")) return;
    await deleteOrder(orderId);
    fetchOrders();
  };

  return { orders, filters, setFilters, handleStatusUpdate, handleDelete, currentOrder };
};
