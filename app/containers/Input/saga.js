import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SUBMIT_INPUT } from './constants';
// import { submitInput } from './actions';
import makeSelectInput from './selectors';
import request from '../../utils/request';
import { inputSubmittingError, inputSubmitted } from './actions';

export function* postInput() {
  const input = yield select(makeSelectInput());
  const url = '/api/inputs';
  const obj = {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    yield call(request, url, obj);
    yield put(inputSubmitted());
  } catch (error) {
    yield put(inputSubmittingError(error));
  }
}
// Individual exports for testing
export default function* inputSaga() {
  yield takeLatest(SUBMIT_INPUT, postInput);
}
