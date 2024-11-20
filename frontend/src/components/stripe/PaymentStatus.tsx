import { useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useStripeStore } from '@/app/store/stripeStore';

export const PaymentStatus = () => {
  const stripe = useStripe();
  const { setPaymentStatus, paymentStatus } = useStripeStore();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret || '')
      .then(({ paymentIntent }) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent?.status) {
          case 'succeeded':
            setPaymentStatus('success');
            break;

          case 'processing':
            setPaymentStatus('processing');
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setPaymentStatus('failed_try_again');
            break;

          default:
            setPaymentStatus('error');
            break;
        }
      });
  }, [stripe, setPaymentStatus]);


  return paymentStatus;
};