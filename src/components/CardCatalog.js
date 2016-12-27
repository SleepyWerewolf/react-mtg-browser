import React from 'react';
import { Link } from 'react-router';

const { Component } = React;

class CardCatalog extends Component {
  componentDidMount() {
    const { fetchMoreCatalogSets, cardSetTypes, catalog } = this.props;

    if (catalog.length === 0 && cardSetTypes.length > 0) {
      fetchMoreCatalogSets(cardSetTypes, catalog.length);
    }
  }

  render() {
    const { sets, catalog, cards } = this.props;

    return(
      <div className='CardCatalog'>
        {
          catalog.map(setCode => (
            <div key={setCode}>
              <h1>{setCode}</h1>
              {sets[setCode].map(cardId => {
                const card = cards[cardId];
                const cardLink = `/card/${card.multiverseid}`;

                return (
                  <div key={card.id}>
                    {card.name} - {card.multiverseid}

                    <Link to={cardLink}>
                      <img src={card.imageUrl}/>
                    </Link>
                  </div>
                );
              })}
            </div>
          ))
        }
      </div>
    );
  }
}

export default CardCatalog;
