import { createSelector } from 'reselect';
import { RootState } from '../store';

import memoize from 'lodash.memoize';

export const selectAllCollections = createSelector(
  (state: RootState) => state.shop,
  (collections) => collections
);

export const selectCollectionForPreview = createSelector(
  [selectAllCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize(
  (collectionUrlParam: string | undefined) =>
    createSelector([selectAllCollections], (collections) => {
      if (collectionUrlParam) return collections[collectionUrlParam];
    })
);
