import React from 'react';
import { Link } from 'react-router';
import './styles/Catalog.css';

const { Component } = React;

class Catalog extends Component {
  componentDidMount() {
    const { fetchMoreCatalogSets, setTypes, catalog } = this.props;

    if (catalog.length === 0) {
      fetchMoreCatalogSets(setTypes, catalog.length);
    }
  }

  render() {
    const { rows, catalog, setTypes, fetchMoreCatalogSets } = this.props;

    return(
      <div className="Catalog">
        {rows.map(row => (
          <div key={row.setCode} className='Catalog__row'>
            <h2>{row.setCode}</h2>
            <div className='Catalog__cards'>
              {row.cards.map(card => {
                const cardLink = `/detail/${card.id}`;

                return (
                  <div key={card.id} className='Catalog__card'>
                    <Link to={cardLink}>
                      {card.imageUrl ? (
                        <img src={card.imageUrl} />
                      ) : (
                        <div>Click Me</div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <button onClick={ () => { fetchMoreCatalogSets(setTypes, catalog.length) } }>Load More Sets</button>
      </div>
    );
  }
}

export default Catalog;
