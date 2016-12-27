import React from 'react';
import { Link } from 'react-router';
import ErrorPopUpsContainer from '../containers/ErrorPopUpsContainer';

const { Component } = React;

const Children = ({ children, cardSetTypes }) => {
  if (cardSetTypes.length > 0) {
    return (
      <div>
        { children }
      </div>
    );
  } else {
    return null;
  }
};

class App extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const { children, cardSetTypes } = this.props;
    return (
      <div className='App'>
        <Link to='/'>To Home</Link>
        <ErrorPopUpsContainer />
        <Children children={children} cardSetTypes={cardSetTypes} />
      </div>
    )
  }
}

export default App;
