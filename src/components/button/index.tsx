import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
