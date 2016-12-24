import React from 'react';
import { IndexRedirect, Redirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import CardCatalogContainer from '../containers/CardCatalogContainer';
import CardContainer from '../containers/CardContainer';

const { PropTypes } = React;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from='/' to='/catalog' />
      <Route path='/catalog' component={CardCatalogContainer} />
      <Redirect from='/card' to='/catalog' />
      <Route path='/card/:id' component={CardContainer} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

// <Router history={browserHistory}>
//   <Route path='/' component={App}>
//     <IndexRedirect to='/catalog' />
//     <Route path='catalog' component={CardCatalogContainer} />
//     <Route path='card' component={}
//   </Route>
// </Router>
