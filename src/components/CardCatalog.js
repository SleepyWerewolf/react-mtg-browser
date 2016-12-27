import React from 'react';

const { Component } = React;

class CardCatalog extends Component {
  componentDidMount() {
    const { fetchMoreCatalogSets, cardSetTypes, catalog } = this.props;

    if (catalog.length === 0 && cardSetTypes.length > 0) {
      fetchMoreCatalogSets(cardSetTypes, catalog.length);
    }
  }

  componentWillReceiveProps() {
    const { fetchMoreCatalogSets, cardSetTypes, catalog } = this.props;

    //console.log(cardSetTypes.length);
    if (catalog.length === 0 && cardSetTypes.length > 0) {
      fetchMoreCatalogSets(cardSetTypes, catalog.length);
    }
  }

  render() {
    const { sets, cardSetTypes, fetchMoreCatalogSets, catalog, cards } = this.props;

    // @TODO: Why doesn't this if statement fire in componentWillReceiveProps
    if (catalog.length === 0 && cardSetTypes.length > 0) {
      fetchMoreCatalogSets(cardSetTypes, catalog.length);
    }

    return(
      <div className='CardCatalog'>
        {
          catalog.map(set => (
            <div key={set}>
              <h1>{set}</h1>
              {sets[set].map(cardId => {
                const card = cards[cardId];

                return (
                  <div key={card.id}>{card.name}</div>
                );
              })}
            </div>
          ))
        }
      </div>
    );
  }
}

// const CardCatalog = ({ cardSetTypes, isFetchingData }) => (
//   <div className='CardCatalog'>
//     Hi
//   </div>
// );

export default CardCatalog;
