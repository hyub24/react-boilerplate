import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_STRINGS } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';
import request from '../../utils/request';

export function* getStrings() {
  const url = '/api/inputs';
  try {
    const strings = yield call(request, url);
    yield put(stringsLoaded(strings));
  } catch (error) {
    yield put(stringsLoadingError(error));
  }
}

// Individual exports for testing
export default function* listSaga() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
