import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = (state, props) => {
  const { selectedCard, isFetchingData } = state;
  const { params: { id } } = props;

  return {
    selectedCard,
    isFetchingData,
    cardId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount(cardId) {
      dispatch(fetchCardById(cardId));
    }
  };
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
