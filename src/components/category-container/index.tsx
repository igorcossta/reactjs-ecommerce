import React from 'react';
import { useAppSelector } from '../../hooks/redux.hooks';
import {
  categoriesIsLoading,
  selectCategoriesMap,
} from '../../redux/category/category.selector';
import Category from '../category';
import Spinner from '../spinner';
import { Container } from './styles';

const CategoryContainer: React.FC = () => {
  const categories = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(categoriesIsLoading);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const { items } = categories[title];
          return <Category key={title} title={title} items={items} />;
        })
      )}
    </Container>
  );
};

export default CategoryContainer;
