import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import {
  createUserDoc,
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from '../../firebase/firebase.utils';
import {
  EmailSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  SignUpSuccess,
  signUpSuccess,
} from './user.action';
import { USER_ACTIONS_TYPES } from './user.constant';

/**
 * Sign-up
 */

export function* sagaSignUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(signUpWithEmail, email, password);

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, displayName));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* sagaSignInAfterSignUp({
  payload: { data, displayName },
}: SignUpSuccess) {
  try {
    const res = yield* call(createUserDoc, data, { displayName });
    yield* put(signInSuccess(res.data()));
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, sagaSignUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, sagaSignInAfterSignUp);
}

/**
 * Sign-in
 */

export function* sagaSignInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const { user } = yield* call(signInWithEmail, email, password);
    const res = yield* call(createUserDoc, user);
    yield* put(signInSuccess(res.data()));
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onSignInWithEmailStart() {
  yield* takeLatest(
    USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
    sagaSignInWithEmail
  );
}

/**
 * Sign-out
 */

export function* sagaSignOutStart() {
  try {
    yield* call(signOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, sagaSignOutStart);
}

/**
 * user saga
 */

export function* userSaga() {
  yield* all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignInWithEmailStart),
    call(onSignOutStart),
  ]);
}
