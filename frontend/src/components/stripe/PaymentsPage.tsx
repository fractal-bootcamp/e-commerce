import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// this is a stripe public key
const stripePromise = loadStripe('pk_test_51QMzu9Cv58AbF4KC0RLhTFUCJDhg1U4HHQHNkpB6boCepcoZtMKSf6p9B1L56xytCLmiTbVsxqvOKUMZERDqu0v700TXkt4SOV');

export function PaymentsPage({ paymentOptions }: { paymentOptions: StripeElementsOptions }) {
  return (
    <Elements stripe={stripePromise} options={paymentOptions}>
      <CheckoutForm />
    </Elements>
  );
}