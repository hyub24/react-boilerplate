/*
 *
 * Input actions
 *
 */

import {
  HANDLE_INPUT,
  SUBMIT_INPUT,
  SUBMIT_INPUT_SUCCESS,
  SUBMIT_INPUT_ERROR,
} from './constants';

export function handleInput(input) {
  return {
    type: HANDLE_INPUT,
    input,
  };
}

export function submitInput() {
  return {
    type: SUBMIT_INPUT,
  };
}

export function inputSubmitted() {
  return {
    type: SUBMIT_INPUT_SUCCESS,
  };
}

export function inputSubmittingError(error) {
  return {
    type: SUBMIT_INPUT_ERROR,
    error,
  };
}
