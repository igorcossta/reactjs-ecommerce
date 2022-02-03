import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { SyntheticEvent, useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../button';
import Input from '../input';
import './styles.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    );
    setEmail('');
    setPassword('');
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget;
    if (name === 'email') setEmail(value);
    else setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          required
          handleChange={onChange}
          label="email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          required
          handleChange={onChange}
          label="password"
        />
        <div className="buttons">
          <Button type="submit" value="submit form">
            Sign In
          </Button>
          <Button isGoogleSignIn onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
