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
import { handleInput, submitInput } from './actions';
import Header from '../../components/Header/index';
import InputWrapper from '../../components/InputWrapper';
import StyledLink from '../../components/StyledLink';

export function Input({ changeInput, onSubmitInput, input }) {
  useInjectReducer({ key: 'input', reducer });
  useInjectSaga({ key: 'input', saga });

  return (
    <div>
      <Helmet>
        <title>Input</title>
        <meta name="description" content="Description of Input" />
      </Helmet>
      <StyledLink to="/list">Strings List</StyledLink>
      <hr />
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <div>
        <InputWrapper type="text" onChange={changeInput} />
        <button type="button" onClick={onSubmitInput}>
          Submit
        </button>
      </div>
      <Header>
        {input.posted ? (
          <FormattedMessage {...messages.successfulPost} />
        ) : null}
        {input.error ? <div>{input.error.message}</div> : null}
      </Header>
    </div>
  );
}

Input.propTypes = {
  changeInput: PropTypes.func,
  onSubmitInput: PropTypes.func,
  input: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  input: makeSelectInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeInput: e => dispatch(handleInput(e.target.value)),
    onSubmitInput: () => dispatch(submitInput()),
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
