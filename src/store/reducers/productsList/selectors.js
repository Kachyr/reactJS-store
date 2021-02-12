import { createSelector } from '@reduxjs/toolkit';

export const selectProductList = (state) => state.products.items;

export const selectItemsInCart = (state) => state.products.itemsInCart;

export const priceOfProducts = createSelector(selectItemsInCart, (items) => {
  return items.reduce((counter, item) => (item ? counter + item.price * item.quantity : counter), 0);
});

export const addedPoroducts = createSelector(selectItemsInCart, (items) => {
  return items.reduce((counter, item) => (item ? counter + item.quantity : counter), 0);
});
