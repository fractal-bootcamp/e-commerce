"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import XHeader from "@/components/XHeader";
import { OrderStatus } from "@/types/types";

export default function NewOrderPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    auth0Id: "",
    total: 0,
    orderStatus: OrderStatus.PENDING,
    productIds: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3010/order/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auth0Id: formData.auth0Id,
          total: parseFloat(formData.total) * 100,
          orderStatus: OrderStatus.PENDING,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create order");
      }

      router.push("/orders");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="p-6">
      <XHeader title="Create New Order" />

      <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              type="text"
              value={formData.auth0Id}
              onChange={(e) => setFormData({ ...formData, auth0Id: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Amount (in cents)
            </label>
            <input
              type="number"
              value={formData.total}
              onChange={(e) => setFormData({ ...formData, total: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={formData.orderStatus}
              onChange={(e) =>
                setFormData({ ...formData, orderStatus: e.target.value as OrderStatus })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {Object.values(OrderStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product IDs (comma-separated)
            </label>
            <input
              type="text"
              value={formData.productIds.join(",")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productIds: e.target.value.split(",").map((id) => id.trim()),
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="product-id-1, product-id-2, ..."
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
}
