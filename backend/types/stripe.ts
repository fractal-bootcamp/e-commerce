import type { Cart } from "./cart";

// backend/src/types/stripe.ts
export type CreatePaymentIntentDto = {
  amount: number;
  currency?: string;
  metadata?: Record<string, string>;
  orderId: string;
}

export type CreatePaymentIntentRequest = {
  cart: Cart;
  currency?: string;
  metadata?: Record<string, string>;
}

export type PaymentIntentResponse = {
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
} 