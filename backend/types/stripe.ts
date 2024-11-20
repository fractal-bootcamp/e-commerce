import type { Cart } from "./cart";

// backend/src/types/stripe.ts
export type CreatePaymentIntentDto = {
  cart: Cart;
  currency?: string;
  metadata?: Record<string, string>;
  orderId: string;
}

export type PaymentIntentResponse = {
  clientSecret: string;
  paymentIntentId: string;
} 