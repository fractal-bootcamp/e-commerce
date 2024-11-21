"use client";

import { StripeElementsOptions } from "@stripe/stripe-js";
import { CheckoutForm } from "@/components/stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStoreStripe } from "@/store/storeStripe";
import { notFound } from "next/navigation";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage() {
  const { clientSecret } = useStoreStripe();

  if (!clientSecret) {
    console.log("No client secret found in global state");
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
