import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux.hooks';
import './styles.scss';

const ShopPage: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ShopPage;
