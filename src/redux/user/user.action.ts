import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SET_CURRENT_USER,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './user.constant';
import { User } from './user.interface';

export const setCurrentUser = (user: User | undefined) => ({
  type: SET_CURRENT_USER,
  payload: { user },
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
  payload: {},
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
  payload: {},
});

export const emailSignInStart = (email: string, password: string) => ({
  type: EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user: any) => ({
  type: SIGN_IN_SUCCESS,
  payload: { user },
});

export const signInFailed = (error: string) => ({
  type: SIGN_IN_FAILED,
  payload: {},
});

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) => ({
  type: SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = (user: any, options: any) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, options },
});

export const signUpFailed = (error: string) => ({
  type: SIGN_UP_FAILED,
  payload: { error },
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
  payload: {},
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
  payload: {},
});

export const signOutFailed = (error: string) => ({
  type: SIGN_OUT_FAILED,
  payload: { error },
});
