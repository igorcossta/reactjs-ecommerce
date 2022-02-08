import {
  TOGGLE_CART_HIDDEN,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
} from './cart.constant';
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

export const removeItemFromCart = (item: CartItem) => ({
  type: CART_REMOVE_ITEM,
  payload: {
    cartItem: item,
  },
});

export const decreaseItemQuantity = (item: CartItem) => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: {
    cartItem: item,
  },
});
