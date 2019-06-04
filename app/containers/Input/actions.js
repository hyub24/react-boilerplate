/*
 *
 * Input actions
 *
 */

import { HANDLE_INPUT, SUBMIT_INPUT } from './constants';

export function handleInput(input) {
  return {
    type: HANDLE_INPUT,
    input,
  };
}

export function submitInput(input) {
  return {
    type: SUBMIT_INPUT,
    input,
  };
}
