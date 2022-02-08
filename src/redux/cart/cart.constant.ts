import { CartState } from './cart.interface';

export const TOGGLE_CART_HIDDEN = 'cart/toggle';
export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

export const STATE: CartState = {
  hidden: true,
  cartItems: [],
};
