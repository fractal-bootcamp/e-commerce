// Represents a single items in the cart
export type CartItem = {
  id: string;
  quantity: number;
  priceInCents: number;
}

// represents the entire cart with all items
export type Cart = {
  items: CartItem[];
  customerId?: string;
  tax?: number;
  shipping?: number;
}