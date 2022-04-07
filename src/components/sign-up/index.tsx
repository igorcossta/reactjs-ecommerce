import React, { useState } from 'react';
import { createUserDoc, signUpWithEmail } from '../../firebase/firebase.utils';
import Button from '../button';
import Input from '../input';
import { Container } from './styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }

    try {
      const { user } = await signUpWithEmail(email, password);
      await createUserDoc(user, { displayName });
    } catch (error: any) {
      console.log(error);
    }

    resetFormFields();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <Container>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit} method="post">
        <Input
          type="text"
          name="displayName"
          value={displayName}
          handleChange={onChange}
          label="display name"
          required
        />
        <Input
          type="email"
          name="email"
          value={email}
          handleChange={onChange}
          label="email"
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          handleChange={onChange}
          label="password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={onChange}
          label="confirm password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </Container>
  );
};

export default SignUp;
