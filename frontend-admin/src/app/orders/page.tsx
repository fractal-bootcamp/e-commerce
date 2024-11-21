"use client";

import Header from "@/components/Header";
import OrdersTable from "@/components/OrdersTable";
import OrderFilters from "@/components/OrderFilters";
import { useOrders } from "@/hooks/useOrders";

const Page = () => {
  const { orders, filters, setFilters, handleStatusUpdate, handleDelete } = useOrders();

  return (
    <div className="p-6">
      <Header title="Orders Management" />
      <OrderFilters filters={filters} setFilters={setFilters} />
      <OrdersTable orders={orders} onStatusChange={handleStatusUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default Page;
