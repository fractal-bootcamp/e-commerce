export type ProductListProps = {
  country: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  country: Country;
  category?: string;
  inventory_count: number;
  price: number;
  stripePriceId?: string;
  stripeProductId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CreateProductProps = {
  product: Omit<Product, "id" | "createdAt" | "updatedAt" | "stripePriceId" | "stripeProductId">;
};

export enum Country {
  JAPAN = "JAPAN",
  SOUTH_KOREA = "SOUTH_KOREA",
  THAILAND = "THAILAND",
  TAIWAN = "TAIWAN",
  CHINA = "CHINA",
  INDONESIA = "INDONESIA",
  PHILIPPINES = "PHILIPPINES",
  MEXICO = "MEXICO",
  INDIA = "INDIA",
  AUSTRALIA = "AUSTRALIA",
  PERU = "PERU",
  SPAIN = "SPAIN",
  SRI_LANKA = "SRI_LANKA",
}

export type Order = {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  paymentId?: string;
  paymentStatus?: string;
  orderStatus: OrderStatus;
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}
