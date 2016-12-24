import React from 'react';

const { Component } = React;

class Card extends Component {
  componentDidMount() {
    const { onComponentDidMount, cardId } = this.props;
    onComponentDidMount(cardId);
  }

  render() {
    const { selectedCard, isFetchingData, errors } = this.props;

    // if (errors) {
    //   return (
    //     <div className="errors">
    //       {errors.map(error => <div key={error.id}>{error.message}</div>)}
    //     </div>
    //   );
    // }

    if (isFetchingData) {
      return(
        <div>Loading...</div>
      );
    } else if (selectedCard) {
      return(
        <div className="Card">
          {selectedCard.name}<br/>
          <img src={selectedCard.imageUrl} /><br/>
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
