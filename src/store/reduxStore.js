import { configureStore } from '@reduxjs/toolkit';
import CreateProductReducer from './reducers/CreateProductModal/CreateProductSlice.js';
import productListReducer from './reducers/productsList/productListSlice.js';
import productReducer from './reducers/singleProduct/singleProductSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productListReducer,
    createProduct: CreateProductReducer,
    singleProduct: productReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
