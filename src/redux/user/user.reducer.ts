import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
} from './user.constant';
import { UserAction, UserReducerState } from './user.interface';

const STATE: UserReducerState = {
  currentUser: undefined,
  isLoading: false,
  error: undefined,
};

const userReducer = (state = STATE, action: UserAction): UserReducerState => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload.user,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: undefined,
      };
    case SIGN_OUT_FAILED:
    case SIGN_UP_FAILED:
    case SIGN_IN_FAILED:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};

export default userReducer;
