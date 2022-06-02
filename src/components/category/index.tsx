import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category as ICategory } from '../../redux/category/category.constant';
import ProductCard from '../product-card';
import { Container, Preview } from './styles';

const Category: React.FC<Omit<ICategory, 'imageUrl'>> = ({ title, items }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`${title.toLowerCase()}`);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <Container>
        <h1 onClick={navigateTo}>{title.toUpperCase()}</h1>
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
