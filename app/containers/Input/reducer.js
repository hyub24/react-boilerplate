/*
 *
 * Input reducer
 *
 */
import produce from 'immer';
import { HANDLE_INPUT } from './constants';

export const initialState = {
  input: '',
};

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HANDLE_INPUT:
        draft.input = action.input;
        break;
    }
  });

export default inputReducer;
