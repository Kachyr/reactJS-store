import { all } from 'redux-saga/effects';

function* helloSaga() {
  yield console.log('Hello world!');
}

export default function* rootSaga() {
  yield all(helloSaga());
}
