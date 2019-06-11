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
import { makeSelectList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadStrings } from './actions';
import StringsList from '../../components/StringsList';
import Header from '../../components/Header/index';

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
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <div>
        <StringsList {...list} />
      </div>
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

export function mapDispatchToProps(dispatch) {
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
