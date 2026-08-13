export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  icon: string;
  rx: boolean;
}

export interface CartItem {
  id: number;
  qty: number;
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
  items: OrderItem[];
  total: number;
  date: string;
}

export type Category = "All" | "Pain Relief" | "Cold & Fever" | "Vitamins" | "Healthcare";
