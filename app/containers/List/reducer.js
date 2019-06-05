/*
 *
 * List reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: null,
  strings: [],
};

/* eslint-disable default-case, no-param-reassign */
const listReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.strings = action.strings;
        break;
      case LOAD_STRINGS_ERROR:
        draft.loading = false;
        draft.error = action.error;
    }
  });

export default listReducer;
