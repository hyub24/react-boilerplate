/*
 *
 * Input reducer
 *
 */
import produce from 'immer';
import {
  HANDLE_INPUT,
  SUBMIT_INPUT,
  SUBMIT_INPUT_SUCCESS,
  SUBMIT_INPUT_ERROR,
} from './constants';

export const initialState = {
  input: '',
  posting: false,
  posted: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HANDLE_INPUT:
        draft.input = action.input;
        draft.posted = false;
        draft.error = null;
        break;
      case SUBMIT_INPUT:
        draft.posting = true;
        draft.posted = false;
        draft.error = null;
        break;
      case SUBMIT_INPUT_SUCCESS:
        draft.posting = false;
        draft.error = null;
        draft.posted = true;
        break;
      case SUBMIT_INPUT_ERROR:
        draft.posting = false;
        draft.error = action.error;
        draft.posted = false;
        break;
    }
  });

export default inputReducer;
