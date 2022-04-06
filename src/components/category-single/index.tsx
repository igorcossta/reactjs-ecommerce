import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card';
import { useAppSelector } from '../../hooks/redux.hooks';
import {
  categoriesIsLoading,
  selectCategory,
} from '../../redux/category/category.selector';
import './styles.scss';
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
        <div className="collection-page">
          <h2 className="title">{category?.title}</h2>
          <div className="items">
            {category?.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategorySingle;
