import React from 'react';
import { ReactComponent as NotFoundSvg } from '../../assets/not-found.svg';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <NotFoundSvg />
    </Container>
  );
};

export default NotFound;
