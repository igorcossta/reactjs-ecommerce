import STATE from './shop.data';
import { Action } from './shop.interface';

const shopReducer = (state = STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
