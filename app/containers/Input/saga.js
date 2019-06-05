import { takeLatest, call, select } from 'redux-saga/effects';
import { SUBMIT_INPUT } from './constants';
// import { submitInput } from './actions';
import makeSelectInput from './selectors';
import request from '../../utils/request';

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
  } catch (err) {
    console.log(err);
  }
}
// Individual exports for testing
export default function* inputSaga() {
  yield takeLatest(SUBMIT_INPUT, postInput);
}
