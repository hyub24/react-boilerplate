/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Input from 'containers/Input/Loadable';
import List from 'containers/List/Loadable';
import StyledLink from '../../components/StyledLink';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <StyledLink to="/">String Input</StyledLink>
      <StyledLink to="/list">Strings List</StyledLink>
      <hr />
      <Switch>
        <Route exact path="/" component={Input} />
        <Route path="/list" component={List} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
