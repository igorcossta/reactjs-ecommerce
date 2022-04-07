import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from '../../firebase/firebase.utils';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import Dropdown from '../cart-dropdown';
import CartIcon from '../cart-icon';
import { LogoContainer, Navigation, NavLink, NavLinks } from './styles';

const Header: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const hidden = useAppSelector(selectCartHidden);

  const logout = async () => {
    await signOut();
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
          <div onClick={logout}>SIGN OUT</div>
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
