"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PaymentStatus({ redirectStatus }: { redirectStatus: string }) {
  const router = useRouter();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (redirectStatus === 'succeeded') {
      setMessage('Payment successful!');
    } else if (redirectStatus === 'processing') {
      setMessage('Your payment is processing...');
    } else if (redirectStatus === 'failed') {
      setMessage('Payment failed. Please try again.');
    }
  }, [redirectStatus]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        {redirectStatus === 'succeeded' && (
          <div className="text-center">
            <div className="mb-4 text-green-600">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="mt-2 text-gray-600">{message}</p>
            <button
              onClick={() => router.push('/')}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        )}

        {redirectStatus === 'processing' && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-blue-600">Processing Payment...</h2>
            <p className="mt-2 text-gray-600">{message}</p>
          </div>
        )}

        {(redirectStatus === 'failed' || !redirectStatus) && (
          <div className="text-center">
            <div className="mb-4 text-red-600">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="mt-2 text-gray-600">{message}</p>
            <button
              onClick={() => router.push('/checkout')}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
