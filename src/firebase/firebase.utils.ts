import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Options } from '../commom/options.type';
import { Profile } from '../commom/user.type';
import { db } from './firebase.config';

export const createUserProfile = async (user: Profile, options?: Options) => {
  const docRef = doc(db, `users/${user?.uid}`);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return await setDoc(
      docRef,
      {
        displayName: options?.displayName
          ? options.displayName
          : user.displayName,
        email: user.email,
        photoURL:
          user.photoURL === null
            ? `https://avatars.dicebear.com/api/initials/${user.email}.svg`
            : user.photoURL,
        uid: user.uid,
      },
      { merge: true }
    );
  }
  throw new Error('user alredy exists');
};
