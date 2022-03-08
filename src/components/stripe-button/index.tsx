import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface Props {
  price: number;
}

const StripeButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = '***';

  const onToken = (token: string) => {
    console.log('payment sucessfull');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
