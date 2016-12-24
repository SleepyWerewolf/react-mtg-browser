import React from 'react';
import { Link } from 'react-router';
import ErrorPopUpsContainer from '../containers/ErrorPopUpsContainer';

const App = ({ children }) => (
  <div className='App'>
    <Link to='/'>To Home</Link>
    <ErrorPopUpsContainer />
    {children}
  </div>
);

export default App;
