import { updateProfile } from 'firebase/auth';
import React, { useEffect, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles';
import Header from './components/header';
import {
  createUserDoc,
  onAuthStateChangedListener,
} from './firebase/firebase.utils';
import { useAppDispatch } from './hooks/redux.hooks';
import { setCurrentUser } from './redux/user/user.action';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        const res = await createUserDoc(user);
        await updateProfile(user, res.data());
        dispatch(setCurrentUser(res.data()));
      } else {
        dispatch(setCurrentUser(undefined));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Fragment>
      <Header />
      <Outlet />

      <GlobalStyles />
    </Fragment>
  );
};

export default App;
