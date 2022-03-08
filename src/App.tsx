import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './app.scss';
import { Profile } from './commom/user.type';
import Header from './components/header';
import { auth } from './firebase/firebase.config';
import { useAppDispatch } from './hooks/redux.hooks';
import { setCurrentUser } from './redux/user/user.action';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const credentials = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        } as Profile;
        dispatch(setCurrentUser(credentials));
      } else {
        dispatch(setCurrentUser({} as Profile));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
