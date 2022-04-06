import {
  createUserWithEmailAndPassword,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  User as UserFirebase,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { CategoriesMap } from '../redux/category/category.interface';
import { User } from '../redux/user/user.interface';
import { auth, db } from './firebase.config';

export const signOut = () => signOutFirebase(auth);

export const signUpWithEmail = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmail = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const onAuthStateChangedListener = (
  callback: NextOrObserver<UserFirebase>
) => onAuthStateChanged(auth, callback);

interface Options {
  displayName?: string;
  photoURL?: string;
}

export const createUserDoc = async (
  user: UserFirebase,
  options?: Options
): Promise<QueryDocumentSnapshot<User>> => {
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const { displayName, email, uid } = user;
      const banner = email?.charAt(0);
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL: `https://avatars.dicebear.com/api/initials/${banner}.svg`,
        uid,
        ...options,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<User>;
};

export const createCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: {}[]
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((obj) => {
    const newObjRef = doc(collectionRef);
    batch.set(newObjRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: QuerySnapshot) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((prev: any, next) => {
    prev[next.title.toLowerCase()] = next;
    return prev;
  }, {});
};

export const getCategoriesAndDocuments = async () => {
  const categories = collection(db, 'collections');
  const q = query(categories);

  const qSnapshot = await getDocs(q);
  const categoryMap = qSnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = { title, items };
    return acc;
  }, {} as CategoriesMap);

  return categoryMap;
};
