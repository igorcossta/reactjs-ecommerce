import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <div className="button-spinner"></div> : children}
    </button>
  );
};

export default Button;
