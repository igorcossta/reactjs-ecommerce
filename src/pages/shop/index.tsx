import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

const ShopPage: React.FC = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ShopPage;
