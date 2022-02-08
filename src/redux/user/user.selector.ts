import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCurrentUser = createSelector(
  (state: RootState) => state.user,
  (user) => user.currentUser
);
