/**
 *
 * List
 *
 */

import React, { memo, useEffect } from 'react';
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
import { loadStrings } from './actions';
// import StringsList from '../../components/StringsList';

export function List({ getStrings, list }) {
  useInjectReducer({ key: 'list', reducer });
  useInjectSaga({ key: 'list', saga });

  useEffect(() => {
    getStrings();
  }, []);

  return (
    <div>
      <Helmet>
        <title>List</title>
        <meta name="description" content="Description of List" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      {list.error ? (
        <div>
          <FormattedMessage {...messages.error} />
          <div>{list.error}</div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

List.propTypes = {
  dispatch: PropTypes.func,
  getStrings: PropTypes.func,
  list: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    getStrings: () => dispatch(loadStrings()),
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
