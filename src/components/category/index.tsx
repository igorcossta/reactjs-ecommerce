import React, { Fragment } from 'react';
import { ProductStruct } from '../../redux/category/category.interface';
import ProductCard from '../product-card';
import { Container, Preview } from './styles';

const Category: React.FC<ProductStruct> = ({ title, items }) => {
  return (
    <Fragment>
      <Container>
        <h1>{title.toUpperCase()}</h1>
        <Preview>
          {items
            .filter((_, idx) => idx < 4)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </Preview>
      </Container>
    </Fragment>
  );
};

export default Category;
