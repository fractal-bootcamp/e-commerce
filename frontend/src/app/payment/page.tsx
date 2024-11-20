"use client";

import { StripeElementsOptions } from "@stripe/stripe-js";
import { CheckoutForm } from "@/components/stripe/CheckoutForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStripeStore } from '@/app/store/stripeStore';
import { notFound } from 'next/navigation';

const stripePromise = loadStripe('pk_test_51QMzu9Cv58AbF4KC0RLhTFUCJDhg1U4HHQHNkpB6boCepcoZtMKSf6p9B1L56xytCLmiTbVsxqvOKUMZERDqu0v700TXkt4SOV');

export default function PaymentPage() {

  const { clientSecret } = useStripeStore();

  if (!clientSecret) {
    console.log('No client secret');
    notFound();
  }

  const options: StripeElementsOptions = {
    clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}