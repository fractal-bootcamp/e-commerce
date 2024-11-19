// backend/src/types/stripe.ts
export type CreatePaymentIntentDto = {
  amount: number;
  currency?: string;
  metadata?: Record<string, string>;
  orderId: string;
}

export type PaymentIntentResponse = {
  clientSecret: string;
  paymentIntentId: string;
} 