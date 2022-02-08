import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { toggleCart } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';
import Button from '../button';
import CartItem from '../cart-item';
import './styles.scss';

const Dropdown: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((i) => <CartItem key={i.id} item={i} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          dispatch(toggleCart());
          navigate(`/checkout`);
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default Dropdown;
