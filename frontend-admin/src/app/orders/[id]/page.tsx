"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import { Order, OrderStatus } from '@/types/types';
import { getOrder, updateOrder } from '../../../../api/apiOrders';

export default function OrderDetailPage() {
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [params.id]);

  const fetchOrder = async () => {
    try {
      const data = await getOrder(params.id as string);
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: OrderStatus) => {
    if (!order) return;
    
    try {
      await updateOrder(
        order.id,
        order.userId,
        order.total,
        newStatus
      );
      fetchOrder();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!order) return <div>Order not found</div>;

  return (
    <div className="p-6">
      <Header title={`Order Details - ${order.id}`} />
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Order Information</h3>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>User ID:</strong> {order.userId}</p>
            <p><strong>Total:</strong> ${(order.total / 100).toFixed(2)}</p>
            <p><strong>Created:</strong> {new Date(order.createdAt!).toLocaleString()}</p>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={order.orderStatus}
                onChange={(e) => handleStatusUpdate(e.target.value as OrderStatus)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {Object.values(OrderStatus).map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            {order.products?.map(product => (
              <div key={product.id} className="mb-2 p-2 border rounded">
                <p><strong>{product.name}</strong></p>
                <p>${(product.price / 100).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 