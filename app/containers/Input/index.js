/**
 *
 * Input
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
import makeSelectInput from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Input() {
  useInjectReducer({ key: 'input', reducer });
  useInjectSaga({ key: 'input', saga });

  return (
    <div>
      <Helmet>
        <title>Input</title>
        <meta name="description" content="Description of Input" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div>
        <input type="text" />
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  input: makeSelectInput(),
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
)(Input);
