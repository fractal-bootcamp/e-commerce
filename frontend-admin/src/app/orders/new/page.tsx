"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import XHeader from "@/components/XHeader";
import { OrderStatus } from "@/types/types";
import { addOrder } from "@/api/apiOrders";
import useUsers from "@/hooks/useUsers";
import useProducts from "@/hooks/useProducts";

export default function NewOrderPage() {
  const { users } = useUsers();
  const { products } = useProducts();

  const router = useRouter();
  const [formData, setFormData] = useState({
    auth0Id: "",
    total: 0,
    orderStatus: OrderStatus.PENDING,
    productIds: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await addOrder(formData.auth0Id, formData.total, formData.orderStatus);
    console.log(response);
    router.push("/orders");
  };

  return (
    <div className="p-6">
      <XHeader title="Create New Order" />

      <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {/* User id */}
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <select
              value={formData.auth0Id}
              onChange={(e) => setFormData({ ...formData, auth0Id: e.target.value })}
            >
              {users.map((user, key) => (
                <option key={key} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
          </div>

          {/* Total amount */}
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

          {/* Order status */}
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

          {/* Product ids */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Product IDs (comma-separated)
            </label>
            <select
              value={formData.auth0Id}
              onChange={(e) =>
                setFormData({ ...formData, productIds: [...formData.productIds, e.target.value] })
              }
              className="border-2 border-indigo-500 p-2"
            >
              {products.map((product, key) => (
                <option key={key} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            <div>
              <div className="text-gray-700 text-sm">Products Selected</div>
              <div>
                {formData.productIds.map((id, key) => (
                  <p key={key} className="font-thin">
                    {id}
                  </p>
                ))}
              </div>
            </div>
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
