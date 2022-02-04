import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Profile } from '../../commom/user.type';
import { auth } from '../../firebase/firebase.config';
import './styles.scss';

export interface Props {
  currentUser: Profile;
}

const Header: React.FC<Props> = ({ currentUser }) => {
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
        {currentUser.uid ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
