import { connect } from 'react-redux';
import CardCatalog from '../components/CardCatalog';
import { fetchMoreCatalogSets } from '../actions';

const mapStateToProps = state => {
  const { isFetchingData, sets, catalog, cardSetTypes, cards } = state;
  const rows = [];

  if (catalog.length > 0) {
    catalog.map(setCode => {
      const tempCards = [];

      sets[setCode].map(cardId => {
        tempCards.push(cards[cardId]);
      });

      rows.push({
        setCode: setCode,
        cards: [...tempCards]
      });
    });
  }

  return {
    isFetchingData,
    cardSetTypes,
    rows,
    catalog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMoreCatalogSets(cardSetTypes, currentNumSets) {
      dispatch(fetchMoreCatalogSets(cardSetTypes, currentNumSets));
    }
  };
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
