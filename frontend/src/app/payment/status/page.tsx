// this is the page that the user is redirected to after payment
import { PaymentStatus } from '@/components/stripe/PaymentStatus';

export default function PaymentStatusPage() {
  const status = PaymentStatus();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {status === 'success' && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
          <p className="mt-2">Thank you for your payment.</p>
        </div>
      )}

      {status === 'processing' && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">Processing Payment...</h2>
          <p className="mt-2">Please wait while we confirm your payment.</p>
        </div>
      )}

      {status === 'failed_try_again' && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
          <p className="mt-2">Please try again with a different payment method.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-2">An error occurred while processing your payment.</p>
        </div>
      )}
    </div>
  );
}