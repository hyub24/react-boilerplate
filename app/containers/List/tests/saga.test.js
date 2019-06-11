/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import listSaga, { getStrings } from '../saga';
import { stringsLoaded } from '../actions';
import { LOAD_STRINGS } from '../constants';

describe('getStrings Saga', () => {
  const generator = getStrings();

  beforeEach(() => {
    const selectDescriptor = generator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringsLoaded action if the call is successful', () => {
    const strings = [
      {
        id: 1,
        input: 'hello',
      },
      {
        id: 2,
        input: 'goodbye',
      },
    ];
    const putDescriptor = generator.next(strings).value;
    expect(putDescriptor).toEqual(put(stringsLoaded(strings)));
  });
});

describe('listSaga', () => {
  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeLatestDescriptor = listSaga().next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STRINGS, getStrings));
  });
});
