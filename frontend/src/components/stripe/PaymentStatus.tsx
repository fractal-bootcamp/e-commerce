import { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useStoreStripe } from "@/app/store/storeStripe";

export const PaymentStatus = () => {
  const stripe = useStripe();
  const { setPaymentStatus } = useStoreStripe();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret || "").then(({ paymentIntent }) => {
      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      switch (paymentIntent?.status) {
        case "succeeded":
          console.log("Payment succeeded");
          setPaymentStatus("success");
          return (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
              <p className="mt-2">Thank you for your payment.</p>
            </div>
          );

        case "processing":
          setPaymentStatus("processing");
          return (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-600">Processing Payment...</h2>
              <p className="mt-2">Please wait while we confirm your payment.</p>
            </div>
          );

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setPaymentStatus("failed_try_again");
          return (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
              <p className="mt-2">Please try again with a different payment method.</p>
            </div>
          );

        default:
          setPaymentStatus("error");
          return (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
              <p className="mt-2">An error occurred while processing your payment.</p>
            </div>
          );
      }
    });
  }, [stripe, setPaymentStatus]);

  return null;
};
