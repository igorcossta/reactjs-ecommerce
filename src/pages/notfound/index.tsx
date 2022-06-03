import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Unfortunately the page does not exist!</h1>
      <Link to={'/'} replace>
        Shop new clothes
      </Link>
    </Container>
  );
};

export default NotFound;
