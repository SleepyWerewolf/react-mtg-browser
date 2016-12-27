import React from 'react';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import CatalogContainer from '../containers/CatalogContainer';
import CardContainer from '../containers/CardContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRedirect to='/catalog' />
        <Route path='/catalog' component={CatalogContainer} />
        <Route path='/detail/:id' component={CardContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
