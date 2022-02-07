import { TOGGLE_CART_HIDDEN, CART_ADD_ITEM } from './cart.constant';
import { CartItem } from './cart.interface';

export const toggleCart = () => ({
  type: TOGGLE_CART_HIDDEN,
  payload: {
    cartItem: {} as CartItem,
  },
});

export const addItemToCart = (item: CartItem) => ({
  type: CART_ADD_ITEM,
  payload: {
    cartItem: item,
  },
});
