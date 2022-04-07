import React from 'react';
import MenuItem from '../menu-item';
import { Container } from './styles';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectDirectories } from '../../redux/directory/directory.selector';

const Directory: React.FC = () => {
  const directories = useAppSelector(selectDirectories);

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
