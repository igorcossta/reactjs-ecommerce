import { getCategoriesAndDocuments } from '../../firebase/firebase.utils';
import { TypedDispatch } from '../store';
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

export const fetchCategoriesAsync = () => async (dispatch: TypedDispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed());
  }
};
