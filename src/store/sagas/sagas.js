import { all, call, put, takeLatest } from 'redux-saga/effects';
import { productsAPI } from '../../api/api';
import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS } from '../reducers/CreateProductModal/CreateProductSlice';
import { PRODUCTS_SUCCESS, PRODUCTS_ERROR, PRODUCTS_LOADING } from '../reducers/productsList/productListSlice';
import { SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_SUCCESS } from '../reducers/singleProduct/singleProductSlice';
import { GET_PRODUCT_SAGA, POST_PRODUCT_SAGA, GET_SINGLE_PRODUCT_SAGA } from './actionsForSaga';

function* getProductsWorker(action) {
  yield put(PRODUCTS_LOADING());
  try {
    const response = yield call(productsAPI.getProducts, action.payload);

    yield put(PRODUCTS_SUCCESS(response));
  } catch (error) {
    yield put(PRODUCTS_ERROR(error));
  }
}
function* getSingleProductsWorker(action) {
  yield put(SINGLE_PRODUCT_LOADING());
  console.log(action);
  try {
    const response = yield call(productsAPI.getSingleProduct, action.payload);

    yield put(SINGLE_PRODUCT_SUCCESS(response));
  } catch (error) {
    yield put(SINGLE_PRODUCT_ERROR(error));
  }
}
function* postProductWorker(action) {
  yield put(PRODUCT_LOADING());

  try {
    const response = yield call(productsAPI.postCreateProduct, action.payload);

    yield put(PRODUCT_SUCCESS(response));
  } catch (error) {
    yield put(PRODUCT_ERROR(error));
  }
}

function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCT_SAGA, getProductsWorker);
}
function* getSingleProductsWatcher() {
  yield takeLatest(GET_SINGLE_PRODUCT_SAGA, getSingleProductsWorker);
}
function* postProductWatcher() {
  yield takeLatest(POST_PRODUCT_SAGA, postProductWorker);
}
export default function* rootSaga() {
  yield all([getProductsWatcher(), postProductWatcher(), getSingleProductsWatcher()]);
}
