import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { toggleCart } from '../../redux/cart/cart.action';
import { TOGGLE_CART_HIDDEN } from '../../redux/cart/cart.constant';
import './styles.scss';

const CartIcon: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
