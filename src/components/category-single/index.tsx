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

type CategoryParams = {
  categoryId: string;
};

const CategorySingle: React.FC = () => {
  const { categoryId } = useParams<keyof CategoryParams>() as CategoryParams;
  const category = useAppSelector(selectCategory(categoryId));
  const isLoading = useAppSelector(categoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <h1>{categoryId?.toUpperCase()}</h1>
          <Items>
            {category &&
              category.map((i) => <ProductCard key={i.id} item={i} />)}
          </Items>
        </Container>
      )}
    </Fragment>
  );
};

export default CategorySingle;
