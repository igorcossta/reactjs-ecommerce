import React, { SyntheticEvent, useState } from 'react';
import Button from '../button';
import Input from '../input';
import './styles.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
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
        <Button type="submit" value="submit form">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
