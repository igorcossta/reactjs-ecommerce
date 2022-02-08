import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  STATE,
  TOGGLE_CART_HIDDEN,
} from './cart.constant';
import { Action, CartState } from './cart.interface';
import { addItemToCart, decreaseItemQuantity } from './cart.utils';

const cartReducer = (state = STATE, action: Action): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.cartItem),
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.cartItem.id
        ),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(
          state.cartItems,
          action.payload.cartItem
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
