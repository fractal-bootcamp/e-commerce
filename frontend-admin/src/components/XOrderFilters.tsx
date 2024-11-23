import React from "react";

interface XOrderFiltersProps {
  filters: {
    status: string;
    dateFrom: string;
    dateTo: string;
  };
  setFilters: (filters: { status: string; dateFrom: string; dateTo: string }) => void;
}

const XOrderFilters = ({ filters, setFilters }: XOrderFiltersProps) => {
  return (
    <div className="mb-6 bg-secondary p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All</option>
            <option value="PENDING">Pending</option>
            <option value="PAID">Paid</option>
            <option value="SHIPPED">Shipped</option>
            <option value="DELIVERED">Delivered</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">From Date</label>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">To Date</label>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default XOrderFilters;
