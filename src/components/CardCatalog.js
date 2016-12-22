import React from 'react';

const { Component } = React;

class CardCatalog extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    const { card, isFetchingData } = this.props;

    if (isFetchingData) {
      return(
        <div>Loading...</div>
      );
    } else if (card) {
      return(
        <div className="CardCatalog">
          {card.name}
          <img src={card.imageUrl} />
        </div>
      );
    } else {
      return (
        <div>No Cards.</div>
      );
    }
  }
}

export default CardCatalog;
