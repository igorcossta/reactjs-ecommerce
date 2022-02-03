import React from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import './styles.scss';

const SignInSignUp: React.FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
