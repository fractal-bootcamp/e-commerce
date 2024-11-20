import { create } from 'zustand';

type StripeStore = {
  clientSecret: string | null;
  paymentIntentId: string | null;
  setClientSecret: (clientSecret: string) => void;
  setPaymentIntentId: (paymentIntentId: string) => void;
}

export const useStripeStore = create<StripeStore>((set) => ({
  clientSecret: null,
  paymentIntentId: null,
  setClientSecret: (clientSecret: string) => set({ clientSecret }),
  setPaymentIntentId: (paymentIntentId: string) => set({ paymentIntentId }),
}));