// import produce from 'immer';
import inputReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('inputReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      input: '',
      posting: false,
      posted: false,
      error: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(inputReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
