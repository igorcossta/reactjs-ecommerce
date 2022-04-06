import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_SUCCESS,
} from './category.constant';
import { Action, CategoryReducerState } from './category.interface';

const STATE = {
  categories: {},
  isLoading: false,
  hasError: false,
};

const categoryReducer = (
  state = STATE,
  action: Action
): CategoryReducerState => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORY_START:
      return { ...state, isLoading: true };
    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categories: payload.categories, isLoading: false };
    case FETCH_CATEGORY_FAILED:
      return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
};

export default categoryReducer;
