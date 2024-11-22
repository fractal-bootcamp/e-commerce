import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useStoreStripe } from '@/store/storeStripe';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { clientSecret } = useStoreStripe();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<{
    amount: number;
    currency: string;
  } | null>(null);

  useEffect(() => {
    if (stripe && elements && clientSecret) {
      // Fetch payment intent details
      stripe.retrievePaymentIntent(clientSecret)
        .then(({ paymentIntent }) => {
          if (paymentIntent) {
            setPaymentDetails({
              amount: paymentIntent.amount / 100, // Convert from cents to dollars
              currency: paymentIntent.currency
            });
          }
        });
    }
  }, [stripe, elements]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI}/payment/status`,
      },
    });


    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message || 'An error occurred');
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {paymentDetails && (
        <div className="mb-4 text-2xl font-bold">
          Amount to pay: ${paymentDetails.amount.toFixed(2)}
        </div>
      )}
      <PaymentElement onReady={() => setIsLoading(false)} />
      {!isLoading && (
        <button
          disabled={!stripe}
          className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition-colors"
        >
          Submit
        </button>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;