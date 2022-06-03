import React from 'react';
import { useAppSelector } from '../../hooks/redux.hooks';
import {
  categoriesIsLoading,
  selectCategories,
} from '../../redux/category/category.selector';
import Category from '../category';
import Spinner from '../spinner';
import { Container } from './styles';

const CategoryContainer: React.FC = () => {
  const categories = useAppSelector(selectCategories);
  const isLoading = useAppSelector(categoriesIsLoading);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((i) => {
          const { title, items } = i;
          return <Category key={title} title={title} items={items} />;
        })
      )}
    </Container>
  );
};

export default CategoryContainer;
