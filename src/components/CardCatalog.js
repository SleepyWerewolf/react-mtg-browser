import React from 'react';
import { Link } from 'react-router';

const { Component } = React;

class CardCatalog extends Component {
  componentDidMount() {
    const { fetchMoreCatalogSets, cardSetTypes, catalog } = this.props;

    if (catalog.length === 0) {
      fetchMoreCatalogSets(cardSetTypes, catalog.length);
    }
  }

  render() {
    const { rows } = this.props;

    return(
      <div className="Catalog">
        {rows.map(row => (
          <div key={row.setCode} className='Catalog__row'>
            <h2>{row.setCode}</h2>
            {row.cards.map(card => {
              const cardLink = `/card/${card.multiverseid}`;

              return (
                <div key={card.multiverseid} className='Catalog__card'>
                  {card.name} - {card.multiverseid}
                  <Link to={cardLink}>
                    <img src={card.imageUrl} />
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default CardCatalog;
