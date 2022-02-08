import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCartItems = createSelector(
  (state: RootState) => state.cart.cartItems,
  (items) => items
);

export const selectCartItemsCount = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((prev, next) => prev + next.quantity, 0)
);

export const selectCartHidden = createSelector(
  (state: RootState) => state.cart.hidden,
  (hidden) => hidden
);

export const selectCartTotal = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((prev, next) => prev + next.quantity * next.price, 0)
);
