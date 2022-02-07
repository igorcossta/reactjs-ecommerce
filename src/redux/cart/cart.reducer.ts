import { STATE, TOGGLE_CART_HIDDEN } from './cart.constant';
import { Action } from './cart.interface';

const cartReducer = (state = STATE, action: Action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
