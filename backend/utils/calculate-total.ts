import type { Cart, CartItem } from '../types/cart';

export const calculateItemTotal = (item: CartItem): number => {
  return item.quantity * item.priceInCents;
}

export const calculateCartTotal = (cart: Cart): number => {
  return cart.items.reduce((total, item) => total + calculateItemTotal(item), 0);
}

export const calculateOrderAmount = (cart: Cart): number => {
  const subtotal = calculateCartTotal(cart);
  const tax = cart.tax || 0;
  const shipping = cart.shipping || 0;
  const total = subtotal + tax + shipping;

  return total;
}