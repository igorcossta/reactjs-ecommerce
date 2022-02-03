import React from 'react';
import { Outlet } from 'react-router-dom';

import './app.scss';
import Header from './components/header';
import AuthProvider from './contexts/authentication';

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <Header />
      </AuthProvider>
      <Outlet />
    </div>
  );
};

export default App;
