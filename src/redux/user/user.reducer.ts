import { AnyAction } from 'redux';
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from './user.action';
import { AppUser } from './user.constant';

export type UserState = {
  readonly currentUser: AppUser | undefined;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const STATE: UserState = {
  currentUser: undefined,
  isLoading: false,
  error: null,
};

const userReducer = (state = STATE, action: AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: undefined,
    };
  }

  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export default userReducer;
