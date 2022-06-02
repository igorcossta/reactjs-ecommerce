import { createSelector } from 'reselect';
import { RootState } from '../store';
import { Item } from './cart.constant';
import { CartState } from './cart.reducer';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: Item[]) =>
    cartItems.reduce((prev, next) => prev + next.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartHidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((prev, next) => prev + next.quantity * next.price, 0)
);
