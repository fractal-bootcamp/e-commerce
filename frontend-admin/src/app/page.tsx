import Header from '@/components/Header';

export default function HomePage() {
  return (
    <div className="p-6">
      <Header title="Welcome to Snack Safari Admin" />
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="/orders" className="text-blue-600 hover:text-blue-800">
              → Manage Orders
            </a>
          </li>
          <li>
            <a href="/orders/new" className="text-blue-600 hover:text-blue-800">
              → Create New Order
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}