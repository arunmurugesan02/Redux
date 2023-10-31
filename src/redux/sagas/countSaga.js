import {takeLatest, fork, put} from 'redux-saga/effects';
import countActions, {incrementError, incrementSuccess} from '../actions/count';

const {INCREMENT_LOADING} = countActions;

function* incrementSaga() {
  try {
    console.log('from saga');
    yield put(incrementSuccess());
  } catch (_) {
    yield put(incrementError());
  }
}

function* watcherSaga() {
  yield takeLatest(INCREMENT_LOADING, incrementSaga);
}

const countSaga = [fork(watcherSaga)];
export default countSaga;
