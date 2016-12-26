import { connect } from 'react-redux';
import { fetchCardSetNames } from '../actions';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = state => {
  const { cardSetTitles, isFetchingData } = state;
  return {
    cardSetTitles,
    isFetchingData
  };
};

const mapDispatchToProps = () => {
  return {};
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
