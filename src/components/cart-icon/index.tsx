import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { toggleCart } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './styles.scss';

const CartIcon: React.FC = () => {
  const quantity = useAppSelector(selectCartItemsCount);
  const dispatch = useAppDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

export default CartIcon;
