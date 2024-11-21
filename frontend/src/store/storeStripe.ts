import { create } from "zustand";

type StoreStripe = {
  clientSecret: string | null;
  paymentIntentId: string | null;
  paymentStatus: string | null;
  setClientSecret: (clientSecret: string) => void;
  setPaymentIntentId: (paymentIntentId: string) => void;
  setPaymentStatus: (paymentStatus: string) => void;
};

export const useStoreStripe = create<StoreStripe>((set) => ({
  clientSecret: null,
  paymentIntentId: null,
  paymentStatus: null,
  setClientSecret: (clientSecret: string) => set({ clientSecret }),
  setPaymentIntentId: (paymentIntentId: string) => set({ paymentIntentId }),
  setPaymentStatus: (paymentStatus: string) => set({ paymentStatus }),
}));
