export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface Order {
  id: string;
  total: number;
  orderStatus: OrderStatus;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
