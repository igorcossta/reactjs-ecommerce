import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './app.scss';
import { Profile } from './commom/user.type';
import Header from './components/header';
import { auth } from './firebase/firebase.config';

const App: React.FC = () => {
  const [user, setUser] = useState<Profile>({} as Profile);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      } else {
        setUser({} as Profile);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={user} />
      <Outlet />
    </div>
  );
};

export default App;
