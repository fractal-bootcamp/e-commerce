"use client";

import XHeader from "@/components/XHeader";
import XOrdersTable from "@/components/XOrdersTable";
import XOrderFilters from "@/components/XOrderFilters";
import { useOrders } from "@/hooks/useOrders";
import XProtectedRoute from "@/components/XProtectedRoute";

const Page = () => {
  const { orders, filters, setFilters, handleStatusUpdate, handleDelete } = useOrders("");

  return (
    <XProtectedRoute>
      <div className="p-6">
        <XHeader title="Orders Management" />
        <XOrderFilters filters={filters} setFilters={setFilters} />
        <XOrdersTable orders={orders} onStatusChange={handleStatusUpdate} onDelete={handleDelete} />
      </div>
    </XProtectedRoute>
  );
};

export default Page;
