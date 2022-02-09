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
        <img src={imageUrl} alt="item" />
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
