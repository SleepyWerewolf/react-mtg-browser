import React from 'react';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from '../components/App';
import CardCatalogContainer from '../containers/CardCatalogContainer';
import CardContainer from '../containers/CardContainer';

const { PropTypes } = React;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/catalog' />
        <Route path='/catalog' component={CardCatalogContainer} />
        <Route path='/card/:id' component={CardContainer} />
      </Route>
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
