import { connect } from 'react-redux';
import CardCatalog from '../components/CardCatalog';
import { fetchMoreCatalogSets } from '../actions';

const mapStateToProps = state => {
  const { isFetchingData, sets, catalog, cardSetTypes, cards } = state;
  return {
    isFetchingData,
    sets,
    catalog,
    cardSetTypes,
    cards
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
