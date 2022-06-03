import React from 'react';
import MenuItem from '../menu-item';
import { Container } from './styles';
import STATE from '../../redux/directory/directory.data';

const Directory: React.FC = () => {
  const directories = STATE;

  return (
    <Container>
      {directories.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </Container>
  );
};

export default Directory;
