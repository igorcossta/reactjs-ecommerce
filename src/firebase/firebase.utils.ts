import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

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
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).then(() => {
    createUserProfile(auth.currentUser);
  });

export async function createUserProfile(
  user: User | null,
  options?: {
    displayName?: string;
  }
) {
  const docRef = doc(db, `users/${user?.uid}`);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    console.log('creating user');
    await setDoc(
      docRef,
      {
        displayName: options ? options.displayName : user?.displayName,
        email: user?.email,
        photoURL:
          user?.photoURL === null
            ? `https://avatars.dicebear.com/api/initials/${user.email}.svg`
            : user?.photoURL,
        uid: user?.uid,
      },
      { merge: true }
    );
  } else {
    console.log('user already exists');
  }
}

// initialize database
const db = getFirestore();

export default firebase;
