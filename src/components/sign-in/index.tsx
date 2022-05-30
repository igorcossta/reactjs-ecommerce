import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { emailSignInStart } from '../../redux/user/user.action';
import Button from '../button';
import Input from '../input';
import { Container, Buttons } from './styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
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
      dispatch(emailSignInStart(email, password));
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
    <Container>
      <h2>I already have an account</h2>
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
        <Buttons>
          <Button type="submit" value="submit form">
            Sign In
          </Button>
          <Button isGoogleSignIn onClick={googleSignIn}>
            Sign In with Google
          </Button>
        </Buttons>
      </form>
    </Container>
  );
};

export default SignIn;
