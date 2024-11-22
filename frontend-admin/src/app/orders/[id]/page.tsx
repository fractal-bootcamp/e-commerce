"use client";

import { useParams } from "next/navigation";
import XHeader from "@/components/XHeader";
import { OrderStatus } from "@/types/types";
import { useOrders } from "@/hooks/useOrders";
import XProtectedRoute from "@/components/XProtectedRoute";

export default function OrderDetailPage() {
  const params = useParams();
  const { currentOrder, handleStatusUpdate } = useOrders(params.id as string);

  if (!currentOrder) return <div>Order not found</div>;

  return (
    <XProtectedRoute>
      <div className="p-6">
        <XHeader title={`Order Details - ${currentOrder.id}`} />

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Order Information</h3>
              <p>
                <strong>Order ID:</strong> {currentOrder.id}
              </p>
              <p>
                <strong>Stripe Payment Intent ID:</strong> {currentOrder.stripePaymentIntentId}
              </p>
              <p>
                <strong>User ID:</strong> {currentOrder.user.id}
              </p>
              <p>
                <strong>User Name:</strong> {currentOrder.user.name}
              </p>
              <p>
                <strong>User Email:</strong> {currentOrder.user.email}
              </p>
              <p>
                <strong>Total:</strong> ${(currentOrder.total / 100).toFixed(2)}
              </p>
              <p>
                <strong>Created:</strong> {new Date(currentOrder.createdAt!).toLocaleString()}
              </p>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={currentOrder.orderStatus}
                  onChange={(e) => handleStatusUpdate(currentOrder, e.target.value as OrderStatus)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {Object.values(OrderStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              {currentOrder.products.map((product, key) => (
                <div key={key} className="mb-2 p-2 border rounded">
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <p>${(product.price / 100).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </XProtectedRoute>
  );
}
