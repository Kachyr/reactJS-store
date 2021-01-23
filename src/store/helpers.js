export const addQuantity = (payload) => {
  return payload.map((obj) => (obj.quantity = 1));
};
