import { SET_CURRENT_USER } from './user.constant';
import { UserAction, UserReducerState } from './user.interface';

const STATE: UserReducerState = {
  currentUser: undefined,
};

const userReducer = (state = STATE, action: UserAction): UserReducerState => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
