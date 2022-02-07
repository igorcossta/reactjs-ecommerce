import React from 'react';
import { useAppSelector } from '../../hooks/redux.hooks';
import Button from '../button';
import CartItem from '../cart-item';
import './styles.scss';

const Dropdown: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((i) => (
          <CartItem key={i.id} item={i} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default Dropdown;
