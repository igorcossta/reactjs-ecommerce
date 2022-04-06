import { createSelector } from 'reselect';
import { RootState } from '../store';

import memoize from 'lodash.memoize';

const selectCategoryReducer = (state: RootState) => state.category;

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategory = memoize((category: string | undefined) =>
  createSelector([selectCategoriesMap], (categories) => {
    if (category) return categories?.[category];
  })
);

export const categoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
