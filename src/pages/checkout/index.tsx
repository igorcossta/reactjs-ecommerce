import React, { Fragment } from 'react';
import CheckoutItem from '../../components/checkout-item';
import { useAppSelector } from '../../hooks/redux.hooks';
import { ReactComponent as EmptyCart } from '../../assets/empty_cart.svg';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import { Container, Header, Title, Total, Warning } from './styles';
import PaymentForm from '../../components/payment-form';

const CheckoutPage: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <Container>
      {cartItems.length >= 1 ? (
        <Fragment>
          <Header>
            <Title>
              <span>Product</span>
            </Title>
            <Title>
              <span>Description</span>
            </Title>
            <Title>
              <span>Quantity</span>
            </Title>
            <Title>
              <span>Price</span>
            </Title>
            <Title>
              <span></span>
            </Title>
          </Header>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>
            <span>${cartTotal}</span>
          </Total>
          <PaymentForm />
        </Fragment>
      ) : (
        <Fragment>
          <h3>Your cart is empty</h3>
          <EmptyCart />
        </Fragment>
      )}
    </Container>
  );
};

export default CheckoutPage;
