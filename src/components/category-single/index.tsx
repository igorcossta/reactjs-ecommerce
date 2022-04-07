import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card';
import { useAppSelector } from '../../hooks/redux.hooks';
import {
  categoriesIsLoading,
  selectCategory,
} from '../../redux/category/category.selector';
import { Container, Items } from './styles';
import Spinner from '../spinner';

const CategorySingle: React.FC = () => {
  const { categoryId } = useParams();
  const category = useAppSelector(selectCategory(categoryId));
  const isLoading = useAppSelector(categoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <h2>{category?.title}</h2>
          <Items>
            {category?.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </Items>
        </Container>
      )}
    </Fragment>
  );
};

export default CategorySingle;
