import React from 'react';
import './styles.scss';

interface Props {
  item: {
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}

const CartItem: React.FC<Props> = ({
  item: { quantity, name, imageUrl, price },
}) => {
  return (
    <div className="cart-item">
      <img
        src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="item"
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
