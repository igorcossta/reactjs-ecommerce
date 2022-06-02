import { AnyAction } from 'redux';
import {
  toggleCart,
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
} from './cart.action';
import { Item } from './cart.constant';
import { addItem, decreaseItem, removeItem } from './cart.utils';

export type CartState = {
  isCartHidden: boolean;
  cartItems: Item[];
};

export const STATE: CartState = {
  isCartHidden: true,
  cartItems: [],
};

const cartReducer = (state = STATE, action: AnyAction): CartState => {
  if (toggleCart.match(action)) {
    return { ...state, isCartHidden: !state.isCartHidden };
  }

  if (addItemToCart.match(action)) {
    return {
      ...state,
      cartItems: addItem(state.cartItems, action.payload),
    };
  }

  if (removeItemFromCart.match(action)) {
    return {
      ...state,
      cartItems: removeItem(state.cartItems, action.payload),
    };
  }

  if (decreaseItemQuantity.match(action)) {
    return {
      ...state,
      cartItems: decreaseItem(state.cartItems, action.payload),
    };
  }

  return state;
};

export default cartReducer;
