import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectDirectories = createSelector(
  (state: RootState) => state.directory,
  (directory) => directory
);
