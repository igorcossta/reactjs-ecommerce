import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: '***',
  authDomain: '***',
  projectId: '***',
  storageBucket: '***',
  messagingSenderId: '***',
  appId: '***',
  measurementId: '***',
};

// initialize firebase
const firebase = initializeApp(config);

// initialize firebase authentication
export const auth = getAuth();

// initialize sign in with Google Account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
