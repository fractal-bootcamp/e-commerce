// this is a controller that uses the payment-intent service to create a payment intent
// it also validates the request body

import { z } from 'zod';
import { createPaymentIntent } from '../../services/stripe/payment-intent.service';
import type { PaymentIntentResponse } from '../../types/stripe';
import type { Request, Response } from 'express';
import { withLogging } from "../../utils/withLogging";
import { calculateOrderAmount } from '../../utils/calculate-total';

const createPaymentIntentSchema = z.object({
  cart: z.object({
    items: z.array(z.object({
      id: z.string(),
      quantity: z.number(),
      priceInCents: z.number(),
    })),
  }),
  currency: z.string(),
  metadata: z.record(z.string(), z.string()),
  orderId: z.string(),
});

export const handleCreatePaymentIntent = withLogging("handleCreatePaymentIntent", false, async (req: Request, res: Response) => {
  try {
    // validate the request body
    const { cart, currency, metadata, orderId } = createPaymentIntentSchema.parse(req.body);
    // calculate the total to charge the customer
    const amount = calculateOrderAmount(cart);
    // create the payment intent
    const paymentIntent: PaymentIntentResponse = await createPaymentIntent({ amount, currency, metadata, orderId });
    // return the payment intent
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});