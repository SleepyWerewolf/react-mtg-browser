import { connect } from 'redux';
import { FETCH_CARD_BY_ID_FAIL } from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  const { errors } = state;

  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    on
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export const AppContainer;

// import React from 'react';
//
// const AppContainer = ({ children }) => (
//   <div className='App'>App{children}</div>
// );
//
// export default AppContainer;
