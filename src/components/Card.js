import React from 'react';

const { Component } = React;

class Card extends Component {
  componentDidMount() {
    const { onComponentDidMount, id, card } = this.props;

    if (!card) {
      onComponentDidMount(id);
    }
  }

  render() {
    const { card, isFetchingData } = this.props;

    if (isFetchingData) {
      return(
        <div>Loading...</div>
      );
    } else if (card) {
      return(
        <div className="Card">
          {card.name}<br/>
          <img role='presentation' src={card.imageUrl} /><br/>
          {card.text}
        </div>
      );
    } else {
      return (
        <div>No Cards.</div>
      );
    }
  }
}

export default Card;
