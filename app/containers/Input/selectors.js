import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the input state domain
 */

const selectInputDomain = state => state.input || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Input
 */

const makeSelectInput = () =>
  createSelector(
    selectInputDomain,
    substate => substate,
  );

export default makeSelectInput;
export { selectInputDomain };
