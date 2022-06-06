import { User } from 'firebase/auth';
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer.utils';
import { AppUser, USER_ACTIONS_TYPES } from './user.constant';

/**
 * Sign-up actions
 */

export type SignUpStart = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_SUCCESS,
  { data: User; displayName: string }
>;
export type SignUpFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_FAILED,
  Error
>;

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (data: User, displayName: string): SignUpSuccess =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, {
      data,
      displayName,
    })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error)
);

/**
 * Sign-in actions
 */

export type EmailSignInStart = ActionWithPayload<
  USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type GoogleSignInStart = ActionWithPayload<
  USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START,
  {}
>;
export type SignInSuccess = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_IN_SUCCESS,
  AppUser
>;
export type SignInFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_IN_FAILED,
  Error
>;

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    })
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart =>
    createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, {})
);

export const signInSuccess = withMatcher(
  (user: AppUser): SignInSuccess =>
    createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error)
);

// Sign-out actions

export type SignOutStart = Action<USER_ACTIONS_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTIONS_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error)
);

// User details actions

export type SetCurrentUser = ActionWithPayload<
  USER_ACTIONS_TYPES.SET_CURRENT_USER,
  AppUser
>;
export type CheckUserSession = Action<USER_ACTIONS_TYPES.CHECK_USER_SESSION>;

export const setCurrentUser = withMatcher(
  (user: AppUser): SetCurrentUser =>
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
);

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION)
);
