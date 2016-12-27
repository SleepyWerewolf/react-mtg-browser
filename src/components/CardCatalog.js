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
    const { rows, catalog, cardSetTypes, fetchMoreCatalogSets } = this.props;

    return(
      <div className="Catalog">
        {rows.map(row => (
          <div key={row.setCode} className='Catalog__row'>
            <h2>{row.setCode}</h2>
            {row.cards.map(card => {
              const cardLink = `/card/${card.id}`;

              return (
                <div key={card.id} className='Catalog__card'>
                  {card.name} - {card.id}
                  <Link to={cardLink}>
                    <img src={card.imageUrl} />
                  </Link>
                </div>
              );
            })}
          </div>
        ))}

        <button onClick={ () => { fetchMoreCatalogSets(cardSetTypes, catalog.length) } }>Load More Sets</button>
      </div>
    );
  }
}

export default CardCatalog;
