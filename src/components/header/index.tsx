import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user.selector';
import Dropdown from '../cart-dropdown';
import CartIcon from '../cart-icon';
import {
  LogoContainer,
  Navigation,
  NavLink,
  NavLinks,
  SignOut,
} from './styles';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const hidden = useAppSelector(selectCartHidden);

  const logout = () => {
    dispatch(signOutStart());
  };

  return (
    <Navigation>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        {currentUser ? (
          <SignOut onClick={logout}>SIGN OUT</SignOut>
        ) : (
          <NavLink to="/signin">SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {hidden ? null : <Dropdown />}
    </Navigation>
  );
};

export default Header;
