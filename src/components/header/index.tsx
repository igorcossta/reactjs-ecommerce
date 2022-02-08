import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.config';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import Dropdown from '../cart-dropdown';
import CartIcon from '../cart-icon';
import './styles.scss';

const Header: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const hidden = useAppSelector(selectCartHidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser?.uid ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Dropdown />}
    </div>
  );
};

export default Header;
