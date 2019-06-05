/*
 *
 * List actions
 *
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
  LOAD_STRINGS_SUCCESS,
} from './constants';

export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
