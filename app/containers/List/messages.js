/*
 * List Messages
 *
 * This contains all the text for the List container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.List';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'List of Strings',
  },
  error: {
    defaultMessage: 'Error loading strings!',
  },
});
