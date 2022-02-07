import { SET_CURRENT_USER, STATE } from './user.constant';
import { Action } from './user.interface';

const userReducer = (state = STATE, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.credentials,
      };
    default:
      return state;
  }
};

export default userReducer;
