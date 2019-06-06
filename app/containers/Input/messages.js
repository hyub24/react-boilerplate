/*
 * Input Messages
 *
 * This contains all the text for the Input container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Input';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Input String Here',
  },
  successfulPost: {
    id: `${scope}.successfulPost`,
    defaultMessage: 'String Successfully Posted!',
  },
});
