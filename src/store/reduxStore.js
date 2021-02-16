import { configureStore } from '@reduxjs/toolkit';
import CreateProductReducer from './reducers/CreateProductModal/CreateProductSlice.js';
import productListReducer from './reducers/productsList/productListSlice.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productListReducer,
    createProduct: CreateProductReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
