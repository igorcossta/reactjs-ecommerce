import { CategoryItem } from '../category/category.constant';

export enum CART_ACTION_TYPES {
  TOGGLE_CART = 'cart/TOGGLE_CART',
  ADD_ITEM_TO_CART = 'cart/ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'cart/REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM_QUANTITY = 'cart/DECREASE_ITEM_QUANTITY',
}

export type Item = CategoryItem & {
  quantity: number;
};
