import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview';
import SHOP_DATA, { Props } from './shop.data';
import './styles.scss';

const ShopPage: React.FC = () => {
  const [collections, setCollections] = useState<Props[]>(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map((i) => (
        <CollectionPreview key={i.id} title={i.title} items={i.items} />
      ))}
    </div>
  );
};

export default ShopPage;
