import React from 'react';

const { Component } = React;

class CardCatalog extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const { cardSetTitles, isFetchingData } = this.props;
    return (
      <div className='CardCatalog'>
        {
          cardSetTitles.map(set => <div key={set.code}>{set.code} - {set.name}</div>)
        }
      </div>
    );
  }
}

export default CardCatalog;
