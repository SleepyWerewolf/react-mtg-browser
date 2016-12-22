import React from 'react';
import { browserHistory } from 'react-router';

const { Component } = React;

class Index extends Component {
  componentWillMount() {
    browserHistory.push('/catalog');
  }

  render() {
    return <div className='Index'></div>;
  }
}

export default Index;
