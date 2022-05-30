import React, { Fragment, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { fetchCategoriesStart } from '../../redux/category/category.action';

const ShopPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default ShopPage;
