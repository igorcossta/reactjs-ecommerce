import React from 'react';
import Button from '../button';
import './styles.scss';

const Dropdown: React.FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default Dropdown;
