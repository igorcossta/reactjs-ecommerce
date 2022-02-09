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
      <img src={imageUrl} alt="item" />
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
