import React, { useEffect, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles';
import Header from './components/header';
import { checkUserSession } from './redux/user/user.action';
import { useAppDispatch } from './hooks/redux.hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
