import {all} from 'redux-saga/effects';
import countSaga from './sagas/countSaga';
import postSaga from './sagas/postSaga';

export default function* rootSaga() {
  yield all([...countSaga, ...postSaga]);
}
