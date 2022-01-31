import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { Outlet } from 'react-router-dom';

import './app.scss';
import Header from './components/header';
import { auth } from './firebase/firebase.utils';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Outlet />
    </div>
  );
};

export default App;
