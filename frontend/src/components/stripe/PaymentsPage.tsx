import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export function PaymentsPage({ paymentOptions }: { paymentOptions: StripeElementsOptions }) {
  const appearance = {
    theme: 'night' as const,
  };

  const updatedOptions = {
    ...paymentOptions,
    appearance,
  };

  return (
    <div className="dark:text-white">
      <Elements stripe={stripePromise} options={updatedOptions}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}