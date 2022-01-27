import React, { useState } from 'react';
import MenuItem from '../menu-item';
import SECTION_DATA, { Props } from './directory.data';
import './styles.scss';

const Directory: React.FC = () => {
  const [sections, setSections] = useState<Props[]>(SECTION_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
