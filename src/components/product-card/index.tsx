import React from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { addItemToCart } from '../../redux/cart/cart.action';
import Button from '../button';
import './styles.scss';

interface Props {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { name, price, imageUrl, id } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        inverted
        onClick={() =>
          dispatch(addItemToCart({ id, imageUrl, price, name, quantity: 1 }))
        }
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
