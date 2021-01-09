import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const shopSelectorCollections = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const selectCollection = collectionUrl => createSelector(
    [shopSelectorCollections],
    collections => collections[collectionUrl]
)

export const selectCollectionForPreview = createSelector(
    [shopSelectorCollections],
    collections => Object.keys(collections).map(key => collections[key])
)