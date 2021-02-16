import { all, call, put, takeLatest } from 'redux-saga/effects';
import { productsAPI } from '../../api/api';
import { PRODUCTS_SUCCESS, PRODUCTS_ERROR } from '../reducers/productsList/productListSlice';
import { GET_PRODUCT_SAGA } from './actionsForSaga';

function* getProductsWorker(action) {
  try {
    const response = yield call(productsAPI.getProducts, action.payload.obj);

    yield put(PRODUCTS_SUCCESS(response));
  } catch (error) {
    yield put(PRODUCTS_ERROR(error));
  }
}

function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCT_SAGA, getProductsWorker);
}
export default function* rootSaga() {
  yield all([getProductsWatcher]);
}
