import { CART_ADD_ITEM, STATE, TOGGLE_CART_HIDDEN } from './cart.constant';
import { Action, CartState } from './cart.interface';
import { addItemToCart } from './cart.utils';

const cartReducer = (state = STATE, action: Action): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.cartItem),
      };
    default:
      return state;
  }
};

export default cartReducer;
