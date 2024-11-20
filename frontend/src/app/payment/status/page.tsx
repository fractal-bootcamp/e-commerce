'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentStatus } from '@/components/stripe/PaymentStatus';
//import { useStripeStore } from '@/app/store/stripeStore';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentStatusPage() {
  //const { paymentStatus } = useStripeStore();

  return (
    <Elements stripe={stripePromise}>
      <PaymentStatus />
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {paymentStatus === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="mt-2">Thank you for your payment.</p>
          </div>
        )}

        {paymentStatus === 'processing' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600">Processing Payment...</h2>
            <p className="mt-2">Please wait while we confirm your payment.</p>
          </div>
        )}

        {paymentStatus === 'failed_try_again' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="mt-2">Please try again with a different payment method.</p>
          </div>
        )}

        {paymentStatus === 'error' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
            <p className="mt-2">An error occurred while processing your payment.</p>
          </div>
        )}
      </div> */}
    </Elements>
  );
}