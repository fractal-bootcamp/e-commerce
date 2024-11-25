"use client";

import PaymentStatus from "@/components/stripe/PaymentStatus";
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Check if required params exist
  const redirectStatus = searchParams.get('redirect_status');
  const paymentIntent = searchParams.get('payment_intent');

  // Redirect to checkout if no payment params
  if (!redirectStatus || !paymentIntent) {
    router.push('/checkout');
    return null;
  }

  return <PaymentStatus redirectStatus={redirectStatus} />;
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentStatusContent />
    </Suspense>
  );
}
