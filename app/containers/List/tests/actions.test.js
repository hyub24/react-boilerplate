import { loadStrings, stringsLoaded, stringsLoadingError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

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

describe('List actions', () => {
  describe('load strings action', () => {
    it('has a type of LOAD_STRINGS', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });

  describe('strings loaded action', () => {
    it('has a type of LOAD_STRINGS_SUCCESS', () => {
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
        strings,
      };
      expect(stringsLoaded(strings)).toEqual(expected);
    });
  });

  describe('strings loading error action', () => {
    it('has a type of LOAD_STRINGS_ERROR', () => {
      const expected = {
        type: LOAD_STRINGS_ERROR,
        error,
      };
      expect(stringsLoadingError(error)).toEqual(expected);
    });
  });
});
