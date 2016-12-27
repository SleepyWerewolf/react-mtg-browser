import { connect } from 'react-redux';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = state => {
  const { cardSetTypes, isFetchingData } = state;
  return {
    cardSetTypes,
    isFetchingData
  };
};

const mapDispatchToProps = () => {
  return {};
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
