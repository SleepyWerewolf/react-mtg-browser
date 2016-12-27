import React from 'react';

const { Component } = React;

class Card extends Component {
  componentDidMount() {
    const { onComponentDidMount, cardId } = this.props;
    onComponentDidMount(cardId);
  }

  render() {
    const { selectedCard, isFetchingData } = this.props;

    if (isFetchingData) {
      return(
        <div>Loading...</div>
      );
    } else if (selectedCard) {
      return(
        <div className="Card">
          {selectedCard.name}<br/>
          <img role='presentation' src={selectedCard.imageUrl} /><br/>
          {selectedCard.text}
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
