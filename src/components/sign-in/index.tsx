import React, { useState } from 'react';
import { signInWithEmail } from '../../firebase/firebase.utils';
import Button from '../button';
import Input from '../input';
import './styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmail(email, password);
    } catch (error: any) {
      console.log(error);
    }

    resetFormFields();
  };

  const googleSignIn = () => {};

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit} method="post">
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
          <Button isGoogleSignIn onClick={googleSignIn}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
