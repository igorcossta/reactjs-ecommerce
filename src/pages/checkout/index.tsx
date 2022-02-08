import React from 'react';
import CheckoutItem from '../../components/checkout-item';
import { useAppSelector } from '../../hooks/redux.hooks';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.scss';

const CheckoutPage: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
