/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function List() {
  useInjectReducer({ key: 'list', reducer });
  useInjectSaga({ key: 'list', saga });

  return (
    <div>
      <Helmet>
        <title>List</title>
        <meta name="description" content="Description of List" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(List);
