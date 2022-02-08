import React from 'react';
import { CartItem } from '../../redux/cart/cart.interface';
import './styles.scss';

interface Props {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<Props> = ({
  cartItem: { imageUrl, name, price, quantity },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="item"
        />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
