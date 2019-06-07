import produce from 'immer';
import listReducer from '../reducer';
import { loadStrings, stringsLoaded, stringsLoadingError } from '../actions';

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

const error = {
  message: 'Internal Server Error',
};

/* eslint-disable default-case, no-param-reassign */
describe('listReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      strings: [],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(listReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
    });
    expect(listReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the stringsLoaded action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.strings = strings;
    });
    expect(listReducer(state, stringsLoaded(strings))).toEqual(expectedResult);
  });

  it('should handle the stringsLoadingError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = error;
    });
    expect(listReducer(state, stringsLoadingError(error))).toEqual(
      expectedResult,
    );
  });
});
