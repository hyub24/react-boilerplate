/**
 *
 * Tests for List
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { List, mapDispatchToProps } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';
import configureStore from '../../../configureStore';
import { loadStrings } from '../actions';

describe('<List />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <List dispatch={dispatch} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <List />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch strings on mount', () => {
    const submitSpy = jest.fn();
    const mockState = {
      strings: [],
    };

    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <List getStrings={submitSpy} list={mockState} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('getStrings', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getStrings).toBeDefined();
      });

      it('should dispatch loadStrings when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.getStrings();
        expect(dispatch).toHaveBeenCalledWith(loadStrings());
      });
    });
  });
});
