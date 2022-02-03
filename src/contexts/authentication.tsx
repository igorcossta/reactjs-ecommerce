import { useEffect, useState } from 'react';
import { AuthStateContext, User } from '.';
import { auth } from '../firebase/firebase.utils';

const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          uid: user?.uid,
        });
        setSigned(true);
      } else {
        setUser(undefined);
        setSigned(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    signed,
    user,
  };

  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
