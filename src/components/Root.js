import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Index from '../components/Index';
import CardCatalogContainer from '../containers/CardCatalogContainer';
import CardContainer from '../containers/CardContainer';

const { PropTypes } = React;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Index} />
      <Route path='/catalog' component={CardCatalogContainer} />
      <Route path='/card' component={Index} />
      <Route path='/card/:id' component={CardContainer} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
