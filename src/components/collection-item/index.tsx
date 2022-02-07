import React from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { addItemToCart } from '../../redux/cart/cart.action';
import { CartItem } from '../../redux/cart/cart.interface';
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

const CollectionItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { name, price, imageUrl, id } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
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

export default CollectionItem;
