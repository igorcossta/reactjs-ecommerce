import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { SyntheticEvent, useState } from 'react';
import { Profile } from '../../commom/user.type';
import { auth } from '../../firebase/firebase.config';
import { createUserProfile } from '../../firebase/firebase.utils';
import Button from '../button';
import Input from '../input';
import './styles.scss';

const SignUp: React.FC = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setconfirmPassword] = useState<string>('');

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;

        const profile = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        } as Profile;

        await createUserProfile(profile, { displayName: displayName })
          .then(() => {})
          .catch((error) =>
            alert('something went wrong saving your data on database')
          );

        setDisplayName('');
        setEmail('');
        setPassword('');
        setconfirmPassword('');
      })
      .catch((error) => alert('something went wrong with your registration'));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    if (name === 'displayName') setDisplayName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setconfirmPassword(value);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={onSubmit}>
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
    </div>
  );
};

export default SignUp;
