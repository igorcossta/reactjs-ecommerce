import React from 'react';
import CollectionItem from '../collection-item';
import './styles.scss';

interface Props {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
