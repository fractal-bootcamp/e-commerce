import XHeader from "@/components/XHeader";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6">
      <XHeader title="Welcome to Snack Safari Admin" />
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/orders" className="text-blue-600 hover:text-blue-800">
              → Manage Orders
            </Link>
          </li>
          <li>
            <Link href="/orders/new" className="text-blue-600 hover:text-blue-800">
              → Create New Order
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
