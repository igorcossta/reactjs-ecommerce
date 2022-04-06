export interface Action {
  type: string;
  payload: {
    categories: CategoriesMap | {};
  };
}

export interface CategoryReducerState {
  categories: CategoriesMap;
  isLoading: boolean;
  hasError: boolean;
}

export interface CategoriesMap {
  [key: string]: ProductStruct;
}

export interface ProductStruct {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}
