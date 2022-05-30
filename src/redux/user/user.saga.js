import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import {
  getCurrentUser,
  createUserDoc,
  signInWithEmail,
  signOut,
} from '../../firebase/firebase.utils';

import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutFailed,
  signOutSuccess,
} from './user.action';
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './user.constant';

export function* getSnapshotFromUserAuth(userAuth, options) {
  try {
    const userSnapshot = yield call(createUserDoc, userAuth, options);
    yield put(signInSuccess(userSnapshot.data()));
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    // TODO: create a func to login with google
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmail, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export function* signUpAccount(email, password, displayName) {
  try {
    const { user } = yield call(createUserDoc, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error.message));
  }
}

export function* signInAfterSignUp({ payload: { userAuth, options } }) {
  try {
    yield call(getSnapshotFromUserAuth, userAuth, options);
  } catch (error) {
    yield put(signUpFailed(error.message));
  }
}

export function* signOutAccount() {
  try {
    yield call(signOut);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOutAccount);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpAccount);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
