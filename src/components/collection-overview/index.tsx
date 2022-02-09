import React from 'react';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview';
import './styles.scss';

const CollectionOverview: React.FC = () => {
  const collections = useAppSelector(selectCollectionForPreview);

  return (
    <div className="collection-overview">
      {collections.map((i) => (
        <CollectionPreview key={i.id} title={i.title} items={i.items} />
      ))}
    </div>
  );
};

export default CollectionOverview;
