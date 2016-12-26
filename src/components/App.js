import React from 'react';
import { Link } from 'react-router';
import ErrorPopUpsContainer from '../containers/ErrorPopUpsContainer';

const { Component } = React;

class App extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const { children } = this.props;
    return (
      <div className='App'>
        <Link to='/'>To Home</Link>
        <ErrorPopUpsContainer />
        {children}
      </div>
    )
  }
}

export default App;
