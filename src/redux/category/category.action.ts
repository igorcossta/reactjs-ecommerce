import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_SUCCESS,
} from './category.constant';
import { CategoriesMap } from './category.interface';

export const fetchCategoriesStart = () => ({
  type: FETCH_CATEGORY_START,
  payload: {},
});

export const fetchCategoriesSuccess = (categories: CategoriesMap) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: { categories },
});

export const fetchCategoriesFailed = () => ({
  type: FETCH_CATEGORY_FAILED,
  payload: {},
});
