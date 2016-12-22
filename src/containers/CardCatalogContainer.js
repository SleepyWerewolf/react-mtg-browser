import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = state => {
  const { card, isFetchingData } = state;

  return {
    card,
    isFetchingData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount() {
      dispatch(fetchCardById(10));
    }
  };
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
