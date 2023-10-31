import {takeLatest, fork, put, call} from 'redux-saga/effects';
import postActions, {postError, postSuccess} from '../actions/post';
import {GET} from '../../helpers/apiCall';
import URLS from '../../constants/apiUrls';

const {POST_LOADING} = postActions;

function* fetchPostSaga() {
  try {
    const FETCH_POST_URL = URLS.BASE_URL + URLS.POST;
    const apiResponse = yield call(GET,FETCH_POST_URL);
    yield put(postSuccess(apiResponse));
  } catch (e) {
    yield put(postError(e));
  }
}

function* watcherSaga() {
  yield takeLatest(POST_LOADING, fetchPostSaga);
}

const postSaga = [fork(watcherSaga)];
export default postSaga;
