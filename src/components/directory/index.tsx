import React from 'react';
import MenuItem from '../menu-item';
import './styles.scss';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectDirectories } from '../../redux/directory/directory.selector';

const Directory: React.FC = () => {
  const directories = useAppSelector(selectDirectories);

  return (
    <div className="directory-menu">
      {directories.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
