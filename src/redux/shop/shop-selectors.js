import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
 // an iparxei to collections tote epistrepse to object alios epistrepse to collection me keno //   
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionFetching = createSelector(
[selectShop],
shop=> shop.isFetching
);

/* elegxei an to collection exei fortothi */ 
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);