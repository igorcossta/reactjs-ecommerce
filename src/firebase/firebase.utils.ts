import {
  createUserWithEmailAndPassword,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  User,
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
import { Category } from '../redux/category/category.constant';
import { AppUser } from '../redux/user/user.constant';
import { auth, db } from './firebase.config';

export const signOut = () => signOutFirebase(auth);

export const signUpWithEmail = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmail = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

interface Options {
  displayName?: string;
  photoURL?: string;
}

export const createUserDoc = async (
  user: User,
  options?: Options
): Promise<QueryDocumentSnapshot<AppUser>> => {
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

  const updatedSnapshot = await getDoc(userDocRef);
  return updatedSnapshot as QueryDocumentSnapshot<AppUser>;
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

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const categories = collection(db, 'collections');
  const q = query(categories);

  const qSnapshot = await getDocs(q);
  return qSnapshot.docs.map((i) => i.data() as Category);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
