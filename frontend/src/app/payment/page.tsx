"use client";

import { StripeElementsOptions } from "@stripe/stripe-js";
import { CheckoutForm } from "@/components/stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStoreStripe } from "@/store/storeStripe";
import { notFound } from "next/navigation";
import XProtectedRoute from "@/components/XProtectedRoute";
import { useEffect, useState } from "react";

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

  const [theme, setTheme] = useState<'night' | 'stripe'>('stripe');

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDarkMode ? 'night' : 'stripe');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'night' : 'stripe');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const appearance = {
    theme: theme,
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <XProtectedRoute>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </XProtectedRoute>
  );
}
