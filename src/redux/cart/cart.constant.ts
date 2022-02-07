import { CartState } from './cart.interface';

export const TOGGLE_CART_HIDDEN = 'cart/toggle';
export const CART_ADD_ITEM = 'cart/addItem';

export const STATE: CartState = {
  hidden: true,
  cartItems: [],
};
