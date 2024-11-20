"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Order, OrderStatus } from '@/types/types';
import { getAllOrders, updateOrder, deleteOrder } from '../../../api/apiOrders';
import OrdersTable from '@/components/OrdersTable';
import OrderFilters from '@/components/OrderFilters';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    dateFrom: '',
    dateTo: '',
  });

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getAllOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId: string, newStatus: OrderStatus) => {
    try {
      const order = orders.find(o => o.id === orderId);
      if (!order) return;

      await updateOrder(
        orderId,
        order.userId,
        order.total,
        newStatus
      );
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleDelete = async (orderId: string) => {
    if (!confirm('Are you sure you want to delete this order?')) return;
    
    try {
      await deleteOrder(orderId);
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className="p-6">
      <Header title="Orders Management" />
      <OrderFilters filters={filters} setFilters={setFilters} />
      <OrdersTable 
        orders={orders}
        onStatusChange={handleStatusUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
} 