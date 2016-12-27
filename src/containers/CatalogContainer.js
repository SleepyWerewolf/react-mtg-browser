import { connect } from 'react-redux';
import Catalog from '../components/Catalog';
import { fetchMoreCatalogSets } from '../actions';

const mapStateToProps = state => {
  const { isFetchingData, sets, catalog, setTypes, cards } = state;
  const rows = [];

  if (catalog.length > 0) {
    catalog.map(setCode => {
      const cardAccumulator = [];

      sets[setCode].map(cardId => {
        cardAccumulator.push(cards[cardId]);
      });

      rows.push({
        setCode: setCode,
        cards: [...cardAccumulator]
      });
    });
  }

  return {
    isFetchingData,
    setTypes,
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

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
