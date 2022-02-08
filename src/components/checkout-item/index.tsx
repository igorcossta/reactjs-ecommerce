import React from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
} from '../../redux/cart/cart.action';
import { CartItem } from '../../redux/cart/cart.interface';
import './styles.scss';

interface Props {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="item"
        />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(decreaseItemQuantity(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
