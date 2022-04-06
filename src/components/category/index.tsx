import React, { Fragment } from 'react';
import { ProductStruct } from '../../redux/category/category.interface';
import ProductCard from '../product-card';
import './styles.scss';

const Category: React.FC<ProductStruct> = ({ title, items }) => {
  return (
    <Fragment>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((_, idx) => idx < 4)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
