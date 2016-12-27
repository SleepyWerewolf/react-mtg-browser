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
    const { children, setTypes } = this.props;
    return (
      <div className='App'>
        <Link to='/'>To Home</Link>
        <ErrorPopUpsContainer />
        {setTypes.length > 0 &&
          <div className='App__body'>{children}</div>
        }
      </div>
    )
  }
}

export default App;
