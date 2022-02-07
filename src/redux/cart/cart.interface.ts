export interface Action {
  type: string;
  payload: {
    cartItem: CartItem;
  };
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

export interface CartItem {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
