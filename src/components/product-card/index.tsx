import React from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { addItemToCart } from '../../redux/cart/cart.action';
import Button from '../button';
import { Container, Image, Footer } from './styles';

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
    <Container>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>
      <Button
        inverted
        onClick={() =>
          dispatch(addItemToCart({ id, imageUrl, price, name, quantity: 1 }))
        }
      >
        ADD TO CART
      </Button>
    </Container>
  );
};

export default ProductCard;
