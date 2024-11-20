// this is a service that uses stripe to create a payment intent

import { stripe } from "../../utils/stripe";
import type { CreatePaymentIntentDto, PaymentIntentResponse } from "../../types/stripe";
import Stripe from "stripe";

export const createPaymentIntent = async ({
  amount,
  currency = "usd",
  metadata = {},
  orderId,
}: CreatePaymentIntentDto): Promise<PaymentIntentResponse> => {
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    metadata: {
      ...metadata,
      orderId: orderId,
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return {
    clientSecret: paymentIntent.client_secret!,
    paymentIntentId: paymentIntent.id,
  };
};
