import { submitInput } from '../actions';
import { SUBMIT_INPUT } from '../constants';

describe('Input actions', () => {
  describe('submitInput action', () => {
    it('has a type of SUBMIT_INPUT', () => {
      const expected = {
        type: SUBMIT_INPUT,
      };
      expect(submitInput()).toEqual(expected);
    });
  });
});
