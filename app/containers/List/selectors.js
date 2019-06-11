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
    substate => ({
      error: substate.error,
      strings: substate.strings.sort((a, b) => {
        if (a.input > b.input) {
          return 1;
        }
        if (a.input < b.input) {
          return -1;
        }
        return 0;
      }),
    }),
  );

// export default makeSelectList;
export { selectListDomain, makeSelectList };
