export type CartProduct = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  country: string;
  category?: string;
  inventory_count: number;
  quantity: number;
}

export type CartStore = {
  items: CartProduct[];
  addItem: (product: CartProduct, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
