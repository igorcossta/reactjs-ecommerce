import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
