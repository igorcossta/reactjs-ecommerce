import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Image } from './styles';

interface Props {
  title: string;
  imageUrl?: string;
  linkUrl?: string;
  size?: string;
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`${linkUrl}`)}>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Content>
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </Content>
    </Container>
  );
};

export default MenuItem;
