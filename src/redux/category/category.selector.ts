import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryMap } from './category.constant';
import { CategoriesState } from './category.reducer';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategory = (category: string = 'sneackers') =>
  createSelector(
    selectCategoriesMap,
    (categories: CategoryMap) => categories[category]
  );

export const categoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
