import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/homepage';
import NotFound from '../pages/notfound';
import ShopPage from '../pages/shop';
import SignInSignUp from '../pages/sign-in-sign-up';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="signin" element={<SignInSignUp />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
