import React, { Fragment, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { fetchCategoriesAsync } from '../../redux/category/category.action';

const ShopPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default ShopPage;
