"use client";

import React from "react";
import { Order, OrderStatus } from "../types/types";
import Link from "next/link";

interface OrdersTableProps {
  orders: Order[];
  onStatusChange: (order: Order, newStatus: OrderStatus) => void;
  onDelete: (orderId: string) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onStatusChange, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/orders/${order.id}`} className="text-blue-600 hover:underline">
                  {order.id}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{order.user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">${(order.total / 100).toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={order.orderStatus}
                  onChange={(e) => onStatusChange(order, e.target.value as OrderStatus)}
                  className="border rounded px-2 py-1"
                >
                  {Object.values(OrderStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDelete(order.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
