import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the list state domain
 */

const selectListDomain = state => state.list || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by List
 */

const makeSelectList = () =>
  createSelector(
    selectListDomain,
    substate => substate,
  );

export default makeSelectList;
export { selectListDomain };
