export const selectProductList = (state) => state.products.items;

export const selectItemsInCart = (state) => state.products.itemsInCart;

export const priceOfProducts = (state) => state.products.total;

export const addedPoroducts = (state) => state.products.itemsInCart.length;

export const cartContents = createSelector();
//createSelector(selectProductList, (items) => {
//   return items.filter((item) => item.isEditable === true).length;
// });
// createSelector(selectProductList, (items) => {
//   return items.filter((item) => item.isEditable === true).reduce((counter, item) => (item ? counter + item.price : counter), 0);
// });
