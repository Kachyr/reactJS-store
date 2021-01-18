import { createSelector } from '@reduxjs/toolkit';

export const selectProductList = (state) => state.products.items;

export const priceOfProducts = createSelector(selectProductList, (items) => {
  return items.filter((item) => item.isEditable === true).reduce((counter, item) => (item ? counter + item.price : counter), 0);
});
console.log(priceOfProducts);
export const addedPoroducts = createSelector(selectProductList, (items) => {
  return items.filter((item) => item.isEditable === true).length;
});
